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
  show,
  setShow,
  todoArray,
  setTodoArray,
  title,
  setTitle,
  date,
  setDate,
  priority,
  setPriority,
}: {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  todoArray: Array<todoObject>;
  setTodoArray: React.Dispatch<React.SetStateAction<todoObject[]>>;
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  date: string;
  setDate: React.Dispatch<React.SetStateAction<string>>;
  priority: string;
  setPriority: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <div className="fixed left-[50%] top-[50%] -translate-y-1/2 -translate-x-1/2 bg-[#ed9390] rounded-lg shadow-lg h-auto w-[20rem] px-4 pt-8 pb-10 flex items-center flex-col gap-4">
      <h3 className="text-white text-2xl font-bold mb-6">Add New Todo</h3>
      <input
        className="rounded-sm p-1 w-[13rem] h-9"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        type="text"
        name="title"
        id="title"
        placeholder="Title"
        required
      />
      <input
        className="rounded-sm p-1 w-[13rem] h-9"
        onChange={(e) => {
          setDate(e.target.value.toString());
        }}
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
            setPriority(e.target.value);
          }}
          name="priority"
          id="priority"
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
          if (title == "" || date == "" || priority == "") return;
          setShow(!show);
          const newTodoObject = {
            title: title,
            key: uuidv4(),
            priority: priority,
            date: date,
            isDone: false,
          };

          setTodoArray((todoArray) => [...todoArray, newTodoObject]);
          setTitle("");
          setDate("");
          setPriority("red");
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default TodoPrompt;
