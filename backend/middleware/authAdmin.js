const RolesModel = require('../models/RolesModel');

const jwt = require("jsonwebtoken");

const authAdmin = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) {
    return res.sendStatus(401);
  }

  jwt.verify(token, 'privateKey', async (err, user) => {
    if (err) {
      res.sendStatus(403);
    }
    console.log(user.existingUser._id);
    const studentId = user.existingUser._id;
    console.log(studentId);
    const student = await RolesModel.find();
    console.log(student);
    let isAdmin = false;

    for (const role of student) {
      if (role.studentId == studentId) {
        if (role.adminPrivilage) {
          isAdmin = true;
          break;
        }
      }
    }
    
    if (!isAdmin) {
      return res.status(403).json( { message: "not a admin" } );
    }
    
    req.user = user;
    next();
  })
}

module.exports = authAdmin;