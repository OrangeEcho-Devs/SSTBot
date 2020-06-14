module.exports = {
    name: 'mcdonaldsorder',
    aliases: ['order', 'mcdonalds'],
    description: 'Order something from mcdonalds!',
    usage: '*order [item name]',
    cooldown: 0,
    mod:false,
      execute(message, args, client) {
        const Discord = require('discord.js')
        const fs = require('fs');
        const food = require('./Mcdonaldsfood.json')
        const drinks = require('./Mcdonaldsdrinks.json')
        const breakfast = require('./Mcdonaldsbreakfast.json')
        const sides = require('./Mcdonaldssides.json')
        const desert = require('./Mcdonaldsdesert.json')
        const { MessageEmbed } = require('discord.js')
        if (!args[0]) {
          const embed = new Discord.MessageEmbed()
          embed.setTitle('Menu')
          embed.setDescription('The menu for this drive-thru. The menu follows the **SINGAPORE** mcdonalds menu.')
          embed.addFields(
            { name: "Breakfast", value: breakfast.join('\n '), inline:true },
            { name: "Food", value: food.join('\n '), inline:true },
            { name: "Drinks", value: drinks.join('\n '), inline:false },
            { name: "Sides", value: sides.join('\n '), inline: true },
            { name: "Desert", value: desert.join('\n '), inline: true }
          )
          embed.setTimestamp()
          embed.setFooter(footertext)
        message.channel.send(embed);
        }
        else if (args[0] == '1') {
          message.channel.send('You have ordered a ')
        }
    }
}