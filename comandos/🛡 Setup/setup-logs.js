const mongoose = require("mongoose"); //Requerimos mongoose.
const logsSchema = require(`${process.cwd()}/modelos/logs.js`);
const setupSchema = require(`${process.cwd()}/modelos/setups.js`);
const Discord = require('discord.js')//Requerimos la ruta que exportamos. Probablemente lo tendras que cambiar depende tu proyecto.


module.exports = {
    name: "setup-logs",
    aliases: [],
    desc: "Sirve para el setear un canal de logs",
    permisos: ["MANAGE_GUILD"],
    permisos_bot: ["MANAGE_GUILD"],
    run: async (client, message, args, prefix) => {


     let channel = message.mentions.channels.first()
     if(!channel){//Si no menciona ningun canal, retorna.
     return message.channel.send('**<a:_:1015679002058444830> | ***Debes mencionar un canal del servidor.*****')
      }
     let establecer = await logsSchema.findOne({guildID: message.guild.id}).exec()//Busca si ya hay algo establecido.
     if(establecer){ 
     await establecer.updateOne({guildID: message.guild.id, channelID: channel.id}) //Busca si ya hay algun canal guardado.
      message.channel.send('<a:_:1015678583966015679> | ***El Canal logs es*** <#'+channel.id+'>.')//Retorna el mensaje.
     } else {
     let establecido = new logsSchema({guildID: message.guild.id, channelID: channel.id})//Colocamos los nuevos datos.
     await establecido.save()//Guardamos los nuevos datos.
      message.channel.send('<a:_:1015678583966015679> | ***El Canal de logs es*** <#'+channel.id+'>.')//Retorna el mensaje.
     }
     let ewe = await logsSchema.findOne({ guildID: message.guild.id })//Averigua si ya hay algo guardado en el servidor.
     if(!ewe){
     return message.channel.send('<a:_:1015678583966015679> | ***No hay ningun canal configurado.***')//Si no hay canal, retorna.
     }
     let channel2 = message.guild.channels.cache.get(ewe.channelID)//Busca el canal de confesiones.
     channel2.send("<a:_:1015678583966015679> | ***Este es el nuevo canal de logs.***")//Retorna mandando un mensaje al canal.

    }
}