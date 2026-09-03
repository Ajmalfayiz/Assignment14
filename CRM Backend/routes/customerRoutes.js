const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  validateCustomer,
  validateCustomerUpdate,
} = require("../middleware/validationMiddleware");

const {
  createCustomer,
  getCustomers,
  getCustomer,
  updateCustomer,
  deleteCustomer,
} = require("../controllers/customerController");


router.post(
  "/",
  protect,
  validateCustomer,
  createCustomer
);

router.get(
  "/",
  protect,
  getCustomers
);

  router.get(
    "/:id",
    protect,
    getCustomer
  );

router.put(
  "/:id",
  protect,
  validateCustomerUpdate,
  updateCustomer
);

router.delete(
  "/:id",
  protect,
  deleteCustomer
);

module.exports = router;