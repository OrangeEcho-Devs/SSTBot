module.exports = {
  name: 'unmute',
  aliases: ['unquiet'],
  description: 'Unmutes a user.',
  usage: '<user>',
  cooldown: 0,
  mod:true,
	execute(message, args, client) {
    const Discord = require('discord.js');
    
    const fs = require('fs');
    const {MuteRoleID} = require('../config.json');
    try {
      if (message.author.id == message.mentions.members.first().id){respond('',`Since you can talk, you aren't muted isn't that obvious???.`, message.channel);return;}
      const {ModeratorRoleID} = require('../config.json');
			const checkmemberforroles = message.mentions.members.first()
			if (checkmemberforroles.roles.cache.some(role => role.id === `${ModeratorRoleID}`)){respond('',`You can't perform that action on this user.`, message.channel);return;;return;}
    const reason = args.join(' ')
    const taggeduser = message.mentions.users.first().id
    const guild = message.guild
    const role = guild.roles.cache.find(role => role.id === `${MuteRoleID}`);
    const member = message.mentions.members.first();
   member.roles.remove(role);
    respond('🔈 Unmuted','<@'+ taggeduser +'> was unmuted.',message.channel);
    unmuteaction(member, message.author.tag, reason)
  }catch(error) {
    respond('Error', 'Something went wrong.\n'+error+`\nMessage: ${message}\nArgs: ${args}\n`, message.channel)
    errorlog(error)
    // Your code broke (Leave untouched in most cases)
    console.error('an error has occured', error);
    }
  }}