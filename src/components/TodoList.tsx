import React, { useState } from "react";
import Icon from "@mdi/react";
import { mdiClose } from "@mdi/js";

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
      className={`border border py-2 px-4 w-full lg:w-[60%] mb-2 flex ${
        checked ? "border-gray-200" : "border-gray-300"
      }`}
    >
      <input
        onChange={() => setChecked(!checked)}
        className="mr-4"
        type="checkbox"
        onClick={() => setChecked(!checked)}
        name=""
        id=""
      />
      <span
        className={`mr-auto block ${checked ? "line-through opacity-25" : ""}`}
      >
        {title}
      </span>
      <span className={`mr-4 text-gray-400 ${checked ? "opacity-60" : ""}`}>
        {date}
      </span>
      <div
        className={`h-3 mr-4 my-auto aspect-square bg- rounded-full bg-${priority}-500`}
      ></div>
      <button className="">
        <Icon className="h-5 text-gray-400" path={mdiClose} />
      </button>
    </div>
  );
}

export default TodoList;
