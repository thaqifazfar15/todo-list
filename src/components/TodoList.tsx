import React, { useState } from "react";
import Icon from "@mdi/react";
import { mdiCloseThick, mdiPencil } from "@mdi/js";
import EditTodo from "./EditTodo";

interface todoObject {
  title: string;
  key: string;
  priority: string;
  date: string;
  isDone: boolean;
}

function TodoList({
  todoArray,
  setTodoArray,
  title,
  id,
  date,
  priority,
  isDone,
}: {
  todoArray: Array<todoObject>;
  setTodoArray: React.Dispatch<React.SetStateAction<todoObject[]>>;
  title: string;
  id: string;
  date: string;
  priority: string;
  isDone: boolean;
}) {
  const [show, setShow] = useState(false);
  const [checked, setChecked] = useState(isDone);
  const [newTitle, setNewTitle] = useState(title);
  const [newDate, setNewDate] = useState(date);
  const [newPriority, setNewPriority] = useState(priority);

  function filerById(item: todoObject) {
    if (item.key != id) return true;
    else return false;
  }

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
        name="toDoCheckbox"
        defaultChecked={isDone}
      />
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
      <button
        onClick={() => {
          setShow(!show);
        }}
        className="my-auto mr-3 hover:bg-gray-200 rounded-md h-4 aspect-square"
      >
        <Icon className="h-4 m-auto text-gray-500" path={mdiPencil} />
      </button>
      {show && (
        <div>
          <div
            onClick={() => setShow(!show)}
            className="fixed bg-black w-full h-full left-0 top-0 opacity-50"
          >
            HELLO
          </div>
          <EditTodo
            id={id}
            show={show}
            setShow={setShow}
            todoArray={todoArray}
            setTodoArray={setTodoArray}
            title={title}
            newTitle={newTitle}
            setNewTitle={setNewTitle}
            date={date}
            newDate={newDate}
            setNewDate={setNewDate}
            priority={priority}
            newPriority={newPriority}
            setNewPriority={setNewPriority}
            isDone={isDone}
          />
        </div>
      )}

      <button
        onClick={() => {
          const newArray = todoArray.filter(filerById);
          setTodoArray(newArray);
        }}
        className={`bg-red-500 shadow my-auto rounded-md h-4 aspect-square`}
      >
        <Icon className="h-3 m-auto text-white" path={mdiCloseThick} />
      </button>
    </div>
  );
}

export default TodoList;
