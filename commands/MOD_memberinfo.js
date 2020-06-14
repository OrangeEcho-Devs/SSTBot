module.exports = {
  name: 'memberinfo',
  aliases: ['infomember'],
  description: 'Gets info about mentioned user',
  usage: '<user>',
  cooldown: 0,
  mod:true,
	execute(message, args, client) {
    const Discord = require('discord.js');
    const fs = require('fs');
    const userlog = require('../logs/userwarnings.json')
    try {
      const mentionedUser = message.mentions.users.first()
      if(!mentionedUser){
        respond(``, `No member was mentioned. \nStare at me for what?? Go and rerun the command with the member mentioned this time!`, message.channel)
        return;
      }
        const memberinfoembed = new Discord.MessageEmbed()
        .setColor('#00FF00')
        .setTitle('User Information')
        .setAuthor(mentionedUser.tag)
        .setDescription(`Member ID: ${mentionedUser.id}\n\nAccount creation date: ${mentionedUser.createdAt}\n\nServer join date: ${message.mentions.members.first().joinedAt}`)
        .setThumbnail(mentionedUser.displayAvatarURL())
        .setTimestamp()
        message.channel.send(memberinfoembed)

        if(!userlog[mentionedUser.id]){
          respond(``, `No entries found for this user in the user log.`, message.channel)
          return;
        }

        const embed = new Discord.MessageEmbed()
        .setTitle('User Log')
        userlog[mentionedUser.id].forEach(function (warning, index) {
          embed.addField('Warning: ' + (parseInt(index) + 1), warning)
        });
        message.channel.send(embed)
  }catch(error) {
      respond('Error', 'Something went wrong.\n'+error+`\nMessage: ${message}\nArgs: ${args}\n`, message.channel)
      errorlog(error)
      // Your code broke (Leave untouched in most cases)
      console.error('an error has occured', error);
      }

 
 }}