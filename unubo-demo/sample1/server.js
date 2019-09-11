const express = require('express');
const app = express();
const request = require('request');


app.use(express.static('public'));

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
app.get('/data', function(request, response) {
  getJson(request.query.keyword)
  .then((data) => response.send(data))
});

app.listen(process.env.PORT, function() {
  console.log('listening on port ' + this.address().port);
});



function getJson(key) {

  const options = {
    url: 'https://api.github.com/search/repositories',
    method: 'GET',
    headers: {'User-Agent': 'nodetest'},
    qs: { q: key}
  }

  return new Promise((resolve, reject) => {
    request(options, function (error, response, body) {
      resolve(body);
    })
  })
  
}
