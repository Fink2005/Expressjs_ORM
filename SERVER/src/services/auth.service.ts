import { BadRequestException } from "../common/helpers/error.helper.ts";
import { prisma } from "../../prisma/init.prisma.ts";
import jwt from "jsonwebtoken";
import express from "express";
import bcrypt from "bcrypt";
import passport from "passport";
import type { userInfoType } from "../common/types/users.ts";
import {
  ACCESS_TOKEN_SECRET,
  ACCESS_TOKEN_EXPIRED,
  REFRESH_TOKEN_SECRET,
  REFRESH_TOKEN_EXPIRED,
} from "../common/constant/app.constant.ts";
import type { SigninRes, SignupRes } from "../common/types/auth.ts";
const authService = {
  signUp: async (req: express.Request) => {
    const { user_name, email, password, age } = req.body;
    const userExist: userInfoType | null = await prisma.users.findFirst({
      where: {
        email,
      },
    });
    if (userExist) {
      throw new BadRequestException(`Email đã tồn tại`);
    }
    const encryptPassword = bcrypt.hashSync(password, 10);

    const newUser: SignupRes = await prisma.users.create({
      data: {
        user_name,
        email,
        password: encryptPassword,
        age,
      },
    });

    delete newUser.password;

    return newUser;
  },
  signIn: async (req: express.Request) => {
    const { email, password } = req.body;
    const userExist: userInfoType | null = await prisma.users.findFirst({
      where: {
        email,
      },
    });
    if (!userExist) throw new BadRequestException("Tài khoản không tồn tại");
    const isPassword = bcrypt.compareSync(password, userExist.password!);
    if (!isPassword) {
      throw new BadRequestException("Mật khẩu không chính xác");
    }
    const tokens = authService.createTokens(userExist.user_id);
    delete userExist?.password;
    const resUserSignIn: SigninRes = { ...userExist, ...tokens };
    return resUserSignIn;
  },
  google: async (req: express.Request) => {
    return "thu thoi";
  },
  createTokens: (userId: number) => {
    if (!userId) throw new BadRequestException("Lỗi token");
    if (!ACCESS_TOKEN_SECRET || !REFRESH_TOKEN_SECRET)
      throw new BadRequestException("Token secret is not defined");
    const accessToken = jwt.sign({ userId }, ACCESS_TOKEN_SECRET, {
      expiresIn: ACCESS_TOKEN_EXPIRED,
    });
    const refreshToken = jwt.sign({ userId: userId }, REFRESH_TOKEN_SECRET, {
      expiresIn: REFRESH_TOKEN_EXPIRED,
    });
    return {
      accessToken,
      refreshToken,
    };
  },
};

export default authService;
