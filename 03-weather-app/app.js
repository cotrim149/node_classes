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

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
  if (errorMessage) {
    console.log(errorMessage);
  } else {
    console.log(results.address);

    weather.weatherOnLocation(results.latitude, results.longitude, (errorMessage, weatherObject) => {
      if (errorMessage) {
        console.log(errorMessage );
      } else {
        console.log(`It's currently ${weatherObject.temperature}. It feels like ${weatherObject.apparentTemperature}`);
      }
    });

  }
});

