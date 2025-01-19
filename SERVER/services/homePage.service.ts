import type { Request } from "express";
import { prisma } from "../prisma/init.prisma";
import type { imagesType } from "../common/types/images";
import { BadRequestException } from "../common/helpers/error.helper";

const homePageService = {
  imagesList: async () => {
    const images: imagesType[] = await prisma.images.findMany();
    return images;
  },

  imageFindOne: async (req: Request) => {
    const { image_name } = req.query;
    const imageExist: imagesType | null = await prisma.images.findFirst({
      where: { image_name: image_name as string },
    });
    if (!imageExist) {
      throw new BadRequestException(
        "Rất tiếc, chúng tôi không thể tìm thấy bất kỳ hình ảnh nào cho tìm kiếm này."
      );
    }
    return imageExist;
  },
};

export default homePageService;
