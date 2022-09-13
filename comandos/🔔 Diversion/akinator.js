const Discord = require('discord.js')
const akinator = require("discord.js-akinator");

module.exports = {
    name: "akinator",
    aliases: ["aki"],
    
    run: async(client, message, args) => {
        const languague = "es";
        const gameType = "character";
        const useButtons = true;
        const embedColor = "ORANGE";
        
        client.on("MessageCreate", async message => {
            if(message.content.startWith(`${prefix}akinator`)) {         
            vidente(message, {
                        languague: languague,
                        gameType: gameType,
                        useButtons: useButtons,
                        embedColor: embedColor
                    })
            }
           
          })
    }
}