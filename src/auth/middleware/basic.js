'user strict';

const User = require('../models/users');

module.exports = async (req, res, next) => {
  let {username, password} = req.body;  // changed to object syntax
  if(!username || !password){
    res.status(403).send('Not authorized');
    return 
  }
  try {
    req.user = await User.authenticateBasic(username, password)
    next();
  } catch(error) {
    console.log(error);
    res.status(403).send('Not authorized');
  }
}
