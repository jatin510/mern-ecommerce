const router = require("express").Router();
const authController = require("../../controllers/auth_controller.js");
const { body, check, validationResult } = require("express-validator");

router.post(
  "/signup",
  [
    check("email", "email is not correct").isEmail(),
    check("password", "must be of 8 length").isLength({ min: 8 }),
  ],
  authController.signup
);
router.post(
  "/signin",
  [
    check("email", "email is required").isEmail(),
    check("password", "password is required").isLength({ min: 8 }),
  ],
  authController.signin
);
router.get("/signout", authController.signout);

module.exports = router;
