const twilio = require('twilio')
const keys = require('./twilioKeys')

module.exports = new twilio.Twilio(keys.accountSid, keys.authToken)
