const Discord = require('discord.js')
const config = require(`${process.cwd()}/config/config.json`)
const { parse } = require("twemoji-parser");


module.exports = {
    name: "addemoji",
    aliases: ["add-emoji", "emojiadd", "emoji-add"],
    desc: "Sirve para agregar emojis al servidor.",
    permisos: ["ADMINISTRATOR", "MANAGE_EMOJIS"],

    run: async (client, message, args, prefix) => {
        
        const emojis = args.join(" ").match(/<?(a)?:?(\w{2,32}):(\d{17,19})>?/gi)
        if (!emojis){

            const embed = new Discord.MessageEmbed()
            .setTitle("❌ | Error")
            .setDescription(`\`No se encontrarón emojis para agregar\``)
            .setFooter({ text: `Ejecutado por: ${message.member.user.tag}`, iconURL: `${message.author.displayAvatarURL({ dynamic: true })}`})
            .setTimestamp()
            .setColor(config.colorErr)
            return message.channel.send({embeds: [embed]})
        } 
        emojis.forEach(emote => {
        let emoji = Discord.Util.parseEmoji(emote);
        if (emoji.id) {

      const Link = `https://cdn.discordapp.com/emojis/${emoji.id}.${
       emoji.animated ? "gif" : "png"
}`   

            
            message.guild.emojis.create(`${Link}`, `${`${emoji.name}`}`).then(em =>{
              let server = message.guild;
              let emebedcorrect = new Discord.MessageEmbed()
            .setTitle("✔️ EMOJIS")
            .setDescription(`_Emoji's agregado's  correctamente._\n \`Emoji's:\` ${em.toString()}`)
            .setColor(config.color)
            .setFooter({text: server.name, iconURL: server.iconURL({dynamic: true })})
            .setTimestamp()
             message.channel.send({embeds: [emebedcorrect]});}).catch(error => {
              message.channel.send("❌ | Error")
                console.log(error)
             
})
          
        }
        })
    }
}