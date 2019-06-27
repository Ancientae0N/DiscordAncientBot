var Discord = require('discord.js');
var logger = require('winston');
const {
    prefix,
    token
} = require('./config.json');
const fs = require('fs');
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    // set a new item in the Collection
    // with the key as the command name and the value as the exported module
    bot.commands.set(command.name, command);
}

// Initialize Discord Bot
bot.once('ready', () => {
	console.log("Logged in")
});





bot.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();
    if (!bot.commands.has(commandName)) {
        message.reply("Sorry this command doesn't exist, use $help to see the set of commands which can be used.");
        return;
    }
    const command = bot.commands.get(commandName);
    if (command.args && !args.length) {

        return message.channel.send(`Please enter the additional arguments required ffs, ${message.author}!`);
    }
    try {
        command.execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('there was an error trying to execute that command!');
    }

});
bot.login(token);
/*request('https://api.opendota.com/api/teams', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body)
        for(var i = 0; i<body.length; i++){
            //console.log(body[i]);
            if(body[i].name == searchString){
                console.log(body[i])
                name = "Name: " + body[i].name + "\n";
                rating = "Rating: " + body[i].rating + "\n";
                wins = "Wins: " + body[i].wins + "\n";
                losses = "Losses: " + body[i].losses + "\n";
                
                bot.sendMessage({
                    to: channelID,
                    message: name + rating + wins + losses 
                });
                break;
            
                 


            }
        }
        if(i==body.length)
            bot.sendMessage({
            to: channelID,
            message: "Sorry, could not find the team you're looking for, make sure you enter it right."
        }); 
     }
     
})*/