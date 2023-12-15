import { getCatVotes } from "api/votes";
import { useQuery } from "react-query";

export const useFetchCatVotes = () => {
  return useQuery("catVotes", getCatVotes);
};
