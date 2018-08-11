const request = require('request');

request({
  url: 'http://maps.googleapis.com/maps/api/geocode/json?address=Rua%204A%20ch%C3%A1cara%20112%20lote%2005',
  json: true
}, (error, response, body) => {
  console.log(`Address: ${body.results[0].formatted_address}`);
  const latitude = body.results[0].geometry.location.lat;
  const longitude = body.results[0].geometry.location.lng;
  console.log(`Coordinate of address\n lat: ${latitude} lng: ${longitude}`);
});