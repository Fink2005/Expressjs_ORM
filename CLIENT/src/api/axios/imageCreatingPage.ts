import { imageRes, imagesType } from "../../types/images";
import api from "../api";
const imageCreatingPage = {
  imageCreating: (body: imagesType): Promise<imageRes> =>
    api.post("/images", body),
};
export default imageCreatingPage;
