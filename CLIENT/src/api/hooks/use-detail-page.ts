import { useMutation } from "@tanstack/react-query";
import detailPage from "../axios/detailPage";

export const useSavingDetailPageList = () => {
    return useMutation({
      mutationFn: (userId: number) => detailPage.imageSaving(userId),
    });
  };
  
  
  export const useSavingDetailPage = () => {
    return useMutation({
      mutationFn: (idImageAndUser: number) => detailPage.imageSavingCreating(idImageAndUser),
    });
  };
  
  
