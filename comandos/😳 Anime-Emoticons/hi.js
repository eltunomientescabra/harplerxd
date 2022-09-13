const Discord = require('discord.js');

module.exports = {
      name: "hi",
      alias: ["Hi", "HI"],

      run: async (client, message, args, prefix) => {

  const user = message.mentions.users.first() 
  if(!user) return message.channel.send('Debes mencionar un usuario')
  
  const gif = ["https://images-ext-2.discordapp.net/external/myfihlzJWITu1HFSRTkaKaqMCpfbGyAUdLvR0qiVOOI/https/nekocdn.com/images/q2s8BGcu.gif", "https://images-ext-2.discordapp.net/external/Dei1MXMrtqBJ6Q69yIF983w1u5Zo76yf1gIT6BdDTQQ/https/nekocdn.com/images/8niLqqtN.gif", "https://images-ext-1.discordapp.net/external/rQbkF8ImrxYtq48Dt5ufzw7vBcMOk4hRqa77GmEk9Ak/https/nekocdn.com/images/UIQLXXPK.gif", "https://images-ext-2.discordapp.net/external/HLsvv_z7AI0eLAgQOD32IGzwpEZ4dCBrgVq_oDV4D-c/https/nekocdn.com/images/IdwSLJiC.gif", "https://images-ext-1.discordapp.net/external/h1DfQulXjS42lylyIRj6PGMSW8QlcERrHgNxG6Kr2Rw/https/nekocdn.com/images/eI_o5f0O.gif"]

 const randomgif = gif[Math.floor(Math.random() * gif.length)];


  const embed = new Discord.MessageEmbed()
  .setTitle(`**${message.author.username}** Saludo a **${user.username}**`)
  .setImage(`${randomgif}`)
  .setColor("YELLOW")


  message.channel.send({ embeds: [embed] })

  
}
  
}