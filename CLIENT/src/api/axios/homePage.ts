import { imageRes } from "../../types/images";
import api from "../api";

const imageHomePage = {
  getItemImagesHomePage: async (): Promise<imageRes> => {
    return api.get("/api/images");
  },
};
export default imageHomePage;
