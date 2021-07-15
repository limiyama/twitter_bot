const Twit = require( 'twit' );
const config = require('./config.js');
const Bot = new Twit(config);

console.log('Este bot está rodando...');
var tweetsRespondidos = ['1407536262634934272', '1407515477035921414', '1407143900209373184', ' 1407143936485990402', '1407515719030427652'];
var mimiAqui = [
  'aqui! https://t.co/PoOZbd5nNz',
  'aqui! https://t.co/NZivjSmElr',
  'aqui! https://t.co/qVXwRWUjqj',
  'aqui! https://t.co/d35q02vr68', 
  'aqui! https://t.co/m49S28aMEr',
  'aqui! https://t.co/WuOm4mkWHo',
  'aqui! https://t.co/SGhqoPE4kO',
  'aqui! https://t.co/tJTkTBDdF7',
  'aqui! https://t.co/PjDeKuMMU3',
  'aqui! https://t.co/1SxVoRGN1m',
  'aqui! https://t.co/j1CgZ9KaiE',
  'aqui! https://t.co/9oRmcTRTH3',
  'aqui! https://t.co/GnsJdnomCk',
  'aqui! https://t.co/MqVM9abAma',
  'aqui! https://t.co/7LKjJ1LMWh',
  'aqui! https://t.co/3l09LUVYRb',
  'aqui! https://t.co/EFSUpsCHie',
  'aqui! https://t.co/NKMUVKEmoX',
];

var kooAqui = [
  'aqui! https://t.co/jDSXkdB74u',
  'aqui! http://t.co/ftrPh5bQRy',
  'aqui! https://t.co/JoWqGHqz54',
  'aqui! https://t.co/374xJHZGZ7',
  'aqui! https://t.co/5P7ZCv4AVY',
  'aqui! https://t.co/OYw2sIfTIv',
  'aqui! https://t.co/6UyAn52p3j',
  'aqui! https://t.co/9hUHu7MJsb',
  'aqui! https://t.co/nzD2ZBl8F0',
  'aqui! https://t.co/VGOG3dnKEW',
  'aqui! https://t.co/gS9OWiwOpE',
  'aqui! https://t.co/apc3e4T5U1',
  'aqui! https://t.co/Ag9oUTJvrN',
  'aqui! https://t.co/oVrjQHqOBF',
];

var teteAqui = [
  'aqui! http://t.co/TXO3lT3mg4',
  'aqui! http://t.co/j4i8JS3KQg',
  'aqui! http://t.co/msHYMxXMRg',
  'aqui! https://t.co/c1FvdA3WBO',
  'aqui! https://t.co/yvwH4hvDED',
  'aqui! https://t.co/P2SJnTltL6',
  'aqui! https://t.co/d1UUC2wxvV',
  'aqui! https://t.co/ON4xFuGU3s',
  'aqui! https://t.co/F0lBD9m2Sk',
  'aqui! https://t.co/FBmUvh8cW2',
  'aqui! https://t.co/gJdqihrCQP',
  'aqui! https://t.co/3XKxJuNUck',
  'aqui! https://t.co/FcXEXJEZ7o',
  'aqui! https://t.co/2BxlLKfKRO',
  'aqui! https://t.co/9vNeJtA1vW',
  'aqui! https://t.co/zQez7R3U2k',
  'aqui! https://t.co/drvQbQ9uWU',
];

var jinAqui = [
  'aqui! https://t.co/dH3diPflj8',
  'aqui! https://t.co/dpwbjywNtc',
  'aqui! https://t.co/Cq8WVxD5kg',
  'aqui! https://t.co/j5lRc4BoR0',
  'aqui! https://t.co/3gGpBvqN10',
  'aqui! https://t.co/vzUpCeD2ez',
  'aqui! https://t.co/cqJqH7jdsR',
  'aqui! https://t.co/0RB8R0WMnC',
  'aqui! https://t.co/qYXlPG07yP',
  'aqui! https://t.co/GX8sVNlU0Q',
  'aqui! https://t.co/AzboAXB0zO',
  'aqui! https://t.co/d82UfAbreY',
  'aqui! https://t.co/uMc8siprSt',
];


