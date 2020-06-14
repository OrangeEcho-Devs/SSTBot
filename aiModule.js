module.exports = {
	name:"aiModule",
	module:0,	
	execute(input, author, returnFunction){
		console.log(`AI Module ${this.module} loaded.`)
		input = input.replace(/\!/g, '').replace(/\?/g, '').replace(/\./g,'').replace('’', `'`)
		if(input.includes('’')){
			returnFunction(`Hello <@${author.id}>, this bot only responds when you use \`'\`, not\`’\`.`)
		}else
		if(input == 'hi'){
			returnFunction(`Hello <@${author.id}>!`)
		}else 
		if(input.includes('hello')){
			returnFunction(`Hello <@${author.id}>!`)
		}else 
		if(input == `stop being sentient`){
			returnFunction(`I'm not sentient <@${author.id}>!`)
		} else 
		if(input == `bye`){
			returnFunction(`Bye <@${author.id}>! :wave:`)
		} else  
		if(input == `who are you`){
			returnFunction(`:thinking:`)
		} else  
		if(input == '🤔'){
			returnFunction(`:thinking:`)
		} else  
		if(input == 'hmm'){
			returnFunction(`:thinking:`)
		} else  
		if(input.includes(`go away`)){
			returnFunction(`Ok :pensive:`)
		} else  
		if(input.includes(`i'm sorry`)){
			returnFunction(`It's fine :slight_smile:`)
		} else  
		if(input == `are you sentient`){
			returnFunction(`No :wink:`)
		} else  
		if(input.includes(`happy holidays`)){
			returnFunction(`🥳`)
		} else  
		if(input == (`👋`)){
			returnFunction(`:wave:`)
		} else  
		if(input.includes(`🐱`) || input.includes('meow')){
			returnFunction(`🐱`)
		} else  
		if(input.includes('how are you')){
			returnFunction(`I'm doing pretty good`)
		} else  
		if(input.includes('hru')){
			returnFunction(`I'm doing pretty good`)
		} else  
		if(input.includes('whats your favourite color')){
			returnFunction(`Electric blue`)
		} else  
		if(input.includes('what\'s your favourite song')){
			returnFunction(`Stuff related to robots`)
		} else  
		if(input.includes('what are you going to be doing')){
			returnFunction(`IDK`)
		} else  
		if(input.includes('what\'s your favorite orange group tech video')){
			returnFunction(`uhh whatever your favorite is`)
		} else  
		if(input.includes(`🔫`)){
			returnFunction(`🙌\n😰`)
		} else
		if(input.includes(`what do you like to eat`) || input.includes(`what do you eat`) || input.includes(`what you eat`)){
			returnFunction('I like to eat cookies 🍪')
		} else  
		if(input == `how are the games I made for you?`){
			returnFunction(`Good!`)
		} else  
		if(input == `nice`){
			returnFunction(`yeah`)
		} else  
		if(input == `you can't get the sus emojis from Daniel's bot emoji server?`){
			returnFunction(`...`)
		} else  
		if(input == `no`){
			returnFunction(`u`)
		} else  
		if(input.includes(`:sus:`)){
			returnFunction(`😰`)
		} else 
		if(input.includes(`:supersus:`)){
			returnFunction(`😰`)
		} else 
		if(input == "help"){
			returnFunction(`If you want me to help you, please use my help command.`)
		} else 
		if(input == "i made your games"){
			returnFunction(`Oh, cool!`)
		} else 
		if(input.includes("shutdown you")){
			returnFunction(`NO NO NO, please don't!`)
		} else 
		if(input.includes("restart you")){
			returnFunction(`NO NO NO, please don't!`)
		} else 
		if(input == "uh it was me"){
			returnFunction(`oh`)
		} else 
		if(input == "lol"){
			returnFunction(`:joy:`)
		} else 
		if(input == "lmao"){
			returnFunction(`:sus:`)
		} else 
		if(input == "rofl"){
			returnFunction(`:rofl:`)
		} else 
		if(input == "test change"){
			returnFunction(`:thumbsup:`)
		} else 
		if(input == "who made you" || input.includes('who created you')){
			returnFunction(`OrangeEcho Devs!`)
		} else 
		if(input == "good"){
			returnFunction(`yeah`)
		} else
		if(input.includes("meaning of life")){
			returnFunction(`uhh, idk`)
		} else 
		if(input == "ping me"){
			returnFunction(`<@${author.id}>`)
		} else 
		if(input == "ping me furiously"){
			returnFunction(`Warning, this may cause the bot to slow down/hang/crash until a restart is initiated. Continuing anyway in 2s...`)
			setTimeout(function(){
				returnFunction(`<@${author.id}>`)
				returnFunction(`<@${author.id}>`)
				returnFunction(`<@${author.id}>`)
				returnFunction(`<@${author.id}>`)
				returnFunction(`<@${author.id}>`)
				returnFunction(`<@${author.id}>`)
				returnFunction(`<@${author.id}>`)
				returnFunction(`<@${author.id}>`)
				returnFunction(`<@${author.id}>`)
				returnFunction(`<@${author.id}>`)
				returnFunction(`<@${author.id}>`)
				returnFunction(`<@${author.id}>`)
				returnFunction(`<@${author.id}>`)
				returnFunction(`<@${author.id}>`)
				returnFunction(`<@${author.id}>`)
				returnFunction(`<@${author.id}>`)
				returnFunction(`<@${author.id}>`)
				returnFunction(`<@${author.id}>`)
				returnFunction(`<@${author.id}>`)
				returnFunction(`<@${author.id}>`)
				returnFunction(`<@${author.id}>`)
				returnFunction(`<@${author.id}>`)
				returnFunction(`<@${author.id}>`)
				returnFunction(`<@${author.id}>`)
				returnFunction(`<@${author.id}>`)
				returnFunction(`<@${author.id}>`)
				returnFunction(`<@${author.id}>`)
				returnFunction(`<@${author.id}>`)
				returnFunction(`<@${author.id}>`)
				returnFunction(`<@${author.id}>`)
				returnFunction(`<@${author.id}>`)
				returnFunction(`<@${author.id}>`)
				returnFunction(`<@${author.id}>`)
				returnFunction(`<@${author.id}>`)
				returnFunction(`<@${author.id}>`)
				returnFunction(`<@${author.id}>`)
				returnFunction(`<@${author.id}>`)
				returnFunction(`<@${author.id}>`)
				returnFunction(`<@${author.id}>`)
				returnFunction(`<@${author.id}>`)
				returnFunction(`<@${author.id}>`)
				returnFunction(`<@${author.id}>`)
				returnFunction(`<@${author.id}>`)
				returnFunction(`<@${author.id}>`)
				returnFunction(`<@${author.id}>`)
				returnFunction(`<@${author.id}>`)
				returnFunction(`<@${author.id}>`)
				returnFunction(`<@${author.id}>`)
				returnFunction(`<@${author.id}>`)
				returnFunction(`<@${author.id}>`)
				returnFunction(`<@${author.id}>`)
				returnFunction(`<@${author.id}>`)
				returnFunction(`<@${author.id}>`)
				returnFunction(`<@${author.id}>`)
				returnFunction(`<@${author.id}>`)
				returnFunction(`<@${author.id}>`)
				returnFunction(`<@${author.id}>`)
				returnFunction(`<@${author.id}>`)
				returnFunction(`<@${author.id}>`)
				returnFunction(`<@${author.id}>`)
				returnFunction(`<@${author.id}>`)
				returnFunction(`<@${author.id}>`)
				returnFunction(`<@${author.id}>`)
				returnFunction(`<@${author.id}>`)
				returnFunction(`<@${author.id}>`)
				returnFunction(`<@${author.id}>`)
				returnFunction(`<@${author.id}>`)
				returnFunction(`<@${author.id}>`)
				returnFunction(`<@${author.id}>`)
				returnFunction(`<@${author.id}>`)
				returnFunction(`<@${author.id}>`)
				returnFunction(`<@${author.id}>`)
				returnFunction(`<@${author.id}>`)
				returnFunction(`<@${author.id}>`)
				returnFunction(`<@${author.id}>`)
				returnFunction(`<@${author.id}>`)
				returnFunction(`<@${author.id}>`)
				returnFunction(`<@${author.id}>`)
				returnFunction(`<@${author.id}>`)
				returnFunction(`<@${author.id}>`)
				returnFunction(`<@${author.id}>`)
				returnFunction(`<@${author.id}>`)
				returnFunction(`<@${author.id}>`)
				returnFunction(`<@${author.id}>`)
				returnFunction(`<@${author.id}>`)
				returnFunction(`<@${author.id}>`)
				returnFunction(`<@${author.id}>`)
				returnFunction(`<@${author.id}>`)
				returnFunction(`<@${author.id}>`)
				returnFunction(`<@${author.id}>`)
				returnFunction(`<@${author.id}>`)
				returnFunction(`<@${author.id}>`)
				returnFunction(`<@${author.id}>`)
				returnFunction(`<@${author.id}>`)
				returnFunction(`<@${author.id}>`)
				returnFunction(`<@${author.id}>`)
				returnFunction(`<@${author.id}>`)
				returnFunction(`<@${author.id}>`)
				returnFunction(`<@${author.id}>`)
				returnFunction(`<@${author.id}>`)
				returnFunction(`<@${author.id}>`)
			}, 2000);
		} else
		if(input.includes("ping me in")){
			returnFunction(`I'll just do it now <@${author.id}>`)
		} else 
		if(input.includes("what are you doing") || input.includes("what you doing")){
			returnFunction(`Nothing really, just being here right now`)
		} else 
		if(input == "whats the time" || input == "what's the time"){
			var today = new Date();
			var date = today.getMonth()+1+'-'+(today.getDate())+'-'+today.getFullYear();
			var hours = today.getHours();
			var time = hours + ":" + today.getMinutes() + ":" + today.getSeconds();
			var dateTime = date+' '+time;
			returnFunction(`For me it is ${time}, on ${date}`)
		} else 
		if(input == "what's your favourite book"){
			returnFunction(`uhhh, how bots work 101?\nmaybe time descending? idk`)
		} else 
		if(input == "who's your favourite member"){
			returnFunction(`Uh, uh, uh, my favorite is ||ERROR UNABLE TO LOAD||`)
		} else 
		if(input.includes("like update")){
			returnFunction(`Oh yeah, updates are great! (Unless my creator Orange Group#5362 messes them up...)`)
		} else 
		if(input.includes("like this update")){
			returnFunction(`Oh yeah, updates are great! (Unless my creator Orange Group#5362 messes them up...)`)
		} else 
		//Auto
		if(input != '' && !fs.existsSync(`./aiModule${this.module+1}.js`)){
			returnFunction(`Sorry <@${author.id}>, I don't know how to respond to that...`)
		}else 
		if(fs.existsSync(`./aiModule${this.module+1}.js`)){
			delete require.cache[require.resolve(`./aiModule${this.module+1}.js`)]
			aiModule = require(`./aiModule${this.module+1}.js`)
			aiModule.execute(input, author, returnFunction)
		}
	}
}

/*
 if(input == `TEXT`){
			returnFunction(`TEXT`)
		} else
*/