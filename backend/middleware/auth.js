const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) {
    return res.sendStatus(401);
  }

  jwt.verify(token, 'privateKey', (err, user) => {
    if (err) {
      res.sendStatus(403);
    }
    req.user = user;
    next();
  })
}

module.exports = auth;