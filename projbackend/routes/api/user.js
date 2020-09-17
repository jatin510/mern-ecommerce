const router = require("express").Router();
const UserController = require("../../controllers/user_controller");

router.get("/:id", UserController.getUser);
router.put("/update/:id", UserController.updateUser);

module.exports = router;
