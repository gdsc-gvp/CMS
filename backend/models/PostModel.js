const ClubModel = require('./ClubModel');

const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  postTitle: {
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
  clubId: {
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ClubModel'
  },
  postImage: {
    data: Buffer,
    contentType: String
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('PostData', postSchema);