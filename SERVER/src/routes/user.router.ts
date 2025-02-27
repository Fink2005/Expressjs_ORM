import express from "express";
import userController from "../controllers/user.controller.ts";
import upload from "../common/multer/local.multer.js";
import uploadCloud from "../common/multer/cloud.multer.js";
import { protect } from "../common/middlewares/protect.middleware.ts";
const userRouter = express.Router();
// lay danh sach user
userRouter.get("/user-list", userController.userList);
// cap nhat user
userRouter.put("/user-update", userController.userUpdate);

userRouter.post(
    "/avatar-local",
    upload.single("avatar"),
    userController.userUploadLocal
  );
  userRouter.post(
    "/avatar-cloud",
    protect,
    uploadCloud.single("avatar"),
    userController.userUploadCloud
  );
export default userRouter;