var yoonAqui = [
  'aqui! http://t.co/0T4LdXZ6Uy',
  'aqui! http://t.co/LEgIX2Ylgw',
  'aqui! https://t.co/g6fqqt669T',
  'aqui! https://t.co/swele4Dr9B',
  'aqui! https://t.co/xYKdIkNRFj',
  'aqui! https://t.co/wZMN46oLWF',
  'aqui! https://t.co/Gjwj6tncat',
  'aqui! https://t.co/0IqDvZzJd5',
  'aqui! https://t.co/snSDy1qKEP',
  'aqui! https://t.co/k7mTxtGgEK',
  'aqui! https://t.co/smzVoTEx4a',
  'aqui! https://t.co/RpjHaOA3Yl',
  'aqui! https://t.co/KBhC8oigvG',
  'aqui! https://t.co/3lYsTYFLYZ',
  'aqui! https://t.co/vVLr6vOST9',
  'aqui! https://t.co/WARov8bKIh',
];

var namuAqui = [
  'aqui! https://t.co/AGn9ZFzhiI',
  'aqui! https://t.co/U5GBAZHfDE',
  'aqui! https://t.co/kuYpcUWWk2',
  'aqui! https://t.co/37HKM5aK5W',
  'aqui! https://t.co/av3MJJlv6k',
  'aqui! https://t.co/iRxbjV9P8r',
  'aqui! https://t.co/5voaELWEn5',
  'aqui! https://t.co/ce7Q19U2Eb',
  'aqui! https://t.co/me0YIaZ3HJ',
  'aqui! https://t.co/lq1HZ0JfKJ',
  'aqui! https://t.co/20gzXpZxP7',
];


var hobiAqui = [
  'aqui! https://t.co/9WjfFQURLj',
  'aqui! https://t.co/vh60F8Xm2J',
  'aqui! https://t.co/njZZjtSy10',
  'aqui! https://t.co/zfUVDGzZ5m',
  'aqui! https://t.co/i6Fp8vyyXq',
  'aqui! https://t.co/7v2PdJIr5e',
  'aqui! https://t.co/DRIG80DAVx',
  'aqui! https://t.co/R1c3rz9xQU',
  'aqui! https://t.co/Y4052FvfEp',
  'aqui! https://t.co/hl22f9ZWoy',
  'aqui! https://t.co/cZR3bnKzmM',
  'aqui! https://t.co/Yh1VCYHFlA',
  'aqui! https://t.co/25UH4W2L2s',
];

function encontrarJM(){
    Bot.get("search/tweets", {q: 'cade meu jimin @bangtaniesbot' }, (err, data) => {
        if (err) {
            console.log(err.message);
        } else {
            console.log('achou o jimin!');
            var tweetId = data.statuses[0].id_str;
            var username = data.statuses[0].user.screen_name;
            var exibirMin = mimiAqui[Math.floor((Math.random() * mimiAqui.length))];
  
            if (tweetsRespondidos.includes(tweetId)){
                console.log('Esse tweet já foi respondido!');
            } else {
                Bot.post('statuses/update', Bot.post('statuses/update', { in_reply_to_status_id: tweetId, status: `@${username} ${exibirMin}` }, function(err){
                    console.log('Respondeu ao: ', tweetId);
                    if (err) {
                        console.log(err.message);
                    }
                }))
            }
            tweetsRespondidos.push(tweetId);
        }
    })
} setInterval(encontrarJM, 60000);

function encontrarJK(){
    Bot.get("search/tweets", {q: 'cade meu jungkook @bangtaniesbot' }, (err, data) => {
        if (err) {
            console.log(err.message);
        } else {
            console.log('achou o jungkook!');
            var tweetId = data.statuses[0].id_str;
            var username = data.statuses[0].user.screen_name;
            var exibirKoo = kooAqui[Math.floor((Math.random() * kooAqui.length))];
  
            if (tweetsRespondidos.includes(tweetId)){
                console.log('Esse tweet já foi respondido!');
            } else {
                Bot.post('statuses/update', Bot.post('statuses/update', { in_reply_to_status_id: tweetId, status: `@${username} ${exibirKoo}` }, function(err){
                    console.log('Respondeu ao: ', tweetId);
                    if (err) {
                        console.log(err.message);
                    }
                }))
            }
            tweetsRespondidos.push(tweetId);
        }
    })
} setInterval(encontrarJK, 60000);

