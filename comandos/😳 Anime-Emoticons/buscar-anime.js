const Discord = require('discord.js')
const { MessageEmbed, MessageActionRow } = require('discord.js')
const Scraper = require('mal-scraper')

module.exports = {
    name: "buscar-anime",
    aliases: ["anime-buscar"],

    run: async(client, message, args) => {
        
        let Text = args.join(" ")
      if(!Text) {

        return message.reply("**❌ Debes escribir el nombre de un anime**")
       }

      if(!Text.length > 10) {
        return message.reply("❌ **El nombre del anime no debe de contener 45 caracteristicas**")
      }
      
      let Msg = await message.reply("<a:_:1017558984514879599> **Buscando...**")

      let Replaced = Text.replace(/ /g, " ");

      let Anime 

      let Embed 

      try {

        Anime = await Scraper.getInfoFromName (Replaced);

        if(!Anime.genres[0] || Anime.genres[0] === null) Anime.genres[0] = "Ninguno";

        Embed = new Discord.MessageEmbed()
        .setColor(client.color)
        .setURL(Anime.url)
        .setTitle(Anime.title)
        .setDescription(Anime.synopsis)
        .addField(`Tipo`, Anime.type, true)
        .addField(`Publicado`, Anime.status, true)
        .addField(`Duracion`, Anime.duration, true)
        .addField(`Popularidad`, Anime.popularity, true)
        .addField(`Genero`, Anime.genres.join(", "))
        .setThumbnail(Anime.picture)
        .setFooter(`Puntaje - ${Anime.score}`)
        .setTimestamp()

      } catch (error) {
        console.log(error)
        return message.reply(`❌ **Anime no encontrado`)
      };

      message.channel.send({ embeds: [Embed] })
    }
}