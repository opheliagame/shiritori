const fs = require("fs");
const path = require("path");
const readline = require("readline");

// The file path to your WhatsApp chat export file
const filePath = "whatsapp_chat_filtered.txt";

// Regular expression to match both text and image lines.
const lineRegex =
  /^(?<localDate>(?<localMonth>\d{1,2})\/(?<localDay>\d{1,2})\/(?<localYear>\d{2,4}), (?<localHour>\d{1,2}):(?<localMinutes>\d{2})\s?(?:AM|PM| AM| PM))? - (?<sender>.*?): (?<content>(?:.|\n)*?)(?:\s\((?<attachment>file attached)\))?$/;

// Main function to read the file and process the data
async function processFile() {
  const outputDir = "../content/messages";
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const rl = readline.createInterface({
    input: fs.createReadStream(filePath),
    crlfDelay: Infinity,
  });

  for await (const line of rl) {
    const match = line.match(lineRegex);

    if (match && match.groups) {
      const { localDate, sender, content, attachment } = match.groups;

      const messageDateGMT = new Date(new Date(localDate).toUTCString());
      const year = messageDateGMT.getFullYear();
      const month = String(messageDateGMT.getMonth() + 1).padStart(2, "0");
      const monthName = messageDateGMT.toLocaleString("en-US", {
        month: "long",
      });
      const day = String(messageDateGMT.getDate()).padStart(2, "0");
      const hours = String(messageDateGMT.getUTCHours()).padStart(2, "0");
      const minutes = String(messageDateGMT.getMinutes()).padStart(2, "0");
      const seconds = String(messageDateGMT.getSeconds()).padStart(2, "0");

      const yearDir = path.join(outputDir, String(year));
      const monthDir = path.join(yearDir, monthName);

      // Create year and month directories if they don't exist
      if (!fs.existsSync(yearDir)) {
        fs.mkdirSync(yearDir, { recursive: true });
      }
      if (!fs.existsSync(monthDir)) {
        fs.mkdirSync(monthDir, { recursive: true });
      }

      // NOTE : The file name is constructed using the date and content since two messages can have the same date
      // content is expected to be short
      const fileName = `${year}_${month}_${day}_${hours}_${minutes}_${content.trim()}.md`;
      const filePath = path.join(monthDir, fileName);

      // Create YAML front matter
      const yamlFrontMatter =
        `---\n` +
        `created-at: ${messageDateGMT.toISOString()}\n` +
        `sender-name: "${sender}"\n` +
        `---\n\n`;

      // Format the message content for markdown
      let messageContent = "";

      if (attachment) {
        // Construct the image tag with a relative path and alt text
        const imagePath = "./messages/images/" + content.trim(); // Assumes the file name is in the content
        const altText = `at ${messageDateGMT.toDateString()} ${sender} says`;
        messageContent = `![${altText}](${imagePath})\n\n`;
      } else {
        messageContent = `${content.trim()}\n\n`;
      }

      // Write the content to a new markdown file for each message
      fs.writeFileSync(filePath, yamlFrontMatter + messageContent);
    }
  }

  console.log("Successfully converted chat to markdown files!");
}

processFile().catch(console.error);
