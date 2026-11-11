# Shiritori

This project is a static website built using Hugo. It serves as a digital container for a whatsapp conversation of images between opheliagame in Tokyo, Japan and nekoyama in Mumbai, Tokyo.

# About

A conversation can happen in many ways. We call, text, leave notes around the house, or drop by a friend’s place. Sharing our daily experiences is what brings us closer to each other, shaping the people we call friends.

会話はいろんな形で起こる。電話をしたり、メッセージを送ったり、家の中にメモを残したり、友達の家にふらっと寄ったり。日々の体験を分け合えることが、私たちを近づけ、「友達」と呼べる関係を作っていく。

But what happens when friends move to different countries? When you can’t just pop over and make them food during a tough time? Even though we can now reach someone on the other side of the world faster than getting out of bed, nothing quite replaces being in the physical presence of someone close.

でも、友達が国を越えたらどうなるだろう？辛いときに「ご飯作るよ」と気軽に寄ることができなくなったら？確かに今は、ベッドから起き上がるより早く世界の反対側の人に連絡できる。でも、大切な人と同じ空間にいるあの感じにはかなわない。

We’ve also invented ways around it. Companies maintain intelligent systems that let all kinds of communication happen anytime, anywhere, as long as you’re “connected” to the internet. Texting someone and watching the steps—seeing that they’ve read it, watching them type back—can be comforting, but it can also stir up a lot of anxiety. Beyond the challenge of holding someone’s attention long enough for a meaningful conversation, the tools we use shape the conversations themselves. Words, emojis, voice notes—what we really want is simple: to share what happened today with someone we hope will listen.

それでも、私たちは解決策を生み出してきた。企業は「接続」さえしていれば、いつでもどこでもやり取りができる知的なシステムを維持している。誰かにメッセージを送り、「既読」になって、いま入力中…と表示される。その流れは安心感をくれることもあるけれど、同時に強い不安を生むこともある。
意味のある会話を続けるのが難しいだけでなく、私たちが使うツール自体が、どんな会話になるかを決めてしまう。言葉でも、絵文字でも、ボイスメッセージでも――結局のところ、今日あったことを「聞いてほしい」と思える誰かと分け合いたいだけなのだ。

Nekoyama and I have been friends for a few years. We connected over our shared love of Indian food and a curiosity about how our very different worlds could be surprisingly similar in unexpected ways. One of our first video calls ended up with a conversation about Indian spices. I was struggling to remember the name of a particular khada masala when Nekoyama suddenly said ajwain. My mind froze, trying to process how a Japanese man could know this while I, an Indian woman, couldn’t recall it.

猫山とはもう数年の友達だ。私たちをつないだのは、インド料理への共通の愛と、「全然違う世界」なのに意外なところで似ている部分への好奇心だった。最初のビデオ通話のとき、インドのスパイスの話になり、私はある特定の*ホールスパイス（khada masala）*の名前がどうしても思い出せずに困っていた。すると突然、猫山が「アジュワイン」と言った。その瞬間、インド人の私が思い出せなかった名前を、日本人の彼が知っていることに、頭が追いつかなかった。

This is also how I introduced him to my mother: the Japanese man who knows ajwain. Later in that same call, we discovered we both love FaFa, and I knew then that we would be friends for a long time.

このことは、母にも猫山を紹介するときに話した――「アジュワインを知っている日本人の男の人」だ、と。その後の同じ通話で、私たち二人ともファーファが大好きだと分かったとき、ああ、この人とはきっとずっと友達でいられる、と確信した。

I moved to Tokyo in 2022 and had been feeling the strains of long-distance friendships across time zones. So when Nekoyama moved to Mumbai in 2025 and faced a medical emergency, I realized I wanted another way to stay in touch—something less urgent and immediate than calls and texts. I wanted to see India through his eyes and show him the Japan I was living in. That’s how our shiritori WhatsApp conversation began.

