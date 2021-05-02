'user strict';

const users = require('../models/users');

module.exports = async (req, res, next) => {
  try {
    if(!req.headers.authorization) { next('invalid login')}
    const token = req.headers.authorization.split(' ').pop();
    const validUser = await users.authenticateWithToken(token);
    req.user = validUser;
    req.token = validUser.token
    next()
  } catch (error) {
    console.log(error)
    res.status(403).send('Invalid Login');
  }
}
