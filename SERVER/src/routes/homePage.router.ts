import express from "express";
import homePageController from "../controllers/homePage.controller";
import { protect } from "../common/middlewares/protect.middleware";
const homePageRouter = express.Router();

homePageRouter.get("/images", homePageController.imagesList);
homePageRouter.get("/images/query", homePageController.imageFindOne);
export default homePageRouter;
