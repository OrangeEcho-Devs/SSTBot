# Functions

## respond function
This function lets you send a message in an embed. You have many options when sending it.

EXAMPLE: `respond('Notice', 'This is an example notice.', message.channel)`

This example would send an embed with the title "Notice" and the content of it would be "This is an example notice.". It would also send the embed to the channel where the message was sent.

USAGE: `respond([embedTitle(String)],  [embedContent(String)],  [sendTo(Channel/User)],  [color(String)(Optional)],  [footerText(String)(Optional)],  [imageURL(String)])`

### PARAMETERS
```
[embedTitle(String)] 
[embedContent(String)]  
[sendTo(Channel/User)]  
[color(String)(Optional)]  
[footerText(String)(Optional)]  
[imageURL(String)]
```

## errorlog function
This function sends an embed with error info to the bot log. 

EXAMPLE: `errorlog(err)`

USAGE: ```errorlog([error(String)])```

### PARAMETERS
```
[error(String)] 
```

## modaction function
This function sends an embed with information about a command used as a "mod action". It sends to the mod log.

EXAMPLE: `modaction(command.name, message.author.tag, message.channel.name, message.content)`

USAGE: ```errorlog([commandName(String)], [messageAuthor(String)], [channelRanIn(String)], [fullCommandMessage(String)])```

### PARAMETERS
```
[commandName(String)]
[messageAuthor(String)]
[channelRanIn(String)]
[fullCommandMessage(String)]
```

## getCommandList function
This function gets the list of commands organized by category.

EXAMPLE: `Example needed.`

USAGE: ```const result = errorlog()```

### PARAMETERS
```
N/A.
```
