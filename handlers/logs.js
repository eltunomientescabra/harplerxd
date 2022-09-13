const mongoose = require("mongoose"); //Requerimos mongoose.
const logsSchema = require(`${process.cwd()}/modelos/logs.js`);
const Discord = require('discord.js')

module.exports = client => {

    client.on("messageDelete", async message => {
        let cl = await logsSchema.findOne({ guildID: message.guild.id }) //Buscamos una colección que coincida con la ID del servidor
        if (!cl) return; //Si no encontró, retorna
        const embed = new Discord.MessageEmbed()
        .setTitle(`Mensaje Borrado`)
        .addField("Canal:", `${message.channel}`, true)
        .addField("Autor:", `${message.author}`, true)
        .addField("Mensaje:", (message.content && message.content !== '') ? message.content: "❌ El mensaje no se puede obtener!")
        client.channels.cache.get(cl.channelID).send({ embeds: [embed] }) //En caso de que encuentre, obtenemos el canal y enviamos el mensaje
    })
    
    
    
    client.on("channelCreate", async (channel) => {
        let cl = await logsSchema.findOne({ guildID: channel.guild.id }) //Buscamos una colección que coincida con la ID del servidor
        if (!cl) return; //Si no encontró, retorna
        const embed = new Discord.MessageEmbed()
        .setTitle(`Canal Creado`)
        .addField("Canal:", `${channel.name}`, true)
        .addField("CanalID:", `${channel.id}`, true)
        .addField("Tipo:", `${channel.type}`, true)
        .addField("Categoria:", `${channel.parent}`, true)
        client.channels.cache.get(cl.channelID).send({ embeds: [embed] })
    })
    
    client.on("channelDelete", async (channel) => {
        let cl = await logsSchema.findOne({ guildID: channel.guild.id }) //Buscamos una colección que coincida con la ID del servidor
        if (!cl) return; //Si no encontró, retorna
        const embed1 = new Discord.MessageEmbed()
        .setTitle(`Canal Borrado`)
        .addField("Canal:", `${channel.name}`, true)
        .addField("CanalID:", `${channel.id}`, true)
        .addField("Tipo:", `${channel.type}`, true)
        .addField("Categoria:", `${channel.parent}`, true)
        client.channels.cache.get(cl.channelID).send({ embeds: [embed1] })
  })}