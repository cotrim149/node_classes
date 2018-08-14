const request = require('request');

var geocodeAddress = (address, callback) => {

  var encodedAddress = encodeURIComponent(address);

  request({
    url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    json: true
  }, (error, response, body) => {

    if (error) {
      callback('Unable to connect with google service', undefined);
    } else if (body.status === 'ZERO_RESULTS') {
      callback('Unable to find that address', undefined);
    } else if (body.status === 'INVALID_REQUEST') {
      callback('Address is invalid', undefined);
    } else if (body.status === 'OK') {
      const latitude = body.results[0].geometry.location.lat;
      const longitude = body.results[0].geometry.location.lng;

      callback(undefined, {
        address: body.results[0].formatted_address,
        latitude: latitude,
        longitude: longitude
      })
    }

  });
};


module.exports = {
  geocodeAddress,
}