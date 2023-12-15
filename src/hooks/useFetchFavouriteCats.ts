import { getFavouriteCats } from "api/favourites";
import { useQuery } from "react-query";

export const useFetchFavouriteCats = () => {
  return useQuery("catFavourites", getFavouriteCats);
};
