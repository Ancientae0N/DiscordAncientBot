module.exports = {
	name: 'whoami',
	description: 'Sends the user who the bot is, or what it does.',
	execute(message, args) {
		message.channel.send("I'm a bot created by ancientae0n. Use $help to see a set of duties I can fullfill :) ");
	},
};