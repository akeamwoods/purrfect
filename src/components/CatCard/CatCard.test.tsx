import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import CatCard from "./CatCard";

describe("CatCard", () => {
  const mockCat = {
    url: "test-url",
    originalFilename: "test-cat",
    id: "1",
    createdAt: "",
  };
  const mockScore = 10;
  const mockOnUpvote = jest.fn();
  const mockOnDownvote = jest.fn();
  const mockOnToggleFavourite = jest.fn();

  it("renders the component with correct data", () => {
    render(
      <CatCard
        cat={mockCat}
        score={mockScore}
        onUpvote={mockOnUpvote}
        onDownvote={mockOnDownvote}
        onToggleFavourite={mockOnToggleFavourite}
      />,
    );

    const image = screen.getByTestId("cat-image");
    expect(image).toHaveAttribute("src", "test-url");
    expect(image).toHaveAttribute("alt", "test-cat");
  });

  it("calls onUpvote when the upvote button is clicked", () => {
    render(
      <CatCard
        cat={mockCat}
        score={mockScore}
        onUpvote={mockOnUpvote}
        onDownvote={mockOnDownvote}
        onToggleFavourite={mockOnToggleFavourite}
      />,
    );

    const upvoteButton = screen.getByTestId("upvote-button");
    fireEvent.click(upvoteButton);
    expect(mockOnUpvote).toHaveBeenCalled();
  });

  it("calls onDownvote when the downvote button is clicked", () => {
    render(
      <CatCard
        cat={mockCat}
        score={mockScore}
        onUpvote={mockOnUpvote}
        onDownvote={mockOnDownvote}
        onToggleFavourite={mockOnToggleFavourite}
      />,
    );

    const downvoteButton = screen.getByTestId("downvote-button");
    fireEvent.click(downvoteButton);
    expect(mockOnDownvote).toHaveBeenCalled();
  });

  it("calls onToggleFavourite when the favourite button is clicked", () => {
    render(
      <CatCard
        cat={mockCat}
        score={mockScore}
        onUpvote={mockOnUpvote}
        onDownvote={mockOnDownvote}
        onToggleFavourite={mockOnToggleFavourite}
      />,
    );

    const favouriteButton = screen.getByTestId("toggle-favourite");
    fireEvent.click(favouriteButton);
    expect(mockOnToggleFavourite).toHaveBeenCalled();
  });
});
