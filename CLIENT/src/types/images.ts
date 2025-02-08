import { respone } from "./res";

export type imagesCreateType = Omit<imagesType, "image_user_id" | "saved_date">;

export type savingImageType = {
  saved_date: Date | null;
  saving_image_user_id: number;
  saving_image_image_id: number;
};

export type image = {
  metaData: {
    image_id: number;
    image_name: string;
    image_url: string;
    image_des: string;
    image_user_id: number;
  }[];
};

export type imageDetail = {
  metaData: {
    image_id: number;
    image_name: string;
    image_url: string;
    image_des: string;
    image_user_id: number;
    users: {
      user_name: "string";
      avatar: null;
    };
  };
};

export type imageResDetail = { data: imageDetail } & respone;
export type imageRes = { data: image } & respone;

export type imagesType = Omit<image, "imgage_id">;
