'user strict';

module.exports = (capability) => {
  return (req, res, next) => {
    try {
      if(req.user.capabilities.includes(capability)){
        next();
      } else {
        res.status(403).send('Access Denied');
      }
    } catch (error) {
      console.log(error);
      next('Invalid Login');
    }
  };
};
