import type { Meta, StoryObj } from "@storybook/react";
import CatCard from "./CatCard";
import type { CatCardProps } from "./CatCard";

const meta: Meta<CatCardProps> = {
  title: "UI/CatCard",
  component: CatCard,
  parameters: {
    layout: "centered",
  },
  tags: ["react", "ui-component", "cat", "card"],
  argTypes: {
    cat: {
      control: {
        type: "object",
      },
    },
  },
};

export default meta;

type CatCardStory = StoryObj<CatCardProps>;

export const Default: CatCardStory = {
  args: {
    cat: {
      id: "1",
      url: "/cat.jpg",
      createdAt: "2021-01-01",
      originalFilename: "cat.jpg",
    },
    score: 1,
  },
};
