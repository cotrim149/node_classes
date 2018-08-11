const request = require('request');

request({
  url: 'http://maps.googleapis.com/maps/api/geocode/json?address=Rua%204A%20ch%C3%A1cara%20112%20lote%2005',
  json: true
}, (error, response, body) => {
  console.log(body);
});