const request = require('request');

var geocodeAddress = (address) => {

  return new Promise((resolve, reject) => {
    var encodedAddress = encodeURIComponent(address);
    request({
      url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
      json: true
    }, (error, response, body) => {
      if (error) {
        reject('Unable to connect with google service');
      } else if (body.status === 'ZERO_RESULTS') {
        reject('Unable to find that address');
      } else if (body.status === 'INVALID_REQUEST') {
        reject('Address is invalid');
      } else if (body.status === 'OK') {

        const latitude = body.results[0].geometry.location.lat;
        const longitude = body.results[0].geometry.location.lng;
  
        resolve({
          address: body.results[0].formatted_address,
          latitude: latitude,
          longitude: longitude
        });
      }
    });
  });
};


module.exports = {
  geocodeAddress,
}