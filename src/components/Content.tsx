import React from "react";
import TodoList from "./TodoList";

function Content() {
  return (
    <div className="w-full p-4">
      <TodoList
        title="Homework Calculus 1"
        date="22/4/2023"
        priority="yellow"
      />
      <TodoList title="Homework Calculus 1" date="22/4/2023" priority="green" />
    </div>
  );
}

export default Content;
