module.exports = {
    name: 'balance',
    aliases: ['bal'],
    description: 'Show your balance',
    usage: '*balance',
    cooldown: 0,
    mod:false,
      execute: async (message, args, client) => {
        const Discord = require('discord.js');
        const eco = require("discord-economy");
        const fs = require('fs');
        var output = await eco.FetchBalance(message.author.id)
        message.channel.send(`You currently have ${output.balance} coins`)
        const embed = new Discord.MessageEmbed()
            .addTitle("Balance")
            .addFields(
                { name: Pocket, value: output.balance, inline: true },
                { name: Bank, value: "0", inline: true },
            )
        message.channel.send(embed);
    }
}