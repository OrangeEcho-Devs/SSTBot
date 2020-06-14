
module.exports = {
  name: 'lock',
  aliases: ['lockout'],
  description: 'Locks the channel the command is ran in.',
  usage: '',
  cooldown: 0,
  mod:true,
	execute(message, args, client) {
    const Discord = require('discord.js');

	const fs = require('fs');
	const channel = message.channel
	const reason = args.join(' ')
    try {
	    let previousOverwrites = channel.permissionOverwrites.has(message.channel.guild.id) ? channel.permissionOverwrites.get(message.channel.guild.id) : { json: {}, allow: 0, deny: 0 };
    if (previousOverwrites.json === false) {
      return 'this channel is already locked ya doofus';
    }
    channel.send(`**This channel has been locked down.**\n${reason}`);
    channel.updateOverwrite(message.channel.guild.id, previousOverwrites.allow & ~2048, previousOverwrites.deny | 2048, 'Community', reason)
      .then(() => {
      message.channel.send(`\`${channel.name}\` has been locked down, no more normies`);
      })
		lockchannelaction(message.author.tag, message.channel.name)
	}catch(error) {
		respond('Error', 'Something went wrong.\n'+error+`\nMessage: ${message}\nArgs: ${args}\n`, message.channel)
		errorlog(error)
		// Your code broke (Leave untouched in most cases)
		console.error('an error has occured', error);
		}

  }}
