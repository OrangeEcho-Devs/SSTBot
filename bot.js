//const token = 'nope'
console.log('The bot is currently booting up. Please wait a moment.')
fs = require('fs');
Discord = require('discord.js');
const eco = require("discord-economy");
const client = new Discord.Client();
const urban = require('relevant-urban');
let userData = JSON.parse(fs.readFileSync('./userData.json', 'utf8'));
client.commands = new Discord.Collection();
client.modcommands = new Discord.Collection();
const cooldowns = new Discord.Collection();
const {
	PREFIX = '*',
	BotManagerRoleID,
	ModeratorRoleID,
	OwnerID,
	MemberRoleID,
	UserLog,
	ModLog,
	BotLog,
	ProcessEndOnError,
	AssignMemberRoleOnJoin,
	CrashNotify,
	DMCommand, 
	EnableIncomingMailCommand,
	DisableIncomingMailCommand,
	BlacklistCommand,
	WhitelistCommand,
	highTrafficCommand, 
	MessageLog, 
	RequirePermissons, 
	StaffRoleID,
	NoPermReply, 
	DMRespondMessage
} = require('./config.json');
const {
	MessageEmbed
} = require('discord.js')

version = '6.4.0'
codename = 'Stable (SST Edition)'
footertext = 'botOS '+ version +'\nCodename: '+ codename
errorcount = 0
var safemode = false

if (!fs.existsSync('./restrictions.json'))console.log('restrictions.json is missing.')

require('events').EventEmitter.defaultMaxListeners = 20;

if (fs.existsSync(`./errorcount.txt`)){
fs.readFile('./errorcount.txt', function(err, data){
	if (fs.existsSync(`./safe_mode.flag`)){
		console.log('WARNING: SAFE MODE ACTIVE')
	}
	console.log(err)
	console.log(data)
	console.log(Number(data.toString().replace('<', '').replace('>', '').replace('Buffer', '')))
	if(err){return}else{
		if(data)
		if(data > 3){
			var safemode = true
			fs.writeFileSync('./safe_mode.flag', (error) => {
				if(error)console.log(error)
			});
			console.log('WARNING: SAFE MODE ACTIVE')
		}
	}
})
}

//Bot ready
client.once('ready', () => {
	client.user.setPresence({ activity: { name: 'with the members of OrangeEcho' }, type: 'WATCHING', status: 'idle' })
	.catch(console.error);
	console.log('botOS '+version)
	console.log('Codename '+codename)
	console.log('The bot has booted up successfully.');
	if (fs.existsSync(`./errorcount.txt`)){
		fs.readFile('./errorcount.txt', function(err, data){
			if(err){return}else{
				if(data)
				if (fs.existsSync(`./safe_mode.flag`)){
					safemode = true
					console.log('Safe mode found')
			var titleofstartup = 'Bot Started - Safe Mode Activated'
			var descriptionofstartup = 'The bot was unable to start normally multiple times, so it entered safe mode. To deactivate safe mode, restart using the restart command, delete these files (`errorcount.txt`, `safe_mode.flag`, `runstate.txt`), or use the exitsafemode command.'
			const StartupEmbed = new Discord.MessageEmbed()
			.setColor('#ff0000')
			.setTitle(titleofstartup)
			.setDescription(descriptionofstartup)
			.setTimestamp()
			.setFooter(footertext)
			modlog = client.channels.cache.get(`${BotLog}`);
			modlog.send(StartupEmbed);
			return;
				}
			}
		})
		}
		const path = './runstate.txt'
		if (fs.existsSync(path) && CrashNotify == true) {
			client.emit("StartupIssue")
		}else
		if(fs.existsSync(path) && CrashNotify != true){
			client.emit('StartupPassed')
		}
		else{
		  client.emit('StartupPassed')
		}
	})
			

//Checks for shutdown flag
if (fs.existsSync(`./shutdown.flag`)){
	console.log('`shutdown.flag` found. Shutting down.')
	process.exit()
}else{}

//Checks for old configs and informs that it needs to be changed
if (fs.existsSync(`./info.json`)){
	console.log('WARNING: `info.json` found. Please move entries to `config.json`. Exiting.')
	process.exit()
}else{}
if (fs.existsSync(`./strings.json`)){
	console.log('NOTICE: `strings.json` found. This file is no longer used and may be deleted.')
}else{}

 respond = function (title, content, sendto, color, footer, imageurl){
	 //Title, Content, Where to send, Embed color, Footer, Image URL
	var RespondEmbed = new Discord.MessageEmbed()
		RespondEmbed.setTitle(title)
		RespondEmbed.setDescription(content)
		if(!sendto || sendto == ''){
			throw 'Missing Arguments.'
		}else{
			if(color && !color == ''){
			RespondEmbed.setColor(color)
		}
		if(footer && !footer == ''){
			RespondEmbed.setFooter(footer)
		}
		if(imageurl && !imageurl == ''){
			RespondEmbed.setImage(imageurl)
		}
		sendto.send(RespondEmbed)
		}

}
//Modmail start
//Makes required files if not found
client.on('ready', () => {
	if (!fs.existsSync('./blacklist.txt')) {
		fs.writeFileSync('./blacklist.txt', 'dummy\n')
}
if (!fs.existsSync('./allow-incoming.config')) {
			fs.writeFileSync('./allow-incoming.config', 'allow')
	}
})
//Error
client.on('error', error => {
	console.error('an error has occured', error);
});

