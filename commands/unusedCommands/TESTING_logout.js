module.exports = {
	name: 'logout',
	description: 'Logs out client',
	botmanager:true,
	mod:true,
	execute(message, args, client) {
		try{
		respond('⬅️ Logging out', 'Logging out of client. Bye! :wave:', message.channel)
		client.logout
	}catch(error) {
		respond('Error', 'Something went wrong.\n'+error+`\nMessage: ${message}\nArgs: ${args}\n`, message.channel)
		errorlog(error)
		// Your code broke (Leave untouched in most cases)
		console.error('an error has occured', error);
		}
	}
	
};
