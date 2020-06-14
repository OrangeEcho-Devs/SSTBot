module.exports = {
	name: 'reloadaimodules',
	description: 'Reloads aiModules',
	botmanager:true,
	mod:true,
	execute(message, args, client) {
		currentLoop = 1
		if(fs.existsSync(`./aiModule.js`)){
			delete require.cache[require.resolve(`../aiModule.js`)]
			respond('','aiModule loaded.', message.channel)
		}
		reloadAiModules = function(currentLoop){
			if(fs.existsSync(`./aiModule${currentLoop}.js`)){
				delete require.cache[require.resolve(`../aiModule${currentLoop}.js`)]
				respond('','aiModule '+currentLoop+' loaded.', message.channel)
				currentLoop = currentLoop +1
				reloadAiModules(currentLoop)
			}
		}
		reloadAiModules(currentLoop)
	},
};