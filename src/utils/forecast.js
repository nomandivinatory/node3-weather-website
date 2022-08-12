const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=33d35068f33ee77df697aaeff0026b93&query='+latitude+','+longitude
    
    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to forecast service!', undefined)
        } else if (body.error) {
            callback(body.error.info, undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0]+ '. It is '+body.current.temperature+' degrees out there. It feels like '+body.current.feelslike+' degrees in real.')
        }
    })
}

module.exports = forecast