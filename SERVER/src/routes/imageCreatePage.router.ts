import express from "express";
import imageCreatePageController from "../controllers/imageCreatePage.controller";
const imageCreateRouterPage = express.Router();
imageCreateRouterPage.post("/images", imageCreatePageController.imageCreate);

export default imageCreateRouterPage;
