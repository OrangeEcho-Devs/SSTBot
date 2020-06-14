module.exports = {
  name: 'viewfile',
  aliases: ['file'],
  description: 'Views content of file given. Linux only.',
  mod:true,
  botmanager:true,
  essential:true,
	execute(message, args, client) {
      try {
        if(args.join(' ').startsWith('/') || args.join(' ').startsWith('\\')){
          respond('', '❌ Request denied.', message.channel)
          return;
        }else{}
        const { exec } = require("child_process");
        exec(`cat ${args.join(' ')}`, (error, stdout, stderr) => {
          respond('', `\`\`\`stdout:\n${stdout}\n=============\nstderr:\n${stderr}\`\`\`\n`, message.channel)
      });
      exec(`type ${args.join(' ')}`, (error, stdout, stderr) => {
        respond('', `\`\`\`stdout:\n${stdout}\n=============\nstderr:\n${stderr}\`\`\`\n`, message.channel)
    });        
    }catch(error) {
    respond('Error', 'Something went wrong.\n'+error+`\nMessage: ${message}\nArgs: ${args}\n`, message.channel)
    errorlog(error)
    // Your code broke (Leave untouched in most cases)
    console.error('an error has occured', error);
    }
    }}