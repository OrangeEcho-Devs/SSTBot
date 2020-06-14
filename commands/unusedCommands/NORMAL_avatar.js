module.exports = {
  name: 'avatar',
  aliases: ['getavatar'],
  description: 'Gets someones avatar.',
  usage: '<user>',
  cooldown: 0,

	execute(message, args, client) {
    const Discord = require('discord.js');
    
    const fs = require('fs');
    try{
      const member = message.mentions.users.first().user || message.author.user || message.guild.members.cache.get(argarray[1]).user;
    }catch(error){console.log(error)}
    try {
      const prefix = require('../config.json')
      const argarray = message.content.slice(prefix.length+this.name.length).trim().split(/ +/g);
      console.log(member)
      const icon = member.displayAvatarURL({ dynamic: true })
      const name = member.tag
      const AvatarEmbed = new Discord.MessageEmbed()
      .setTitle(name+'\'s Avatar')
      .setThumbnail(`${icon}`)
      message.channel.send(AvatarEmbed)
    }catch(error) {
      respond('Error', 'Something went wrong.\n'+error+`\nMessage: ${message}\nArgs: ${args}\n`, message.channel)
      errorlog(error)
      // Your code broke (Leave untouched in most cases)
      console.error('an error has occured', error);
      }
  }}