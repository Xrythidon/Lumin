import express from "express";
const router = express.Router();
import {authUser, registerUser, getUserProfile} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

// @desc    Fetch All Products
// @route   GET /api/products
// @access  Public
router.route("/").post(registerUser)
router.post("/login", authUser)
router.route("/profile").get(protect, getUserProfile)

export default router;