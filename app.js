const yargs = require('yargs');
const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather');
const argv = yargs
  .options({
  a:{
    demand:true,
    alias:'address',
    describe: 'Address to fetc weather',
    string: true
  }
})
.help()
.alias('help','h')
.argv;

geocode.geocodeAddress(argv.address, (errormessage, results) => {
  if (errormessage) {
    console.log(errormessage);
  }else {
    console.log(results.address);
    weather.getWeather(results.latitude,results.longitude,(errormessage,weatherresults)=>{
      if (errormessage) {
        console.log(errormessage);
      }else {
        console.log(`It's currently ${weatherresults.temperature} at ${results.address} but feels like ${weatherresults.apparentTemperature}.`);
      }
    });
  }
});
