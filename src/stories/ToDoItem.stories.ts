import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, fn } from "storybook/test";
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
  args: {
    onComplete: fn(), // Spy on the hooks
    onFavorite: fn(),
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ToDoItem>;
export default meta;

type Story = StoryObj<typeof meta>;

/**
 * Here we can write the stories out
 */
export const Normal: Story = {
  name: "Normal BBBB",
  args: {
    label: "Shave one's head",
  },
  play: async (vi) => {
    const elem = vi.canvas.getByLabelText("Shave one's head");
    await expect(elem).toBeVisible();

    const starButton = vi.canvas.getByRole("button", { name: "Favorite" });
    await vi.userEvent.click(starButton);
    await expect(vi.args.onFavorite).toHaveBeenCalledOnce();

    await vi.userEvent.click(elem);
    await expect(vi.args.onComplete).toHaveBeenCalledOnce();
  },
};

export const Completed: Story = {
  args: {
    label: "Shave one's head",
    completed: true,
  },
  play: async (vi) => {
    const elem = await vi.canvas.findByLabelText("Shave one's head");
    await expect(elem).toBeVisible();
  },
};

export const Favorited: Story = {
  args: {
    label: "Shave one's head",
    favorite: true,
  },
  play: async (vi) => {
    const elem = await vi.canvas.findByLabelText("Shave one's head");
    const fav = await vi.canvas.findByLabelText("Favorite");
  },
};
