module.exports = {
  name: 'countdown',
  description: 'Special: countdown to special event',
  usage: '',
  cooldown: 0,
	execute(message, args, client) {
    const fs = require('fs');
    try {
      var today = new Date();
      var date = today.getMonth()+1+'-'+(today.getDate())+'-'+today.getFullYear();
      var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

      if(date);
    }catch(error) {
      respond('Error', 'Something went wrong.\n'+error+`\nMessage: ${message}\nArgs: ${args}\n`, message.channel)
      errorlog(error)
      // Your code broke (Leave untouched in most cases)
      console.error('an error has occured', error);
      }
  }}