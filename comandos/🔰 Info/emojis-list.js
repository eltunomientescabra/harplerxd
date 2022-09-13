const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')

module.exports = {
  name: "emoji-list",//Nombre del comando
  aliases: ["lista-emojis"],//Alias del comando (Por si quieres activar el comando de 2 maneras)
  desc: "Sirve para ver una lista de emojis del server",
  run: async (client, message, args) => {

let Emojis = "";
let EmojisAnimated = "";
let EmojiCount = 0;
let Animated = 0;
let OverallEmojis = 0;

function Emoji(id) {
    return client.emojis.cache.get(id).toString();
}
message.guild.emojis.cache.forEach((emoji) => {
    OverallEmojis++;
    if (emoji.animated) {
        Animated++;
        EmojisAnimated += Emoji(emoji.id);
    } else {
        EmojiCount++;
        Emojis += Emoji(emoji.id);
    }
});
let Embed = new Discord.MessageEmbed()
    .setTitle(`Emojis en  ${message.guild.name} | Emojis [${OverallEmojis}] `)
    .setDescription(
        `**Animados [${Animated}]**:\n${EmojisAnimated}\n\n**Estaticos [${EmojiCount}]**:\n${Emojis}`
    )
    .setColor(client.color);

if (Embed.length > 2000) {
    return message.channel.send(
        `El limite es de 2000 caracteres!`
    );
} else {
    message.channel.send({embeds: [Embed]});
}

}
}