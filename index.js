const Discord = require('discord.js');
const config = require('./config/config.json')
const fs = require('fs');
const mapeado = new Map()
require('colors')
const client = new Discord.Client({
    restTimeOffset: 0,
    partials: ['MESSAGE', 'CHANNEL', 'REACTION', 'GUILD_MEMBER', 'USER'],
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MEMBERS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.GUILD_VOICE_STATES,
        Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Discord.Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
    ],
})





client.on("ready", () => {

  console.log(` Estoy ${client.users.cache.size} usuarios y ${client.guilds.cache.size} servidores `)



    const array = [
       {
         name: "h/help | dsc.gg/halpler",
         type: "WATCHING" //tu type
       },
       {
         name: `${client.guilds.cache.size} servidores`,
         type: "WATCHING" //tu type
       },
      {
        name: `Bot Moderation`,
        type: "PLAYING" //tu type
      }
      ]
      setInterval(() => {
         function presence(){
             client.user.setPresence({
               status: "online",
               activities: [array[Math.floor(Math.random() * array.length)]],
         });
       }
       presence();
     }, 5000);
  });


client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.color = config.color;

/* SISTEMA DE IDIOMAS */
client.la = {};
let idiomas = fs.readdirSync('./idiomas').filter(archivo => archivo.endsWith(".json")).map(idioma => idioma.replace(/.json/, ""));
for(const idioma of idiomas){
    client.la[idioma] = require(`./idiomas/${idioma}`)
}
Object.freeze(client.la)

function requerirhandlers() {
    ["command", "events", "distube", "reaccion_roles", "tickets", "sugerencias", "sorteos", "logs", "valoraciones", "bienvenida"].forEach(handler => {
        try {
            require(`./handlers/${handler}`)(client, Discord)
        } catch (e) {
            console.warn(e)
        }
     })
    }

    client.on('messageCreate', (message) => {

  const mencion = new Discord.MessageEmbed()
  .setTitle(`<a:bailesito:1003132648954281994> JrJye`)
  .setDescription("***Hola soy*** __**Halper**__ ***un bot con multipropositos mi prefix es*** \`h/\` ***o ejecute*** \`h/help\` ***para ver todos mis comandos***")
  .setFooter("Halper")

      const row = new Discord.MessageActionRow()
      .addComponents(
        [ 
          new Discord.MessageButton()
          .setLabel('Soporte')
          .setStyle('LINK')
          .setURL("https://discord.gg/cUdUfUSX2t")
          .setEmoji('🎫')
        ],
        [ 
          new Discord.MessageButton()
          .setLabel('Invitacion')
          .setStyle('LINK')
          .setURL("https://discord.com/api/oauth2/authorize?client_id=993160596545605663&permissions=8&scope=applications.commands%20bot")
          .setEmoji('📤')
        ]
          )

          if(message.content.match(new RegExp(`^<@!?${client.user.id}>( |)$`))){

          message.reply({ embeds: [mencion], components: [row] })
          }})

          client.slashcommands = new Discord.Collection();
const slashcommandsFiles = fs.readdirSync("./slashcmd").filter(file => file.endsWith("js"))


for(const file of slashcommandsFiles){
  const slash = require(`./slashcmd/${file}`)
  console.log(`slash commands - ${file} cargado.`)
  client.slashcommands.set(slash.data.name, slash)
}



            client.snipes = new Map()
client.on('messageDelete', function(message, channel) {
    client.snipes.set(message.channel.id, {
        content: message.content,
        author: message.author.id, 
        image: message.attachments.first() ? message.attachments.first().proxyURL : null
    })
})

client.on("voiceStateUpdate", (oldState, newState) => {
  if(!oldState.channelId && newState.channelId) {
    if(newState.channelId == "1016805898561269795") crearsala(newState)
  }


  if(oldState.channelId && !newState.channelId) {
    if(mapeado.get(`temporal_${oldState.guild.id}_${oldState.channelId}`)) {
      let canalvoz = oldState.guild.channels.cache.get(mapeado.get(`temporal_${oldState.guild.id}_${oldState.channelId}`))

      if(canalvoz) {
        if(canalvoz.members.size < 1) {
          canalvoz.delete()
          mapeado.delete(`temporal_${oldState.guild.id}_${oldState.channelId}`)
        }
      } 
    }
  }


  if(oldState.channelId && newState.channelId) {
    if(oldState.channelId !== newState.channelId) {
      if(newState.channelId == "885519639969415179") crearsala(newState)

          if(mapeado.get(`temporal_${oldState.guild.id}_${oldState.channelId}`)) {
      let canalvoz = oldState.guild.channels.cache.get(mapeado.get(`temporal_${oldState.guild.id}_${oldState.channelId}`))

      if(canalvoz) {
        if(canalvoz.members.size < 1) {
          canalvoz.delete()
          mapeado.delete(`temporal_${oldState.guild.id}_${oldState.channelId}`)
        }
      } 
    }

    }
  }
})

async function crearsala(newState) {
  newState.guild.channels.create(`Sala de ${newState.member.user.username}`, {
    type: "GUILD_VOICE",
    parent: newState.channel.parent
  }).then(canal => {
    newState.member.voice.setChannel(canal)
    mapeado.set(`temporal_${newState.guild.id}_${canal.id}`, canal.id)
  })
}

client.on("interactionCreate", async (interaction) => {
  if(!interaction.isCommand()) return;

  const slashcmds = client.slashcommands.get(interaction.commandName)

  try{
    await slashcmds.run(client, interaction)
  } catch(e) {
    console.error(e)
  }
})

requerirhandlers();
client.login(config.TOKEN, process.env.TOKEN).catch(() => console.log(`-[X]- NO HAS ESPECIFICADO UN TOKEN VALIDO O TE FALTAN INTENTOS -[X]-\n [-] ACTIVA LOS INTENTOS EN https://discord.dev [-]`.red))


/*
╔═════════════════════════════════════════════════════╗
║    || - || Desarollado por dewstouh#1088 || - ||    ║
║    ----------| discord.gg/MBPsvcphGf |----------    ║
╚═════════════════════════════════════════════════════╝
*/
