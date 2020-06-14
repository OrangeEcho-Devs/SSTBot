module.exports = {
  name: 'decancer',
  aliases: ['nick', 'nickname'],
  description: 'Sets the mentioned user\'s nickname.',
  usage: '<member> <new name>',
  cooldown: 0,
  mod:true,
	execute(message, args, client) {	
		const { prefix } = require('../config.json');
		const argarray = message.content.slice(prefix.length).trim().split(/ +/g);
		const userToDecancer = message.mentions.members.first();
		const reason = `Remove cancerous characters from previous name`
		var args = args.filter(arg => !Discord.MessageMentions.USERS_PATTERN.test(arg));
		const text = args.join(' ');
		try{
			message.mentions.members.first().setNickname(text)
		decanceraction(userToDecancer, message.author.tag, reason)
		respond('Decancer',`${message.mentions.members.first()} had their nickname changed to \`${text}\`.`, message.channel)
	}catch(error) {
		respond('Error', 'Something went wrong.\n'+error+`\nMessage: ${message}\nArgs: ${args}\n`, message.channel)
		errorlog(error)
		// Your code broke (Leave untouched in most cases)
		console.error('an error has occured', error);
		}
		  
  }}