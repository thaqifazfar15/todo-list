import React, { useState } from "react";
import Button from "./Button";
import Collapsible from "./Collapsible";
import { mdiInbox, mdiStar, mdiCalendar, mdiPencil, mdiPlus } from "@mdi/js";
import Icon from "@mdi/react";
import ModifyTodo from "./ModifyTodo";

interface todoObject {
  title: string;
  key: string;
  priority: string;
  date: string;
  isDone: boolean;
}

function Sidebar({
  todoArray,
  setTodoArray,
  title,
  setTitle,
  date,
  setDate,
  priority,
  setPriority,
}: {
  todoArray: Array<todoObject>;
  setTodoArray: React.Dispatch<React.SetStateAction<todoObject[]>>;
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  date: string;
  setDate: React.Dispatch<React.SetStateAction<string>>;
  priority: string;
  setPriority: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [show, setShow] = useState(false);
  const project = [{ name: "Gym" }, { name: "Study" }];

  return (
    <div className="w-[22rem] flex flex-col items-start p-4 shadow-lg">
      <Button img={mdiInbox} value="Inbox" color="blue" />
      <Button img={mdiStar} value="Today" color="#bfbf00" />
      <Button img={mdiCalendar} value="Upcoming" color="green" />
      <Collapsible value="Projects" datas={project} />
      <Button img={mdiPencil} value="Notes" color="black" />
      <button
        onClick={() => {
          setShow(!show);
        }}
        className="mt-auto ml-auto rounded-md aspect-square p-1 text-white bg-[#ed9390]"
      >
        <Icon className="h-10" path={mdiPlus} />
      </button>
      {show && (
        <ModifyTodo
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
      )}
    </div>
  );
}

export default Sidebar;
