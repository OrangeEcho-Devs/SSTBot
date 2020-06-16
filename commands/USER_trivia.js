module.exports = {
  name: 'trivia',
  aliases: ['factgame', 'triviagame'],
  description: '**This is a game command.**\nLearn something new with OrangeEcho Stable.\n(Trivia will only include history of the Apple company, the Orange Management Corporation channel, the server and its users for now.)\nTo answer a question, use .answer (question ID) (your answer).',
  usage: '',
  cooldown: 0,
  hidden: true,
	execute(message, args, client) {
    const fs = require('fs');
    const Discord = require('discord.js')
    const msg = message
    try {
      if(args[0] == 'about' || args[0] == 'info'){
        const quiz = require('./quiz.json');
        var item = quiz[0];
        respond('Trivia', `__**About Trivia**__\nVersion: ${item.version}\nAuthor: ${item.author}`, message.channel, '', `QID: -`);
        return;
      }
    //Pick a question
    const quiz = require('./quiz.json');
    var item = quiz[Math.floor(Math.random() * quiz.length)];
    if(item.ignore && item.ignore == true){
      var item = quiz[Math.floor(Math.random() * quiz.length)];
    }
    const ans = item.answer
    const filter = response => {
      console.log(response)
      return item.answer
    }
    console.log(item)
        respond('Trivia',`<@${message.author.id}>'s question:\n` + item.question+ '\n' + item.choice1 + '\n' + item.choice2 +'\n' + item.choice3 + '\n' + item.choice4 + '\n' + "Question ID: " + item.qid + '\n' + `**use \`*answer (question ID) (your answer)\` to answer the question**\nExample: .answer 2 C`, message.channel) 
  }catch(error) {
    respond('Error', 'Something went wrong.\n'+error+`\nMessage: ${message}\nArgs: ${args}\n`, message.channel)
    errorlog(error)
    // Your code broke (Leave untouched in most cases)
    console.error('an error has occured', error);
    }
  }
}