const keys = require("../config/keys");

module.exports = (req, res, next) => {
  if (req.user.googleID != keys.adminID ) {
    return res.status(401).send({ error: 'Admin privilege required' })
  }

  next();
}
