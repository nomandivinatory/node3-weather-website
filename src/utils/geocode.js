const request = require('request')

const geocode = (address, callback) => {
    const url = 'http://api.positionstack.com/v1/forward?access_key=466428cfcad9853ddd2b81ea3a73a8ff&limit=1&query='+address
    
    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to geocode service!', undefined)
        } else if (body.error || body.data.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.data[0].latitude,
                longitude: body.data[0].longitude,
                location: body.data[0].label
            })
        }
    })
}

module.exports = geocode