module.exports = {
    name: 'showmissingresponses',
    aliases: ['missingresponses','checkmissingresponses'],
    description: 'Shows the missing responses for sentience mode.',
    usage: '',
    cooldown: 0,
    botmanager:true,
    mod:true,
      execute(message, args, client) {
      const Discord = require('discord.js');
      const fs = require('fs');
      try {
      fs.readFile('./aiModule_MissingInputs.txt', (err, data) => {
        if (err) {
          console.error(err)
          const creditsembed = new Discord.MessageEmbed()
          .setColor('#0000ff')
          .setTitle('There are no missing aiModule Inputs.')
          .addFields(    
          )
          .setTimestamp()
          message.channel.send(creditsembed)
  
          return
        }
        const memberinfoembed = new Discord.MessageEmbed()
        .setColor('#0000ff')
        .setTitle('Missing aiModule Inputs')
        .addFields(
          { name: 'Add them as soon as possible. If not \nyou \naren\'t\nmy\nfather', value: data, inline: false },
        )
        .setTimestamp()
        message.channel.send(memberinfoembed)
      }) }catch(error) {
        respond('Error', 'Something went wrong.\n'+error+`\nMessage: ${message}\nArgs: ${args}\n`, message.channel)
        errorlog(error)
        // Your code broke (Leave untouched in most cases)
        console.error('an error has occured', error);
        }
  
    }}