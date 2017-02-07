//discord variables
const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require("./config.json");


//reply message test
bot.on('message', (message) => {    
    if(message.author.bot) return;    
    if(!message.content.startsWith(config.prefix)) return;

    //handle the prefix for messages
    let command = message.content.split(" ")[0];
    command = command.slice(config.prefix.length);    

    let args = message.content.split(" ").slice(1);

    //partial calculator
    if (command === "add") {
        let numArray = args.map(n=> parseInt(n));
        let total = numArray.reduce( (p, c) => p+c);
        message.channel.sendMessage(total);
    }

    //make the bot say something
    if (command === "say") {
        message.channel.sendMessage(args.join(" "));
    }

    //test messages
    if(command === "test") {        
        message.channel.sendMessage('I am the detective');
    } else

    if (command === "foo") {
        message.channel.sendMessage("bar");
    }

});

bot.login(config.token);

