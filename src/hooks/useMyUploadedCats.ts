import { getMyUploadedCats } from "api/images";
import { useQuery, UseQueryResult } from "react-query";
import { CatImage } from "types";

type UploadedCatsParams = {
  limit?: number;
  page?: number;
  order?: "ASC" | "DESC";
};

export const useMyUploadedCats = ({
  limit,
  page,
  order,
}: UploadedCatsParams = {}): UseQueryResult<CatImage[], Error> => {
  return useQuery(["myUploadedCats", limit, page, order], () =>
    getMyUploadedCats({ limit, page, order }),
  );
};
