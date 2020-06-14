module.exports = {
  name: 'mm3.0key',
  aliases: ['mm3.0keygen'],
  description: 'MrsMajor 3.0 keygen',
  usage: '*mm3.0key',
  cooldown: 0,
  mod:false,
  nodelay:true,
	execute(message, args, client) {	
		const { prefix } = require('../config.json');
    const { MessageEmbed } = require('discord.js')
    var number = Math.ceil(Math.random() * 1000)
    const key = message.author.username+number
    const embed = new Discord.MessageEmbed()
    .setTitle('Welcome to the MrsMajor 3.0 keygen')
    .setDescription('Please wait while we generate your key.')
    message.channel.send(embed);
    setTimeout(function(){
      const embed = new Discord.MessageEmbed()
      .setTitle('In Progress...')
      .setDescription('Connecting to rootabx\'s server on Google Cloud Services...')
      message.channel.send(embed);
    }, 5000);
    setTimeout(function(){
      const embed = new Discord.MessageEmbed()
      .setTitle('In Progress...')
      .setDescription('Connected to rootabx\'s server. Finding encryption pattern on `key.txt`...')
      message.channel.send(embed);
    }, 5000);
    setTimeout(function(){
      const embed = new Discord.MessageEmbed()
      .setTitle('In Progress...')
      .setDescription('Encryption pattern found (AES128). Decrypting...')
      message.channel.send(embed);
    }, 5000);
    setTimeout(function(){
      const embed = new Discord.MessageEmbed()
      .setTitle('In Progress...')
      .setDescription('Failed to decrypt keys x1. Retrying...')
      message.channel.send(embed);
    }, 5000);
    setTimeout(function(){
      const embed = new Discord.MessageEmbed()
      .setTitle('In Progress...')
      .setDescription('Failed to decrypt keys x2. Retrying...')
      message.channel.send(embed);
    }, 5000);
    setTimeout(function(){
      const embed = new Discord.MessageEmbed()
      .setTitle('In Progress...')
      .setDescription('Decrypted! Creating a new key...')
      message.channel.send(embed);
    }, 5000);
    setTimeout(function(){
      const embed = new Discord.MessageEmbed()
      .setTitle('In Progress...')
      .setDescription('Created! Reencrypting keys.txt so that rootabx doesn\'t suspect anything...')
      message.channel.send(embed);
    }, 5000);
    setTimeout(function(){
      const embed = new Discord.MessageEmbed()
      .setTitle('Success')
      .setDescription(`Your key has been created successfully. The key is "${key}" . Make sure it has the same capitalisation and spacing, or MrsMajor 3.0 won't accept it and won't unlock!`)
      message.channel.send(embed);
    }, 5000);
    setTimeout(function(){
      const embed = new Discord.MessageEmbed()
      .setTitle('')
      .setDescription('Wanna know how this keygen works? Visit <http://orangegroup.ml/mm30keygen> . If this link didn\'t work for you, use this one: <https://tinyurl.com/2fcpre6>')
      message.channel.send(embed);
    }, 5000);
    setTimeout(function(){
      const embed = new Discord.MessageEmbed()
      .setTitle('')
      .setDescription('Alternatively you can steal every single key I extracted. I compiled all the keys into an audio file. Listen to it and you can hear each and every single person\'s keys.')
      message.channel.send(embed);
      message.channel.send({
        files: ['./Keys.mp3']
      })
    }, 5000);
  }}