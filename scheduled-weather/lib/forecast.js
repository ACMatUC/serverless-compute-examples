const DarkSky = require('dark-sky')

const darkSkyApiKey = process.env.DARK_SKY_API_KEY

/**
 * Get today's forecast from darksky.net and return as a string
 * 
 * @returns Promise<String>
 */
module.exports = () => {
    const darksky = new DarkSky(darkSkyApiKey)

    return new Promise((resolve, reject) => {
        darksky
            .latitude('39.130551')
            .longitude('-84.516222') // Cincinnati
            .get()
            .then(data => {
                // Construct the data string
                const result = `Currently it's ${data.currently.summary.toLowerCase()} and ${data.currently.temperature}°F.`
                resolve(result)
            })
            .catch(error => {
                reject(error)
            })
    })
}