const { DiscordTogether } = require('discord-together')

module.exports = {
    name: "youtube",
    aliases: [],
    desc: "Sirve para ver la latencia del Bot",
    run: async (client, message, args, prefix) => {

if(message.member.voice.channel){
            const tumbalacasa = new DiscordTogether(client)

            const canal = message.member.voice.channel.id 

            tumbalacasa.createTogetherCode(canal, "youtube").then(invite => {
                message.reply(`Aqui tienes tu link para el canal <#${canal}>: ${invite.code}`)
            }).catch(e => {
                message.reply(`Ha ocurrido un error: ${e}`)
            })
        } else {
            message.reply('Debes estar en un canal de voz.')
        }}};