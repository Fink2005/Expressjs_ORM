import { imageRes } from "../../types/images";
import api from "../api";

const imageHomePage = {
  getItemImagesHomePage: (): Promise<imageRes> => {
    return api.get("/api/images");
  },
  findItemImagesHomePage: (): Promise<unknown> => {
    return api.get("/api/images");
  },
};

export default imageHomePage;
