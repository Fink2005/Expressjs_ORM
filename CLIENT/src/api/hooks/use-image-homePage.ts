import { useInfiniteQuery } from "@tanstack/react-query";
import imageHomePage from "../axios/homePage";

export const useImageHomePage = () => {
  return useInfiniteQuery({
    queryKey: ["image-homePage"],
    queryFn: imageHomePage.getItemImagesHomePage,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      if (lastPage?.data.metaData.items.length) {
        return lastPageParam + 1;
      } else {  
        return undefined;
      }
    },
  });
};
