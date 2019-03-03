const request = require('request');

var geocodeAddress = (address, callback) => {
  var addresses = encodeURIComponent(address);
  const api = 'AIzaSyC3SZrW4a9mK1iB7-YOeayEQPHOfNr_Flk'

  request({
    url:`https://maps.googleapis.com/maps/api/geocode/json?address=${addresses}&key=${api}`,
    json: true
  }, (error,response,body) => {
    if(error){
      callback('Unable to connect to serrvers');
    }else if(body.status === 'ZERO_RESULTS'){
      callback('There are no results to display');
    }else if(body.status === 'OK'){
      callback(undefined, {
        address:body.results[0].formatted_address,
        latitude:body.results[0].geometry.location.lat,
        longitude:body.results[0].geometry.location.lat
      });
    }
  })
}

module.exports = {
  geocodeAddress: geocodeAddress
}
