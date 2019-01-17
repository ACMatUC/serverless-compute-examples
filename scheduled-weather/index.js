const getForecast = require('./lib/forecast')
const sendEmail = require('./lib/mail')

module.exports.handler = (event, context, callback) => {
    // Get the weather data
    getForecast()
        .then(weatherData => {
            console.log(`Got data: ${weatherData}`)
            return sendEmail(weatherData)
        })
        // Then, send the email and call the callback to finish
        .then(status => {
            console.log('Email sent.')
            callback(null, status)
        })
        .catch(error => {
            console.error(error)
            callback(error, null)
        })
}
