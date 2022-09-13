const discord = require("discord.js");
const Canvas = require("canvas");

module.exports = {
    name: "ship",
    aliases: [],
    desc: "Sirve para ver el porciento de amor que tienen",
    run: async (client, message, args, prefix) => {

        const canvas = Canvas.createCanvas(700, 250)
        const ctx = canvas.getContext('2d')
    
        const target = message.mentions.users.first()
        if(!target) return message.channel.send("Porfavor menciona a alguien :3")
        if (target.id == message.author.id) return message.channel.send("No te menciones a ti mismo jaja!!")
    
        const bg = await Canvas.loadImage('https://i.ytimg.com/vi/L1rPcjJwbWk/maxresdefault.jpg')
        ctx.drawImage(bg, -10, -10, canvas.width, canvas.height)
    
        const avatar = await Canvas.loadImage(message.author.displayAvatarURL({ format: 'png' }))
        ctx.drawImage(avatar, 100, 25, 200, 200)
    
        const TargetAvatar = await Canvas.loadImage(target.displayAvatarURL({ format: 'png' }))
        ctx.drawImage(TargetAvatar, 400, 25, 200, 200)
    
    
        const heart = await Canvas.loadImage('https://cdn.discordapp.com/attachments/716216765448978504/858607217728159744/unknown.png')
        const broken = await Canvas.loadImage('https://cdn.discordapp.com/attachments/716216765448978504/858607537238179840/unknown.png')
        const random = Math.floor(Math.random() * 99) + 1
    
        if (random >= 50) {
            ctx.drawImage(heart, 275, 60, 150, 150)
            const attachment = new discord.MessageAttachment(canvas.toBuffer(), 'love.png')
            const embed = new discord.MessageEmbed()
                .setDescription(`${message.author.tag} shipped con ${target.tag} y es ${random}%`)
                .setImage('attachment://love.png')
                .setColor('GREEN')
            return message.channel.send({ embeds: [embed], files: [attachment] })
    
        }
        else {
            ctx.drawImage(broken, 275, 60, 150, 150);
            const attachment = new discord.MessageAttachment(canvas.toBuffer(), 'broken.png');
            const embed = new discord.MessageEmbed()
                .setDescription(`${message.author.tag} shipped con ${target.tag} y es ${random}%`)
                .setImage('attachment://broken.png')
                .setColor('RED');
            return message.channel.send({ embeds: [embed], files: [attachment] });
    
        }
    }
}
