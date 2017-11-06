const https = require('https');

let requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step1.html'
};

function getAndPrintHTMLChunks(response) {
  console.log('Receiving chunk!');
  response.on('data', function(receivedChunk) {
    console.log(receivedChunk + '\n');
  })
}

https.get(requestOptions, getAndPrintHTMLChunks).end();
