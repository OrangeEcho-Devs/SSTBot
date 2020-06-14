
module.exports = {
    name: 'useless command :thinking:',
    aliases: ['useless'],
    description: 'Useless command',
    usage: '',
    cooldown: 0,
    mod:false,
      execute(message, args, client) {
      const Discord = require('discord.js');
  
      const fs = require('fs');
      const channel = message.channel
      const reason = args.join(' ')
      channel.send("Useless command, idk why it's here :thinking: ");
      },catch(error) {
          respond('Error', 'Something went wrong.\n'+error+`\nMessage: ${message}\nArgs: ${args}\n`, message.channel)
          errorlog(error)
          // Your code broke (Leave untouched in most cases)
          console.error('an error has occured', error);
          }
  
    }
  