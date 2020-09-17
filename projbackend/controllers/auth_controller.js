const User = require("../models/user");
const { validationResult } = require("express-validator");
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

    return res.status(200).json({ message: "User signed In" });
  });
};

// User signout

module.exports.signout = (req, res) => {};

// isAdmin

module.exports.isAdmin = (req, res) => {};

// isAuthenticated
module.exports.isAuthenticated = (req, res) => {};

// isSignedIn
module.exports.isSignedIn = (req, res) => {};
