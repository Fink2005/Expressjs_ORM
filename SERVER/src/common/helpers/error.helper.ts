import jwt from "jsonwebtoken";
import type {
  ErrorRequestHandler,
  Request,
  Response,
  NextFunction,
} from "express";
import multer from "multer";

import { responeError } from "./response.helper";
type customErrMiddleware = ErrorRequestHandler & {
  message: string;
  code: number;
  stack: null;
};

export const handleError = (
  err: customErrMiddleware,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof jwt.JsonWebTokenError) {
    (err as any).code = 401;
  }

  if (err instanceof jwt.TokenExpiredError) {
    (err as any).code = 403;
  }
  if (err instanceof multer.MulterError) {
    (err as any).code = 400;
  }

  const resData = responeError(err.message, err.code, err.stack);
  res.status(resData.code).json(resData);
  next();
};
export class BadRequestException extends Error {
  code: number;
  constructor(message = "BadRequestException") {
    super(message);
    this.code = 400;
  }
}

export class ForbiddenException extends Error {
  code: number;
  constructor(message = "ForbiddenException") {
    super(message);
    this.code = 403;
  }
}

export class UnauthorizationException extends Error {
  code: number;
  constructor(message = "UnauthorizationException") {
    super(message);
    this.code = 401;
  }
}

//still in progress
