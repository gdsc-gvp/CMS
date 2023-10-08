const ClubModel = require('./ClubModel');

const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  clubName: {
    required: true,
    type: String
  },
  postMessage: {
    required: true,
    type: String
  },
  likeCount: {
    required: true,
    type: Number
  },
  clubPublished: {
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ClubModel'
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('PostData', postSchema);