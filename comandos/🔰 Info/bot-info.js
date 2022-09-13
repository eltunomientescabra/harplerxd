const Discord = require('discord.js')
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')

module.exports = {
    name: "bot-info",
    aliases: ["info-bot", "informacion-bot"],
    premium: false,

    run: async (client, message, args, prefix) => {

        const botinfo = new Discord.MessageEmbed()
     .setTitle(`Bot info de ${client.user.tag}`)
     .setDescription(`**Soy un bot de Moderacion incluyendo \`ADMINISTRACIÓN\`, \`MUSICA\` y \`Comandos PREMIUM\`**`)
     .addField(`**Fui desarollado por** \`! zSxb#0001\``)
     .addField(`**Actualmente tengo \`${client.commands.size} comandos\``)
     .addField(`**Estoy en** \`${client.guilds.cache.size} Servidores\``)
     .addField(`**Actualmente tengo** \`${client.slashcmd.size} SlashCommands\``)
     .addField("**La fecha que fui desarrollado es** <t:1656858312R>")
     .setColor(client.color)

     message.channel.send({ embeds: [botinfo] })
    

    }
}