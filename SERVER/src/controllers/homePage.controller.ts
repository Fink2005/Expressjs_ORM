import type { Request, Response, NextFunction } from "express";
import homePageService from "../services/homePage.service";
import { responeSuccess } from "../common/helpers/response.helper";
const homePageController = {
  imagesList: async (req: Request, res: Response, next: NextFunction) => {
    try {
      let images = await homePageService.imagesList(req);
      let resImages = responeSuccess(images, "get images successfully", 200);
      res.status(resImages.code).json(resImages);
    } catch (error) {
      next(error);
    }
  },

  imageFindOne: async (req: Request, res: Response, next: NextFunction) => {
    try {
      let images = await homePageService.imageFindOne(req);
      let resImages = responeSuccess(images, "find images successfully", 200);
      res.status(resImages.code).json(resImages);
    } catch (error) {
      next(error);
    }
  },
};

export default homePageController;
