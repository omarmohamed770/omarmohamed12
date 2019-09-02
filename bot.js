const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("618189675605262340")
setInterval(function() {
channel.send(`t t t t t t t`);
}, 30)
})

client.login(process.env.BOT_TOKEN);