import { useQuery } from "@tanstack/react-query";
import imageHomePage from "../axios/homePage";

export const useImageHomePage = () => {
  return useQuery({
    queryKey: ["image-homePage"],
    queryFn: imageHomePage.getItemImagesHomePage,
  });
};
