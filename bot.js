const Discord = require('discord.js');
const bot = new Discord.Client();

bot.login(process.env.LOGIN
);

bot.on('ready', () => {
    console.log('Starting my shift!');
});

bot.on('message', message => {

    if(message.content === '!maven') {
        message.channel.send('What is it, Love?');
    }

});

bot.on('message', message => {

    if(message.content === '!mavenhotgoss') {
        message.channel.send('I heard Old Barfens has a ghoul in his basement... Said his wife hears it screaming in the night. After he wouldn\'nt got down to clear it she made him seal the entrance with blessed iron to keep it down there. Poor thing has to put cotton rags in her ears just to sleep. She told, me in confidence of course, that Ol\' Barfens himself has gone to the bottle to put him out during the wailing. I think he should have just gone down and gave it a great wack on the head, then again he is 86... She might be willing to give you a little coin to rid them of it... Goodness knows she\'s tired of hearing it go on in the night.')
    }

    
});

