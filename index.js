var fs = require('fs')

const { Voice, LoadCommands, Bot } = require("aoi.js");


const aoi = require("aoi.js")
const bot = new aoi.Bot({
token: "BOT_TOKEN",
prefix: "BOT_PREFIX",
intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_VOICE_STATES"]
})
const aoidash = require('aoi.js-panel')
const dash = new aoidash.Dash(bot, {
port: 8080,
command: './commands', //your command handler
username: "", //username to login to dashboard
password: "" //password to login to dashboard
})
dash.start()

//Event
bot.onMessage()


//cmd handeler 

var reader = fs.readdirSync("./commands/").filter(file => file.endsWith(".js"))
  for (const file of reader) {
    const command = require(`./commands/${file}`)

    bot.command({
      name: command.name,
      code: command.code
    })
  }



var reader = fs.readdirSync("./moderation/").filter(file => file.endsWith(".js"))
  for (const file of reader) {
    const command = require(`./moderation/${file}`)

    bot.command({
      name: command.name,
      code: command.code
    })
  }

var reader = fs.readdirSync("./voice/").filter(file => file.endsWith(".js"))
  for (const file of reader) {
    const command = require(`./voice/${file}`)

    bot.command({
      name: command.name,
      code: command.code
    })
  }


//aoi.js



const loader = new LoadCommands(bot);

const voice = new Voice(
  bot,
  {
    cache: {
      cacheType: "Memory",//Disk
      enabled: true,
      //directory : "music", only for Disk type
    },
  },
  false, //to enable pruneMusic 
);

voice.onTrackStart();

loader.load(bot.cmd, "./commands/"); //bot cmds
loader.load(voice.cmd, "./voice/"); //voice cmds





//Ping cmd

bot.command ({
  name: "ping",
  code : `$title[1;Pong]
  $description[1;$pingms]`
})

//Ping cmd on Slash

bot.interactionCommand({
  name: "ping",
  prototype: 'slash',
  code: `$interactionReply[Pong! $pingms]`
})

//No need to give any credits :)
//Fucking Shit 

console.log("Coded by daddy Hyper")

