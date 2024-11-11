const { Telegraf, Markup } = require("telegraf");
const express = require("express");
const app = express();
app.use(express.json());

const TOKEN = "7769851057:AAGHqMXhWX5Z7Hcz8yPZ7GnNTqvp7xFmEhI";
const bot = new Telegraf(TOKEN);

const web_link = "https://notstars.netlify.app";
const community_link = "https://t.me/monkeycity_community";

bot.start(async (ctx) => {
    const startPayload = ctx.startPayload;
    const urlSent = `${web_link}?ref=${startPayload}`;
    const user = ctx.message.from;
    const userName = user.username ? `@${user.username}` : user.first_name;

    // Mengirim pesan teks dengan emoji yang mendukung animasi
    await ctx.replyWithMarkdown(`*Hey, ${userName}! I am @monkey_city_bot, Welcome to Monkey!*
Mine Monkey cryptocurrency easily and earn Monkey tokens. 🐵💰

Start mining now and be among the biggest players earning Monkey tokens daily.

Got friends, relatives, co-workers? ❤️
Bring them all into the game. 🐒
More squad power, more Monkey tokens.`, {
        reply_markup: {
            inline_keyboard: [
                [{ text: "🕹️ Let's go!", web_app: { url: urlSent } }],
                [{ text: "Join Community", url: community_link }]
            ]
        }
    });

    // Mengirim GIF animasi secara terpisah
    await ctx.replyWithAnimation("https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif");
});

bot.launch();

app.listen(3000, () => {
    console.log("Server is running");
});
