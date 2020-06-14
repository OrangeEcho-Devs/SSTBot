module.exports = {
  name: 'status',
  aliases: ['botstatus'],
  description: 'Shows the bot action log',
  usage: '<text>',
  cooldown: 0,
  botmanager:true,
  mod:true,
	execute(message, args, client) {
    fs.readFile('./bot.log', function(err, data){
    //var BotLogEmbed = new Discord.MessageEmbed()
    //BotLogEmbed.setTitle('Bot Status Log')
    //BotLogEmbed.setDescription(data)
    //message.channel.send(BotLogEmbed)
  })
      if(errorcount){
        var color = 'FF0000'
        var TotalErrorsEmbed = new Discord.MessageEmbed()
          TotalErrorsEmbed.setColor(color)
          TotalErrorsEmbed.setTitle('Bot Health')
          TotalErrorsEmbed.setDescription(`A total of ${errorcount} errors have occurred.`)
        message.channel.send(TotalErrorsEmbed)
      }else{
        var color = '00FF00'
        var TotalErrorsEmbed = new Discord.MessageEmbed()
          TotalErrorsEmbed.setColor(color)
          TotalErrorsEmbed.setTitle('Bot Health')
          TotalErrorsEmbed.setDescription(`A total of ${errorcount} errors have occurred.`)
        message.channel.send(TotalErrorsEmbed)
      }
      try {
  }catch(error) {
    respond('Error', 'Something went wrong.\n'+error+`\nMessage: ${message}\nArgs: ${args}\n`, message.channel)
    errorlog(error)
    // Your code broke (Leave untouched in most cases)
    console.error('an error has occured', error);
    }
    }}