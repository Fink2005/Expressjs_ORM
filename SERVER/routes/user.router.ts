import express from "express";
import userController from "../controllers/user.controller.ts";
const userRouter = express.Router();
// lay danh sach user
userRouter.get("/user-list", userController.userList);
// cap nhat user
userRouter.put("/user-update", userController.userUpdate);

export default userRouter;
