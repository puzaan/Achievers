const catchAsync = require('express-async-handler')
const jwt = require('jsonwebtoken')
const User = require('../model/userModel');

// create middleware which will check if user has sent a token , it is not expire and it is valid.

const protect = catchAsync(async (req, res, next) => {
    let token;
  
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      // User has sent a token
  
      try {
        token = req.headers.authorization.split(" ")[1];
  
        console.log(req.headers.authorization);
  
        const decoded = jwt.verify(token, process.env.JWT_SECERET);
  
        req.user = await User.findById(decoded.id).select("-password");
  
        next();
      } catch (err) {
        console.log(err);
        res.status(401);
        throw new Error("Not Authorized! Token Failed!");
      }
    } else {
      res.status(401);
      throw new Error("Not Authorized! Token Failed!");
    }
  });


  const admin = (req, res, next) => {
    if (req.user && req.user.isAdmin) {
      next();
    } else {
      res.status(401);
      throw new Error("Not authorized as an admin");
    }
  };

  module.exports=  {protect, admin}
