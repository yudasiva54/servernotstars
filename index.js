const { Telegraf, Markup } = require("telegraf");
const TOKEN = "7797629643:AAEWHOonlUro9gfOHAM2F_TODPJQCWonzSw";
const bot = new Telegraf(TOKEN);
const express = require("express");
const app = express()
app.use(express.json())
const web_link = "https://monkeycity.netlify.app";
const community_link = "https://t.me/monkeycity_community";


bot.start((ctx) => {
    const startPayload = ctx.startPayload;
    const urlSent = `${web_link}?ref=${startPayload}`;
    const user = ctx.message.from;
    const userName = user.username ? `@${user.username}` : user.first_name;
    ctx.replyWithMarkdown(`*Hey, ${userName}! I am @monkey_city_bot  , Welcome to Monkey!*
Mine Monkey cryptocurrency easily and earn Monkey tokens.

Start mining now and be among the biggest players earning Monkey tokens daily.

Got friends, relatives, co-workers?
Bring them all into the game.
More squad power, more Monkey tokens.`, {
        reply_markup: {
            inline_keyboard: [
              [{ text: "🕹️ Let'go!", web_app: { url: urlSent } }],
              [{ text: "Join Community ", url: community_link }]
            
            ],
            in: true
        },
    });
  });

  
  bot.launch();
  
app.listen(3000, () => {
    console.log("server is me and now running")
})