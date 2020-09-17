const router = require("express").Router();
const userController = require("../../controllers/user_controller");

router.use("/auth", require("./auth"));
router.use("/product", require("./product"));

module.exports = router;
