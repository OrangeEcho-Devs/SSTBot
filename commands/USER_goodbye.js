module.exports = {
    name: 'goodbye',
    aliases: ['bye'],
    description: 'Says goodbye. What else would it do? :joy:',
    usage: 'N/A',
    cooldown: 0,
      execute(message, args, client) {
      const Discord = require('discord.js');
      const info = require('../config.json')
      const fs = require('fs');
      try {
        const reason = args.join(' ')
      /*if (message.author.id === info.TommyOwnerID) {
      respond('','Goodbye, <@'+ message.author.id+'>! :wave: I hope to see my game creator again! 🙂\nRemember, say hi to Stephanie for me!',message.channel);
      }else */if (message.author.id === info.OwnerID) {
      respond('','Goodbye, <@'+ message.author.id+">! :wave: I hope to see my creator again! 🙂\n*please fix me please fix me I don't want to be sentient*",message.channel);
      /*}else if (message.author.id === info.StephanieID) {
      respond('','Goodbye, <@'+ message.author.id+'>! :wave: I hope to see you again! 🙂\nRemember, say hi to Tommy for me! 😳',message.channel);
      */}else if (message.member.roles.cache.some(role => role.id === info.ModeratorRoleID)) {
      respond('','Goodbye, <@'+ message.author.id+'>! :wave: I hope to see you moderators again! 🙂',message.channel);
      }else if (message.member.roles.cache.some(role => role.id === info.DeveloperRoleID)) {
      respond('','Goodbye, <@'+ message.author.id+'>! :wave: I hope to see you developers again! 🙂',message.channel);
      }else if (message.member.roles.cache.some(role => role.id === info.BotManagerRoleID)) {
      respond('','Goodbye <@'+ message.author.id+'>! :wave: I hope to see my managers again! 🙂',message.channel);
      }else{respond('','Goodbye, <@'+ message.author.id+'>! :wave: I hope to see you again!', message.channel);}
    }catch(error) {
      respond('Error', 'Something went wrong.\n'+error+`\nMessage: ${message}\nArgs: ${args}\n`, message.channel)
      errorlog(error)
      // Your code broke (Leave untouched in most cases)
      console.error('an error has occured', error);
      }
    }}