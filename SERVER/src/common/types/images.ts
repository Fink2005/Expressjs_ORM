export type imagesType = {
  image_user_id: number | null;
  image_name: string;
  image_url: string;
  image_des: string;
  saved_date?: Date | null;
};

export type imagesCreateType = Omit<imagesType, "image_user_id" | "saved_date">;

export type savingImageType = {
  saved_date: Date | null;
  saving_image_user_id: number;
  saving_image_image_id: number;
};
