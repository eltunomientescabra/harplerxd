const Discord = require('discord.js');

module.exports = {
    name: "8ball",
    aliases: [],
    permisos: [],
    permisos_bot: ["ADMINISTRATOR"],

    run: async (client, message, args) => {
        
        let rpts = ["Probablemente", "No", "Si", "Tal vez", "No", "¡Claro!", "Si", "No"];
        let random = rpts[Math.floor(Math.random() * rpts.length)];

        let pregunta = args.slice().join(' ');
        if(!pregunta) return message.reply(`Primero debes de escribir tu pregunta.`);

        const embed = new Discord.MessageEmbed()
        .setAuthor({ name: "8ball de " + message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
        .setDescription(`**Pregunta**: ${pregunta}`)
        .addField(`Respuesta:`, `${random}`)
        .setThumbnail('https://cdn.discordapp.com/attachments/968364275489996830/1004749586675544095/unknown.png')
        .setColor("RANDOM")

        message.channel.send({ embeds: [embed] }).then(async(e) => {
            e.react(':white_check_mark:')
            e.react(':open_mouth:')
            e.react(':x:')
        })
    }
}