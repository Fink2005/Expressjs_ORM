import type { Request } from "express";
import { prisma } from "../prisma/init.prisma";
import { BadRequestException } from "../common/helpers/error.helper";
import type { userInfoType } from "../common/types/users";
import type { imagesType, savingImageType } from "../common/types/images";
const manageService = {
  userOne: async (req: Request) => {
    const { user_id } = req.params;
    const dataUserExist: userInfoType | null = await prisma.users.findFirst({
      where: {
        user_id: Number(user_id),
      },
    });
    if (!dataUserExist)
      throw new BadRequestException("Lỗi không tìm thấy người dùng");
    return dataUserExist;
  },
  imageSavedList: async (req: Request) => {
    const { user_id } = req.query;
    const userExist: userInfoType | null = await prisma.users.findFirst({
      where: {
        user_id: Number(user_id),
      },
    });
    if (!userExist) {
      throw new BadRequestException("Lỗi không tìm thấy người dùng");
    }
    const imageSaved: savingImageType[] = await prisma.saving_images.findMany({
      include: {
        images: {
          select: {
            image_url: true,
          },
        },
      },
      where: {
        saving_image_user_id: Number(user_id),
      },
    });

    return imageSaved;
  },
  imageCreatedList: async (req: Request) => {
    const { user_id } = req.query;
    const userExist = await prisma.users.findFirst({
      where: {
        user_id: Number(user_id),
      },
    });
    if (!userExist) {
      throw new BadRequestException("Lỗi không tìm thấy người dùng");
    }
    const imageSaved = await prisma.images.findMany({
      where: {
        image_user_id: Number(user_id),
      },
    });

    return imageSaved;
  },
  imageDeleteOne: async (req: Request) => {
    const { image_id } = req.params;
    await prisma.comments.deleteMany({
      where: {
        comment_image_id: Number(image_id),
      },
    });
    await prisma.saving_images.deleteMany({
      where: {
        saving_image_image_id: Number(image_id),
      },
    });

    await prisma.images.delete({
      where: {
        image_id: Number(image_id),
      },
    });

    return "Xóa thành công";
  },
};

export default manageService;
