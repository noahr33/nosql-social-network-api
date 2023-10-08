const { connect, default: mongoose } = require('mongoose')

connect('mongodb://127.0.0.1:27017/social_networkDB')

module.exports = mongoose.connection