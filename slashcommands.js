const fs = require('fs')
const Discord = require("discord.js")
const { REST } = require("@discordjs/rest")
const { Routes } = require("discord-api-types/v9")
const { clientId, guild, TOKEN } = require("./config/config.json")
const commands = []
const slashcommandsFiles = fs.readdirSync("./slashcmd").filter(file => file.endsWith("js"))
require("colors")
for(const file of slashcommandsFiles){
  const slash = require(`./slashcmd/${file}`)
  commands.push(slash.data.toJSON())
  }

const rest = new REST({ version: "9" }).setToken(TOKEN)

createSlash()

async function createSlash(){
  try{
    await rest.put(
      Routes.applicationCommands(clientId, guild), {
        body: commands
      }
    )
console.log(`       Activo 24/7       `.blue)
console.log(`╔══════════════════════╗`.green)
console.log(`║    Slash Commands    ║`.green)
console.log(`║      Agregados.      ║`.green)
console.log(`╚══════════════════════╝`.green)
  } catch(e) {
    console.error(e)
  }
}
