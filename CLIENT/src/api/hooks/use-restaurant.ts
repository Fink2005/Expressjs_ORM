import { useQuery } from "@tanstack/react-query";
import { restaurant } from "../axios/restaurant";

export const ResponeRestaurant = (options?: any) => {
  return useQuery({
    ...options,
    queryKey: ["restaurant"],
    queryFn: restaurant.resNe,
  });
};
