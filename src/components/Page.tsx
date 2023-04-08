import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Content from "./Content";
import { v4 as uuidv4 } from "uuid";

function Main() {
  // const [items, setItems] = useState([]);

  const [todoArray, setTodoArray] = useState(() => {
    return (
      JSON.parse(localStorage.getItem("todo-items")!) || [
        {
          title: "Homework Math",
          key: "e782adcd-e0e1-4c03-8f0b-2c95505cb426",
          priority: "yellow",
          date: "2222-22-22",
          isDone: true,
        },
        {
          title: "Homework Physics",
          key: "a750330a-5f39-414e-9a9f-ecd9536d5122",
          priority: "yellow",
          date: "2222-22-22",
          isDone: false,
        },
      ]
    );
  });

  useEffect(() => {
    localStorage.setItem("todo-items", JSON.stringify(todoArray));
  }, [todoArray]);

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [priority, setPriority] = useState("red");

  return (
    <div className="flex h-full flex-auto">
      <Sidebar
        todoArray={todoArray}
        setTodoArray={setTodoArray}
        title={title}
        setTitle={setTitle}
        date={date}
        setDate={setDate}
        priority={priority}
        setPriority={setPriority}
      />
      <Content todoArray={todoArray} setTodoArray={setTodoArray} />
    </div>
  );
}

export default Main;