//Check for direct messages
client.on('message', message => {
	try{
	if (message.author.bot) return;
	if (message.channel.type == "dm") {
		if (message.content.startsWith(DMCommand)) return;
		const messagecontent = message.content;
		const channel = client.channels.cache.get(MessageLog);
		if (message.content == ''){
			message.channel.send('Do you expect me to send an empty message to the mods???');
			return
	}
	
	//Checks if on blacklist
	fs.readFile('./blacklist.txt', function(err, data){
		const blacklistdata = data
		if(data && data.toString().includes(message.author.id)){
			const MessageIncomingRejectedBlacklisted = new Discord.MessageEmbed()
				.setColor('ff0000')
				.setTitle('Message Rejected')
				.setDescription(`Heck, you seem to be blacklisted. Try again later or contact mods`)
				.addFields(
					{ name: 'Message ',
					value: message.content,
					inline: false },
					)
				.setTimestamp()
				.setFooter('Mod Mail | Version '+version)
			message.channel.send(MessageIncomingRejectedBlacklisted);
			return;
		}
	//Checks if Mod Mail is enabled.
	fs.readFile('./allow-incoming.config', function(err, data){
		if(err)console.log(err)
	
		if (data == 'reject'){
		const MessageIncomingRejected = new Discord.MessageEmbed()
			.setColor('ff0000')
			.setTitle('Message Rejected')
			.setDescription('Sorry, "'+ channel.guild.name+ '" is currently not accepting Mod Mail at the moment. Please try again later.')
			.addFields(
				{ name: 'Message ',
				value: message.content,
				inline: false },
				)
				.setTimestamp()
				.setFooter('Mod Mail | Version '+version)
		message.channel.send(MessageIncomingRejected);return;}
		//Manages requirements
		var today = new Date();
		var date = today.getMonth()+1+'-'+(today.getDate())+'-'+today.getFullYear();
		var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
		global.dateTime = date+' '+time;
		if (message.content == ''){
				message.channel.send('Do you expect me to send an empty message to the mods???');
				return
			}
		if(message.content.length > '1024'){
				message.channel.send('Woah there, too spicy, please make sure your message is less than 1025 characters');
				setTimeout (function(){
				message.channel.send('I have poor memory, please don\'t stress me out by sending so many messages');
				}, 2000)
				return
			}
			//Checks before sending
			message.channel.send('Are you sure you want to send your message? If you\'re gonna spam the mods forget it');
			setTimeout (function(){
			message.react('✅').then(() => message.react('❌'));
			}, 500)

	const filter = (reaction, user) => {
	return ['✅', '❌'].includes(reaction.emoji.name) && user.id === message.author.id;
	};

	message.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
	.then(collected => {
		const reaction = collected.first();

		if (reaction.emoji.name === '✅') {
			const MessageSentEmbed = new Discord.MessageEmbed()
			.setColor('008000')
			.setTitle('Message Sent')
			.setDescription('Your message was sent to the "'+ channel.guild.name+ '" server. '+DMRespondMessage)
			.addFields(
				
				{ name: 'Message ',
				value: messagecontent,inline: false },
				)
				.setTimestamp()
				.setFooter('Mod Mail | Version '+version)
			message.channel.send(MessageSentEmbed);
		//Checks if mods are busy
		fs.readFile('./busy.txt', function(err, data){
				setTimeout(function(){
					if(data && data.toString().includes('true')){
					const DelayEmbed = new Discord.MessageEmbed()
					DelayEmbed.setTitle('Notice from server')
					DelayEmbed.setColor('ffff00')
					DelayEmbed.setDescription(`Hello <@${message.author.id}>, this is an automated message to say that you might have a delay in response as the mods _might_ be busy (or are simply slacking). Sorry for the inconvenience.`)
					DelayEmbed.setTimestamp()
					DelayEmbed.setFooter('Mod Mail | Version '+version)
				message.channel.send(DelayEmbed);
				}
			}, 2000)	
		})

				 
			const MessageReceivedEmbed = new Discord.MessageEmbed()
				.setTitle('Message Received')
				.setDescription(`A message was received.`)
				.addFields(
					
					{ name: 'Sender', value: `<@${message.author.id}>`, inline: false },
					{ name: 'Sender Tag', value: message.author.tag, inline: false },
					{ name: 'Sender ID', value: message.author.id, inline: false },
					{ name: 'Message ', value: messagecontent, inline: false },
				)
				.setTimestamp()
				.setFooter('Mod Mail | Version '+version)
				channel.send(MessageReceivedEmbed);

			if (message.attachments.size != '0'){
				channel.send("Attachment was found. ", { files: [`${message.attachments.first().url}`] });
			}
			return;
		} else {
			message.reply('Message was cancelled. Sad.');
			return;
		}
		}).catch(collected => {
			message.reply('You didn\'t respond in time...??');
			return;
		});
		})})
	}
	}catch(err){console.log(err);return}
})

//Reply
client.on('message', message => {
	if (message.content.startsWith(`${PREFIX}${DMCommand}`)){
	if (message.author.bot)return;
	if (message.channel.type == 'dm')return;
	if(RequirePermissons == true){
		if (message.member.roles.cache.some(role => role.id === `${StaffRoleID}`)){
		}else{message.reply(NoPermReply);return;}
	}
	console.log('Not DMs')
		
	console.log('Command detected')
	const args = message.content.slice((PREFIX+DMCommand).length).split(/ +/);
	console.log(args)
	args.join(' ')
	const mentionedmemnber = message.mentions.members.first()
		const newargs = args.filter(arg => !Discord.MessageMentions.USERS_PATTERN.test(arg));
		const reply = newargs.join (' ')
		if(reply.length > '1024'){
			message.channel.send('Woah there, too spicy, please make sure your message is less than 1025 characters');
			setTimeout (function(){
			message.channel.send('I have poor memory, please don\'t stress me out by sending so many messages');
			}, 2000)
			return
		}else{
			
		}
		const ReplyReceived = new Discord.MessageEmbed()
			.setTitle('Reply Received')
			.setDescription(`You have received a reply.`)
			.addFields(
				{ name: 'Message ', 
					value: reply, 
					inline: false },
				)
				.setTimestamp()
				.setFooter('Mod Mail | Version '+version)
				try{
					mentionedmemnber.send(ReplyReceived).catch(err => {message.channel.send('Something went wrong and I was unable to DM `'+mentionedmemnber.user.tag+'`. Please try again. If it fails again that guy was probably stupid to close his DMs to me');return})
					message.channel.send('Direct message was sent to `'+mentionedmemnber.user.tag+'`.\nMessage: '+reply)
				}catch(err){
					message.channel.send('Something went wrong and I was unable to DM `'+mentionedmemnber.user.tag+'`. Please try again. If it fails again that guy was probably stupid to close his DMs to me');return;
			}
	}
})

//Disable Incoming
client.on('message', message => {
	if (message.content.startsWith(`${PREFIX}${DisableIncomingMailCommand}`)){
		if (message.author.bot)return;
		if (message.channel.type == 'dm')return;
		if(RequirePermissons == true){
		if (message.member.roles.cache.some(role => role.id === `${StaffRoleID}`)){

		}else{message.reply(NoPermReply);return;}
	}
		fs.writeFileSync('./allow-incoming.config', 'reject')
		message.channel.send('Mod Mail is now disabled.')
		
}})

//Allow Incoming
	client.on('message', message => {
	if (message.content.startsWith(`${PREFIX}${EnableIncomingMailCommand}`)){
		if (message.author.bot)return;
		if (message.channel.type == 'dm')return;
		if(RequirePermissons == true){
		if (message.member.roles.cache.some(role => role.id === `${StaffRoleID}`)){

		}else{message.reply(NoPermReply);return;}
	}
		fs.writeFileSync('./allow-incoming.config', 'allow')
		message.channel.send('Mod Mail is now enabled.')
		
}})

