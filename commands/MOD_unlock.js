
module.exports = {
  name: 'unlock',
  aliases: ['unlockout'],
  description: 'Unlocks the channel the command is ran in.',
  usage: '',
  cooldown: 0,
  mod:true,
	execute(message, args, client) {
      const Discord = require('discord.js');
	const fs = require('fs');
	const channel = message.channel
	const reason = args.join(' ')
    try {
	member.roles.cache.some(role => role.name === 'BotFun');
    channel.updateOverwrite(channel.guild.role, { SEND_MESSAGES: true });
		if(args != ''){respond('🔓', `<#${message.channel.id}> was unlocked.\nReason: `+reason, message.channel)}
		else{respond('🔓', `<#${message.channel.id}> was unlocked.`, message.channel)}
		unlockchannelaction(message.author.tag, message.channel.name)
	}catch(error) {
		respond('Error', 'Something went wrong.\n'+error+`\nMessage: ${message}\nArgs: ${args}\n`, message.channel)
		errorlog(error)
		// Your code broke (Leave untouched in most cases)
		console.error('an error has occured', error);
		}

  }}
