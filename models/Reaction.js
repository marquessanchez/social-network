// const { Schema, model } = require('mongoose');

// const ThoughtSchema = new Schema({
//   reactionId: {
//   type: Schema.Types.ObjectId,
//   default: () => new Types.ObjectId()
//   },
//   reactionBody: {
//     type: String,
//     required: true,
//     match: /^[1-9][0-9]?$|^280$/
//   },
//   username: {
//     type: String,
//     required: true
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//     get: createdAtVal => dateFormat(createdAtVal)
//   },
//   toJSON: {
//     getters: true
//   }
// });

// const ThoughtSchema = model('Thought', ThoughtSchema);


// module.exports = Thought;