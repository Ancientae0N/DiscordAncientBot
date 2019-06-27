module.exports = {
	name: 'play',
	description: 'In progress',
	async execute(message, args) {
        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join();
            if(args[0] == 'dead'){
            const dispatcher = connection.play("https://gamepedia.cursecdn.com/dota2_gamepedia/5/5c/Chat_wheel_2017_all_dead.mp3")
            dispatcher.on('finish', () => {
            console.log('Finished playing!');
          });
            }
            if(args[0] == 'aiai'){
                const dispatcher = connection.play("https://gamepedia.cursecdn.com/dota2_gamepedia/d/d7/Chat_wheel_2017_ay_ay_ay.mp3")
                dispatcher.on('finish', () => {
                console.log('Finished playing!');
              });
            }
        
          } else {
            message.reply('You need to join a voice channel first!');

          }
        }
};