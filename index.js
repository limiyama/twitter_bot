const Twit = require( 'twit' );
const config = require('./config.js');
const Bot = new Twit(config);

console.log('Este bot está rodando...');

var tweetsRespondidos = [''];
var respostasTweet = [''];

function encontrarTweets(){
 
    Bot.get("search/tweets", {q: 'oi @nomebot' }, (err, data) => {
        if (err) {
            console.log(err.message);
        } else {
            console.log('achou!');
            var tweetId = data.statuses[0].id_str;
            var username = data.statuses[0].user.screen_name;
            var mostrarRespostas = respostasTweet[Math.floor((Math.random() * respostasTweet.length))];
  
            if (tweetsRespondidos.includes(tweetId)){
                console.log('Esse tweet já foi respondido!');
            } else {
                Bot.post('statuses/update', Bot.post('statuses/update', { in_reply_to_status_id: tweetId, status: `@${username} ${mostrarRespostas}` }, function(err){
                    console.log('Respondeu ao: ', tweetId);
                    if (err) {
                        console.log(err.message);
                    }
                }))
            }
          
            tweetsRespondidos.push(tweetId);
        }
    })
} setInterval(encontrarTweets, 60000);

