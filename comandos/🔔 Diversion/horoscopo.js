const Discord = require('discord.js');

module.exports = {
  name: "horoscopo",//Nombre del comando
  alias: [""],//Alias del comando (Por si quieres activar el comando de 2 maneras)
 async execute (client, message, args) {

  //definimosal signo en args es decir cuando ejecute el comando que tendra que poner su tipo: u.horoscopo (su signo)
  const signo = args.slice(0).join(" ")

  //aqui definimos que si no dice el signo se returne el comando y aparezca que debe escribir su signo
    if (!signo) return message.channel.send("<a:UN_Not:987933866964693008> `|` ***Indicame un signo zodiacal!*** ")

     //definimos todos los signos
      let Options = ["libra", "tauro", "cancér", "capricornio", "sagitario", "geminis", "piscis", "leo", "aries", "virgo", "escorpio", "acuario", "cancer", "gemínís"]

    //definimos que si no contiene alguna de las opciones el comando retorne
     if (!Options.includes(args[0].toLowerCase())) return message.channel.send("<a:UN_Not:987933866964693008> `|` ***Ese no es un signo zodiacal!***")

    //aqui definimos author y las opciones aleatorias
    let author = message.author.username;
    let amor = Math.floor(Math.random() * 100)
    let dinero = Math.floor(Math.random() * 100)
    let salud = Math.floor(Math.random() * 100)
    let suerte = Math.floor(Math.random() * 100)
    let trabajo = Math.floor(Math.random() * 100)
    let sexo = Math.floor(Math.random() * 100)

    //aqui hacemos el embed con los Fields
    const embed = new Discord.MessageEmbed()
    .setTitle("💫 Los astros determinan que el horoscopo de " + `${author}` + " es:")
    .addFields(
      { name: '**Amor**', value: `💖**${amor}**💖`, inline: true },
      { name: '**Dinero**', value: `💰**${dinero}**💰`, inline: true },
      { name: '**Salud**', value: `💉**${salud}**💉`, inline: true },
      { name: '**Suerte**', value: `🍀**${suerte}**🍀`, inline: true },
      { name: '**Trabajo**', value: `👜**${trabajo}**👜`, inline: true },
      { name: '**Sexo**', value: `🥵**${sexo}**🥵`, inline: true },
    )
    .setColor("RANDOM");
    //y por ultimo enviamos el embed
    message.channel.send({ embeds: [embed] })


  }

}