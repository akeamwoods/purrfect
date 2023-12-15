import { useMutation, useQueryClient } from "react-query";
import { toggleFavouriteCat } from "api/favourites";

export const useCatFavourite = () => {
  const queryClient = useQueryClient();

  return useMutation(
    ({ imageId, favouriteId }: { imageId: string; favouriteId?: number }) => {
      return toggleFavouriteCat(imageId, favouriteId);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("catFavourites");
      },
    },
  );
};
