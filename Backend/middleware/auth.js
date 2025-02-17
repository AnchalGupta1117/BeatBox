  const checkAuthentication = (req, res, next) => {
    if (req.session && req.session.userId) {
      req.body.userId = req.session.userId;
      next();
    } else {
      res.status(401).json({ message: "User not authenticated" });
    }
  };
  
  module.exports = { checkAuthentication };