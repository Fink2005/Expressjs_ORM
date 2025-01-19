import express, { Router } from "express";
import authController from "../controllers/auth.controller";

const authRouter = express.Router();

// authRouter.post("/signin", authController.signin);
authRouter.post("/auth/signup", authController.signup);
authRouter.post("/auth/signin", authController.signin);

export default authRouter;
