import { commentsDetail } from "../../types/comments";
import { imageResDetail } from "../../types/images";
import api from "../api";

const detailPage = {
  userInfo: (params: string): Promise<imageResDetail> =>
    api.get(`/api/info/${params}`),
  commentsInfo: (params: string): Promise<commentsDetail> =>
    api.get(`/api/comments/${params}`),
  imageSaving: (): Promise<unknown> => api.get("/image-saving"),
  commentsCreating: (dataComment: any): Promise<unknown> =>
    api.post("/api/comments", dataComment),
  imageSavingCreating: (): Promise<unknown> => api.post("/image-creating"),
};

export default detailPage;
