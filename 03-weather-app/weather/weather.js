const request = require('request');

var weatherOnLocation = (latitude, longitude) => {

  return new Promise((resolve, reject) => {
    request({
      url: `https://api.darksky.net/forecast/d23943496891b5dd99fcc787272aecd9/${latitude},${longitude}`,
      json: true
    }, (error, response, body) => {

      if (error) { 
        reject('Unable to connnect with Forecast.io server.');
      } else if (response.statusCode === 400){
        reject('Unable to fetch weather.');
      } else if (!error && response.statusCode === 200) {
        resolve({
          temperature: body.currently.temperature,
          apparentTemperature: body.currently.apparentTemperature
        });
      }
    });
    
  });
};

module.exports = {
  weatherOnLocation
}