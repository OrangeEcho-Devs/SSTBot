module.exports = {
    name: 'daily',
    aliases: ['dailycoins'],
    description: 'Fresh daily injection of coins',
    usage: '*daily',
    cooldown: 0,
    mod:false,
      execute: async (message, args, client) => {
        const Discord = require('discord.js');
        const eco = require("discord-economy");
        const fs = require('fs');
        var output = await eco.Daily(message.author.id)
        if (output.updated) {
            var profile = await eco.AddToBalance(message.author.id, 1000)
            message.reply(`Here are your daily coins! 1000 coins are now added, and you now own ${profile.newbalance} coins.`);
       
          } else {
            message.channel.send(`**Don't be greedy, you already claimed your daily coins.** \nCome back in ${output.timetowait}`)
          }
       
      }
    }