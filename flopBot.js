const Discord = require('discord.js');
const client = new Discord.Client();




client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', async message => {

    if (message.content == 'yur')
    {
        message.react('🥶')
        message.channel.send('yurrrr');
    }

    if (message.member.voice.channel && ((message.content == 'flopBot pull up') || (message.content == 'FlopBot pull up'))) {

        const connection = await message.member.voice.channel.join();
        try{
            const dispatcher = connection.play('./tunes/get_electric.mp3');
            dispatcher.setVolume(0.5);

        }catch(err){console.log(err)}


    }

    if (message.content == 'flopBot gtfo')
    {
    try{
        var channel = message.member.voice.channel
        channel.leave();

    }
    catch(err) {
        console.log('didnt work')
    }
    }


    if ( (message.content == 'Sophie pic pls') ||
         (message.content == 'sophie pic pls') ||
         (message.content == 'sophie pls') ||
         (message.content == 'sophie') ||
         (message.content == 'soph') ||
         (message.content == 'Sophie pls') ||
         (message.content == 'Sophie') ||
         (message.content.includes('soph') ) )

    {
        var rand = Math.floor(Math.random() * 17 );
        console.log('rand number was')
        console.log(rand)
        message.channel.send({files: [`./sophie_pics/soph${rand}.jpeg`]});
        console.log('I heard that!')
    }

    var count = message.content.length;

    console.log(count);

    if (count >= 50){
        message.channel.send('Chill out bro.... thats a pretty long message')
    }



});

try {
    client.login('NzYwMjQ1NjA5OTAyNTA1OTk0.X3JP5g.t4Ig3Ro1BNmt0zkBBWvGymwvaqk');
    console.log('Logged in!');
    } catch {
    console.log('error');
    }
