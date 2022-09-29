const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const UserSchema = new Schema(
  {
    userName: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    createdBy: {
      type: String,
      required: true,
      trim: true
    },
    // createdAt: {
    //   type: Date,
    //   default: Date.now,
    //   get: createdAtVal => dateFormat(createdAtVal)
    // },
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought'
      }
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    ]
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    // prevents virtuals from creating duplicate of _id as `id`
    id: false
  }
);

// get total count of thoughts and reactions on retrieval
UserSchema.virtual('friendCount').get(function () {
  return this.thoughts.reduce(
    (total, friends) => total + friends.reactions.length + 1, 0);
});

const User = model('User', UserSchema);

module.exports = User;