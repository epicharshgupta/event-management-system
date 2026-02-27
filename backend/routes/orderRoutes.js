const express = require("express");
const router = express.Router();

const {
  createOrder,
  getUserOrders,
  updateOrderStatus
} = require("../controller/orderController");

router.post("/create", createOrder);

router.get("/:user", getUserOrders);

router.put("/:id", updateOrderStatus);

module.exports = router;