const express = require("express");

const router = express.Router();

const {
  registerUser,
  loginUser,
  getUser,
} = require("../controllers/authController");

const protect = require("../middleware/authMiddleware");

const {
  validateRegister,
  validateLogin,
} = require("../middleware/validationMiddleware");


router.post(
  "/register",
  validateRegister,
  registerUser
);

router.post(
  "/login",
  validateLogin,
  loginUser
);

router.get(
  "/me",
  protect,
  getUser
);

module.exports = router;