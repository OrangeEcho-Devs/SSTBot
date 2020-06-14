module.exports = {
  name: 'coinflip',
  aliases: ['flipcoin'],
  description: 'Flips a coin.',
  usage: '',
  cooldown: 0,
	execute(message, args, client) {
    const Discord = require('discord.js');
    const fs = require('fs');
    try {
    var number = Math.ceil(Math.random() * 10)
    if (number > 5){
      respond('','Heads.', message.channel)
      return;
    }else {
      respond('','Tails.', message.channel)
      return;
    }
}catch(error) {
    respond('Error', 'Something went wrong.\n'+error+`\nMessage: ${message}\nArgs: ${args}\n`, message.channel)
    errorlog(error)
    // Your code broke (Leave untouched in most cases)
    console.error('an error has occured', error);
    }
  }}