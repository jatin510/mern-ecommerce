const User = require("../models/user");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");

//     User Signup
//
//     name : String  //r
//     lastname : String //r
//     email : email  //r
//     password: string  //r
//     userinfo : string // o
//     role : Number // 0 for user

module.exports.signup = (req, res) => {
  //   validation errors
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const user = new User(req.body);

  console.log(req.body);

  user.save((err, user) => {
    if (err) {
      return res.status(400).json({
        message: "Not able to save user",
        error: err,
      });
    }

    return res.status(200).json({
      name: user.name,
      email: user.email,
      id: user._id,
    });
  });
};

// User signin
// {

// }

module.exports.signin = (req, res) => {
  console.log("signin");
  //   validation errors
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  User.findOne({ email }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "User does not exist",
      });
    }

    if (!user.authenticate(password)) {
      return res.status(401).json({
        error: "Email and password does not match",
      });
    }

    // TODO
    // token creation
    const token = jwt.sign({ _id: user._id }, process.env.SECRET);
    // put token in cookie
    res.cookie("token", token, { expire: new Date() + 99999 });

    const { _id, name, email, role } = user;
    return res.status(200).json({
      message: "User signed In",
      token,
      user: { _id, email, name, role },
    });
  });
};

// User signout

module.exports.signout = (req, res) => {
  res.clearCookie("token");

  return res.status(200).json({
    message: "Signout successfully",
  });
};

// isAdmin
module.exports.isAdmin = (req, res, next) => {
  //if role === 0
  if (req.profile.role === 0) {
    return res.status(403).json({
      error: "You are not ADMIN",
    });
  }

  next();
};

// isAuthenticated
module.exports.isAuthenticated = (req, res, next) => {
  let checker = req.profile && req.auth && req.profile._id === req.auth._id;

  if (!checker) {
    return res.status(403).json({
      error: "ACCESS DENIED",
    });
  }

  next();
};

// isSignedIn
module.exports.isSignedIn = expressJwt({
  secret: process.env.SECRET,
  algorithms: ["HS256"],
  userProperty: "auth",
});
