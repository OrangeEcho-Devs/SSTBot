module.exports = {
    name: 'poll',
    aliases: ['polls'],
    description: 'Creates a poll',
    usage: '*poll',
    cooldown: 0,
    mod:false,
    nodelay:true,
    execute: async (message, args, client) => { 
        const Discord = require('discord.js'); 
            if (!args[0]) return message.channel.send('Tell me what poll question you want dummy')
            const embed = new Discord.MessageEmbed()
                embed.setColor('RANDOM')
                embed.setFooter(footertext)
                embed.setDescription(args.join(' '))
                embed.setTitle(`Poll created by ${message.author.username}`);
                embed.addField('How to vote', `Click 👍 to upvote\n\n Click 👎 to downvote`, true)
            let msg = await message.channel.send(embed);
            await msg.react('👍');
            await msg.react('👎');

            message.delete();

            
        }
    }