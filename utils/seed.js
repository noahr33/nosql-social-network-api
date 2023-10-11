const { users, thoughts } = require('./data')
const { User, Thought } = require('../models')
const connect = require('../config/connection')

connect.on('error', (err) => err)

connect.once('open', () => {
  const seedDB = async () => {
    await User.deleteMany({})
    await Thought.deleteMany({})
    await User.insertMany(users)
    await Thought.insertMany(thoughts)
  }
  seedDB().then(() => { connect.close() })
})

