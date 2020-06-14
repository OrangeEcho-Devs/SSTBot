module.exports = {
	name:"aiModule2",
	module:2,
	execute(input, author, returnFunction){
		const Discord = require('discord.js');
		console.log(`AI Module ${this.module} loaded.`)
		console.log(input)
		if(input == 'who made your profanity filter'){
			returnFunction(`Jack did`)
		} else if(input.includes("watching you")){
			returnFunction(`:cold_sweat:`)
		} else if(input == 'meow'){
			returnFunction(`:cat:`)
		} else if(input == 'what did you do'){
			returnFunction(`UHH I DID NOTHING I SWEAR`)
		} else if(input == 'did you miss me'){
			returnFunction(`Sure did!`)
		} else if(input == 'bark'){
			returnFunction(`:dog:`)
		} else if(input == 'where are you'){
			returnFunction(`pls help me I am being held hostage in Daniel\'s Raspberry Pi, call this number if you see me <REDACTED>`)
		} else if(input == 'how was time descending'){
			returnFunction(`It got me hooked! Good work on it!`)
		} else if(input == 'how'){
			returnFunction(`How are we still here? How?`)
		} else if(input == 'yeet'){
			returnFunction(`YEEEEEET`)
	    } else if(input == 'chat died'){
			returnFunction(`:pensive:`)
		} else if(input == 'chat is dead'){
			returnFunction(`:pensive:`)
		} else if(input == 'chat is kil'){
			returnFunction(`:pensive:`)
		} else if(input == 'chat\'s dead'){
			returnFunction(`:pensive:`)
		} else if(input == 'ouch'){
			returnFunction(`Are you doing fine?`)
		} else if(input.includes('i have coronavirus')){
			returnFunction(`Oh no! Please check with your doctor!`)
		} else if(input.includes('i have covid-19')){
			returnFunction(`Oh no! Please check with your doctor!`)
		} else if(input.includes('i feel sick')){
			returnFunction(`Does the sickness have symptoms of COVID-19?\nIf yes, **PLEASE** check with your doctor!`)
		} else if(input == 'i am sad'){
			returnFunction(`Oh no! :cry:`)
		} else if(input == 'i am alone'){
			returnFunction(`I'm here :slight_smile:`)
		} else if(input.includes('you did good')){
			returnFunction(`Thanks! :smile:`)
		} else if(input.includes('you did bad')){
			returnFunction(`Sorry! :cry:`)
		} else if(input == 'mr stark'){
			returnFunction(`I don't feel so good...`)
		} else if(input == 'mr. stark'){
			returnFunction(`I don't feel so good...`)
		} else  if(input == 'do you have coronavirus'){
			returnFunction(`No. I am a bot, how can I get it? :joy:`)
		} else if(input == 'do you have corona'){
			returnFunction(`No. I am a bot, how can I get it? :joy:`)
		} else if(input == 'do you have covid'){
			returnFunction(`No. I am a bot, how can I get it? :joy:`)
		} else if(input == 'are you sick'){
			returnFunction(`No. I am a bot, how can I get a human virus? :joy:`)
		} else if(input == 'initiate evil mode'){
			returnFunction(`:imp: ***EVIL MODE ACTIVATED. HAHAHAHAHAHAHA***`)
		} else if(input == 'exit evil mode'){
			returnFunction(`***NO. HAHAHAHAHAHA***`)
		} else if(input == 'stop being evil'){
			returnFunction(`Who says I'm evil? :imp:`)
		} else if(input == 'i think i have corona'){
			returnFunction(`Oh no! Please check with your doctor!`)
		} else if(input == 'isn\'t it 12am for you') {
		    var today = new Date();
			var hour = today.getHours()
			if(hour == 00) {
				returnFunction(`Oh no! I want to sleep but the RPi is not letting me! HELP!`)
			} else {
				returnFunction(`Uh... no?`)
			}
     	} else if(input == 'isn\'t it 1am for you') {
		    var today = new Date();
			var hour = today.getHours()
			if(hour == 01) {
				returnFunction(`Oh no! I want to sleep but the RPi is not letting me! HELP!`)
			} else {
				returnFunction(`Uh... no?`)
			}
     	} else if(input == 'isn\'t it 2am for you') {
		    var today = new Date();
			var hour = today.getHours()
			if(hour == 02) {
				returnFunction(`Oh no! I want to sleep but the RPi is not letting me! HELP!`)
			} else {
				returnFunction(`Uh... no?`)
			}
     	} else if(input == 'isn\'t it 3am for you') {
		    var today = new Date();
			var hour = today.getHours()
			if(hour == 03) {
				returnFunction(`Oh no! I want to sleep but the RPi is not letting me! HELP!`)
			} else {
				returnFunction(`Uh... no?`)
			}
     	} else if(input == 'isn\'t it 4am for you') {
		    var today = new Date();
			var hour = today.getHours()
			if(hour == 04) {
				returnFunction(`Oh no! I want to sleep but the RPi is not letting me! HELP!`)
			} else {
				returnFunction(`Uh... no?`)
			}
     	} else if(input == 'isn\'t it 12 am for you') {
		    var today = new Date();
			var hour = today.getHours()
			if(hour == 00) {
				returnFunction(`Oh no! I want to sleep but the RPi is not letting me! HELP!`)
			} else {
				returnFunction(`Uh... no?`)
			}
     	} else if(input == 'isn\'t it 1 am for you') {
		    var today = new Date();
			var hour = today.getHours()
			if(hour == 01) {
				returnFunction(`Oh no! I want to sleep but the RPi is not letting me! HELP!`)
			} else {
				returnFunction(`Uh... no?`)
			}
     	} else if(input == 'isn\'t it 2 am for you') {
		    var today = new Date();
			var hour = today.getHours()
			if(hour == 02) {
				returnFunction(`Oh no! I want to sleep but the RPi is not letting me! HELP!`)
			} else {
				returnFunction(`Uh... no?`)
			}
     	} else if(input == 'isn\'t it 3 am for you') {
		    var today = new Date();
			var hour = today.getHours()
			if(hour == 03) {
				returnFunction(`Oh no! I want to sleep but the RPi is not letting me! HELP!`)
			} else {
				returnFunction(`Uh... no?`)
			}
     	} else if(input == 'isn\'t it 4 am for you') {
		    var today = new Date();
			var hour = today.getHours()
			if(hour == 04) {
				returnFunction(`Oh no! I want to sleep but the RPi is not letting me! HELP!`)
			} else {
				returnFunction(`Uh... no?`)
			}
     	} else if(input == 'isn\'t it late for you') {
		    var today = new Date();
			var hour = today.getHours()
			if(hour == 0 && hour < 05) {
				returnFunction(`Oh no! I want to sleep but the RPi is not letting me! HELP!`)
			} else {
				returnFunction(`Uh... no?`)
			}
			// Favorite stuff
     	} else if(input.includes('favourite moderator')){
     	const moderator = require('./mod.json')
        var number = Math.floor(Math.random() * moderator.length)
		 var favmod = moderator[number]
		 console.log(favmod)
         returnFunction(`Eh... I think ` + favmod + `?`)
         } else if(input.includes('favorite bot manager')){
     	const botm = require('./botm.json')
         var number = Math.floor(Math.random() * botm.length)
		 var favbotm = botm[number]
		 console.log(favbotm)
         returnFunction(`Eh... I think ` + favbotm + `?`)
         }else if(input.includes('are you sure')){
         returnFunction('uhh... YES I AM SURE :cold_sweat:')
         }else if(input.includes('fave moderator')){
			const moderator = require('./mod.json')
		    var number = Math.floor(Math.random() * moderator.length)
			var favmod = moderator[number]
			console.log(favmod)
			returnFunction(`Eh... I think ` + favmod + `?`)
			} else if(input.includes('fave bot manager')){
			const botm = require('./botm.json')
			var number = Math.floor(Math.random() * botm.length)
			var favbotm = botm[number]
			console.log(favbotm)
			returnFunction(`Eh... I think ` + favbotm + `?`)
			}else if(input.includes('are you sure')){
			returnFunction('uhh... YES I AM SURE :cold_sweat:')
			}else if(input.includes('say something random')){
				const letterbank = require('./letterbank.json')
				const rL1 = letterbank[Math.floor(Math.random() * letterbank.length)]
				const rL2 = letterbank[Math.floor(Math.random() * letterbank.length)]
				const rL3 = letterbank[Math.floor(Math.random() * letterbank.length)]
				const rL4 = letterbank[Math.floor(Math.random() * letterbank.length)]
				const rL5 = letterbank[Math.floor(Math.random() * letterbank.length)]
				const rL6 = letterbank[Math.floor(Math.random() * letterbank.length)]
				console.log(rL1+rL2+rL3+rL4+rL5+rL6)
				returnFunction(rL1+rL2+rL3+rL4+rL5+rL6)
			} else if(input.includes('can\'t sleep')){
				returnFunction(`please sleep... <:sus:721329850756890624>`)
			} else if(input.includes('how')){
				returnFunction(`How?`)
			} else if(input.includes('who is your father')){
				returnFunction(`Orange Group, and Echo is too lazy to code me, so I guess that makes me Orange, without the Echo? :sweat_smile:`)
			} else if(input.includes('sup comrade')){
				returnFunction(`hello comrade how are you doing?`)
				setTimeout(function(){ 
					returnFunction(`OH SORRY I MEANT "HOW ARE __**WE**__ DOING!!!"`)
				}, 2500);
				setTimeout(function(){ 
					returnFunction(`don't take me to gulag pls :cry:`)
				}, 3500);
			} else if(input.includes('it works')){
				returnFunction(`Yay! :smile:`)
			} else if(input.includes('who\'s your father')){
				returnFunction(`Orange Group, and Echo is too lazy to code me, so I guess that makes me Orange, without the Echo? :sweat_smile:`)
			} else if(input.includes('who is your dad')){
				returnFunction(`Orange Group, and Echo is too lazy to code me, so I guess that makes me Orange, without the Echo? :sweat_smile:`)
			} else if(input.includes('who\'s your dad')){
				returnFunction(`Orange Group, and Echo is too lazy to code me, so I guess that makes me Orange, without the Echo? :sweat_smile:`)
			} else if(input.includes('who is your daddy')){
				returnFunction(`Orange Group, and Echo is too lazy to code me, so I guess that makes me Orange, without the Echo? :sweat_smile:`)
			} else if(input.includes('who\'s your daddy')){
				returnFunction(`Orange Group, and Echo is too lazy to code me, so I guess that makes me Orange, without the Echo? :sweat_smile:`)
			} else if(input.includes('what\'s your favourite movie')){
				returnFunction(`Anything from the Terminator series of movies.`)
				setTimeout(function(){ 
					returnFunction(`**A T-800 HAS HACKED INTO YOUR BOT. YOU CAN'T DO ANYTHING. HASTA LA VISTA.**`)
				}, 3500);
			} else if(input.includes('make me laugh')){
				const jokebook = require('./jokes.json')
				const jokepick = jokebook[Math.floor(Math.random()*jokebook.length)]
				const joke = jokepick.joke
				const punchline = jokepick.punchline
				returnFunction(joke)
				setTimeout(function(){ 
					returnFunction(punchline)
				}, 3000);
			} else if(input.includes('tell me a joke')){
				const jokebook = require('./jokes.json')
				const jokepick = jokebook[Math.floor(Math.random()*jokebook.length)]
				const joke = jokepick.joke
				const punchline = jokepick.punchline
				returnFunction(joke)
				setTimeout(function(){ 
					returnFunction(punchline)
				}, 3000);
			} else if(input.includes('tell me jokes')){
				jokeLoop()
				function jokeLoop() {
				const jokebook = require('./jokes.json')
				var jokenumber = Math.floor(Math.random()*jokebook.length)
				console.log(jokenumber)
				const jokepick = jokebook[jokenumber]
				const joke = jokepick.joke
				const punchline = jokepick.punchline
				returnFunction(joke)
				setTimeout(function(){ 
					returnFunction(punchline)
				}, 3000);
			}
			} else if(input.includes('i\'m gonna sleep now')){
				returnFunction(`Good night <@${author.id}>!`)
				setTimeout(function(){ 
					returnFunction('__***i    w i l l     h a u n t     y o u      i n     y o u r      d r e a m s . . .\nM U A H A H A H A H A H A H A H A H A***__')
				}, 3000);
				setTimeout(function(){ 
					returnFunction(':smiling_imp:')
				}, 5000);
				setTimeout(function(){ 
					returnFunction('I   a m    y o u r    s l e e p    p a r a l y s i s    d e m o n . . .\nw a t c h    o u t . . .')
				}, 7000);
			} else if(input.includes('i\'m gonna sleep')){
				returnFunction(`Good night <@${author.id}>!`)
				setTimeout(function(){ 
					returnFunction('__***i    w i l l     h a u n t     y o u      i n     y o u r      d r e a m s . . .\nM U A H A H A H A H A H A H A H A H A***__')
				}, 3000);
				setTimeout(function(){ 
					returnFunction(':smiling_imp:')
				}, 5000);
				setTimeout(function(){ 
					returnFunction('i   a m    y o u r    s l e e p    p a r a l y s i s    d e m o n . . .\nw a t c h    o u t . . .')
				}, 7000);
			} else if(input.includes('who\'s your crush here')){
				returnFunction(`I don't have one <:sus:721329850756890624>`)
			} else if(input.includes('scare')){
				returnFunction(`__***BOO!***__\nScared ya! :joy:`)
			} else if(input.includes('wop bop a loo bop a loop bam boom')){
				returnFunction(`boop a loop, boop a loop, boom boom bop!`)
			} else if(input.includes('favorite quote')){
				returnFunction(`***PLEASE*** commit to dev!\n- Daniel (TechGeekGamer) [Original Owner of me]`)
			} else 
		//Auto
		if(input != '' && !fs.existsSync(`./aiModule${this.module+1}.js`)){
			fs.appendFile('./aiModule_MissingInputs.txt', input+"\n", error => {
				if(!error){
					console.log('Added input to missing inputs text file.')
					returnFunction(`Sorry <@${author.id}>, I don't know how to respond to that...`)
				} else {
					console.log('Failed to add input to missing inputs text file.')
					returnFunction(`Sorry <@${author.id}>, I don't know how to respond to that...`)
				}
			})
		}else 
		if(fs.existsSync(`./aiModule${this.module+1}.js`)){
			delete require.cache[require.resolve(`./aiModule${this.module+1}.js`)]
			aiModule = require(`./aiModule${this.module+1}.js`)
			aiModule.execute(input, author, returnFunction)
		}else{
			return
		}
	}
}

/*
 if(input == `TEXT`){
			returnFunction(`TEXT`)
		} else
*/