//Add to blacklist
client.on('message', message => {
	if (message.content.startsWith(`${PREFIX}${BlacklistCommand}`)){
		if (message.author.bot)return;
		if (message.channel.type == 'dm')return;
		if(RequirePermissons == true){
		if (message.member.roles.cache.some(role => role.id === `${StaffRoleID}`)){

		}else{message.reply(NoPermReply);return;}
	}
	fs.readFile('./blacklist.txt', function(err, data){
		if(data.includes (message.mentions.members.first().id)){message.channel.send(`This user is already on the blacklist. How do you expect me to blacklist someone who's already blacklisted?!`);return;}else{
		fs.appendFile('./blacklist.txt', `${message.mentions.members.first().id}\n`, function(err,){})
		message.channel.send(`<@${message.mentions.members.first().id}> (${message.mentions.members.first().id}) was blacklisted of using <@${client.user.id}>. Peace.`)
		}
	})
}})

//Remove from blacklist
client.on('message', message => {
	if (message.content.startsWith(`${PREFIX}${WhitelistCommand}`)){
		if (message.author.bot)return;
		if (message.channel.type == 'dm')return;
		if(RequirePermissons == true){
		if (message.member.roles.cache.some(role => role.id === `${StaffRoleID}`)){

		}else{message.reply(NoPermReply);return;}}
	fs.readFile('./blacklist.txt', function(err, data){
		var data = fs.readFileSync('./blacklist.txt', 'utf-8');
		if(!data.includes(message.mentions.members.first().id)){message.channel.send('User not found on the blacklist.');return}else{message.channel.send('User is now whitelisted.');}
		var valuetoremove = message.mentions.members.first().id;
		var newValue = data.replace((valuetoremove), '');
		fs.writeFileSync('./blacklist.txt', newValue, 'utf-8');
	})}
})
//Command: Reply that there might be a delay
client.on('message', message => {
	if (message.content.startsWith(`${PREFIX}${highTrafficCommand}`)){
const args = message.content.slice((PREFIX+highTrafficCommand).length).split(/ +/);
	console.log(args)
	args.join(' ')
	const mentionedmemnber = message.mentions.members.first()
		const newargs = args.filter(arg => !Discord.MessageMentions.USERS_PATTERN.test(arg));
		const reply = newargs.join (' ')
		const BusyMommentEmbed = new Discord.MessageEmbed()
			BusyMommentEmbed.setTitle('Notice from server')
			BusyMommentEmbed.setColor('ffff00')
			if(reply == ''){
				BusyMommentEmbed.setDescription(`Hello <@${mentionedmemnber.id}>, please be aware that you may have a delay in response.\n\nReason: No reason provided.`)
			}else{
				BusyMommentEmbed.setDescription(`Hello <@${mentionedmemnber.id}>, please be aware that you may have a delay in response.\n\nReason: ${reply}`)
			}
			BusyMommentEmbed.setTimestamp()
			BusyMommentEmbed.setFooter('Mod Mail | Version '+version)
				try{
					mentionedmemnber.send(BusyMommentEmbed);
					console.log('Attempted to send.')}catch(err){console.log(err);message.channel.send('Something went wrong.')}
					message.channel.send('Busy reply sent to `'+mentionedmemnber.user.tag+'`.')
		}
})
//Modmail end
//Default modaction 
modaction = function (RanCommand, RanBy, RanIn, FullCommand){
	const ModReportEmbed = new Discord.MessageEmbed()
		ModReportEmbed.setColor('#F3ECEC')
		ModReportEmbed.setTitle('Mod Action')
		ModReportEmbed.setDescription(`A moderation action has occurred.`)
		ModReportEmbed.addFields(
			{ name: 'Command', value: `${RanCommand}`, inline: false },
			{ name: 'Responsible Moderator', value: `${RanBy}`, inline: false },
			{ name: 'Channel', value: `${RanIn}`, inline: false }
		)
		ModReportEmbed.setTimestamp()
		const modlogchannel = client.channels.cache.get(`${ModLog}`);
		modlogchannel.send(ModReportEmbed)
}
//Decancer
decanceraction = function (userToDecancer, RanBy, RanIn){
	const ModReportEmbed = new Discord.MessageEmbed()
		ModReportEmbed.setColor('#98DCE8')
		ModReportEmbed.setTitle('Decancer')
		ModReportEmbed.setDescription(`Remove cancerous characters from nickname`)
		ModReportEmbed.addFields(
			{ name: 'Offender', value: `${userToDecancer}`, inline: false },
			{ name: 'Responsible Moderator', value: `${RanBy}`, inline: false },
			{ name: 'Reason', value: `Remove cancerous characters from previous nickname`, inline: false }
		)
		ModReportEmbed.setTimestamp()
		const modlogchannel = client.channels.cache.get(`${ModLog}`);
		modlogchannel.send(ModReportEmbed)
}

//Ban
banaction = function (user, RanBy, reason){
	const ModReportEmbed = new Discord.MessageEmbed()
		ModReportEmbed.setColor('#F01A1A')
		ModReportEmbed.setTitle('Ban')
		ModReportEmbed.setDescription(`Bans someone from the server`)
		ModReportEmbed.addFields(
			{ name: 'Offender', value: `${user}`, inline: false },
			{ name: 'Responsible Moderator', value: `${RanBy}`, inline: false },
			{ name: 'Reason', value: `${reason}`, inline: false }
		)
		ModReportEmbed.setTimestamp()
		const modlogchannel = client.channels.cache.get(`${ModLog}`);
		modlogchannel.send(ModReportEmbed)

}
//Purge
purgeaction = function (RanBy, RanIn){
	const ModReportEmbed = new Discord.MessageEmbed()
		ModReportEmbed.setColor('#81D8D0')
		ModReportEmbed.setTitle('Purge')
		ModReportEmbed.setDescription(`Removes messages in bulk`)
		ModReportEmbed.addFields(
			{ name: 'Responsible Moderator', value: `${RanBy}`, inline: false },
			{ name: 'Channel', value: `${RanIn}`, inline: false }
		)
		ModReportEmbed.setTimestamp()
		const modlogchannel = client.channels.cache.get(`${ModLog}`);
		modlogchannel.send(ModReportEmbed)
}

