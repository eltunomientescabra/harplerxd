const Discord = require('discord.js')

module.exports = {
    name: "mandar-code", 
    alias: [], 
  
    run: async (client, message, args, prefix) => {
    
    const file = message.attachments.first().proxyURL
  
    let description = args.join(" ")
  
    if(!file) {
      message.reply("Ponga una imagen.")
      return;
    }
  
    if(!description){
      description = "La descripcion no ha sido especificada"
    }
  
    const embed = new Discord.MessageEmbed()
    .setTitle("**Codigo mandado**")
    .setDescription("`Nuevo codigo` mandado por **" + message.author.tag + "**.\n\n**Descripcion:** **" + description + "**.")
    .setImage(file)
    .setColor("BLURPLE")
    .setAuthor({ name: `El autor del codigo es ${message.author.tag}` })
  
  
    message.delete()
  
    client.channels.cache.get("1002240739100610561").send({ embeds: [embed] })
  
  
   }
  
  } 