import { voteOnCat } from "api/votes";
import { useMutation, useQueryClient } from "react-query";

export const useCatVoting = () => {
  const queryClient = useQueryClient();

  return useMutation(
    ({ imageId, value }: { imageId: string; value: number }) =>
      voteOnCat(imageId, value),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("catVotes");
      },
    },
  );
};
