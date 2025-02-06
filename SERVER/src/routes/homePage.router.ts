import express from "express";
import homePageController from "../controllers/homePage.controller";
const homePageRouter = express.Router();

homePageRouter.get("/images", homePageController.imagesList);
homePageRouter.get("/images/query", homePageController.imageFindOne);
export default homePageRouter;
