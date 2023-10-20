const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String
  },
  email: {
    required: true,
    type: String
  },
  password: {
    type: String
  },
  profile: {
    type: String
  }
})

module.exports = mongoose.model('StudentData', studentSchema);