const https = require('https');

const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step2.html'
};

function getAndPrintHTML (whatevs) {
  https.get(whatevs, function(res) {
    let result="";
    res.setEncoding('utf8');
    res.on('data', function(otherThing) {
      result += otherThing;
    })
    res.on('end', function() {
    console.log(result);
    })
  });
}

getAndPrintHTML(requestOptions);
