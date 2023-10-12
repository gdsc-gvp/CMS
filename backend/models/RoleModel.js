const ClubModel = require('./ClubModel');
const StudentModel = require('./StudentModel');

const mongoose = require('mongoose');

const roleSchema = mongoose.Schema({
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
  },
  adminPrivilage: {
    required: true,
    type: Boolean
  }
})

module.exports = mongoose.model('RoleData', roleSchema);