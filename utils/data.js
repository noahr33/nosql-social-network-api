const { User, Thought } = require('../models/index')

const users = [
  {
    username: 'Noah33',
    email: 'noah33@gmail.com',
  },
  {
    username: 'Nick11',
    email: 'nick11@gmail.com'
  }
]

const thoughts = [
  {
    thoughtText: 'I like this site!',
    username: 'Noah33'
  },
  {
    thoughtText: 'I do not like this site',
    username: 'Nick11'
  }
]

module.exports = {
  users,
  thoughts
}