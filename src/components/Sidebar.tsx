import React, { useState } from "react";
import Button from "./Button";
import Collapsible from "./Collapsible";
import { mdiInbox, mdiStar, mdiCalendar, mdiPencil, mdiPlus } from "@mdi/js";
import Icon from "@mdi/react";
import AddTodo from "./AddTodo";

function Sidebar() {
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
      </button>{" "}
      {show && <AddTodo show={show} setShow={setShow} />}
    </div>
  );
}

export default Sidebar;
