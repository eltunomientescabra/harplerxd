const Discord = require('discord.js');

module.exports = {
    name: "jail",
    alias: [],

run: async (client, message, args) => {

    const user = message.mentions.members.first() || message.author;
    const avatar = user.displayAvatarURL({ size: 2048, format: "png" });
  
     await message.reply({ files: [{attachment: `https://some-random-api.ml/canvas/jail?avatar=${avatar}`, name: 'file.jpg'}] })
    
  }
    
}