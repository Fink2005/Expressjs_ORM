import { responeSuccess } from "../common/helpers/response.helper";
import type { Request, Response, NextFunction } from "express";
import authService from "../services/auth.service";
import type { SigninRes, SignupRes } from "../common/types/auth";

const authController = {
  signup: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const authSignUp: SignupRes = await authService.signUp(req);
      const resAuthSignUp = responeSuccess(
        authSignUp,
        "Sign up successfully",
        200
      );
      res.status(resAuthSignUp.code).json(resAuthSignUp);
    } catch (error) {
      next(error);
    }
  },
  signin: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const authSignin: SigninRes = await authService.signIn(req);
      const resauthSignin = responeSuccess(
        authSignin,
        "Sign in successfully",
        200
      );
      res.status(resauthSignin.code).json(resauthSignin);
    } catch (error) {
      next(error);
    }
  },
  google: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const authSignin: SigninRes = await authService.google(req);
      const resauthSignin = responeSuccess(
        authSignin,
        "Sign in by google successfully",
        200
      );
      res.status(resauthSignin.code).json(resauthSignin);
    } catch (error) {
      next(error);
    }
  },
};

export default authController;
