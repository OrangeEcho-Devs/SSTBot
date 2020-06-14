module.exports = {
  name: 'recommendation',
  aliases: ['none'],
  description: 'Sends a recommendation.',
  usage: '<rec number>',
  cooldown: 5,
  disable:false,
	execute(message, args, client) {
    const Discord = require('discord.js');
    
	const fs = require('fs');
	const { prefix, token } = require('../config.json');
	const argarray = message.content.slice(prefix.length).trim().split(/ +/g);
	const rulenumber = argarray[1]
	//loading rules, thanks to 🍗 for helping me add the below part
	var entry = rulenumber; // This is the argument of the command ".load 1"
	var dict = require("../rec.json"); // The JSON data to load from
	var result = dict['Recommendation'+argarray[1]]; // The thing that was loaded
	if(`${result}` == 'undefined'){respond('','Please make sure you entered a valid recommendation number.',message.channel);return;}
		try {
		const RuleEmbed = new Discord.MessageEmbed()
		.setTitle('About Recommendation '+argarray[1])
		.setDescription(`${result}`)
		.setTimestamp()
		message.channel.send(RuleEmbed);
		return;
	}catch(error) {
		respond('Error', 'Something went wrong.\n'+error+`\nMessage: ${message}\nArgs: ${args}\n`, message.channel)
		errorlog(error)
		// Your code broke (Leave untouched in most cases)
		console.error('an error has occured', error);
		}


		  
  }}