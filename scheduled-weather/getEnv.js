require('dotenv').config()

module.exports.getEnvVars = () => ({
    DARK_SKY_API_KEY: process.env.DARK_SKY_API_KEY,
    EMAIL_ADDRESS: process.env.EMAIL_ADDRESS
})
