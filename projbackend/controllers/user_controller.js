const User = require("../models/user");

module.exports.getUser = async function (req, res) {
  try {
    console.log("id", req.params.id);

    let user = await User.findById(req.params.id);

    // console.log("user", user);

    return res.status(200).json(user);
  } catch (err) {
    console.log("error in finding user", err);
    return res.status(400).json({
      error: "No user was found in DB",
    });
  }
};

module.exports.updateUser = async function (req, res) {
  try {
    let user = await User.findById(req.params.id);

    await user.updateOne({ $set: req.body });

    let updatedUser = await User.findById(req.params.id);

    return res.status(200).json(updatedUser);
  } catch (err) {
    return res.status(400).json({
      error: "error in updating user",
    });
  }
};

//  TODO : purchase list