function encontrarTH(){
    Bot.get("search/tweets", {q: 'cade meu taehyung @bangtaniesbot' }, (err, data) => {
        if (err) {
            console.log(err.message);
        } else {
            console.log('achou o taehyung!');
            var tweetId = data.statuses[0].id_str;
            var username = data.statuses[0].user.screen_name;
            var exibirTete = teteAqui[Math.floor((Math.random() * teteAqui.length))];
  
            if (tweetsRespondidos.includes(tweetId)){
                console.log('Esse tweet já foi respondido!');
            } else {
                Bot.post('statuses/update', Bot.post('statuses/update', { in_reply_to_status_id: tweetId, status: `@${username} ${exibirTete}` }, function(err){
                    console.log('Respondeu ao: ', tweetId);
                    if (err) {
                        console.log(err.message);
                    }
                }))
            }
            tweetsRespondidos.push(tweetId);
        }
    })
} setInterval(encontrarTH, 60000);

function encontrarHS(){
    Bot.get("search/tweets", {q: 'cade meu hoseok @bangtaniesbot' }, (err, data) => {
        if (err) {
            console.log(err.message);
        } else {
            console.log('achou o hoseok!');
            var tweetId = data.statuses[0].id_str;
            var username = data.statuses[0].user.screen_name;
            var exibirHope = hobiAqui[Math.floor((Math.random() * hobiAqui.length))];
  
            if (tweetsRespondidos.includes(tweetId)){
                console.log('Esse tweet já foi respondido!');
            } else {
                Bot.post('statuses/update', Bot.post('statuses/update', { in_reply_to_status_id: tweetId, status: `@${username} ${exibirHope}` }, function(err){
                    console.log('Respondeu ao: ', tweetId);
                    if (err) {
                        console.log(err.message);
                    }
                }))
            }
            tweetsRespondidos.push(tweetId);
        }
    })
} setInterval(encontrarHS, 60000);

function encontrarSJ(){
    Bot.get("search/tweets", {q: 'cade meu seokjin @bangtaniesbot' }, (err, data) => {
        if (err) {
            console.log(err.message);
        } else {
            console.log('achou o seokjin!');
            var tweetId = data.statuses[0].id_str;
            var username = data.statuses[0].user.screen_name;
            var exibirJin = jinAqui[Math.floor((Math.random() * jinAqui.length))];
  
            if (tweetsRespondidos.includes(tweetId)){
                console.log('Esse tweet já foi respondido!');
            } else {
                Bot.post('statuses/update', Bot.post('statuses/update', { in_reply_to_status_id: tweetId, status: `@${username} ${exibirJin}` }, function(err){
                    console.log('Respondeu ao: ', tweetId);
                    if (err) {
                        console.log(err.message);
                    }
                }))
            }
            tweetsRespondidos.push(tweetId);
        }
    })
} setInterval(encontrarSJ, 60000);

function encontrarNJ(){
    Bot.get("search/tweets", {q: 'cade meu namjoon @bangtaniesbot' }, (err, data) => {
        if (err) {
            console.log(err.message);
        } else {
            console.log('achou o namjoon!');
            var tweetId = data.statuses[0].id_str;
            var username = data.statuses[0].user.screen_name;
            var exibirNam = namuAqui[Math.floor((Math.random() * namuAqui.length))];
  
            if (tweetsRespondidos.includes(tweetId)){
                console.log('Esse tweet já foi respondido!');
            } else {
                Bot.post('statuses/update', Bot.post('statuses/update', { in_reply_to_status_id: tweetId, status: `@${username} ${exibirNam}` }, function(err){
                    console.log('Respondeu ao: ', tweetId);
                    if (err) {
                        console.log(err.message);
                    }
                }))
            }
            tweetsRespondidos.push(tweetId);
        }
    })
} setInterval(encontrarNJ, 60000);

function encontrarYG(){
    Bot.get("search/tweets", {q: 'cade meu yoongi @bangtaniesbot' }, (err, data) => {
        if (err) {
            console.log(err.message);
        } else {
            console.log('achou o yoongi!');
            var tweetId = data.statuses[0].id_str;
            var username = data.statuses[0].user.screen_name;
            var exibirYoon = yoonAqui[Math.floor((Math.random() * yoonAqui.length))];
  
            if (tweetsRespondidos.includes(tweetId)){
                console.log('Esse tweet já foi respondido!');
            } else {
                Bot.post('statuses/update', Bot.post('statuses/update', { in_reply_to_status_id: tweetId, status: `@${username} ${exibirYoon}` }, function(err){
                    console.log('Respondeu ao: ', tweetId);
                    if (err) {
                        console.log(err.message);
                    }
                }))
            }
            tweetsRespondidos.push(tweetId);
        }
    })
} setInterval(encontrarYG, 60000);