const ClubModel = require('./ClubModel');
const StudentModel = require('./StudentModel');

const mongoose = require('mongoose');

const rolesSchema = mongoose.Schema({
  clubId: {
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ClubModel'
  },
  studentId: {
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: 'StudentModel'
  },
  roleName: {
    required: true,
    type: String
  }
})

module.exports = mongoose.model('RolesData', rolesSchema);