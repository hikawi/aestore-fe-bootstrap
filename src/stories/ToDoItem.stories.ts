import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ToDoItem } from "./ToDoItem";

/**
 * The default meta object that has to be exported as default. `Meta` is imported as a type
 */
const meta = {
  title: "ToDo/ToDoItem",
  component: ToDoItem,
  parameters: {
    layout: "centered",
    background: "#333",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ToDoItem>;
export default meta;

type Story = StoryObj<typeof meta>;

/**
 * Here we can write the stories out
 */
export const Normal: Story = {
  args: {
    label: "Shave one's head",
  },
};

export const Completed: Story = {
  args: {
    label: "Shave one's head",
    completed: true,
  },
};

export const Favorited: Story = {
  args: {
    label: "Shave one's head",
    favorite: true,
  },
};
