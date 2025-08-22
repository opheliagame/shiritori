const fs = require("fs");
const readline = require("readline");

// The file path to your WhatsApp chat export file
const filePath = "whatsapp_chat.txt";

// Regular expression to match both text and image lines.
// It uses a named capturing group to make the logic clearer.
const lineRegex =
  /^(?<date>\d{1,2}\/\d{1,2}\/\d{2,4}), (?<time>\d{1,2}:\d{2}\s?(?:AM|PM| AM| PM)?) - (?<sender>.*?): (?<content>(?:.|\n)*?)(?:\s\((?<attachment>file attached)\))?$/;

// Function to convert the date and time to ISO 8601 format
function convertToISO(dateStr, timeStr) {
  // Normalize the time string by removing non-breaking spaces
  const normalizedTimeStr = timeStr.replace(/ /g, " ");

  // Create a new Date object. The provided format is typically interpreted
  // as Month/Day/Year in most JavaScript environments.
  const date = new Date(`${dateStr} ${normalizedTimeStr}`);

  // Return the ISO string, including the timezone offset for Tokyo (JST)
  // Note: This assumes the original timestamps are in JST.
  return date.toISOString().replace("Z", "+09:00");
}

// Main function to read the file and process the data
async function processFile() {
  const messages = [];

  // Create a readable stream from the file
  const fileStream = fs.createReadStream(filePath);

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  for await (const line of rl) {
    const match = line.match(lineRegex);

    if (match && match.groups) {
      const { date, time, sender, content, attachment } = match.groups;

      const messageObject = {
        sender_name: sender,
        time: convertToISO(date, time),
      };

      if (attachment) {
        // This is an image or other file attachment
        messageObject.content = content.trim();
        messageObject.type = "image"; // Or could be 'video', 'audio', etc.
      } else {
        // This is a standard text message
        messageObject.content = content.trim();
        messageObject.type = "text";
      }

      messages.push(messageObject);
    }
  }

  // Write the final JSON array to a new file
  fs.writeFileSync("output.json", JSON.stringify(messages, null, 2));
  console.log("Successfully converted messages to output.json!");
}

processFile().catch(console.error);
