const Discord = require("discord.js");
const movie = require('movier')
module.exports = {
        name: "watch-movie",
        aliases: ["ver-pelicula"],
        desc: "",

    run: async(client, message, args) => {
       
       const assunto = args.join(" ");

   let filme = await movie.getTitleDetailsByName(assunto)

    if(!filme) return  message.channel.send('*¡No pude encontrar ningún título con ese nombre!*')
        const button = new Discord.MessageButton()
        .setLabel(`Ver`)
        .setStyle('LINK')
        .setEmoji('🤩') //EMOJI DO BOTÃO
        .setURL(filme.mainSource.sourceUrl)
        
        const button2 = new Discord.MessageButton()
        .setLabel(`Buscado por: ${message.author.username}`)
        .setStyle('PRIMARY')
        .setEmoji('📣') //EMOJI DO BOTÃO
        .setCustomId('coisea')
        .setDisabled(true)

        const row = new Discord.MessageActionRow().addComponents(button, button2)
        const embed = new Discord.MessageEmbed()
        .setDescription(`**🎞__Busqueda:__** \`${assunto}\`\n**🎫__Titulo:__** \`${filme.worldWideName}\`\n**🎭__Año de lanzamiento:__** \`${filme.dates.titleYear}\`\n**💓__Evaluación:__** \`${filme.mainRate.rate}/10\``)
        .setImage(filme.posterImage.url)
        message.channel.send({ embeds: [embed], components: [row]})

    }
} 