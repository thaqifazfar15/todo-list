import React from "react";
import { v4 as uuidv4 } from "uuid";

interface todoObject {
  title: string;
  key: string;
  priority: string;
  date: string;
  isDone: boolean;
}

function TodoPrompt({
  id,
  show,
  setShow,
  todoArray,
  setTodoArray,
  title,
  newTitle,
  setNewTitle,
  date,
  newDate,
  setNewDate,
  priority,
  newPriority,
  setNewPriority,
  isDone,
}: {
  id: string;
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  todoArray: Array<todoObject>;
  setTodoArray: React.Dispatch<React.SetStateAction<todoObject[]>>;
  title: string;
  newTitle: string;
  setNewTitle: React.Dispatch<React.SetStateAction<string>>;
  date: string;
  newDate: string;
  setNewDate: React.Dispatch<React.SetStateAction<string>>;
  priority: string;
  newPriority: string;
  setNewPriority: React.Dispatch<React.SetStateAction<string>>;
  isDone: boolean;
}) {
  return (
    <div className="fixed z-1 left-[50%] top-[50%] -translate-y-1/2 -translate-x-1/2 bg-[#ed9390] rounded-lg shadow-lg h-auto w-[20rem] px-4 pt-8 pb-10 flex items-center flex-col gap-4">
      <h3 className="text-white text-2xl font-bold mb-6">Edit Todo</h3>
      <input
        className="rounded-sm p-1 w-[13rem] h-9"
        onChange={(e) => {
          setNewTitle(e.target.value);
        }}
        type="text"
        name="title"
        id="title"
        placeholder="Title"
        defaultValue={newTitle}
        required
      />
      <input
        className="rounded-sm p-1 w-[13rem] h-9"
        onChange={(e) => {
          setNewDate(e.target.value.toString());
        }}
        defaultValue={newDate}
        type="date"
        name="date"
        id="date"
        required
      />
      <div className="p-1 w-[13rem] h-9 text-center">
        <label className="mr-3" htmlFor="priority">
          Priority:
        </label>
        <select
          className="p-1"
          onChange={(e) => {
            setNewPriority(e.target.value);
          }}
          name="priority"
          id="priority"
          defaultValue={newPriority}
        >
          <option value="red">High</option>
          <option value="orange">Medium</option>
          <option value="yellow">Low</option>
        </select>
      </div>
      <button
        className="px-6 py-3 text-lg mt-3 hover:bg-slate-100 active:bg-slate-200 active:shadow-xl rounded-md shadow-lg bg-white"
        type="submit"
        onClick={() => {
          if (newTitle == "" || newDate == "" || newPriority == "") return;
          setShow(!show);
          const newTodoObject = {
            title: newTitle,
            key: id,
            priority: newPriority,
            date: newDate,
            isDone: isDone,
          };

          setTodoArray((todoArray) => {
            const newTodoArray = todoArray.map((obj) => {
              if (obj.key == id) return newTodoObject;
              return obj;
            });
            return newTodoArray;
          });
        }}
      >
        Edit
      </button>
    </div>
  );
}

export default TodoPrompt;