//Preban
prebanaction = function (userToPreBan, RanBy, reason){
	const ModReportEmbed = new Discord.MessageEmbed()
		ModReportEmbed.setColor('#F20B8E')
		ModReportEmbed.setTitle('Preban')
		ModReportEmbed.setDescription(`Bans the user when they enter the server`)
		ModReportEmbed.addFields(
			{ name: 'Offender', value: `${userToPreBan}`, inline: false },
			{ name: 'Responsible Moderator', value: `${RanBy}`, inline: false },
			{ name: 'Reason', value: `${reason}`, inline: false }
		)
		ModReportEmbed.setTimestamp()
		const modlogchannel = client.channels.cache.get(`${ModLog}`);
		modlogchannel.send(ModReportEmbed)
}

//Clearwarn
clearwarnaction = function (userToClear, RanBy, reason){
	const ModReportEmbed = new Discord.MessageEmbed()
		ModReportEmbed.setColor('#C2FFCA')
		ModReportEmbed.setTitle('Clearwarn')
		ModReportEmbed.setDescription(`Clears the punishment log from the user`)
		ModReportEmbed.addFields(
			{ name: 'Offender', value: `${userToClear}`, inline: false },
			{ name: 'Responsible Moderator', value: `${RanBy}`, inline: false },
			{ name: 'Reason', value: `${reason}`, inline: false }
		)
		ModReportEmbed.setTimestamp()
		const modlogchannel = client.channels.cache.get(`${ModLog}`);
		modlogchannel.send(ModReportEmbed)
}

//Hide Channel
hidechannelaction = function (RanBy, RanIn){
	const ModReportEmbed = new Discord.MessageEmbed()
		ModReportEmbed.setColor('#FFC2F7')
		ModReportEmbed.setTitle('Hide channel')
		ModReportEmbed.setDescription(`Hides a channel from everyone`)
		ModReportEmbed.addFields(
			{ name: 'Responsible Moderator', value: `${RanBy}`, inline: false },
			{ name: 'Channel', value: `${RanIn}`, inline: false }
		)
		ModReportEmbed.setTimestamp()
		const modlogchannel = client.channels.cache.get(`${ModLog}`);
		modlogchannel.send(ModReportEmbed)
}

//Kick
kickaction = function (user, RanBy, reason){
	const ModReportEmbed = new Discord.MessageEmbed()
		ModReportEmbed.setColor('#2859B8')
		ModReportEmbed.setTitle('Kick')
		ModReportEmbed.setDescription(`Gives the specified member the boot from the server.`)
		ModReportEmbed.addFields(
			{ name: 'Offender', value: `${user}`, inline: false },
			{ name: 'Responsible Moderator', value: `${RanBy}`, inline: false },
			{ name: 'Reason', value: `${reason}`, inline: false }
		)
		ModReportEmbed.setTimestamp()
		const modlogchannel = client.channels.cache.get(`${ModLog}`);
		modlogchannel.send(ModReportEmbed)
}

//Lock Channel
lockchannelaction = function (RanBy, RanIn){
	const ModReportEmbed = new Discord.MessageEmbed()
		ModReportEmbed.setColor('#FF4500')
		ModReportEmbed.setTitle('Lockdown')
		ModReportEmbed.setDescription(`Denys the Send Messages permission for all users.`)
		ModReportEmbed.addFields(
			{ name: 'Responsible Moderator', value: `${RanBy}`, inline: false },
			{ name: 'Channel', value: `${RanIn}`, inline: false }
		)
		ModReportEmbed.setTimestamp()
		const modlogchannel = client.channels.cache.get(`${ModLog}`);
		modlogchannel.send(ModReportEmbed)
}

//Mute
muteaction = function (member, RanBy, reason){
	const ModReportEmbed = new Discord.MessageEmbed()
		ModReportEmbed.setColor('#FF4500')
		ModReportEmbed.setTitle('Mute')
		ModReportEmbed.setDescription(`Shuts the specified user up`)
		ModReportEmbed.addFields(
			{ name: 'Offender', value: `${member}`, inline: false },
			{ name: 'Responsible Moderator', value: `${RanBy}`, inline: false },
			{ name: 'Reason', value: `${reason}`, inline: false }
		)
		ModReportEmbed.setTimestamp()
		const modlogchannel = client.channels.cache.get(`${ModLog}`);
		modlogchannel.send(ModReportEmbed)
}

//Show channel
showchannelaction = function (RanBy, RanIn){
	const ModReportEmbed = new Discord.MessageEmbed()
		ModReportEmbed.setColor('#81D8D0')
		ModReportEmbed.setTitle('Show channel')
		ModReportEmbed.setDescription(`Unhides a channel to all users`)
		ModReportEmbed.addFields(
			{ name: 'Responsible Moderator', value: `${RanBy}`, inline: false },
			{ name: 'Channel', value: `${RanIn}`, inline: false }
		)
		ModReportEmbed.setTimestamp()
		const modlogchannel = client.channels.cache.get(`${ModLog}`);
		modlogchannel.send(ModReportEmbed)
}

//Unlock channel
unlockchannelaction = function (RanBy, RanIn){
	const ModReportEmbed = new Discord.MessageEmbed()
		ModReportEmbed.setColor('#81D8D0')
		ModReportEmbed.setTitle('Unlock channel')
		ModReportEmbed.setDescription(`Regrants Send Messages permission to all users`)
		ModReportEmbed.addFields(
			{ name: 'Responsible Moderator', value: `${RanBy}`, inline: false },
			{ name: 'Channel', value: `${RanIn}`, inline: false }
		)
		ModReportEmbed.setTimestamp()
		const modlogchannel = client.channels.cache.get(`${ModLog}`);
		modlogchannel.send(ModReportEmbed)
}

//Unmute
unmuteaction = function (member, RanBy, reason){
	const ModReportEmbed = new Discord.MessageEmbed()
		ModReportEmbed.setColor('#10C891')
		ModReportEmbed.setTitle('Unmute')
		ModReportEmbed.setDescription(`Un-shuts up a user`)
		ModReportEmbed.addFields(
			{ name: 'Offender', value: `${member}`, inline: false },
			{ name: 'Responsible Moderator', value: `${RanBy}`, inline: false },
			{ name: 'Reason', value: `${reason}`, inline: false }
		)
		ModReportEmbed.setTimestamp()
		const modlogchannel = client.channels.cache.get(`${ModLog}`);
		modlogchannel.send(ModReportEmbed)
}

