import React from "react";
import styles from "./CatCard.module.css";
import { CatImage } from "types";
import { GoHeart, GoHeartFill, GoArrowUp, GoArrowDown } from "react-icons/go";

export interface CatCardProps {
  cat: CatImage;
  score: number;
  onUpvote: () => void;
  onDownvote: () => void;
  onToggleFavourite: () => void;
  favouriteId?: number;
}

const CatCard: React.FC<CatCardProps> = ({
  cat,
  score,
  onUpvote,
  onDownvote,
  onToggleFavourite,
  favouriteId,
}) => {
  const isFavourite = favouriteId != null;

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          src={cat.url}
          alt={cat.originalFilename}
          className={styles.catImage}
          data-testid="cat-image"
        />
      </div>
      <div className={styles.actions}>
        <button
          onClick={onToggleFavourite}
          className={styles.favouriteButton}
          data-testid="toggle-favourite"
        >
          {isFavourite ? <GoHeartFill /> : <GoHeart />}
        </button>
        <div className={styles.votingContainer}>
          <button
            onClick={onUpvote}
            className={styles.upvoteButton}
            data-testid="upvote-button"
          >
            <GoArrowUp />
          </button>
          <p className={styles.score}>{score}</p>
          <button
            onClick={onDownvote}
            className={styles.downvoteButton}
            data-testid="downvote-button"
          >
            <GoArrowDown />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CatCard;
