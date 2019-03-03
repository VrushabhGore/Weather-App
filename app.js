const yargs = require('yargs');
const geocode = require('./geocode/geocode.js');

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

geocode.geocodeAddress(argv.address);