//Warn
warnaction = function (checkmemberforroles, RanBy, reason){
	const ModReportEmbed = new Discord.MessageEmbed()
		ModReportEmbed.setColor('#FFFF00')
		ModReportEmbed.setTitle('Warn')
		ModReportEmbed.setDescription(`Warns a user`)
		ModReportEmbed.addFields(
			{ name: 'Offender', value: `${checkmemberforroles}`, inline: false },
			{ name: 'Responsible Moderator', value: `${RanBy}`, inline: false },
			{ name: 'Reason', value: `${reason}`, inline: false }
		)
		ModReportEmbed.setTimestamp()
		const modlogchannel = client.channels.cache.get(`${ModLog}`);
		modlogchannel.send(ModReportEmbed)
}
//Unban
unbanaction = function (checkmemberforroles, RanBy, reason){
	const ModReportEmbed = new Discord.MessageEmbed()
		ModReportEmbed.setColor('#10C891')
		ModReportEmbed.setTitle('Warn')
		ModReportEmbed.setDescription(`Warns a user`)
		ModReportEmbed.addFields(
			{ name: 'Offender', value: `${checkmemberforroles}`, inline: false },
			{ name: 'Responsible Moderator', value: `${RanBy}`, inline: false },
			{ name: 'Reason', value: `${reason}`, inline: false }
		)
		ModReportEmbed.setTimestamp()
		const modlogchannel = client.channels.cache.get(`${ModLog}`);
		modlogchannel.send(ModReportEmbed)
}
 errorlog = function (error){
	errorcount = errorcount + 1
	const ErrorReportEmbed = new Discord.MessageEmbed()
		ErrorReportEmbed.setColor('#FF0000')
		ErrorReportEmbed.setTitle('Bot Error')
		ErrorReportEmbed.setDescription(`An error has occurred while the bot running.`)
		ErrorReportEmbed.addFields(
			{ name: 'Error information', value: `${error}`, inline: false },
		)
		ErrorReportEmbed.setTimestamp()
		const ErrorLog = client.channels.cache.get(`${BotLog}`);
		ErrorLog.send(ErrorReportEmbed)
}

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const allCommandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
		if(!command.mod && !safemode ==true){
			client.commands.set(command.name, command);
		}
}
for (const file of allCommandFiles) {
	const modcommand = require(`./commands/${file}`);
	if(safemode == true && modcommand.essential == true){
		client.modcommands.set(modcommand.name, modcommand);
	}else{
		if(!safemode == true){
			client.modcommands.set(modcommand.name, modcommand);
		}
	}

}

//Command list
getCommandList = function(modCheck, botManagerCheck, userID, showMemberCommands){
	const findCommandListUser = fs.readdirSync('./commands').filter(file => file.startsWith('USER_'));
	const findCommandListMod = fs.readdirSync('./commands').filter(file => file.startsWith('MOD_'));
	const findCommandListBotManager = fs.readdirSync('./commands').filter(file => file.startsWith('BOTMANAGER_'));
	const commandListUser = [];
	const commandListMod = [];
	const commandListBotManager = [];
	var commandList = []
	var restrictions = require('./restrictions.json')
	var commandEssential = restrictions[2];
	for (const file of findCommandListUser) {
		const command = require(`./commands/${file}`);
		commandListUser.join(' ')
		if(!command.hidden == true || safemode ==true){
			if(safemode == true && commandEssential && commandEssential[command.name] == true){
				commandListUser.push(command.name)
				console.log(command.name)
			}else{
				if(!safemode == true){
				commandListUser.push(command.name)
				console.log(command.name)
				}
			}
		}

	}
	if(modCheck == true){
		for (const file of findCommandListMod) {
		const command = require(`./commands/${file}`);
		if(!command.hidden == true || safemode ==true){
			if(safemode == true && commandEssential && commandEssential[command.name] == true){
				commandListMod.push(command.name)
				console.log(command.name)
			}else{
				if(!safemode == true){
				commandListMod.push(command.name)
				console.log(command.name)
				}
			}
		}
	}
}

	if(botManagerCheck == true){
	for (const file of findCommandListBotManager) {
		const command = require(`./commands/${file}`);
		commandListBotManager.join(' ')
		if(!command.hidden == true || safemode ==true){
			if(safemode == true && commandEssential && commandEssential[command.name] == true){
				commandListBotManager.push(command.name)
				console.log(command.name)
			}else{
				if(!safemode == true){
					commandListBotManager.push(command.name)
					console.log(command.name)
				}
			}
		}
	}
}

	//Not the best way, but will work on later
	usercommandstring = ['__**    User    **__']
	modcommandstring = ['__**    Mod    **__']
	botmanagercommandstring = ['__**    Bot Manager    **__']
	if(!showMemberCommands == false){
		commandList.push(usercommandstring)
		commandList.push(commandListUser)
	}

	if(modCheck == true){
	commandList.push(modcommandstring)
	commandList.push(commandListMod)
	}
	if(botManagerCheck == true){
		commandList.push(botmanagercommandstring)
		commandList.push(commandListBotManager)
	}
	const newcommandlist = commandList.toString().replace(/,/g, '\n')
	return newcommandlist
}
//Suggestion reactions
client.on("message", message=>{
    if(message.channel.name === "685074431202164747"){
		message.react("👍");
		message.react("👎");
	}
})
//Shot on iPhone reactions
client.on('message', message => {
	if(safemode == true)return;
	if (message.author.bot)return;
        if (message.channel.id != '616472674406760448')return;
        const content = message.content.toLowerCase();
        if (message.attachments.size != '0'){
          if (!content.includes(`iphone`)){respond('',`<@${message.author.id}>, please specify the iPhone used to shoot the picture.`, message.channel);message.delete();return;}else
          {
          message.react('❤️');
          message.react('👍');
        }}
})
//AI Modules
client.on('message', message => {
	if (fs.existsSync('./aiModule.js' && !fs.existsSync('./safe_mode.flag'))){
		const aiModule = require('./aiModule.js')
	}
	if(!safemode == true)
	if (fs.existsSync('./aiModule.js'))

	function returnFunction(result){
		message.channel.send(result)
	}

	function returnFunctionRandomizer(result){
		message.channel.send(result)
	}

	if(message.content.startsWith(`<@${client.user.id}>`) && !message.author.bot){
		const aiModule = require('./aiModule.js')
		const text = message.content.slice(`<@${client.user.id}>`.length+1).toLowerCase()
		aiModule.execute(text, message.author, returnFunction)
	}else if(message.content.startsWith(`<@!${client.user.id}>`) && !message.author.bot){
		const aiModule = require('./aiModule.js')
		const text = message.content.slice(`<@!${client.user.id}>`.length+1).toLowerCase()
		aiModule.execute(text, message.author, returnFunction)
	}
})

client.on('message', message => {
	if(safemode == true)return;
	if (message.content.includes(`<@!${client.user.id}>`) || (message.content.includes(`<@${client.user.id}>`)));{

	function informOfPrefix(){
		message.channel.send(`Hello <@${message.author.id}>, if you want to use my commands, \`${PREFIX}\` is my prefix.`)
	}
}})


