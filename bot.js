const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!'


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});


client.on('ready', () => {
  console.log('?[??????????????????????????????????]?');
  console.log('')
  console.log('            ?[????????????]?')
  console.log('              Bot Is Online')
  console.log('            ?[????????????]?')
  console.log('')
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log('')
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log('')
  console.log('?[????????????????????????????????????]?')
});


client.on("ready", async  => {
setInterval(function(){
client.channels.find('id', '491346280753266689').setName("༺");
client.channels.find('id', '491346280753266689').setName("༺W");
client.channels.find('id', '491346280753266689').setName("༺We");
client.channels.find('id', '491346280753266689').setName("༺Wel");
client.channels.find('id', '491346280753266689').setName("༺Welc");
client.channels.find('id', '491346280753266689').setName("༺Welco");
client.channels.find('id', '491346280753266689').setName("༺Welcom");
client.channels.find('id', '491346280753266689').setName("༺Welcome");
client.channels.find('id', '491346280753266689').setName("༺Welcome T");
client.channels.find('id', '491346280753266689').setName("༺Welcome To");
client.channels.find('id', '491346280753266689').setName("༺Welcome To E");
client.channels.find('id', '491346280753266689').setName("༺Welcome To EG");
client.channels.find('id', '491346280753266689').setName("༺Welcome To EGY");
client.channels.find('id', '491346280753266689').setName("༺Welcome To EGYP");
client.channels.find('id', '491346280753266689').setName("༺Welcome To EGYPT");
client.channels.find('id', '491346280753266689').setName("༺Welcome To EGYPT༻");
client.channels.find('id', '491346280753266689').setName("༺Welcome To EGYPT༻🌹");
client.channels.find('id', '491346280753266689').setName("༺Welcome To EGYPT༻🌹");
client.channels.find('id', '491346280753266689').setName("༺Welcome To EGYPT༻🌹");
  }, 3000);
});









 


client.on('ready', function(){
    var ms = 10000 ;
    var setGame = [' WELCOME ','EGYPT SERVER | EGYPT ','BY : شادري ','HAY [=',' Hi (='];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setGame[i],`https://www.twitch.tv/pythorxxx`);
    }, ms);

})








client.login(process.env.BOT_TOKEN);
