import type { NextFunction, Request, Response } from "express";
import { responeSuccess } from "../common/helpers/response.helper";
import manageService from "../services/manage.service";

const manageController = {
  userOne: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const mangage = await manageService.userOne(req);
      const resManage = responeSuccess(
        mangage,
        "Get mangage successFully",
        200
      );
      res.status(resManage.code).json(resManage);
    } catch (error) {
      next(error);
    }
  },
  imageSavedList: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const mangage = await manageService.imageSavedList(req);
      const resManage = responeSuccess(mangage, "Get images successFully", 200);
      res.status(resManage.code).json(resManage);
    } catch (error) {
      next(error);
    }
  },
  imageCreatedList: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const mangage = await manageService.imageCreatedList(req);
      const resManage = responeSuccess(mangage, "Get images successFully", 200);
      res.status(resManage.code).json(resManage);
    } catch (error) {
      next(error);
    }
  },
  imageDeleteOne: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const mangage = await manageService.imageDeleteOne(req);
      const resManage = responeSuccess(
        mangage,
        "Delete image successfully",
        200
      );
      res.status(resManage.code).json(resManage);
    } catch (error) {
      next(error);
    }
  },
};

export default manageController;
