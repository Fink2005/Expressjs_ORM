import { BadRequestException } from "../common/helpers/error.helper.ts";
import type { userInfoType } from "../common/types/users.ts";
import { prisma } from "../prisma/init.prisma.ts";
import type { Request } from "express";
const userService = {
  userUpdate: async (req: Request) => {
    const { user_id, user_name, email, password, age, avatar } = req.body;
    const userExist: userInfoType | null = await prisma.users.findFirst({
      where: {
        user_id,
      },
    });

    if (!userExist) {
      throw new BadRequestException("Lỗi không tìm thấy người dùng");
    }

    if (email) {
      const emailExists: userInfoType | null = await prisma.users.findFirst({
        where: {
          email,
        },
      });
      if (emailExists) {
        throw new BadRequestException("Tài khoản email đã tồn tại");
      }
    }
    const user: userInfoType = await prisma.users.update({
      where: {
        user_id: user_id,
      },
      data: {
        user_name,
        email,
        password,
        avatar,
        age,
      },
    });

    return user;
  },
  userList: async () => {
    const dataUser: userInfoType[] = await prisma.users.findMany();
    return dataUser;
  },
};
export default userService;
