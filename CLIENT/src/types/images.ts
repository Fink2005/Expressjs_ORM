export type imagesCreateType = Omit<imagesType, "image_user_id" | "saved_date">;

export type savingImageType = {
  saved_date: Date | null;
  saving_image_user_id: number;
  saving_image_image_id: number;
};

export type imageRes = {
  imgage_id: number;
  image_name: string;
  image_url: string;
  image_des: string;
  image_user_id: number;
};
export type imagesType = Omit<imageRes, "imgage_id">;
