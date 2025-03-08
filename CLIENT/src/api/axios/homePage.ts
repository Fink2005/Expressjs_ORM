import { imageRes } from "../../types/images";
import api from "../api";

const imageHomePage = {
  getItemImagesHomePage: async ({pageParam}: any): Promise<imageRes> => {
    return api.get(`/api/images/query?page=${pageParam}&limit=15`);
  },
};
export default imageHomePage;
