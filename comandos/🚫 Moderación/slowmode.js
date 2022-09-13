const { Client, Message } = require("discord.js");
const ms = require("ms")

module.exports = {
    name: "slowmode",
    aliases: ["sm"],

    /**
     * @param {Client} client
     * @param {Message} message 
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        if(!message.member.permissions.has("MANAGE_GUILD")) return message.reply("No tiene permiso para utilizar este comando.")
        if(!args[0]) {
            message.channel.setRateLimitPerUser(0);
            return message.reply("¡Enfriamiento del chat eliminado!")
        }

        const raw = args[0];
        const milliseconds = ms(raw);

        if(isNaN(milliseconds)) return message.reply("No ha introducido una hora válida.")
        if(milliseconds < 1000) return message.reply("El tiempo mínimo para el enfriamiento es de 1 segundo.");

        message.channel.setRateLimitPerUser(milliseconds / 1000);
        message.reply(`Slowmode se ha activado en este canal para:\`${ms(milliseconds, {
            long: true
        })}\``)
    }
}