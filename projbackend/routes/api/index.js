const router = require("express").Router();
const userController = require("../../controllers/user_controller");

router.use("/auth", require("./auth"));

module.exports = router;
