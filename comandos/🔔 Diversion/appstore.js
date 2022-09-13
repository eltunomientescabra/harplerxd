const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')
const AppleStore = require("app-store-scraper");

module.exports = {
  name: "appstore",//Nombre del comando
  alias: [],//Alias del comando (Por si quieres activar el comando de 2 maneras)
  run: async(client, message, args, prefix) => {

    if (!args[0])
      return message.channel.send(
        `❌ **Debes escribir una aplicación para buscar!**`
      );

    AppleStore.search({
      term: args.join(" "),
      num: 1,
      lang: 'es-es'
    }).then(Data => {
      let App;

      try {
        App = JSON.parse(JSON.stringify(Data[0]));
      } catch (error) {
        return message.channel.send(
          `❌ **No puedo encontrar esa aplicación:(**`
        );
      }

      let Descripcion = App.description.length > 200 ? `${App.description.substr(0, 200)}...` : App.description
      let Precio = App.free ? "GRATIS!" : `$${App.price}`;
      let calificacion = App.score.toFixed(1);

      let Embed = new Discord.MessageEmbed()
        .setColor(client.color)
        .setThumbnail(App.icon)
        .setURL(App.url)
        .setTitle(`${App.title} - En la appstore!`)
        .setDescription(Descripcion)
        .addField(`Precio`, Precio, true)
        .addField(`Desarrollador`, App.developer, true)
        .addField(`Calificación`, calificacion, true)
        .setFooter({ text: message.guild.name, iconURL: message.guild.iconURL({ dynamic: true }) })
        .setTimestamp();

      return message.channel.send({ embeds: [Embed] });
    });
  }
}

 