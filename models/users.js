//So starting on the users model first...

const { Schema, model } = require('mongoose');

// I need my username (obviously) and whatever post that was created under that username...

const usersSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },

    posts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'posts',
      },
    ],
  }
);

// How would I show friends and likes....? (research)

const users = model('users', usersSchema);

module.exports = users;
