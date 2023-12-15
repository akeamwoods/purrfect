import React, { useMemo } from "react";
import CatCard from "components/CatCard/CatCard";
import { CatImage } from "types";
import styles from "./HomePage.module.css";
import {
  useFetchCatVotes,
  useMyUploadedCats,
  useFetchFavouriteCats,
  useCatVoting,
  useCatFavourite,
} from "hooks";
import { Loading } from "components/Loading/Loading";

export const HomePage: React.FC = () => {
  const { data: cats, isLoading, error } = useMyUploadedCats();
  const { data: votes } = useFetchCatVotes();
  const { data: favourites } = useFetchFavouriteCats();
  const { mutate: voteOnCat } = useCatVoting();
  const { mutate: toggleFavourite } = useCatFavourite();

  const handleUpvote = (catId: string) => {
    voteOnCat({ imageId: catId, value: 1 });
  };

  const handleDownvote = (catId: string) => {
    voteOnCat({ imageId: catId, value: -1 });
  };

  const handleToggleFavourite = (catId: string, favouriteId?: number) => {
    toggleFavourite({
      imageId: catId,
      favouriteId,
    });
  };

  const catScores = useMemo(() => {
    const scores: Record<string, number> = {};
    votes?.forEach((vote) => {
      scores[vote.imageId] = (scores[vote.imageId] || 0) + vote.value;
    });
    return scores;
  }, [votes]);

  if (isLoading) return <Loading />;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className={styles.catGallery}>
      {cats?.map((cat: CatImage) => (
        <CatCard
          key={cat.id}
          cat={cat}
          score={catScores[cat.id] || 0}
          favouriteId={favourites?.find((f) => f.imageId === cat.id)?.id}
          onUpvote={() => handleUpvote(cat.id)}
          onDownvote={() => handleDownvote(cat.id)}
          onToggleFavourite={() =>
            handleToggleFavourite(
              cat.id,
              favourites?.find((f) => f.imageId === cat.id)?.id,
            )
          }
        />
      ))}
    </div>
  );
};
