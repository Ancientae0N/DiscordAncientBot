module.exports = {
	name: 'queue',
	description: 'A good luck message before queuing.',
	execute(message, args) {
		message.channel.send("Me and the boys before queuing~", {files: ["meandtheboys.png"]});
	},
};