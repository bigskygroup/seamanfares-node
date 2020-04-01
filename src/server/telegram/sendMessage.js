const TelegramBot = require('node-telegram-bot-api');

const token = "932179659:AAECwJlr21x_O_8iBWcr90-ksTN_3T0BMxI"
const botName = "sky_8d4h_bot"
const bot = new TelegramBot(token, {polling: true});

bot.on('message', (msg) => { 
    if(msg.text === "ping") bot.sendMessage(msg.chat.id,"pong");
   
     
});



// call this function with a chat id and the msg and it will send it:
 module.exports = function(id, msg) {  bot.sendMessage(id, msg) }