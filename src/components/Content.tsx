import React, { useState } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";

interface todoObject {
  title: string;
  key: string;
  priority: string;
  date: string;
  isDone: boolean;
}

function Content({
  todoArray,
  setTodoArray,
}: {
  todoArray: Array<todoObject>;
  setTodoArray: React.Dispatch<React.SetStateAction<todoObject[]>>;
}) {
  return (
    <div className="w-full p-4">
      {todoArray.map((item) => (
        <TodoList
          todoArray={todoArray}
          setTodoArray={setTodoArray}
          title={item.title}
          key={item.key}
          id={item.key}
          priority={item.priority}
          date={item.date}
          isDone={item.isDone}
        />
      ))}
    </div>
  );
}

export default Content;
