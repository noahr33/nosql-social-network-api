const Thought = require('../models')

module.exports = {

  // Get all thoughts
  async getThoughts(req, res) {
    try {
      const thoughts = await Thought.find()
      res.json(thoughts)
    } catch (err) {
      console.log(err)
      return res.status(500).json(err)
    }
  }

}