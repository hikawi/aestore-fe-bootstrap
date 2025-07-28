/**
 * Specifies the props for the component here. So you don't get to use `any` you filthy JS developers.
 */
export interface ToDoItemProps {
  /** The text content of the to-do item */
  label?: string;
  /** Whether the item was marked as favorite */
  favorite?: boolean;
  /** Whether the item was marked as complete */
  completed?: boolean;

  /** The callback to enact when the favorite button was clicked */
  onFavorite?: () => void;
  /** The callback to enact when the complete button was clicked */
  onComplete?: () => void;
}

/**
 * You can also specify default values here.
 */
export function ToDoItem({
  label = "Lorem ipsum",
  favorite = false,
  completed = false,
  onFavorite = () => {},
  onComplete = () => {},
}: ToDoItemProps) {
  return (
    <div
      className={`flex w-full flex-row items-center justify-between gap-8 rounded-lg bg-white px-4 py-2 ${completed && "opacity-75"}`}
    >
      <label className="flex flex-row items-center gap-2 text-black">
        <input
          type="checkbox"
          className={`m-0 size-4 appearance-none rounded-lg border border-cyan-700 duration-200 hover:bg-cyan-700/50 ${completed ? "bg-cyan-700" : "bg-white"}`}
          checked={completed}
          onChange={onComplete}
        />

        {label}
      </label>

      <button
        onClick={onFavorite}
        aria-checked={favorite}
        aria-label="Favorite"
      >
        {favorite ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            className="size-6 fill-cyan-700"
          >
            <path d="M480-269 314-169q-11 7-23 6t-21-8q-9-7-14-17.5t-2-23.5l44-189-147-127q-10-9-12.5-20.5T140-571q4-11 12-18t22-9l194-17 75-178q5-12 15.5-18t21.5-6q11 0 21.5 6t15.5 18l75 178 194 17q14 2 22 9t12 18q4 11 1.5 22.5T809-528L662-401l44 189q3 13-2 23.5T690-171q-9 7-21 8t-23-6L480-269Z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            className="size-6 fill-cyan-700"
          >
            <path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143Zm126 18L314-169q-11 7-23 6t-21-8q-9-7-14-17.5t-2-23.5l44-189-147-127q-10-9-12.5-20.5T140-571q4-11 12-18t22-9l194-17 75-178q5-12 15.5-18t21.5-6q11 0 21.5 6t15.5 18l75 178 194 17q14 2 22 9t12 18q4 11 1.5 22.5T809-528L662-401l44 189q3 13-2 23.5T690-171q-9 7-21 8t-23-6L480-269Zm0-201Z" />
          </svg>
        )}
      </button>
    </div>
  );
}
