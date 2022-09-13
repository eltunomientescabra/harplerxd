const { DiscordTogether } = require('discord-together');
const Discord = require('discord.js')

module.exports = {
    name: 'sketchheads',
    aliases: ['sk', "game-sketchheads", "game-sk", "sketch"],
    desc: "Sirve para jugar el sketchheads con tus amigos.",
    inVoiceChannel: true,
    run: async (client, message, args) => {

client.discordTogether = new DiscordTogether(client);

        if(!message.member.voice.channel) return message.reply(":6632redcross: **· ¡No te encuentras en ningun canal de voz!**")
        if(message.member.voice.channel) {
            client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'sketchheads').then(async invite => {
                return message.channel.send({embeds: [new Discord.MessageEmbed().setColor("YELLOW").setDescription(` ${invite.code} `).setTitle('DISCORD SKETCH')]});

            })
        }
    }
}