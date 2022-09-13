const Discord = require('discord.js');
const {MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')

module.exports = {
    name: "poll",
    aliases: [],

    run: async (client, message, args) => {

        if(!message.member.permissions.has("MANAGE_GUILD")) return message.reply("No tiene permiso para utilizar este comando.")
        const polltext = args.join(' ');
        if(!polltext) return message.reply(`La pregunta de la encuesta no es válida./Por favor escriba una correcta.`)
        message.delete();

        const polls = new Discord.MessageEmbed()
        .setTitle(`📶 Nueva Encuesta:`)
        .setDescription(`> ${polltext}\n\n**1️⃣ Si**ㅤㅤ**2️⃣ No**`)
        .setThumbnail(message.guild.iconURL({ dynamic: true }))
        .setColor("RANDOM")
        .setFooter({ text: `Encuesta creada`, iconURL: `${message.guild.iconURL({ dynamic: true })}`})
        .setTimestamp()

        message.channel.send({ embeds: [polls] }).then(async (e) => {
            e.react("1️⃣")
            e.react("2️⃣")
        })
        
    }
}