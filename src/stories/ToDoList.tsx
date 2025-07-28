"use client";

import { useState } from "react";
import { ToDoItem } from "./ToDoItem";

export interface ToDoListProps {
  todos: {
    id: number;
    value: string;
    completed: boolean;
    favorite: boolean;
  }[];
}

export function ToDoList({ todos = [] }: ToDoListProps) {
  const [tasks, setTasks] = useState(todos);

  function completeTask(id: number) {
    setTasks(
      tasks.map((task) =>
        task.id == id
          ? {
              ...task,
              completed: !task.completed,
            }
          : task,
      ),
    );
  }

  function favoriteTask(id: number) {
    setTasks(
      tasks.map((task) =>
        task.id == id
          ? {
              ...task,
              favorite: !task.favorite,
            }
          : task,
      ),
    );
  }

  return (
    <div className="flex w-full flex-col items-start justify-center gap-4 p-6">
      <p className="font-xl font-bold">To Dos</p>

      <div className="flex w-full flex-col gap-2">
        {tasks.map((todo) => (
          <ToDoItem
            key={todo.id}
            label={todo.value}
            completed={todo.completed}
            favorite={todo.favorite}
            onComplete={() => completeTask(todo.id)}
            onFavorite={() => favoriteTask(todo.id)}
          />
        ))}
      </div>
    </div>
  );
}
