import express from "express";
import detailController from "../controllers/detail.controller";
const detailRouter = express.Router();
// lay thong tin anh va nguoi tao anh = id anh
detailRouter.get("/info/:image_id", detailController.imageInfo);
// lay thong tin binh luan theo id anh
detailRouter.get("/comments/:image_id", detailController.commentInfo);
// lay thong tin da luu theo id anh
detailRouter.get("/image-saving", detailController.imageSavingOne);
// tao binh luan cua nguoi dung voi id anh
detailRouter.post("/comments", detailController.commentCreate);
// tao luot thich theo user id va image id
detailRouter.post("/image-creating", detailController.imageCreatingOne);

export default detailRouter;
