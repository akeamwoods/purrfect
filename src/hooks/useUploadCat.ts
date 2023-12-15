import { useMutation, UseMutationResult } from "react-query";
import { AxiosResponse } from "axios";
import { uploadCatImage } from "api/images";

export const useUploadCat = (): UseMutationResult<
  AxiosResponse,
  Error,
  File
> => {
  return useMutation<AxiosResponse, Error, File>(uploadCatImage);
};
