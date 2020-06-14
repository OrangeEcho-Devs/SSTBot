module.exports = {
  name: 'idmemberinfo',
  aliases: ['memberinfoid'],
  description: 'Gets info about ID number mentioned',
  usage: '<id>',
  cooldown: 0,
  mod:true,
	execute(message, args, client) {
    const Discord = require('discord.js');
    const fs = require('fs');
    const {prefix} = require('../config.json')
    const argarray = message.content.slice(prefix.length).trim().split(/ +/g);
    try{
      if(argarray[2] == '--raw'){
        message.channel.send({
        files: ['./logs/' + argarray[1] + '-modwarnings.log']
    });
    message.channel.send({
      files: ['./logs/' + argarray[1] + '-warnings.log']
  });
    return;
      }
      
    fs.readFile('./logs/'+argarray[1]+'-modwarnings.log', (err, data) => {
      if (err || data.toString() == '') {
        console.error(err)
        const memberinfoembed = new Discord.MessageEmbed()
        .setColor('#0000ff')
        .setTitle('Member Information')
        .addFields(
          { name: 'Punishment Log', value: 'No punishment information found.', inline: false },
          { name: 'Other information', value: 'Member ID: '+ args , inline: false },
        )
        .setTimestamp()
        message.channel.send(memberinfoembed)

        return
      }
      if(data.length > 1024){
        var data = 'Punishment information is too long to send.'
      }else{var data= data}
      const memberinfoembed = new Discord.MessageEmbed()
      .setColor('#0000ff')
      .setTitle('Member Information')
      .addFields(
        { name: 'Punishment Log', value: data, inline: false },
        { name: 'Other information', value: 'Member ID: '+ args , inline: false },
      )
      .setTimestamp()
      message.channel.send(memberinfoembed)
    }) 
  }catch(error) {
    respond('Error', 'Something went wrong.\n'+error+`\nMessage: ${message}\nArgs: ${args}\n`, message.channel)
    errorlog(error)
    // Your code broke (Leave untouched in most cases)
    console.error('an error has occured', error);
    }
}}