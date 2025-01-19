import api from "../api";

const managePage = {
  usersById: (): Promise<unknown> => api.get("/manage/users"),
  imageSavedList: (): Promise<unknown> =>
    api.get("/manage/user-saved-image-list"),
  imageCreatedList: (): Promise<unknown> =>
    api.get("/manage/user-created-image-list"),
  imageDeleteById: (id: number): Promise<unknown> =>
    api.delete(`/manage/user-image/:${id}}`),
};
export default managePage;
