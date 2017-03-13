var secret = require('./secret');
var Twitter = require('twitter');
var client = new Twitter(secret);

var statusObj = {
  status: 'This is a Tweet Bot'
};

client.post('statuses/update', statusObj, function(error, tweet, response){
    if(error)console.log(error);
    // Tweet body.
    console.log(tweet);
    // Raw response object.
    console.log(response);
  }
);
