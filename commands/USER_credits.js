module.exports = {
  name: 'credits',
  aliases: ['acknowledgements'],
  description: 'Shows the people who helped on this project.',
  usage: '',
  cooldown: 10,
	execute(message, args, client) {
    const Discord = require('discord.js');
    
    const fs = require('fs');
    try {
    fs.readFile('./credits.txt', (err, data) => {
      if (err) {
        console.error(err)
        const creditsembed = new Discord.MessageEmbed()
        .setColor('#0000ff')
        .setTitle('Acknowledgements')
        .addFields(
          { name: '-', value: 'No acknowledgement information was found.', inline: false },
        )
        .setTimestamp()
        message.channel.send(creditsembed)

        return
      }
      const memberinfoembed = new Discord.MessageEmbed()
      .setColor('#0000ff')
      .setTitle('Acknowledgements')
      .addFields(
        { name: '-', value: data, inline: false },
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