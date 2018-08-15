const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

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


geocode.geocodeAddress(argv.address).then((location)=> {
  console.log(location.address);
  return weather.weatherOnLocation(location.latitude, location.longitude);

}).then( (weatherObject) => {
  console.log(`It's currently ${weatherObject.temperature}. It feels like ${weatherObject.apparentTemperature}`);

}).catch((errorMessage) => {
  console.log(errorMessage);
});

