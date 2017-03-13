var secret = require('./secret');
var Twitter = require('twitter');
var client = new Twitter(secret);

client.stream('statuses/filter', { track: '#SandboxBot' }, function(stream) {
    stream.on('data', function(tweet) {
      console.log(tweet.text);
    });
    stream.on('error', function(error) {
      console.log(error);
    });
  }
);
