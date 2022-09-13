const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')
const pet = require("pet-pet-gif")

module.exports = {
  name: "pet",//Nombre del comando
  alias: [""],//Alias del comando (Por si quieres activar el comando de 2 maneras)
  run: async (client, message, args) => {

    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member; 
    
    let animatedGif = await pet(member.user.displayAvatarURL({format: "png"}))

   
    const petpet = new Discord.MessageAttachment(animatedGif, "petpet.gif") 
    
    message.reply({files: [petpet]}) 
  


    }
}
  