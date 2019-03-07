const yargs = require('yargs');
const axios = require('axios');

const argv = yargs.options({
  a:{
    demand: true,
    alias: 'address',
    describe:'Address to fetch weather data',
    string: true
  }
})
.help()
.alias('help','h')
.argv;

var encodedaddress = encodeURIComponent(argv.address);
const api = 'ENTER YOUR API KEY';
var geocodeurl =`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedaddress}&key=${api}`;

axios.get(geocodeurl).then((response) => {
  if (response.data.status === 'ZERO_RESULTS') {
    throw new Error('Unable to find that address');
  }

var lat =response.data.results[0].geometry.location.lat;
var lng =response.data.results[0].geometry.location.lng;
var weatherurl = `https://api.darksky.net/forecast/846f7dbe6bbb0bcaf8d9f9f4647ce61f/${lat},${lng}`;
  console.log(response.data.results[0].formatted_address);
  return axios.get(weatherurl);
}).then((response)=>{
    var temperature = response.data.currently.temperature;
    var apparentTemperature = response.data.currently.apparentTemperature;
    console.log(`It's currently ${temperature}. It feels like ${apparentTemperature}.`);
}).catch((e) =>{
  if (e.code === 'ENOTFOUND') {
    console.log('URL not found');
  }else {
    console.log(e.message);
  }
});
