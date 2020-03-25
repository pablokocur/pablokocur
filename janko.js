const discord = require("discord.js")
const fs = require("fs")

const bot = new discord.Client({disableEveryone: false});

module.exports = {
  bot: bot
}
bot.login(process.env.token6)
bot.on("ready", async => {
  console.log(`janko online`)
bot.user.setStatus('dnd')
bot.user.setActivity("Margonem #3", {type: "WATCHING"});
})

  fs.readdir("./janko/", (err, files) => {
  
    if(err) console.log(err)
   
    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0) {
      return console.log("brak eventów");
    }
  
    jsfile.forEach((f, i) => {
      require(`./janko/${f}`)
     });
    })
