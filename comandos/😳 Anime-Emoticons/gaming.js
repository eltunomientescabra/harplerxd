const Discord = require('discord.js');

module.exports = {
      name: "gaming",
      alias: ["Gaming", "GAMING"],

   run: async (client, message, args, prefix) => {
  
  const gif = ["https://images-ext-1.discordapp.net/external/abdq5Bxp7hcThCit5V_KiYYCvO8yz4ysJIOwxHf9RuQ/https/nekocdn.com/images/Vvf2FjCm.gif", "https://images-ext-2.discordapp.net/external/FNhRMR1b40kRWUDcX11pWCiwfBSwgAdHLLSr2v5W5sE/https/nekocdn.com/images/WWSx5Ry5.gif", "https://images-ext-1.discordapp.net/external/DE8Qw2d4vxoVlw9zUUsbM4oSPmkiXR8bHDS4VA_fh0s/https/nekocdn.com/images/U_51xEuO.gif", "https://images-ext-2.discordapp.net/external/UJNi_UQeut-QHja0DK7hYK4gnOeC2yrKD_sw8HgFVxU/https/nekocdn.com/images/O8RLUvSG.gif", "https://images-ext-2.discordapp.net/external/AqAW3X7q_k9TJmkkF27H9Tnf-wHZOUXKG3rnWd0hbE8/https/nekocdn.com/images/J7gB6BSi.gif", "https://images-ext-2.discordapp.net/external/KC0CykFAo-Npl-L9gR1gP_devPo1XmTOMCIkoSV4t7E/https/nekocdn.com/images/Ej4BY1bP.gif", "https://images-ext-1.discordapp.net/external/Ebc6eBD4q93lJ11is5iPWBbc-sFjk1_J_V_DVZu6CQw/https/nekocdn.com/images/gR57IORZ.gif", "https://images-ext-1.discordapp.net/external/KIBBk--2gcQh5bpzZ09ApnpZGA3ey45YQSUcHsvs55k/https/nekocdn.com/images/w8O-7R_z.gif"]

 const randomgif = gif[Math.floor(Math.random() * gif.length)];


  const embed = new Discord.MessageEmbed()
  .setTitle(`**${message.author.username}** Esta jugando.`)
  .setImage(`${randomgif}`)
  .setColor("YELLOW")


  message.channel.send({ embeds: [embed] })

  
}
  
}