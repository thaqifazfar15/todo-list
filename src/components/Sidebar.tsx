import React, { useState } from "react";
import Button from "./Button";
import Collapsible from "./Collapsible";
import { mdiInbox, mdiStar, mdiCalendar, mdiPencil, mdiPlus } from "@mdi/js";
import Icon from "@mdi/react";

function Sidebar() {
  const project = [{ name: "Gym" }, { name: "Study" }];

  return (
    <div className="w-[16rem] flex flex-col items-start p-4 shadow-lg">
      <Button img={mdiInbox} value="Inbox" color="blue" />
      <Button img={mdiStar} value="Today" color="#bfbf00" />
      <Button img={mdiCalendar} value="Upcoming" color="green" />

      <Collapsible value="Projects" datas={project} />
      <Button img={mdiPencil} value="Notes" color="black" />
      <button className="mt-auto ml-auto rounded-md aspect-square p-1 text-white bg-[#ed9390]">
        <Icon className="h-8" path={mdiPlus} />
      </button>
    </div>
  );
}

export default Sidebar;
