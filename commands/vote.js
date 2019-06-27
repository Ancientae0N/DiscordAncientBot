var Discord = require('discord.js');
module.exports = {
    name: 'poll',
    args: 'true',
	description: 'Start votes of your choice and get the results!',
	async execute(message, args) {
        message.delete(0);
        let pollEmbed = new Discord.MessageEmbed()
            .setColor('#CD5C5C')
            .setTitle("Poll")
            .setDescription(args.join(" "))
            .setFooter("I am neutral. You have 25 seconds, go!")
        let msg = await message.channel.send(pollEmbed);
        await msg.react("✅") ;    
        await msg.react("❌") ;
        const filter = (reaction, user) => reaction.emoji.name === '✅' || reaction.emoji.name === '❌'
        const results =  await msg.awaitReactions(filter, { time: 25000 })
        var resultEmbed = new Discord.MessageEmbed()
                .setColor("#FFFF00")
                .setFooter("Gtfo now.")
                .setTitle("Poll results!")
                .setDescription("Result for the poll: "+ args.join(" "))
                .addField('✅ :' , results.get('✅').count-1 + " Votes")
                .addField('❌ :', results.get('❌').count-1 + " Votes")
        message.channel.send(resultEmbed);
        msg.delete(0);
	},
};