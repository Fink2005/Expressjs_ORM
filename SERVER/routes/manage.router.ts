import express from "express";
import manageController from "../controllers/manage.controller";

const manageRouter = express.Router();
// lay thong tin users
manageRouter.get("/manage/users/:user_id", manageController.userOne);
// lay danh sach anh da luu theo user id
manageRouter.get(
  "/manage/user-saved-image-list",
  manageController.imageSavedList
);
// lay danh sach anh da tao theo user id
manageRouter.get(
  "/manage/user-created-image-list",
  manageController.imageCreatedList
);
// xoa anh theo id
manageRouter.delete(
  "/manage/user-image/:image_id",
  manageController.imageDeleteOne
);

export default manageRouter;
