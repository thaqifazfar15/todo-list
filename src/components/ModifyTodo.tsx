import React from "react";
import TodoPrompt from "./TodoPrompt";

interface todoObject {
  title: string;
  key: string;
  priority: string;
  date: string;
  isDone: boolean;
}

function AddTodo({
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
    <div>
      <div
        onClick={() => setShow(!show)}
        className="fixed bg-black w-full h-full left-0 top-0 opacity-50"
      ></div>
      <TodoPrompt
        show={show}
        setShow={setShow}
        todoArray={todoArray}
        setTodoArray={setTodoArray}
        title={title}
        setTitle={setTitle}
        date={date}
        setDate={setDate}
        priority={priority}
        setPriority={setPriority}
      />
    </div>
  );
}

export default AddTodo;
