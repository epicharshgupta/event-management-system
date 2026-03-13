const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const { isAdmin } = require("../middleware/roleMiddleware");

const {
  getAllUsers,
  getAllVendors,
  assignMembership,
  updateMembership,
  deleteUser,
  deleteVendor
} = require("../controller/adminController");

router.get("/users", authMiddleware, isAdmin, getAllUsers);

router.get("/vendors", authMiddleware, isAdmin, getAllVendors);

router.post("/membership", authMiddleware, isAdmin, assignMembership);

router.put("/membership/:id", authMiddleware, isAdmin, updateMembership);
router.delete("/users/:id",authMiddleware,isAdmin,deleteUser);
router.delete("/vendors/:id", authMiddleware, isAdmin, deleteVendor);
module.exports = router;