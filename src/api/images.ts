import { AxiosResponse } from "axios";
import { CatImage } from "types/CatImage";
import apiClient from "./apiClient";
import { keysToCamel } from "utils";

export const uploadCatImage = async (file: File): Promise<AxiosResponse> => {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await apiClient.post("/images/upload", formData);
    return response;
  } catch (error) {
    throw new Error("Error uploading image");
  }
};

export const getMyUploadedCats = async ({
  limit = 100,
  page = 0,
  order = "DESC",
}: {
  limit?: number;
  page?: number;
  order?: "ASC" | "DESC";
} = {}): Promise<CatImage[]> => {
  try {
    const response = await apiClient.get<CatImage[]>("/images/", {
      params: { limit, page, order },
    });
    return keysToCamel<CatImage[]>(response.data);
  } catch (error) {
    throw new Error("Error fetching my uploaded cats");
  }
};