//Commands
client.on('message', async message => {
	if (!message.content.startsWith(PREFIX) || message.author.bot) return;
		const args = message.content.slice(PREFIX.length).split(/ +/);
		const commandName = args.shift().toLowerCase();
		const command = client.modcommands.get(commandName)
			|| client.modcommands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
		var restrictions = require('./restrictions.json');
		var channelRestrictions = restrictions[0];
		var commandDisabled = restrictions[1];
		var commandEssential = restrictions[2];


	if(!command){
		return;
	}

	if(safemode == true && commandEssential && !commandEssential[command.name] == true){
		if(!command.name.includes('help')){
			return;
		}
	}
	//Command disabled
	if (commandDisabled[command.name] == true) {
		respond('🛑 Command disabled',`<@${message.author.id}>, the command you are trying to run is disabled at the moment. Please try again later.`, message.channel)
		return;
	}
	//Bot Manager (over mod)
	if(command.botmanager == true && message.member.roles.cache.some(role => role.id === `${BotManagerRoleID}`)){
		command.execute(message, args, client);
		return;
	}
	//Mod command and no permission
		if (command.mod && !message.member.roles.cache.some(role => role.id === `${ModeratorRoleID}`)) {
			respond('🛑 Incorrect permissions',`<@${message.author.id}>, you don't seem to have the correct permissions to use this command or you can't run this command in this channel. Please try again later.`, message.channel)
			return;
	}
	
	//Channel not allowed
		if (channelRestrictions[command.name] && !channelRestrictions[command.name].includes(message.channel.id)) {
			respond('🛑 Incorrect permissions',`<@${message.author.id}>, you don't seem to have the correct permissions to use this command or you can't run this command in this channel. Please try again later.`, message.channel)
			return;
		}

	if (!cooldowns.has(command.name)) {
		cooldowns.set(command.name, new Discord.Collection());
	}

	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown || 3) * 1000;

	if (timestamps.has(message.author.id)) {
		const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

		if (now < expirationTime) {
			const timeLeft = (expirationTime - now) / 1000;
			respond('⏲️',`Please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`, message.channel);
			return;
		}
	}

	timestamps.set(message.author.id, now);
	setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);


	//Normal
	try {
		command.execute(message, args, client, this);
	} catch (error) {
		console.error(error);
		respond('Error', 'Something went wrong.\n'+error, message.channel)

	}


});







process.on('unhandledRejection', error => console.error('Uncaught Promise Rejection', error));

//Error
client.on('error', error => {
	if(safemode == true){
		console.log(error)
		return;
	}
	console.error('ERROR: ', error);
	errorcount + 1
	const fs = require('fs');
	var today = new Date();
	var date = today.getMonth()+1+'-'+(today.getDate())+'-'+today.getFullYear();
	var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
	var dateTime = date+' '+time;
	fs.appendFileSync('./debuglogs/error.log','('+dateTime+')'+error+'\n\n');
	fs.writeFileSync('./debuglogs/lasterror.txt',error);
	if (ProcessEndOnError == true){process.exit()}
});

//Member join
client.on('guildMemberAdd', member => {
	if(safemode == true)return;
	var today = new Date();
	var date = today.getMonth()+1+'-'+(today.getDate())+'-'+today.getFullYear();
	var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
	var dateTime = date+' '+time;
		if (!fs.existsSync('./logs/user.log')) {
			fs.appendFileSync('./logs/user.log', `__USER LOG CREATED ${dateTime}__\n\n`)
		}
	fs.readFile('./logs/user.log', function(err, data){
		if(err){
			errorlog(err)
			console.error
		}

		const channel = member.guild.channels.cache.find(ch => ch.id === `${UserLog}`);
		const guild = member.guild
		const icon = member.user.displayAvatarURL()
		if (!channel) return;
			if(data.toString().includes(member.id)){
			const joinedbefore = 'True.'
			console.log(joinedbefore)
			welcomeEmbedUserLog(dateTime, channel, guild, icon, member, joinedbefore)
		}else{
			const joinedbefore = 'False.'
			console.log(joinedbefore)
			welcomeEmbedUserLog(dateTime, channel, guild, icon, member, joinedbefore)
		}

		fs.appendFileSync('./logs/user.log', `${member.user.tag} (${member.id}) joined at '${dateTime}'.\nAccount creation date: ${member.user.createdAt}\nCurrent guild user count: ${guild.memberCount}\n\n`)
		function welcomeEmbedUserLog(dateTime, channel, guild, icon, member, joinedbefore){
const MemberJoinEmbed = new Discord.MessageEmbed()
		.setColor('#00FF00')
		.setTitle('Member Join')
		.setThumbnail(`${icon}`)
		.addFields(
			{ name: 'Username', value: member.user.tag, inline: false },
			{ name: 'Member ID', value: member.id, inline: false },
			{ name: 'Account creation date', value: member.user.createdAt, inline: false },
			{ name: 'Joined before?', value: joinedbefore, inline: false },
			{ name: 'Server member count', value: `${guild.memberCount}`, inline: false },
		)
		.setTimestamp()
		channel.send(MemberJoinEmbed)
		}


		if(AssignMemberRoleOnJoin == true){
			const role = member.guild.roles.cache.find(role => role.id === `${MemberRoleID}`);
			member.roles.add(role);
		}
		fs.readFile('./logs/idbanlist.txt', function(err, data){
			if(err){
				console.log(err);
				errorlog(err)
				return;
			}
			if(data.toString().includes(member.id)){
				respond('Banned','You were banned from the OrangeEcho discord server. (PREBAN)', member)
				respond('Banned',`${member.tag} was banned from the server. (PREBAN)`, guild.channels.cache.get(UserLog))
				member.ban({reason: 'Prebanned.'});
			}
		})
		fs.readFile('./files/welcomemessage.txt', function(err, data){
			const WelcomeEmbedDM = new Discord.MessageEmbed()
			WelcomeEmbedDM.setTitle('Welcome! 👋')
			if(err){
				WelcomeEmbedDM.setDescription('Welcome to '+member.guild.name+'!\n')
			}else{
				WelcomeEmbedDM.setDescription('Welcome to '+member.guild.name+'!\n'+data)
			}
			member.send(WelcomeEmbedDM)
		})
	})
});


