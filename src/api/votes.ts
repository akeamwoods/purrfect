import { AxiosResponse } from "axios";
import { Vote } from "types/Vote";
import apiClient from "./apiClient";
import { keysToCamel } from "utils";

export const voteOnCat = async (
  imageId: string,
  value: number,
): Promise<AxiosResponse> => {
  try {
    const response = await apiClient.post("/votes", {
      image_id: imageId,
      value,
    });
    return response;
  } catch (error) {
    throw new Error("Error voting on cat");
  }
};

export const getCatVotes = async (): Promise<Vote[]> => {
  try {
    const response = await apiClient.get<Vote[]>("/votes");
    return keysToCamel<Vote[]>(response.data);
  } catch (error) {
    throw new Error("Error fetching cat votes");
  }
};
