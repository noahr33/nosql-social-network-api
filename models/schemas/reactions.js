const { Schema, Types } = require('mongoose')


const reactionSchema = new Schema(
  {
    reactionId: {
      type: Types.ObjectId,
      default: () => new ObjectId
    },
    reactionBody: {
      type: String,
      required: true,
      max: 280
    },
    username: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
)

module.exports = reactionSchema