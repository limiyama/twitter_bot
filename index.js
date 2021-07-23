const Twit = require( 'twit' );
const config = require('./config.js');
const Bot = new Twit(config);

console.log('Este bot está rodando...');

// array para armazenar tweets já respondidos
var tweetsRespondidos = [''];

// array para armazenar as respostas do bot
var respostasTweet = [''];

function encontrarTweets(){
    // filtrando  
    Bot.get("search/tweets", {q: 'oi @nomebot' }, (err, data) => {
        if (err) {
            console.log(err.message);
        } else {
            console.log('achou!');
            var tweetId = data.statuses[0].id_str;
            var username = data.statuses[0].user.screen_name;
            
            // selecionar aleatoriamente uma resposta para o tweet armazenada no respostasTweet[]
            var mostrarRespostas = respostasTweet[Math.floor((Math.random() * respostasTweet.length))];
  
            if (tweetsRespondidos.includes(tweetId)){
                console.log('Esse tweet já foi respondido!');
            } else {
                
                // mandando a reply
                Bot.post('statuses/update', Bot.post('statuses/update', { in_reply_to_status_id: tweetId, status: `@${username} ${mostrarRespostas}` }, function(err){
                    console.log('Respondeu ao: ', tweetId);
                    if (err) {
                        console.log(err.message);
                    }
                }))
            }
          
            // armazenando o tweet respondido para o array de tweetsRespondidos[]
            tweetsRespondidos.push(tweetId);
        }
    })
} setInterval(encontrarTweets, 60000);

