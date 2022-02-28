const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ThoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    match: /^[1-9][0-9]?$|^280$/
  },
  createdAt: {
    type: Date,
    defualt: Date.now,
    get: createdAtVal => dateFormat(createdAtVal),
    match: /.+\@.+\..+/
  },
  username: {
    type: String,
    required: true
  },
  reactions: [reactionSchema]
},
{
  toJSON: {
    virtuals: true,
    getters: true
  }
});

ThoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.reduce((total, reaction) => total + reaction.replies/length + 1, 0);
});



const Thought = model('Thought', ThoughtSchema);


module.exports = Thought;