module.exports = {
  name:'events',
	execute(message) {
    return;
    console.log('Started event')
    if (message.author.bot)return;
    console.log('Not a bot')
    try{



        //Shot on iphone
        try{
          if (message.channel.id != '616472674406760448')return;
          const content = message.content.toLowerCase();
          if (message.attachments.size != '0'){
            if (!content.includes(`iphone`)){
              message.reply('please specify the iPhone used to shoot the picture.');message.delete();return;}else
            {
            message.react('❤️');
            message.react('👍');
          }}
          }catch{}
        
        
        {
           if(message.content.includes('testevent')){
          message.channel.send('Event loaded!')
        }
        }
       



  }catch(error) {
    console.error('an error has occured', error);
    }
  }}