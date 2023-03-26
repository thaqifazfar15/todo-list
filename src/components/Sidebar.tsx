import React, { useState } from "react";
import Button from "./Button";
import Collapsible from "./Collapsible";
import { mdiInbox, mdiStar, mdiCalendar, mdiPencil } from "@mdi/js";

function Sidebar() {
  const project = [{ name: "Gym" }, { name: "Study" }];

  return (
    <div className="w-[20%] flex flex-col items-start p-4 shadow-lg">
      <Button img={mdiInbox} value="Inbox" color="blue" />
      <Button img={mdiStar} value="Today" color="#bfbf00" />
      <Button img={mdiCalendar} value="Upcoming" color="green" />

      <Collapsible value="Projects" datas={project} />
      <Button img={mdiPencil} value="Notes" color="black" />
    </div>
  );
}

export default Sidebar;
