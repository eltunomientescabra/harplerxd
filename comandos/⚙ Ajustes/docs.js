const Discord = require('discord.js');
const { get } = require('axios');

module.exports = {
    name: "docs",
    alias: [],

run: async (client, message, args) => {

  let uwu = args[0]
  if(!args[0]) return message.reply('Debes ingresar una documentación para buscar!')

  get(`https://api.miduwu.ga/json/discordjs?query=${uwu}%27`).then(r => {
return message.channel.send({embeds: [r.data.data]})
}).catch(() => {
return message.channel.send('Busqueda invalida!')
})
    
  }
    
}