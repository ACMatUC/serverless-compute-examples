module.exports.handler = (event, context, callback) => {
    const body = { message: 'Hello, world!' }
    const response = {
        statusCode: 200,
        body: JSON.stringify(body)
    }

    callback(null, response)
}
