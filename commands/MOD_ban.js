module.exports = {
    name: 'ban',
    description: 'Bans a user.',
    aliases: ['banish'],
	usage: '<user> <reason>',
	cooldown: 0,
	mod:true,
    execute(message, args, client) {
        try {
			if (message.author.id == message.mentions.members.first().id){respond('',`Are you REALLY gonna try and ban **YOURSELF**`, message.channel);return;}
			if (message.mentions.members.first().id == client.user.id){respond(`Not gonna ban myself, thanks`, message.channel);return;}
			const {ModeratorRoleID} = require('../config.json');
			const checkmemberforroles = message.mentions.members.first()
			//if (checkmemberforroles.roles.cache.some(role => role.id === `${ModeratorRoleID}`)){respond('',`You can't perform that action on this user.`, message.channel);return;;return;}
			const user = message.mentions.members.first();
			const userToBan = message.mentions.members.first()
			const userid = message.mentions.members.first().id
			const guild = message.guild
			const authorusername = message.author.username +'#' +message.author.discriminator
			let reasonraw = args.filter(arg => !Discord.MessageMentions.USERS_PATTERN.test(arg));
			var reason = reasonraw.join(' ')
			if(reason == ''){var reason = 'No reason provided.'}
			fs.appendFileSync('./logs/' + userid + '-warnings.log', 'Ban\nReason: ' + reason +'\n\n');
   			fs.appendFileSync('./logs/' + userid + '-modwarnings.log', 'Ban issued by '+ authorusername +'\nReason: ' + reason +'\n\n');
			respond('<:banhammer:713690855818657852> Ban','<@'+userid+'> was banned.\nReason: '+reason, message.channel)
			message.channel.send('Banned. No more idiots fooling around in the server.')
			message.channel.send('https://imgur.com/gallery/O3DHIA5')
			respond('Banned','You were banned from the OrangeEcho server due to: '+ reason+'\n\nThis ban does not expire. ', user)
			user.ban({reason: `${message.author.tag}, ${reason}`})
			banaction(user, message.author.tag, reason)
        	}catch(error) {
				respond('Error', 'Something went wrong.\n'+error+`\nMessage: ${message}\nArgs: ${args}\n`, message.channel)
				errorlog(error)
				// Your code broke (Leave untouched in most cases)
				console.error('an error has occured', error);
				}
    },
};
