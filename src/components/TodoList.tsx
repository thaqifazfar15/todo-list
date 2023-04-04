import React, { useState } from "react";
import Icon from "@mdi/react";
import { mdiCloseThick, mdiPencil } from "@mdi/js";

function TodoList({
  title,
  date,
  priority,
}: {
  title: string;
  date: string;
  priority: string;
}) {
  const [checked, setChecked] = useState(false);
  return (
    <div
      className={`rounded border hover:border-gray-400 py-2 px-4 w-full lg:w-[60%] mb-2 flex ${
        checked ? "border-gray-200" : "border-gray-300"
      }`}
    >
      <input
        onChange={() => setChecked(!checked)}
        className="mr-4"
        type="checkbox"
        name=""
        id=""
      />{" "}
      <div
        className={`h-3 mr-4 my-auto aspect-square bg- rounded-full ${
          priority == "red"
            ? "bg-red-500"
            : priority == "yellow"
            ? "bg-yellow-500"
            : "bg-green-500"
        }`}
      ></div>
      <span
        className={`mr-auto block ${checked ? "line-through opacity-25" : ""}`}
      >
        {title}
      </span>
      <span className={`mr-4 text-gray-400 ${checked ? "opacity-60" : ""}`}>
        {date}
      </span>
      <button className="my-auto mr-3 hover:bg-gray-200 rounded-md h-4 aspect-square">
        <Icon className="h-4 m-auto text-gray-500" path={mdiPencil} />
      </button>
      <button
        className={`bg-red-500 shadow my-auto rounded-md h-4 aspect-square`}
      >
        <Icon className="h-3 m-auto text-white" path={mdiCloseThick} />
      </button>
    </div>
  );
}

export default TodoList;
