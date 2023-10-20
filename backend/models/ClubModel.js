const mongoose = require('mongoose');

const clubSchema = new mongoose.Schema({
  clubName: {
    required: true,
    type: String
  },
  clubDescription: {
    required: true,
    type: String
  },
  clubImage: {
    type: String
  }
})

module.exports = mongoose.model('ClubData', clubSchema)