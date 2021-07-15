const fsLibrary  = require('fs')
fsLibrary.readFile('/twitterbot/last_mention_id.txt', 'utf8', (err, data) => {
    if (!err){
        console.log(data);
    }
})