module.exports = {
    name: 'slots',
    aliases: ['slotmachine', 'vegas'],
    description: '**This is a game command.**\nPlay on a slot machine like in Vegas.\n(No gambling included)',
    usage: '',
    cooldown: 0,
    hidden: true,
      execute(message, args, client) {
      const fs = require('fs');
      const Discord = require('discord.js')
      const msg = message
      try {
         var roll1 = Math.ceil(Math.random() * 10)
         console.log("Slot 1 generated. " + roll1)
         var roll2 = Math.ceil(Math.random() * 10)
         console.log("Slot 2 generated. " + roll2)
         var roll3 = Math.ceil(Math.random() * 10)
         console.log("Slot 3 generated. " + roll3)
         var slot1 = roll1
         console.log("Slot 1 transferred. " + slot1)
         var slot2 = roll2
         console.log("Slot 2 transferred. " + slot2)
         var slot3 = roll3
         console.log("Slot 3 transferred. " + slot3)
         console.log("Generating duplicator...")
         var dup = Math.ceil(Math.random() * 1000)
         console.log("Duplicator generated.")
         if(dup > 700) {
          console.log("Duplicate success.")
           var slot1 = roll1
           var slot2 = roll1
           var slot3 = roll1
         } else {
          console.log("No duplicate.")
          var slot1 = roll1
          var slot2 = roll2
          var slot3 = roll3
         }
         console.log("Checking if slot1 matches slot2 and slot3...")
         console.log("Slot 1. " + slot1)
         console.log("Slot 2. " + slot2)
         console.log("Slot 3. " + slot3)
          if (slot1 == slot2 && slot2 == slot3) {
            fs.readFile('./leaderboards/' + message.author.tag + '_gamestats.json', error => {
              if(error) {
                console.log("Match. Win. No leaderboard update.")
                respond('Slots', "<@" + message.author.id + ">'s slot game:\n" + slot1 + "   " + slot2 + "   " + slot3 + "\n" + "You win this one!\nThink carefully before you gamble in real life Vegas.\nThe .slots command is only a simulation." , message.channel)
                return
              } else {
                console.log("Match. Win.")
              jsonfile = require('../leaderboards/' + message.author.tag + '_gamestats.json');
              jsonfile.slotswins = Number(jsonfile.slotswins)+1;
              data = JSON.stringify(jsonfile)
              fs.writeFile('./leaderboards/' + message.author.tag + '_gamestats.json', data, (err) => {
                  if (err) throw err;
                  else {
                    console.log("Successfully updated Slots game stats of " + message.author.tag + ".")
                  }
              })
            }
          })
            respond('Slots', "<@" + message.author.id + ">'s slot game:\n" + slot1 + "   " + slot2 + "   " + slot3 + "\n" + "You win this one!\nThink carefully before you gamble in real life Vegas.\nThe .slots command is only a simulation." , message.channel)
            return
            }
            if (slot1 !== slot2 !== slot3) {
            if (slot1 != slot2 && slot2 != slot3) {
              fs.readFile('./leaderboards/' + message.author.tag + '_gamestats.json', error => {
                if(error) {
                  console.log("Mismatch. Lose. No leaderboard update.")
                  respond('Slots', "<@" + message.author.id + ">'s slot game:\n" + slot1 + "   " + slot2 + "   " + slot3 + "\n" + "Awww man, you lost.\nYou suck and shouldn't gamble in Vegas" , message.channel)
                  return
                } else {
                  console.log("Mismatch. Lose.")
                jsonfile = require('../leaderboards/' + message.author.tag + '_gamestats.json');
                jsonfile.slotslosses = Number(jsonfile.slotslosses)+1;
                data = JSON.stringify(jsonfile)
                fs.writeFile('./leaderboards/' + message.author.tag + '_gamestats.json', data, (err) => {
                    if (err) throw err;
                    else {
                      console.log("Successfully updated Slots game stats of " + message.author.tag + ".")
                    }
                })
              }
            })
            respond('Slots', "<@" + message.author.id + ">'s slot game:\n" + slot1 + "   " + slot2 + "   " + slot3 + "\n" + "Aww man, you lost.\nYou suck and shouldn't gamble in Vegas" , message.channel)
            return
            }
          }
    }catch(error) {
      respond('Error', 'Something went wrong.\n'+error+`\nMessage: ${message}\nArgs: ${args}\n`, message.channel)
      errorlog(error)
      // Your code broke (Leave untouched in most cases)
      console.error('an error has occured', error);
      }
    }
  }