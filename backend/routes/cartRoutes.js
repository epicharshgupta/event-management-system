const express = require("express");
const router = express.Router();

const {
  addToCart,
  getCart,
  removeFromCart
} = require("../controller/cartController");

router.post("/add", addToCart);

router.get("/", getCart);

router.delete("/:id", removeFromCart);

module.exports = router;