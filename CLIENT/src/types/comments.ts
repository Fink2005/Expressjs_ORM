import { respone } from "./res";

export type comments = {
  metaData: {
    comment_id: string;
    comment_user_id: number;
    comment_image_id: number;
    comment_date: Date;
    comment_content: string;
    users: {
      user_name: string;
      avatar: string;
    };
  }[];
};

export type commentsDetail = { data: comments } & respone;
