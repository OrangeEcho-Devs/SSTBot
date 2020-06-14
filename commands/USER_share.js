module.exports = {
    name: 'share',
    aliases: ['transfer'],
    description: 'Share coins to another user',
    usage: '*daily',
    cooldown: 0,
    mod:false,
      execute: async (message, args, client) => {
        var user = message.mentions.users.first()
        var amount = args[1]
     
        if (!user) return message.reply('Who do I send the coins to ya doofus')
        if (!amount) return message.reply('How many coins???')
     
        var output = await eco.FetchBalance(message.author.id)
        if (output.balance < amount) return message.reply(`You only have ${output.balance} coins, don't try to kid me`)
     
        var transfer = await eco.Transfer(message.author.id, user.id, amount)
        message.reply(`Successful transaction of ${amount} from ${message.author.tag} to ${user.tag}\nYou now have ${transfer.FromUser} coins and they have ${transfer.ToUser}`);
    }
}