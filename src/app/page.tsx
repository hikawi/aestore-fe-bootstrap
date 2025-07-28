import { ToDoList } from "@/stories/ToDoList";

export default function Home() {
  const defaultTodos = [
    {
      id: 1,
      value: "Setup a LLVM C Compiler",
      completed: false,
      favorite: false,
    },
    {
      id: 2,
      value: "Ditch JavaScript",
      completed: false,
      favorite: false,
    },
    {
      id: 3,
      value: "Run a CMake Toolchain",
      completed: false,
      favorite: false,
    },
    {
      id: 4,
      value: "Realize AppleClang and MSVC are just idiots",
      completed: false,
      favorite: false,
    },
    {
      id: 5,
      value: "Die crying",
      completed: false,
      favorite: false,
    },
  ];

  return (
    <div>
      <ToDoList todos={defaultTodos} />
    </div>
  );
}
