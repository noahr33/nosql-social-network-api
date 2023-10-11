const { Schema, model } = require('mongoose')
const reactionSchema = require('./schemas/reactions')
const { Timestamp } = require('bson')

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      min: 1,
      max: 280
    },
    username: {
      type: String,
      required: true
    },
    reactions: [reactionSchema]
  },
  {
    timestamps: true,
    toJSON: {
      getters: true,
      virtuals: true
    }
  },


)

thoughtSchema.virtual('reactionCount')
  .get(function () {
    return this.reactions.length
  })

const Thought = model('Thought', thoughtSchema)

module.exports = Thought