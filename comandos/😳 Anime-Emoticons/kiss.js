const Discord = require('discord.js')
const NekoClient = require("nekos.life")
const neko = new NekoClient()


module.exports = {
   name: "kiss",
   alias: [],
   premiun: false,

   run: async (client, message, args, prefix) => {

    const user = await message.mentions.users.first()

    if(!user) return message.channel.send("**❌ Debes nombrar a quien besar.**")

    if (user.id == message.author.id) return message.channel.send("**❌ No puedes hacer eso.**")

    if (user.bot) return message.channel.send("**❌ No puedes besar a un bot.**")



        neko.kiss().then(neko => {
        const embed = new Discord.MessageEmbed()
        .setDescription(`${message.author.username} Le a dado un beso a **${user}**`)
        .setImage(neko.url)
        .setColor("RANDOM")
        .setTimestamp()

        message.channel.send({ embeds: [embed] })
    })

       function newFunction() {
           return neko.sfw.kiss
       }
   }
}