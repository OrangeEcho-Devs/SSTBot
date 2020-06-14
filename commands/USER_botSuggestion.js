module.exports = {
    name: 'suggest',
    aliases: ['botsuggestion', 'suggestion'],
    description: 'Suggests a feature to add to the bot!',
    cooldown: 30,
    usage: '<request>',
      execute(message, args, client) {
      const fs = require('fs');
      const argarray = message.content.slice().trim().split(/ +/g);
      const {
        botSuggestionWebhookID,
        botSuggestionWebhookToken
      } = require('../config.json')
      const text = args.join(' ');
      try {
        if(text == ''){
          respond('', 'Please enter a message to send.', message.channel)
          return 'Message missing.'
        }
        message.delete()
        const icon = message.guild.iconURL()
        if(!botSuggestionWebhookID){throw 'Missing config entry. `botSuggestionWebhookID`'}else{}
        if(!botSuggestionWebhookToken){throw 'Missing config entry. `botSuggestionWebhookToken`'}else{}
        const webhookClient = new Discord.WebhookClient(`${botSuggestionWebhookID}`, `${botSuggestionWebhookToken}`);
        const embed = new Discord.MessageEmbed()

        .setTitle('Suggestion Received')
        .setDescription(text)
        .setFooter(`${message.author.tag} | ${message.author.id}`)
        .setTimestamp()

        const userembed = new Discord.MessageEmbed()
        .setTitle('About User')
        .addField('User Tag', message.author.tag, false)
        .addField('User ID', message.author.id, false)
        .addField('Creation date', message.author.createdAt, true)
        .setFooter(`${message.author.tag} (${message.author.id})`)
        .setThumbnail(message.author.displayAvatarURL())
        .setTimestamp()

        const serverembed = new Discord.MessageEmbed()
        .setTitle('About Server')
        .addField('Server Name', message.guild.name, false)
        .addField('Server ID', message.guild.id, false)
        .addField('Creation date', message.guild.createdAt, true)
        .setThumbnail(`${icon}`)
        .setFooter(`${message.author.tag} (${message.author.id})`)
        .setTimestamp()

      webhookClient.send('', {
        username: 'Bot Suggestion Webhook (Stable)',
        avatarURL: '',
        embeds: [embed],
      });
        respond('Suggestion sent! 📧','Your suggestion was sent to the bot developer.', message.channel)
  }catch(error) {
    respond('Error', 'Something went wrong.\n'+error+`\nMessage: ${message}\nArgs: ${args}\n`, message.channel)
    errorlog(error)
    // Your code broke (Leave untouched in most cases)
    console.error('an error has occured', error);
    }
    }}
