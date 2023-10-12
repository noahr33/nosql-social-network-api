const { Thought, User } = require('../models')

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
  },

  async oneThought(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtId })
      res.json(thought)
    } catch (err) {
      console.log(err)
      return res.status(500).json(err)
    }
  },

  async createThought(req, res) {
    try {
      await Thought.create(req.body)
        .then((createdThought) => {
          return User.findOneAndUpdate(
            { _id: req.body.userId },
            { $push: { thoughts: createdThought._id } },
            { new: true }
          )
        })
      res.send(`You're thought was posted!`)
    } catch (err) {
      console.log(err)
      return res.status(500).json(err)
    }
  },

  async updateThought(req, res) {
    try {
      const updatedThought = await Thought.findOneAndUpdate({ _id: req.params.thoughtId }, { $set: req.body }, { new: true })
      res.json(updatedThought)
    } catch (err) {
      console.log(err)
      return res.status(500).json(err)
    }
  },

  async deleteThought(req, res) {
    try {
      await Thought.findOneAndDelete({ _id: req.params.thoughtId })

      res.send('Thought was deleted')
    } catch (err) {
      console.log(err)
      return res.status(500).json(err)
    }
  },

  async addReaction(req, res) {
    try {
      const newReaction = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $addToSet: { reactions: req.body } },
        { new: true })
      res.json(newReaction)
    } catch (err) {
      console.log(err)
      return res.status(500).json(err)
    }
  },

  async deleteReaction(req, res) {
    try {
      await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $pull: { reactions: { reactionId: req.params.reactionId } } },
        { new: true })
      res.send('Reaction removed!')
    } catch (err) {
      console.log(err)
      return res.status(500).json(err)
    }
  }
}

