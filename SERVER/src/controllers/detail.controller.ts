import type { Request, Response, NextFunction } from "express";
import { responeSuccess } from "../common/helpers/response.helper";
import detailService from "../services/detail.service";
const detailController = {
  imageInfo: async (req: Request, res: Response, next: NextFunction) => {
    try {
      let image = await detailService.imageInfo(req);
      let resImage = responeSuccess(image, "Get image successfully", 200);
      res.status(resImage.code).json(resImage);
    } catch (error) {
      next(error);
    }
  },
  commentInfo: async (req: Request, res: Response, next: NextFunction) => {
    try {
      let image = await detailService.commentInfo(req);
      let resImage = responeSuccess(image, "Get comments successfully", 200);
      res.status(resImage.code).json(resImage);
    } catch (error) {
      next(error);
    }
  },
  commentCreate: async (req: Request, res: Response, next: NextFunction) => {
    try {
      let comment = await detailService.commentCreate(req);
      let resComment = responeSuccess(
        comment,
        "Post comment successfully",
        200
      );
      res.status(resComment.code).json(resComment);
    } catch (error) {
      next(error);
    }
  },
  imageCreatingOne: async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log('hello')
      let imageSaving = await detailService.imageCreatingOne(req);
      let resImageSaving = responeSuccess(
        imageSaving,
        "Post imageSaving successfully",
        200
      );
      res.status(resImageSaving.code).json(resImageSaving);
    } catch (error) {
      next(error);
    }
  },
  imageSavingOne: async (req: Request, res: Response, next: NextFunction) => {
    try {
      let imageSaving = await detailService.imageSavingOne(req);
      let resImageSaving = responeSuccess(
        imageSaving,
        "Post imageSaving successfully",
        200
      );
      res.status(resImageSaving.code).json(resImageSaving);
    } catch (error) {
      next(error);
    }
  },
};

export default detailController;
