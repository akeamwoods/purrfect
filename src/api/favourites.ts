import { keysToCamel } from "utils";
import apiClient from "./apiClient";
import { Favourite } from "types";

export const getFavouriteCats = async (): Promise<Favourite[]> => {
  try {
    const response = await apiClient.get<Favourite[]>("/favourites");
    return keysToCamel<Favourite[]>(response.data);
  } catch (error) {
    throw new Error("Error fetching favourite cats");
  }
};

export const toggleFavouriteCat = async (
  imageId: string,
  favouriteId?: number,
) => {
  if (favouriteId) {
    try {
      const response = await apiClient.delete(`/favourites/${favouriteId}`);
      return response;
    } catch (error) {
      throw new Error("Error removing favorite cat");
    }
  } else {
    try {
      const response = await apiClient.post("/favourites", {
        image_id: imageId,
      });
      return response;
    } catch (error) {
      throw new Error("Error adding favorite cat");
    }
  }
};
