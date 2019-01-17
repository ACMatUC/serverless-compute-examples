const AWS = require('aws-sdk')

const emailAddress = process.env.EMAIL_ADDRESS

/**
 * Send the given text as an email via AWS SES
 * 
 * @param emailData String
 * @returns Promise<Boolean>
 */
module.exports = (emailData) => {
    const ses = new AWS.SES()

    const parameters = {
        Destination: {
            ToAddresses: [emailAddress]
        },
        Message: {
            Body: {
                Text: {
                    Data: emailData
                }
            },
            Subject: {
                Data: "Today's Weather Report"
            }
        },
        Source: emailAddress
    }

    return new Promise((resolve, reject) => {
        const email = ses.sendEmail(parameters, (error, data) => {
            if (error) {
                reject(error)
            } else {
                resolve(data)
            }
        })
    })
}
