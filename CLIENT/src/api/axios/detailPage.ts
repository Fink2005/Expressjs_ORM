import api from "../api";

const detailPage = {
  userInfo: (): Promise<unknown> => api.get("/info/:image_id"),
  commentsTaking: (): Promise<unknown> => api.get("/comments/:image_id"),
  imageSaving: (): Promise<unknown> => api.get("/image-saving"),
  commentsCreating: (): Promise<unknown> => api.post("/comments"),
  imageSavingCreating: (): Promise<unknown> => api.post("/image-creating"),
};

export default detailPage;
