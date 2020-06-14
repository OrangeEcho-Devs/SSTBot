module.exports = {
	name: 'forceshutdown',
	aliases: ['fshutdown', 'turnoff', 'forceoff', 'forceturnoff', 'off'],
	description: 'Forces bot to shutdown. Can\'t be reactivated via command',
	botmanager:true,
	mod:true,
	execute(message, args, client) {
		try{
		const fs = require('fs');
		fs.writeFileSync('./shutdown.flag')
		const { MessageEmbed } = require('discord.js')
		const RestartedEmbed = new Discord.MessageEmbed()
		RestartedEmbed.setTitle('✅ Force Shutdown')
		RestartedEmbed.setDescription('Bot has been forced to shutdown. To reactivate, delete the `shutdown.flag` file.')
		message.channel.send(RestartedEmbed)
		setTimeout(function(){
			process.exit()
		}, 2000);
	}catch(error) {
		respond('Error', 'Something went wrong.\n'+error+`\nMessage: ${message}\nArgs: ${args}\n`, message.channel)
		errorlog(error)
		// Your code broke (Leave untouched in most cases)
		console.error('an error has occured', error);
		}
	}

};
