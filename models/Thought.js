const { Schema, model } = require('mongoose')
const reactionSchema = require('./schemas/reactions')

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      min: 1,
      max: 280
    },
    createdAt: {
      date: { type: Date, default: Date.now },
    },
    username: {
      type: String,
      required: true
    },
    reactions: [reactionSchema]
  }
)

thoughtSchema.virtual('reactionCount')
  .get(function () {
    return this.reactions.length
  })

const Thought = model('Thought', thoughtSchema)

module.exports = Thought