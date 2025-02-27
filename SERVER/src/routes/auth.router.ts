import express, { Router } from "express";
import authController from "../controllers/auth.controller";
import passport from "passport";
const authRouter = express.Router();

// authRouter.post("/signin", authController.signin);
authRouter.post("/auth/signup", authController.signup);
authRouter.post("/auth/signin", authController.signin);
authRouter.post("/auth/google", authController.google);
authRouter.post("/auth/facebook", authController.facebook);

export default authRouter;
