module.exports = {
  name: 'delete',
  aliases: ['erase'],
  description: 'Deletes something.',
  usage: '<message / channel> <id / channel mention>',
  cooldown: 0,
  mod:true,
	execute(message, args, client) {
	const reason = args.join(' ')
	const {prefix} = require('../config.json')
    const argarray = message.content.slice(prefix.length).trim().split(/ +/g);
    try {
		if(!argarray[1] ||!argarray[1] == 'message' && !argarray[1] == 'channel' || !argarray[2]){
			throw 'Invalid arguments.'
		}else{
			if(argarray[1] == 'message'){
				respond('', '❗ This feature is currently unavailable.')
				return;
				const channel = message.channel
				const newmessage = channel.messages.fetch(`${argarray[2]}`)
				respond('', '🗑️ Deleting message ID "'+argarray[2]+'".', message.channel)
				setTimeout(function(){ 
					newmessage.delete()
					respond('', '✅ Message ID "'+argarray[2]+'" was deleted.')
				}, 3000);
			} else if(argarray[1] == 'channel'){
				const channelToDelete = message.mentions.channels.first()
				const channelname = channelToDelete.name
				respond('', `🗑️ Deleting ${channelname}...`, message.channel)
				setTimeout(function(){ 
					channelToDelete.delete()
					respond('', `✅ ${channelname} was deleted.`, message.channel)
				}, 3000);
			}
		}
	}catch(error) {
		respond('Error', 'Something went wrong.\n'+error+`\nMessage: ${message}\nArgs: ${args}\n`, message.channel)
		errorlog(error)
		// Your code broke (Leave untouched in most cases)
		console.error('an error has occured', error);
		}
		  
  }}