//Member leave
client.on('guildMemberRemove', member => {
	if(safemode == true)return;
	var today = new Date();
	var date = today.getMonth()+1+'-'+(today.getDate())+'-'+today.getFullYear();
	var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
	var dateTime = date+' '+time;
	const channel = member.guild.channels.cache.find(ch => ch.id === `${UserLog}`);
	const guild = member.guild
	const icon = member.user.displayAvatarURL({ dynamic: true })
	if (!channel) return;
	fs.appendFileSync('./logs/user.log', `${member.user.tag} (${member.id}) left at '${dateTime}'.\nAccount creation date: ${member.user.createdAt}\nCurrent guild user count: ${guild.memberCount}\n\n`)
	const MemberLeaveEmbed = new Discord.MessageEmbed()
	.setColor('#ff0000')
	.setTitle('Member Leave')
	.setThumbnail(`${icon}`)
	.addFields(
		{ name: 'Username', value: member.user.tag, inline: false },
		{ name: 'Member ID', value: member.user.id, inline: false },
		{ name: 'Account creation date', value: member.user.createdAt, inline: false },
		{ name: 'Server member count', value: `${guild.memberCount}`, inline: false },
	)
	.setTimestamp()
	channel.send(MemberLeaveEmbed)
});

//Profanity filter (Feature disabled)
/*client.on('message', message => {
	if(safemode == true)return;
	if(message.channel.type == 'dm')return;
	const profanity = require('./profanity.json');*/
	//var editedMessage = message.content.replace(/\*/g, "bad")
	/*var editedMessage = editedMessage.replace(/\_/g, "bad")
	var blocked = profanity.filter(word => editedMessage.toLowerCase().includes(word));
	var today = new Date();
	var date = today.getMonth()+1+'-'+(today.getDate())+'-'+today.getFullYear();
	var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
	var dateTime = date+' '+time;
	if (blocked.length > 0) {
		if(blocked == `${blocked}`)
			console.log(`${message.author.tag} tried to use profanity. Logged word: ${blocked}`);
			respond('',`<@${message.author.id}>, watch your language. A warning has been logged.`, message.channel, 'FF0000')
			message.delete();
    		const reason = message.content.replace(`${blocked}`, `**${blocked}**`)
	    	fs.appendFileSync('./logs/' + message.author.id + '-warnings.log', 'Warning\nReason: Profanity (' + reason +')\n\n');
    		fs.appendFileSync('./logs/' + message.author.id + '-modwarnings.log', 'Warning issued by OrangeEcho Public Beta \nReason: Profanity (' + message.content +')\n\n');
			respond('Profanity Filter 🗣️',`Hey <@${message.author.id}>, please watch your language next time. Punishment information was updated on your profile.\nYour message: ${reason}`, message.author)
	}
})*/

//Sensitive topic filter
client.on('message', message => {
	if(safemode == true)return;
	if(message.channel.type == 'dm')return;
	const sensitive = require('./sensitive.json');
	var editedMessage = message.content.replace(/\*/g, "bad")
	var editedMessage = editedMessage.replace(/\_/g, "bad")
	var blocked = sensitive.filter(word => editedMessage.toLowerCase().includes(word));
	var today = new Date();
	var date = today.getMonth()+1+'-'+(today.getDate())+'-'+today.getFullYear();
	var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
	var dateTime = date+' '+time;
	if (blocked.length > 0) {
		if(blocked == `${blocked}`)
			console.log(`${message.author.tag} tried to talk about a sensitive topic. Logged word: ${blocked}`);
			respond('',`<@${message.author.id}>, please don't talk about that here. A note has been logged.`, message.channel, 'FFFF00')
    		const reason = message.content.replace(`${blocked}`, `**${blocked}**`)
	    	fs.appendFileSync('./logs/' + message.author.id + '-warnings.log', 'Note\nContent: Talking about a sensitive topic (' + reason +')\n\n');
    		fs.appendFileSync('./logs/' + message.author.id + '-modwarnings.log', 'Note issued by OrangeEcho Public Beta \nContent: Talking about a sensitive topic (' + message.content +')\n\n');
			respond('Sensitive Topic Filter 🗣️',`Hey <@${message.author.id}>, please don't talk about this topic next time.\nYour message: ${reason}`, message.author)
	}
})

//Log deleted messages
client.on('messageDelete', async message => {
	if(safemode == true)return;
	const fetchedLogs = await message.guild.fetchAuditLogs({
		limit: 1,
		type: 'MESSAGE_DELETE',
	});
	// Since we only have 1 audit log entry in this collection, we can simply grab the first one
	const deletionLog = fetchedLogs.entries.first();

	// Let's perform a sanity check here and make sure we got *something*
	if (!deletionLog) {  console.log(`A message by ${message.author.tag} was deleted, but no relevant audit logs were found.`);
	const DeletionEmbed = new Discord.MessageEmbed()
	.setColor('#ff0000')
	.setTitle('Message Deleted')
	.addFields(
		{ name: 'Message sent by', value: message.author.tag, inline: false },
		{ name: 'Deleted by', value: 'Unknown - Audit log not found.', inline: false },
		{ name: 'Sent in', value: message.channel.name, inline: false },
		{ name: 'Message', value: message.content, inline: false },
	)
	.setTimestamp()
	const channel = client.channels.cache.get(`${ModLog}`);
	channel.send(DeletionEmbed)}

	// We now grab the user object of the person who deleted the message
	// Let us also grab the target of this action to double check things
	const { executor, target } = deletionLog;


	// And now we can update our output with a bit more information
	// We will also run a check to make sure the log we got was for the same author's message
	if (target.id === message.author.id) {
		console.log(`A message by ${message.author.tag} was deleted by ${executor.tag}.`)
		const DeletionEmbed = new Discord.MessageEmbed()
		.setColor('#ff0000')
		.setTitle('Message Deleted')
		.addFields(
			{ name: 'Message sent by', value: message.author.tag, inline: false },
			{ name: 'Deleted by', value: executor.tag, inline: false },
			{ name: 'Sent in', value: message.channel.name, inline: false },
			{ name: 'Message', value: message.content, inline: false },
		)
		.setTimestamp()
		const channel = client.channels.cache.get(`${ModLog}`);
		channel.send(DeletionEmbed)
		return;
	}	else {
		if (target.id === message.author.id) return;
		console.log(`A message by ${message.author.tag} was deleted, but we don't know by who.`)
		const DeletionEmbed = new Discord.MessageEmbed()
		.setColor('#ff0000')
		.setTitle('Message Deleted')
		.addFields(
			{ name: 'Message sent by', value: message.author.tag, inline: false },
			{ name: 'Deleted by', value: 'Unknown - Unable to find who deleted message. - May occur when the message author erases their own message', inline: false },
			{ name: 'Sent in', value: message.channel.name, inline: false },
			{ name: 'Message', value: message.content, inline: false },
		)
		.setTimestamp()
		const channel = client.channels.cache.get(`${ModLog}`);
		channel.send(DeletionEmbed)
		return;
	}
});

