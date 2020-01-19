var https = require('follow-redirects').https;
var fs = require('fs');

var options = {
  'method': 'GET',
  'hostname': 'api.twitter.com',
  'path': '/1.1/search/tweets.json?q=btc',
  'headers': {
    'Authorization': 'OAuth oauth_consumer_key="5AQpfvMxPgyw7f8QpyUQ5j60r",oauth_token="901211820249284610-YKdheZYjvi5VizSFeeUCnLlgh1zb3io",oauth_signature_method="HMAC-SHA1",oauth_timestamp="1579424578",oauth_nonce="FFhntK3VkmI",oauth_version="1.0",oauth_signature="GfV7%2Fxs7n%2BXlxhoT27tjxT3lJyg%3D"'
  },
  'maxRedirects': 20
};

var req = https.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function (chunk) {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });

  res.on("error", function (error) {
    console.error(error);
  });
});

req.end();