module.exports = {
    name: "test",
      execute(message, args, client) {
        try{
      const Discord = require('discord.js');
      const fs = require('fs');
      const arg = message.content.slice('').trim().split(/ +/g); 
        const quiz = require('./quiz.json');
        const modified = arg[1] - 1
        const item = quiz[modified]
        console.log(item)
        respond('', `${item.answer}\n${item.answer_case}\n${item.qid}`, message.channel)
  }catch(error) {
      respond('Error', 'Something went wrong.\n'+error+`\nMessage: ${message}\nArgs: ${args}\n`, message.channel)
      errorlog(error)
      // Your code broke (Leave untouched in most cases)
      console.error('an error has occured', error);
      }
    }
  }