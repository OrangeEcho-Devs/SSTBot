module.exports = {
	name:"aiModule1",
	module:1,
	execute(input, author, returnFunction){
		console.log(`AI Module ${this.module} loaded.`)

		if(input == 'why'){
			returnFunction(`Why are we still here? Just to suffer?`)
		} else 
		if(input == 'easter egg'){	
			returnFunction('Oh! You found it! Now, would you like an egg? :egg:')
		} else
		if(input == 'who are you'){
			returnFunction('I am OrangeEcho Stable!')
		} else
		/*if(input == 'good job'|| input == 'nice job'|| input =='you did well'){
            returnFunction('Thanks!')
		} else
		*/if(input.includes('come back')){
			returnFunction('Okay!')
		} else
		if(input.includes('hands up')){
			returnFunction(':raised_hands: Uhhh...')
		} else
		if(input.includes('why do you exist')){
			returnFunction('To moderate the server while the mods are away, of course! Also to help make life easier for them, especially Orange Group #5362 who has to code me all day and watch Echo sit on couch and laze around')
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