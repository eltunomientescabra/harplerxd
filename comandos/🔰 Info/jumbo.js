const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')

module.exports = {
  name: "Jumbo",//Nombre del comando
  alias: ["jumbo"],
  desc: "Te muestra un emoji y si te gusta lo descargas.",
  async execute (client, message, args) {
      
      
      if(!args[0]) return message.channel.send(':x: | Debes decirme un emoji que este dentro del servidor.') //SI NO MENCIONAS UN EMOJI RETORNA ESTE MENSAJE
      
      let emoji = message.guild.emojis.cache.find(x => x.name === args[0].split(":")[1]) //PARA QUE STABBEDHCF BUSQUE EL EMOJI EN EL SERVIDOR
      
      if(!emoji) return message.channel.send(':x: | Tienes que poner un Emoji.') //POR SI NO MENCIONA UN EMOJI
      
      const Jumbo = new Discord.MessageEmbed()
      
      .setTitle(`Emoji`)
      .setImage(emoji.url)
      .setFooter({ text: '¿Te gusta el emoji?'})
      .setColor('RANDOM')
      
      const download = new Discord.MessageActionRow()
      .addComponents(
          new Discord.MessageButton()
          .setLabel('Descargar Emoji')
          .setStyle("LINK")
          .setURL(emoji.url)
          .setEmoji('🖇️')
      )
      
      message.channel.send({
          embeds: [Jumbo],
          components: [download]
      })
}}