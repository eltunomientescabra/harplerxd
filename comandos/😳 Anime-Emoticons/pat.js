const Discord = require('discord.js');

module.exports = {
      name: "pat",
      alias: ["Pat", "PAT"],

      run: async (client, message, args, prefix) => {

  const user = message.mentions.users.first() 
  if(!user) return message.channel.send('Debes mencionar un usuario')
  
  const gif = ["https://images-ext-2.discordapp.net/external/Nl7pt2m89OciNH3mw91P2uxjjhDBbqGHCHIgVsUTpwY/https/nekocdn.com/images/xWaFyWX8.gif", "https://images-ext-2.discordapp.net/external/oAG9JjAG437WoEQE21gvkVJ9eXoL2JJklXo_dnbGMzY/https/nekocdn.com/images/vJC_ZodO.gif", "https://images-ext-1.discordapp.net/external/5-Fe9LFq5EqiQG5k2bN8TXRXyuuxchgKNSpPXwIdK0M/https/nekocdn.com/images/FvzAljqC.gif?width=650&height=406", "https://images-ext-1.discordapp.net/external/N3CesTg-QFuOC8xVRiSfdeEop8PUvj9LSLgWh03ZDDA/https/nekocdn.com/images/Kd9sFmgp.gif"]

 const randomgif = gif[Math.floor(Math.random() * gif.length)];


  const embed = new Discord.MessageEmbed()
  .setTitle(`**${message.author.username}** Acaricio a **${user.username}**`)
  .setImage(`${randomgif}`)
  .setColor("YELLOW")


  message.channel.send({ embeds: [embed] })

  
}
  
}