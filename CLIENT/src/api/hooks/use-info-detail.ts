import { useMutation, useQuery } from "@tanstack/react-query";
import detailPage from "../axios/detailPage";

export const useInfoImageDetail = (params: string | undefined) => {
  return useQuery({
    queryKey: ["image-info"],
    queryFn: () => detailPage.userInfo(params || ""),
  });
};

export const useInfoCommentsDetail = (params: string | undefined) => {
  return useQuery({
    queryKey: ["comments-info"],
    queryFn: () => detailPage.commentsInfo(params || ""),
  });
};

export const useCreateCommentsDetail = () => {
  return useMutation({
    mutationFn: (dataComment: any) => detailPage.commentsCreating(dataComment),
  });
};
