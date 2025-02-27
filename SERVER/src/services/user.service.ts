import { BadRequestException } from "../common/helpers/error.helper.ts";
import type { userInfoType } from "../common/types/users.ts";
import { prisma } from "../../prisma/init.prisma.ts";
import type { Request } from "express";
import { v2 as cloudinary } from "cloudinary";

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
  userUploadLocal:  async (req: Request) => {
    const file = req.file;
    if (!file) {
      throw new BadRequestException("Vui lòng gửi hình ảnh");
    }
    

    console.log('hello')
    return {
      folder: "images/",
      filename: file.filename,
      imgUrl: `images/${file.path}`,
    };
  },
  userUploadCloud:  async (req: Request) => {
    const file = req.file;
    if (!file) {
      throw new BadRequestException("Vui lòng gửi hình ảnh");
    }
    const userId = req.user?.user_id;
    // Configuration
    cloudinary.config({
      cloud_name: "dwzi1o7b4",
      api_key: "586233646131472",
      api_secret: "YVH3Y5PKslaguH-qJtY8YKmYO7A", // Click 'View API Keys' above to copy your API secret
    });
    const uploadResult: any = await new Promise((resolve) => {
      cloudinary.uploader
        .upload_stream({ folder: "images" }, (error, uploadResult) => {
          return resolve(uploadResult);
        })
        .end(file.buffer);
    });
    await prisma.users.update({
      where: {
        user_id: Number(userId),
      },
      data: {
        avatar: uploadResult.secure_url,
      },
    });
    return {
      folder: uploadResult.folder,
      filename: file.filename,
      imgUrl: uploadResult.secure_url,
    };
  },
};
export default userService;
