const User = require('../models')

module.exports = {

  // Get all users
  async getUsers(req, res) {
    try {
      const users = await User.find()
      res.json(users)
    } catch (err) {
      console.log(err)
      return res.status(500).json(err)
    }
  }

}