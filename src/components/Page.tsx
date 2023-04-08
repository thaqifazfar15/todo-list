import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Content from "./Content";
import { v4 as uuidv4 } from "uuid";

function Main() {
  const [todoArray, setTodoArray] = useState([
    {
      title: "Homework Math",
      key: uuidv4(),
      priority: "yellow",
      date: "22/2/2222",
      isDone: true,
    },
    {
      title: "Homework Physics",
      key: uuidv4(),
      priority: "yellow",
      date: "22/2/2222",
      isDone: false,
    },
  ]);

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
