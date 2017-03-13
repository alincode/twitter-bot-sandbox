var secret = require('./secret');
var Twitter = require('twitter');
var client = new Twitter(secret);

client.stream('statuses/filter', { track: '#SandboxBot' }, function(stream) {
    stream.on('data', function(tweet) {
      console.log(tweet.text);
      var statusObj = {
        status: `Hi ${tweet.user.screen_name}, How are you?`
      };

      client.post('statuses/update', statusObj, function(error, tweetReply, response){
          if(error)console.log(error);
          console.log(tweetReply.text);
        }
      );

    });
    stream.on('error', function(error) {
      console.log(error);
    });
  }
);
