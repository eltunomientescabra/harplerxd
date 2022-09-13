const Discord = require('discord.js');

module.exports = {
  name: "ppt", 
  alias: ["pp"], 
  
  run: async (client, message, args) => {
  
  if(!args[0]) return message.channel.send("Opciones: `piedra`, `papel` o `tijera`").then(m => m.delete({timeout: 10000})) 
  
  let Options = ["piedra", "papel", "tijera"]

  if(!Options.includes(args[0].toLowerCase())) return message.channel.send(":x: Opcion incorrecta!")

  
  if(args[0] == "piedra") {


    let random1 = ["He ganado! Elegi papel. El papel cubre a la roca.", 
                   "Has ganado! Elegi tijera. Las tijeras no pueden cortar rocas.",  // Ganaste :D
                   "Empate. Piedra vs piedra, gana... La piedra!"] 

    
    message.reply(" "+random1[Math.floor(Math.random() * random1.length)]+"")
    
  
  } else if(args[0] == "papel") {

    let random2 = ["He ganado! Elegi tijera. Las tijeras cortan el papel.",
                   "Has ganado! Elegi piedra. El papel cubre a la roca.",  
                   "Empate. Papel vs Papel... gana Papel"]

    message.reply(" "+random2[Math.floor(Math.random() * random2.length)]+"")
    
  } else if(args[0] == "tijera") {
let random3 = ["He ganado! Elegi piedra, la priedra rompe la tijera", 
                   "Has ganado! Elegi papel la tijera corta el papel",  
                   "Empate. Tijera vs Tijera... gana tijera!"] 
    message.reply(" "+random3[Math.floor(Math.random() * random3.length)]+"")
  }
}
}