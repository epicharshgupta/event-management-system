const express = require("express");
const router = express.Router();

const {
  addProduct,
  getProducts,
  deleteProduct
} = require("../controller/productController");

router.post("/add", addProduct);

router.get("/", getProducts);

router.delete("/:id", deleteProduct);

module.exports = router;