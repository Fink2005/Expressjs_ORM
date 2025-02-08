import type { Request } from "express";
import { prisma } from "../../prisma/init.prisma";
import { BadRequestException } from "../common/helpers/error.helper";
const detailService = {
  imageInfo: async (req: Request) => {
    const { image_id } = req.params;
    const imageIdExist = await prisma.images.findUnique({
      where: {
        image_id: Number(image_id),
      },
      include: {
        users: {
          select: {
            user_name: true,
            avatar: true,
          },
        },
      },
    });
    if (!imageIdExist) {
      throw new BadRequestException("Lỗi không tìm thấy dữ liệu");
    }
    return imageIdExist;
  },
  commentInfo: async (req: Request) => {
    const { image_id } = req.params;
    const imageIdExist = await prisma.images.findUnique({
      where: {
        image_id: Number(image_id),
      },
    });
    if (!imageIdExist) {
      throw new BadRequestException("Lỗi không tìm thấy dữ liệu");
    }
    const commentExist = await prisma.comments.findMany({
      include: {
        users: {
          select: {
            user_name: true,
            avatar: true,
          },
        },
      },
      where: {
        comment_image_id: Number(image_id),
      },
    });
    if (!commentExist)
      throw new BadRequestException("Lỗi không tìm thấy người dùng");
    return commentExist;
  },
  commentCreate: async (req: Request) => {
    const { image_id, user_id, comment_content } = req.body;
    const imageIdExist = await prisma.images.findUnique({
      where: {
        image_id: Number(image_id),
      },
    });
    if (!imageIdExist) {
      throw new BadRequestException("Lỗi không tìm thấy dữ liệu");
    }
    const userExist = await prisma.users.findFirst({
      where: {
        user_id,
      },
    });
    if (!userExist)
      throw new BadRequestException("Lỗi không tìm thấy người dùng");

    const dataComment = await prisma.comments.create({
      data: {
        comment_user_id: user_id,
        comment_image_id: image_id,
        comment_content,
      },
    });

    return dataComment;
  },
  imageSavingOne: async (req: Request) => {
    const { user_id } = req.query;
    const userExist = await prisma.users.findFirst({
      where: {
        user_id: Number(user_id),
      },
    });
    if (!userExist) {
      throw new BadRequestException("Lỗi không tìm thấy người dùng");
    }
    const imageSaving = await prisma.saving_images.findFirst({
      where: {
        saving_image_user_id: Number(user_id),
      },
    });

    const newImageSaving = { ...imageSaving, saving: false };

    if (!imageSaving) return newImageSaving;

    newImageSaving.saving = !newImageSaving.saving;

    return newImageSaving;
  },
  imageCreatingOne: async (req: Request) => {
    const { user_id, image_id } = req.body;
    const imageIdExist = await prisma.images.findUnique({
      where: {
        image_id: Number(image_id),
      },
    });
    if (!imageIdExist) {
      throw new BadRequestException("Lỗi không tìm thấy dữ liệu");
    }
    const userExist = await prisma.users.findFirst({
      where: {
        user_id: Number(user_id),
      },
    });
    if (!userExist) {
      throw new BadRequestException("Lỗi không tìm thấy người dùng");
    }
    const imageSavingExist = await prisma.saving_images.findFirst({
      where: {
        saving_image_user_id: Number(user_id),
        saving_image_image_id: Number(image_id),
      },
    });

    if (imageSavingExist)
      throw new BadRequestException("Người dùng đã ưa thích");

    const imageGenerating = await prisma.saving_images.create({
      data: {
        saving_image_user_id: user_id,
        saving_image_image_id: image_id,
      },
    });
    return imageGenerating;
  },
};

export default detailService;
