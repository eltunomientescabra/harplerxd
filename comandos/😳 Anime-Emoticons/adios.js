const Discord = require('discord.js');

module.exports = {
      name: "adios",
      alias: ["Bye"],



      run: async (client, message, args, prefix) => {

    const user = message.mentions.users.first() 
    if(!user) return message.channel.send('Debes mencionar un usuario')
  
  const gif = ["https://qph.cf2.quoracdn.net/main-qimg-23ec3dc495095af33bac8f349a1c48f3", "https://64.media.tumblr.com/ef76cd459969fe642f4e52c170959344/cb917f63c1446b2d-e2/s1280x1920/c9b61c142f08f591484f64e470ae5118e820c40b.gifv", "https://pa1.narvii.com/6291/6051b58523bdfe205f6f0fd4331c7f5ae3e1fe25_hq.gif", "https://images-ext-1.discordapp.net/external/skN-RpCqFXOG7uNVldrBtMGghKMQ7YPns8GvTj0w4e4/https/nekocdn.com/images/XhegOY1BJ.gif", "https://i.gifer.com/sCO.gif"]

 const randomgif = gif[Math.floor(Math.random() * gif.length)];


  const embed = new Discord.MessageEmbed()
  .setTitle(`**${message.author.username}** Te despediste de **${user.username}**`)
  .setImage(`${randomgif}`)
  .setColor("YELLOW")


  message.channel.send({ embeds: [embed] })

  
}
  
}