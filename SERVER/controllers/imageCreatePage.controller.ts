import type { Request, Response, NextFunction } from "express";
import { responeSuccess } from "../common/helpers/response.helper";
import imageCreatePageService from "../services/imageCreatePage.service";

const imageCreatePageController = {
  imageCreate: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const images = await imageCreatePageService.imageCreate(req);
      const resImages = responeSuccess(
        images,
        "Create image successfully",
        200
      );
      res.status(resImages.code).json(resImages);
    } catch (error) {
      next(error);
    }
  },
};

export default imageCreatePageController;
