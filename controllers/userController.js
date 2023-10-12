const { User } = require('../models')


module.exports = {

  // Get all users
  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users)
    } catch (err) {
      console.log(err)
      return res.status(500).json(err)
    }
  },

  async oneUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId })
      res.json(user)
    } catch (err) {
      console.log(err)
      return res.status(500).json(err)
    }
  },

  async createUser(req, res) {
    try {
      const newUser = await User.create(req.body)
      res.json(newUser)
    } catch (err) {
      console.log(err)
      return res.status(500).json(err)
    }
  },

  async updateUser(req, res) {
    try {
      const updateduUser = await User.findOneAndUpdate({ _id: req.params.userId }, { $set: req.body }, { new: true })
      res.json(updateduUser)
    } catch (err) {
      console.log(err)
      return res.status(500).json(err)
    }
  },

  async deleteUser(req, res) {
    try {
      await User.findOneAndDelete({ _id: req.params.userId })
      res.send('User was deleted')
    } catch (err) {
      console.log(err)
      return res.status(500).json(err)
    }
  },

  async addFriend(req, res) {
    try {
      const newFriend = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $addToSet: { friends: req.params.friendId } },
        { new: true })
      res.json(newFriend)
    } catch (err) {
      console.log(err)
      return res.status(500).json(err)
    }
  },

  async deleteFriend(req, res) {
    try {
      await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $pull: { friends: req.params.friendId } },
        { new: true })
      res.send('Friend removed!')
    } catch (err) {
      console.log(err)
      return res.status(500).json(err)
    }
  }

}