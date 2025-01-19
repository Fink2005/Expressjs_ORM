import api from "../api";

const imageHomePage = {
  getItemImagesHomePage: (): Promise<unknown> => {
    return api.get("/api/images");
  },
  findItemImagesHomePage: (): Promise<unknown> => {
    return api.get("/api/images");
  },
};

export default imageHomePage;
