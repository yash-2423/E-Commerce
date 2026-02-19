import express from "express";

import {
  loginController,
  registerController,
  forgotPasswordController ,
  testController  
} from "../controller/authController.js";
import { requireSignIn, isAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", registerController);
router.post("/login", loginController);
router.post("/forgot-password", forgotPasswordController); 
router.get("/test", requireSignIn, isAdmin, testController); // Testing protected route

export default router;
