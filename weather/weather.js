const request = require('request');

var getWeather = (lat,long,callback) =>{

  const request = require('request');

  request({
    url:`https://api.darksky.net/forecast/846f7dbe6bbb0bcaf8d9f9f4647ce61f/${lat},${long}`,
    json:true
  },(error,response,body) => {
    if (!error && response.statusCode === 200) {
      callback(undefined,{
        temperature:body.currently.temperature,
        apparentTemperature:body.currently.apparentTemperature
      });
    }else {
      callback('Unable to fetch data');
    }
  })

}

module.exports = {
  getWeather: getWeather
}
