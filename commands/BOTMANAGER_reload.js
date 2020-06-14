module.exports = {
	name: 'reload',
	description: 'Reloads a command',
	aliases: ['fetch'],
	usage: '[command]',
	cooldown: 0,
	botmanager:true,
	mod:true,
	execute(message, args, client) {
		const modcommandName = args[0].toLowerCase();
		const command = message.client.modcommands.get(modcommandName)
			|| message.client.modcommands.find(cmd => cmd.aliases && cmd.aliases.includes(modcommandName));
		
		if (!command) {
			return message.channel.send(`There is no command with name or alias \`${modcommandName}\`, ${message.author}, are you dumb??`);
		}
		
		try{
			delete require.cache[require.resolve(`./${modcommandName}.js`)]
		}catch(error){
		respond('Error', 'Something went wrong.\n'+error+`\nMessage: ${message}\nArgs: ${args}\n`, message.channel)
		errorlog(error)
		}

		try {
			const newCommand = require(`./${modcommandName}.js`);
			message.client.modcommands.set(newCommand.name, newCommand);
		} catch (error) {
			console.log(error);
			message.channel.send(`There was an error while reloading a command \`${modcommandName}\`:\n\`${error.message}\``);
			respond('Error', 'Something went wrong.\n'+error+`\nMessage: ${message}\nArgs: ${args}\n`, message.channel)
			errorlog(error)
			// Your code broke (Leave untouched in most cases)
			console.error('an error has occured', error);
			return
		}
		respond('',`Command \`${modcommandName}\` was reloaded!`,message.channel);
	},
};