私は2022年に東京へ引っ越し、時差のある遠距離友情の大変さを感じていた。だから2025年に猫山がムンバイへ移り、しかも医療的なトラブルに見舞われたとき、電話やメッセージほど緊急でも即時でもない、別の方法でつながりたいと思った。彼を通してインドを見て、私が暮らす日本を彼に見せたかった。こうして私たちの「しりとり」WhatsApp会話が始まったのだ。

Shiritori is a Japanese word game. Players take turns saying a word that starts with the last letter (or syllable) of the previous word. The game continues until someone cannot think of a word, or a word ends with the letter “n,” which ends the game. It’s a fun way to play with language and learn new words!

しりとりは日本の言葉遊びです。 順番に言葉を言っていきますが、次の人は前の言葉の最後の文字（または音）から始まる言葉を言わなければいけません。 「ん」で終わる言葉を言うとゲーム終了です。言葉遊びを楽しんだり、新しい言葉を覚えたりするのにぴったりです！

Shingo Ne Koyama is an artist who has undertaken a decade-long linguistic inquiry centered on curry since 2015, authoring and collecting a unique corpus of over 1,050 palindromes. Since 2022, this textual archive has been the basis for a series of generative art installations. His work, exploring the Japan-India cultural nexus, has been exhibited internationally in places like the Jiri Mahen Library (Czech Republic) and Kyoujima-Eki, Tokyo. His multifaceted practice extends beyond the gallery to include running "Art of Pickle," a Japanese achaar specialty brand, and organizing "Curry Node," a festival that unites the communities of curry and music.

Anushka Trivedi / opheliagame, is a brahmin-born woman technologist turned visual artist and live coder, currently based in Japan. In her work and life, she explores what it means to make things - sketches, zines, poems, archives, software tools and handmade websites - with code. As a co-organizer of CCSanté - a monthly creative coding meetup, she is a part of a vibrant community of creative coders and makers from India.

## Site Sections

The homepage is a single scrolling page, assembled by [`layouts/_default/list.html`](layouts/_default/list.html) in this order:

### Opening Title

[`layouts/partials/title-page.html`](layouts/partials/title-page.html) displays "Pickle Jam" with the subtitle "A Shiritori Conversation." Its background uses alternating Japanese and English grid rows moving in opposite directions. Animation is disabled for reduced-motion preferences.

### Introduction

The Markdown body in [`content/_index.md`](content/_index.md) supplies the introduction. Hugo groups rendered paragraphs, including image-only paragraphs, into pairs at build time. Each pair is a two-column section on desktop and stacks vertically on mobile.

### Conversation

Messages in [`content/messages/`](content/messages/) appear chronologically, two per section. Images are stored in [`content/messages/images/`](content/messages/images/).

Each message has a colored metadata strip with its date at the top, bilingual location in the middle, and sender name at the bottom. Strips sit on the outer edges on desktop and on the right on mobile. Message text is centered and styled separately from introduction paragraphs.

### Artist Biographies

[`layouts/partials/biographies.html`](layouts/partials/biographies.html) renders the `biographies` front matter from [`content/_index.md`](content/_index.md). Nekoyama's section places text before his portrait; opheliagame's places her portrait before the text. Portraits are stored in [`assets/images/`](assets/images/).

### Closing Title

The closing section reuses the opening title partial.

## Styling

- [`assets/scss/style.scss`](assets/scss/style.scss) defines layout, spacing, typography, and animation.
- [`assets/css/colors.css`](assets/css/colors.css) defines the shared palette and light/dark theme colors.
- [`layouts/partials/meta.html`](layouts/partials/meta.html) loads M PLUS Rounded 1c. Japanese and English use regular weight.

## Technical Specification

- **Base Technology:** Hugo Static Site Generator.
- **Content Management:** All narratives and information are stored in the `content/` directory.
- **Deployment Target:** Builds into static HTML, CSS, and JavaScript files optimized for hosting on platforms like GitHub Pages.
