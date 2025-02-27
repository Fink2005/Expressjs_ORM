import jwt from "jsonwebtoken";
import { prisma } from "../../prisma/init.prisma.ts";
import { BadRequestException } from "../common/helpers/error.helper.ts";

import bcrypt from "bcrypt";
import express from "express";
import {
  ACCESS_TOKEN_EXPIRED,
  ACCESS_TOKEN_SECRET,
  REFRESH_TOKEN_EXPIRED,
  REFRESH_TOKEN_SECRET,
} from "../common/constant/app.constant.ts";
import type { SigninRes, SignupRes } from "../common/types/auth.ts";
import type { userInfoType } from "../common/types/users.ts";
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
    delete userExist?.facebookId;
    delete userExist?.googleId;
    const resUserSignIn: SigninRes = { ...userExist, tokens: tokens };
    return resUserSignIn;
  },
  google: async (req: express.Request) => {
    const { googleToken } = req.body;
    const decodeToken: any = jwt.decode(googleToken);
    const { sub: googleId, name, picture, email } = decodeToken;
    let userExist = await prisma.users.findFirst({
      where: {
        email,
      },
    });
    if (!userExist) {
      userExist = await prisma.users.create({
        data: {
          user_name: name,
          email,
          googleId,
        },
      });
    }
    const tokenGoogle = authService.createTokens(userExist.user_id);
    const responeGoogle = {
      user_name: userExist.user_name,
      email: userExist.email,
      avatar: userExist.avatar,
      avatar2: picture,
      tokens: tokenGoogle,
    };

    return responeGoogle;
  },
  facebook: async (req: express.Request) => {
    const { name, email, picture, userId } = req.body;

    let userExist = await prisma.users.findFirst({
      where: {
        email: email,
      },
    });
    if (!userExist) {
      userExist = await prisma.users.create({
        data: {
          email,
          user_name: name,
          facebookId: userId,
        },
      });
    }
    const tokens = authService.createTokens(userExist.user_id);
    const facebookRespone = {
      user_name: userExist.user_name,
      email: userExist.email,
      avatar: userExist.avatar,
      avatar2: picture,
      tokens: tokens,
    };
    return facebookRespone;
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
