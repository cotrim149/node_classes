const request = require('request');

var weatherOnLocation = (latitude, longitude, callback) => {
  request({
    url: `https://api.darksky.net/forecast/d23943496891b5dd99fcc787272aecd9/${latitude},${longitude}`,
    json: true
  }, (error, response, body) => {

    if (error) { 
      callback('Unable to connnect with Forecast.io server.', undefined);
    } else if (response.statusCode === 400){
      callback('Unable to fetch weather.', undefined);
    } else if (!error && response.statusCode === 200) {
      callback( undefined , {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    }

  });
};

module.exports = {
  weatherOnLocation
}