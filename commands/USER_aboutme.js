module.exports = {
  name: 'aboutme',
  aliases: ['myinfo'],
  description: 'Gets info about you',
	execute(message, args, client) {
    const Discord = require('discord.js');
    const fs = require('fs');
    try {
      const taggeduser = message.author.id
      const taggeduserobject = message.author
      fs.readFile('./logs/'+taggeduser+'-warnings.log', (err, data) => {
        if (err) {
          console.error(err)
          const memberinfoembed = new Discord.MessageEmbed()
          .setColor('#00FF00')
          .setTitle('Member Information')
          .setAuthor(taggeduserobject.username)
          .addFields(
            { name: 'Punishment Log', value: 'No punishment information found. Yay!', inline: false },
          )
          .setTimestamp()
          message.channel.send(memberinfoembed)
  
          return
        }else{
          if(data.length > 1024){
            var data = 'Uh oh, punishment information is too long to send. Please contact a moderator for access to your punishment information.';embed()
          }else{var data= data;embed()}
          function embed(){
            const memberinfoembed = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Member Information')
            .setAuthor(taggeduserobject.username)
            .addFields(
              { name: 'Punishment Log', value: data, inline: false },
            )
            .setTimestamp()
            message.channel.send(memberinfoembed)
          }
        }
  });
  message.author.send({
    files: ['./logs/' + message.author.id + '-messages.log']
});
}catch(error) {
  respond('Error', 'Something went wrong.\n'+error+`\nMessage: ${message}\nArgs: ${args}\n`, message.channel)
  errorlog(error)
  // Your code broke (Leave untouched in most cases)
  console.error('an error has occured', error);
  }
  }}