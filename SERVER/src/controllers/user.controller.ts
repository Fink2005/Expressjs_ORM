import type { Request, Response, NextFunction } from "express";
import userService from "../services/user.service.ts";
import { responeSuccess } from "../common/helpers/response.helper.ts";

const userController = {
  userList: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const users = await userService.userList();
      const resUsers = responeSuccess(users, "Get users successFully", 200);
      res.status(resUsers.code).json(resUsers);
    } catch (error) {
      next(error);
    }
  },
  userUpdate: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const users = await userService.userUpdate(req);
      const resUsers = responeSuccess(users, "Update user successFully", 200);
      res.status(resUsers.code).json(resUsers);
    } catch (error) {
      next(error);
    }
  },
};
export default userController;
