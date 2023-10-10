const { User, Thought } = require('../models/index')

const users = [
  new User(
    {
      username: 'Noah33',
      email: 'noah33@gmail.com',
    },
    {
      username: 'Nick11',
      email: 'nick11@gmail.com'
    }
  )
]

const thoughts = [
  new Thought(
    {
      thoughtText: 'I like this site!',
      username: 'Noah33'
    },
    {
      thoughtText: 'I do not like this site',
      username: 'Nick11'
    }
  )
]

module.exports = {
  users,
  thoughts
}