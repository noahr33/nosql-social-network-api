const { Schema, Types } = require('mongoose')

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Types.ObjectId,
      default: () => new ObjectId
    },
    createdAt: {
      type: Date,
      default: Date.now()
    }
  }
)

module.exports = reactionSchema