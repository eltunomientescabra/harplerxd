const Discord = require('discord.js');
const simplydjs = require('simply-djs');

module.exports = {
    name: "tictactoe",
    alias: ["gato", "3enraya"],

    run: async (client, message, args, prefix, channel) => {

  let user = message.mentions.members.first()
  if(!user) return message.reply('Debes ingresar un usuario!')

  simplydjs.tictactoe( message, {
      xEmoji: "❌",
      oEmoji: "⭕",
      idleEmoji: "➖",
      embedColor: "BLUE",
      embedFoot: 'Solo ganara el mejor!',
      credit: false,
      user: "usuario",
      timeoutEmbedColor: 'RED'
  })
    
  }
    
}