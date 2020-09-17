const router = require("express").Router();
const userController = require("../../controllers/user_controller.js");

router.post("/signup", userController.signup);

module.exports = router;
