import { commentsDetail } from "../../types/comments";
import { imageResDetail } from "../../types/images";
import api from "../api";

const detailPage = {
  userInfo: (params: string): Promise<imageResDetail> =>
    api.get(`/api/info/${params}`),
  commentsInfo: (params: string): Promise<commentsDetail> =>
    api.get(`/api/comments/${params}`),
  imageSaving: (idUser: number): Promise<unknown> => api.post("/api/image-saving", idUser),
  commentsCreating: (dataComment: any): Promise<unknown> =>
    api.post("/api/comments", dataComment),
  imageSavingCreating: (idImageAndUser: any): Promise<unknown> => api.get(`/api/image-creating${idImageAndUser}`,),
};

export default detailPage;
