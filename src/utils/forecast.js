

const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=80d28bc2734205ed28e3495773c43b35&query=' + latitude + ',' + longitude
    console.log(url)
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
        } else {
            console.log(response.data)
            callback(undefined, response.body.current.temperature + ' It is currently ' + response.body.current.temperature + ' degress out. There is a ' + response.body.current.temperature + '% chance of rain.')
        }
    })
}

module.exports = forecast