//message log
client.on('message', message => {
	if(safemode == true)return;
	if (message.channel.type == 'dm')return;
	var today = new Date();
	var date = today.getMonth()+1+'-'+(today.getDate())+'-'+today.getFullYear();
	var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
	var dateTime = date+' '+time;
	const fs = require('fs');
	fs.appendFileSync('./logs/allmessages.log', '\n\nMessage sent by ' +message.author.username + '('+message.author.id+') in '+message.channel.name+'('+message.channel.id+')'+'\n\n' + message.content);
	fs.appendFileSync('./logs/' + message.author.id + '-messages.log', '\n\nSent in '+message.channel.name+'('+message.channel.id+')'+'\n\n' + message.content);
	fs.appendFileSync('./logs/allmessages_'+date +'.log', '\n\nMessage sent by ' +message.author.username + '('+message.author.id+') in '+message.channel.name+'('+message.channel.id+')'+'\n\n' + message.content);
})

//Message edit
client.on('messageUpdate', (oldMessage, newMessage) => {
	if(safemode == true)return;
	if (oldMessage.author.bot)return;
	var today = new Date();
	var date = today.getMonth()+1+'-'+(today.getDate())+'-'+today.getFullYear();
	var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
	var dateTime = date+' '+time;
	if (oldMessage === newMessage)return;
	var ref = "http://discordapp.com/channels/" + oldMessage.guild.id + "/" + oldMessage.channel.id + "/" + oldMessage.id;
	const MessageEditEmbed = new Discord.MessageEmbed()
	.setColor('#eea515')
	.setTitle('Message Edit')
	.setDescription('A message edit was detected.')
	.addFields(
		{ name: 'Channel sent: ', value: oldMessage.channel.name, inline: false },
		{ name: 'Message author', value: oldMessage.author.tag, inline: false },
		{ name: 'Old message', value: oldMessage, inline: true },
		{ name: 'Updated message', value: newMessage, inline: true },
		{ name: 'Message link', value: `[Jump](${ref})`, inline: false },

	)
	.setTimestamp()
	const channel = client.channels.cache.get(`${ModLog}`);
	channel.send(MessageEditEmbed);

})

//Below are client emit actions
client.on("StartupIssue", () => {
	var today = new Date();
	fs.readFile('./errorcount.txt', function(err, data){
		if(err){
			fs.writeFileSync('./errorcount.txt',0+1);
		}else{
			fs.writeFileSync('./errorcount.txt',Number(data)+1);
		}
	})
	var titleofstartup = 'Bot Started - Issue Detected'
	var descriptionofstartup = 'The bot loaded successfully, but restarted unexpectedly.'
	if(safemode == true){
		var titleofstartup = 'Bot Started - Safe Mode'
		var descriptionofstartup = 'The bot was unable to start normally multiple times, so it entered safe mode.'
	}

		var date = today.getMonth()+1+'-'+(today.getDate())+'-'+today.getFullYear();
		var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
		var dateTime = date+' '+time;
		const StartupEmbed = new Discord.MessageEmbed()
		.setColor('#ffa900')
		.setTitle(titleofstartup)
		.setDescription(descriptionofstartup)
		.setTimestamp()
		.setFooter(footertext)
		modlog = client.channels.cache.get(`${BotLog}`);
		modlog.send(StartupEmbed);

		return
})

client.on('StartupPassed', () => {
	if (fs.existsSync('./errorcount.txt')){
		fs.unlinkSync(`./errorcount.txt`)
	}
	var today = new Date();
	var date = today.getMonth()+1+'-'+(today.getDate())+'-'+today.getFullYear();
	var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
	var dateTime = date+' '+time;
	const StartupEmbed = new Discord.MessageEmbed()
		.setColor('#00FF00')
		.setTitle('Bot Started')
		.setDescription(`Bot has started successfully.`)
		.setTimestamp()
		.setFooter(footertext)
	modlog = client.channels.cache.get(`${BotLog}`);
	modlog.send(StartupEmbed);
	fs.writeFileSync('./runstate.txt', 'running')
	return;
})

//Hardcoded events


function clean(text) {
	if (typeof(text) === "string")
	  return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
	else
		return text;
  }
  client.on("message", message => {
	const args = message.content.split(" ").slice(1);

	if (message.content.startsWith(PREFIX + "eval")) {
	  if(message.author.id !== OwnerID){respond('❌ Bot Owner Command Only', 'This command can only be ran by the bot owner.', message.channel);return;}
	  try {
		const code = args.join(" ");
		let evaled = eval(code);

		if (typeof evaled !== "string")
		  evaled = require("util").inspect(evaled);

		respond('⌨️ Eval Command',clean(evaled), message.channel);
	  } catch (err) {
		respond('⌨️ Eval Command Error',`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``, message.channel);
	  }
	}

		//This code here

		if (message.content.startsWith(PREFIX + "safemode",)) {
			if(!message.member.roles.cache.some(role => role.id == BotManagerRoleID)){respond('❌ Bot Manager Command Only', 'This command can only be ran by the dev team.', message.channel);return;}
			try {
				safemode = true
				fs.writeFileSync('./safe_mode.flag', (error) => {
					if(error)console.log(error)
				});
				console.log('WARNING: SAFE MODE ACTIVE')
				respond('', '✅', message.channel)
				return;
			  } catch (error) {
					respond('Error', 'Something went wrong.\n'+error+`\nMessage: ${message}\nArgs: ${args}\n`, message.channel)
			  errorlog(error)
			  // Your code broke (Leave untouched in most cases)
			  console.error('an error has occured', error);
			  }}}
  );
  client.on('message',message => {
  if (message.content.startsWith(PREFIX + "exitsafemode")) {
	if(!message.member.roles.cache.some(role => role.id == BotManagerRoleID)){respond('❌ Bot Manager Command Only', 'This command can only be ran by the dev team.', message.channel);return;}
	try {
		safemode = false
		fs.unlinkSync('./safe_mode.flag', (error) => {
			if(error)console.log(error)
		});
		console.log('WARNING: SAFE MODE ACTIVE')
		respond('', '✅', message.channel)
	  } catch (error) {
			respond('Error', 'Something went wrong.\n'+error+`\nMessage: ${message}\nArgs: ${args}\n`, message.channel)
	  errorlog(error)
	  // Your code broke (Leave untouched in most cases)
	  console.error('an error has occured', error);
	  }}})
//Login
client.login(process.env.token);

