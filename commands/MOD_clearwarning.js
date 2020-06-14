module.exports = {
  name: 'clearwarnings',
  aliases: ['clearwarn', 'clearlog'],
  description: 'Erases punishment log.',
  usage: '<user>',
  cooldown: 0,
  mod:true,
	execute(message, args, client) {
    const fs = require('fs');
    const userToClear = message.mentions.members.first();
    try {
     if (message.author.id == message.mentions.members.first().id){
      respond('',`You can't perform this action on yourself, don't try to kid me.`, message.channel);return;
     }
     //const {ModeratorRoleID} = require('../config.json');
			//const checkmemberforroles = message.mentions.members.first()
			//if (checkmemberforroles.roles.cache.some(role => role.id === `${ModeratorRoleID}`)){
       //respond('',`You can't perform that action on this user.`, message.channel);return;
      //}
      if (fs.existsSync('./logs/' + message.mentions.members.first().id + '-warnings.log')
          &&
          fs.existsSync('./logs/' + message.mentions.members.first().id + '-modwarnings.log')){

        fs.unlink('./logs/' + message.mentions.members.first().id + '-warnings.log',function(error){
          if(error){
            console.log(error);
            respond('Error', 'Something went wrong.\n'+error+`\nMessage: ${message}\nArgs: ${args}\n`, message.channel)
            errorlog(error)
          }
          
        });
        fs.unlink('./logs/' + message.mentions.members.first().id + '-modwarnings.log',function(error){
          if(error){
            console.log(error);
            respond('Error', 'Something went wrong.\n'+error+`\nMessage: ${message}\nArgs: ${args}\n`, message.channel)
            errorlog(error)
          }
        })
        respond('✏️','<@'+message.mentions.members.first().id + '> had their punishment log cleared.', message.channel)
        clearwarnaction(userToClear, message.author.tag)
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
