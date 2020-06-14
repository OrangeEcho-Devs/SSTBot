module.exports = {
	name: 'updatenews',
	description: 'Updates news.json',
	usage: '',
	cooldown: 0,
	botmanager:true,
	mod:true,
	execute(message, args, client) {
		let request = require(`request`);
		let fs = require(`fs`);
		try{
			if (message.attachments.size != '0'){
				if(message.attachments.first().name != 'news.json'){
					const { MessageEmbed } = require('discord.js')
					const updatingNews = new Discord.MessageEmbed()
					updatingNews.setTitle('📥 Update News')
					updatingNews.setDescription('Invalid file given. Please make sure to only give news.json.')
					message.channel.send(updatingNews)
					return
				}
    			request.get(message.attachments.first().url)
    		    .on('error', console.error)
      			.pipe(fs.createWriteStream('./files/news.json'));//The "Img-${Date.now}" Guarantees Unique file names.
						const { MessageEmbed } = require('discord.js')
						const updatingNews = new Discord.MessageEmbed()
						updatingNews.setTitle('📥 Update News')
						updatingNews.setDescription('News was updated.')
						message.channel.send(updatingNews)
						delete require.cache[require.resolve(`../files/news.json`)]
			}else{
				const { MessageEmbed } = require('discord.js')
				const updatingNews = new Discord.MessageEmbed()
				updatingNews.setTitle('📥 Update News')
				updatingNews.setDescription('Please provide updated news JSON.')
				message.channel.send(updatingNews)
			}
	}catch(error) {
		respond('Error', 'Something went wrong.\n'+error+`\nMessage: ${message}\nArgs: ${args}\n`, message.channel)
		errorlog(error)
		// Your code broke (Leave untouched in most cases)
		console.error('an error has occured', error);
		}
	}
	
};