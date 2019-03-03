const request = require('request');

var geocodeAddress = (address) => {
  var addresses = encodeURIComponent(address);
  const api = 'AIzaSyC3SZrW4a9mK1iB7-YOeayEQPHOfNr_Flk'

  request({
    url:`https://maps.googleapis.com/maps/api/geocode/json?address=${addresses}&key=${api}`,
    json: true
  }, (error,response,body) => {
    if(error){
      console.log('Unable to connect to serrvers');
    }else if(body.status === 'ZERO_RESULTS'){
      console.log('There are no results to display');
    }else if(body.status === 'OK'){
    console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
    console.log(`Latitude: ${body.results[0].geometry.location.lng}`);
  }
  })
}

module.exports = {
  geocodeAddress: geocodeAddress
}
