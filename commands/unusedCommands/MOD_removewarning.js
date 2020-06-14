module.exports = {
  name: 'removewarning',
  aliases: ['delwarn', 'warndel', 'removewarn'],
  description: 'Erases part of punishment log.',
  usage: '<user> <entry number>',
  cooldown: 0,
  mod:true,
	execute(message, args, client) {
    const {prefix} = require('../config.json')
    const argarray = message.content.slice(prefix.length).trim().split(/ +/g);
    var entrytoremove = args.join(' ')
    var entrytoremove = entrytoremove.replace(argarray[1], '')
    const fs = require('fs');
    try {
      if (message.author.id == message.mentions.members.first().id){
        respond('',`You can't perform this action on yourself.`, message.channel);return;
      }
      const {ModeratorRoleID} = require('../info.json');
			const checkmemberforroles = message.mentions.members.first()
			if (checkmemberforroles.roles.cache.some(role => role.id === `${ModeratorRoleID}`)){
        respond('',`You can't perform that action on this user.`, message.channel);return;
      }
      if (fs.existsSync('./logs/' + message.mentions.members.first().id + '-warnings.log')
          &&
          fs.existsSync('./logs/' + message.mentions.members.first().id + '-modwarnings.log')){

       fs.readFile('./logs/' + message.mentions.members.first().id + '-warnings.log', (err, data) => {
          // break the textblock into an array of lines
          var lines = data.toString().split('\n');
          // remove one line, starting at the first position
          lines.splice(argarray[2],2);
          // join the array back into a single string
          var newData = lines.join('\n');
          fs.writeFileSync('./logs/' + message.mentions.members.first().id + '-warnings.log', newData)
        })

      fs.readFile('./logs/' + message.mentions.members.first().id + '-modwarnings.log', (err, data) => {
            // break the textblock into an array of lines
            var lines = data.toString().split('\n');
            // remove one line, starting at the first position
            lines.splice(argarray[2],2);
            // join the array back into a single string
            var newData = lines.join('\n');
          fs.writeFileSync('./logs/' + message.mentions.members.first().id + '-modwarnings.log', newData)
        })

        respond('✏️','<@'+message.mentions.members.first().id + '> had an entry in their punishment log cleared.', message.channel)
        removewarningaction(this.name, message.author.tag, message.channel.name, message.content)
      }else{
        respond('❌', 'Unable to find punishment information for this user.', message.channel)
      }
      }catch(error) {
        respond('Error', 'Something went wrong.\n'+error+`\nMessage: ${message}\nArgs: ${args}\n`, message.channel)
        errorlog(error)
        // Your code broke (Leave untouched in most cases)
        console.error('an error has occured', error);
        }
    
  }}