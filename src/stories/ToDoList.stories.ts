import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ToDoList } from "./ToDoList";

const meta = {
  title: "ToDo/ToDoList",
  component: ToDoList,
  parameters: {
    layout: "centered",
    background: "#333",
  },
} satisfies Meta<typeof ToDoList>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    todos: [
      {
        id: 1,
        value: "Create Storybook Component",
        completed: true,
        favorite: false,
      },
      {
        id: 2,
        value: "Create Storybook Story",
        completed: false,
        favorite: false,
      },
      {
        id: 3,
        value: "Take off his hat",
        completed: false,
        favorite: false,
      },
      {
        id: 4,
        value: "Shave his head",
        completed: false,
        favorite: true,
      },
    ],
  },
};
