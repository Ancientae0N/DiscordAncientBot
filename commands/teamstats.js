var request = require('request');
module.exports = {
	name: 'teamstats',
    description: "Gives rating and wins/losses stats of the team entered!",
    args: true,
    cooldown: 5,
	execute(message, args) {
        searchString = args.join(' ');
		request('https://api.opendota.com/api/teams', function (error, response, body) {
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
                        if(message.channel.type!='text')
                            message.reply("Here is your requested team stats for "+searchString + ":\n" + name+rating+wins+losses);
                        else
                            message.channel.send("Here is your requested team stats for "+searchString + ":\n" + name+rating+wins+losses)
                        break;
            }
        }
        if(i==body.length)
            message.reply("Sorry, could not find the team you're looking for, make sure you enter the full name right.") 
     }
     
})
	},
};