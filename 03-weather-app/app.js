const request = require('request');
const yargs = require('yargs');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for.',
      string: true,
    }
  })
  .help()
  .alias('help','h')
  .argv;

  var encodedAddress = encodeURIComponent(argv.address);
  console.log(encodedAddress);

request({
  url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
  json: true
}, (error, response, body) => {
  console.log(`Address: ${body.results[0].formatted_address}`);
  const latitude = body.results[0].geometry.location.lat;
  const longitude = body.results[0].geometry.location.lng;
  console.log(`Coordinate of address\n lat: ${latitude} lng: ${longitude}`);
});