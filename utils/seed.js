const { users, thoughts } = require('./data')
const { User, Thought } = require('../models')
const mongoose = require('mongoose')
const connect = require('../config/connection')

connect.once('open', () => {
  const seedDB = async () => {
    await User.deleteMany({})
    await Thought.deleteMany({})
    await User.insertMany(users)
    await Thought.insertMany(thoughts)
  }
  seedDB().then(() => { connect.close() })
})

