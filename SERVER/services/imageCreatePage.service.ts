import type { Request } from "express";
import { BadRequestException } from "../common/helpers/error.helper";
import { prisma } from "../prisma/init.prisma";
import type { userInfoType } from "../common/types/users";
import type { imagesCreateType } from "../common/types/images";

const imageCreatePageService = {
  imageCreate: async (req: Request) => {
    const { image_name, image_url, image_des, image_user_id } = req.body;
    if (!image_user_id) {
      throw new BadRequestException("Lỗi không tìm thấy người dùng");
    }
    const userExist: userInfoType | null = await prisma.users.findUnique({
      where: {
        user_id: image_user_id,
      },
    });
    if (!userExist) {
      throw new BadRequestException("Lỗi không tìm thấy người dùng");
    }
    const images: imagesCreateType = await prisma.images.create({
      data: {
        image_name,
        image_url,
        image_des,
        image_user_id,
      },
    });
    return images;
  },
};

export default imageCreatePageService;
