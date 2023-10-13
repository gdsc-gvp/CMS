const RolesModel = require('../models/RoleModel');
const mongoose = require('mongoose');

const jwt = require("jsonwebtoken");

const authAdmin = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const clubId = req.body.clubId;
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) {
    return res.sendStatus(401);
  }

  jwt.verify(token, 'privateKey', async (err, user) => {
    if (err) {
      res.sendStatus(403);
    }
    const student = await RolesModel.find( { studentId: new mongoose.Types.ObjectId(user.existingUser._id) } );
    let isAdmin = student[0].adminPrivilage && (student[0].clubId == clubId);
    if (!isAdmin) {
      return res.status(403).json( { message: "not a admin" } );
    }
    
    req.user = user;
    next();
  })
}

module.exports = authAdmin;