import { useState } from "react";
import Icon from "@mdi/react";
import { mdiChevronDown, mdiChevronRight } from "@mdi/js";

interface CollapsiblePros {
  value: string;
  datas: { name: string }[];
}

function Collapsible({ value, datas }: CollapsiblePros) {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <div className="w-full">
      <button
        className="flex items-center hover:bg-gray-200 w-full p-2 rounded-md"
        onClick={toggle}
      >
        <Icon
          className="h-6 mr-4"
          path={open ? mdiChevronDown : mdiChevronRight}
        />{" "}
        {value}
      </button>

      {open && (
        <div>
          {datas.map((data, idx) => (
            <p
              className="pl-12 p-2 rounded-md cursor-pointer hover:bg-gray-200 w-full"
              key={idx}
            >
              {data.name}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

export default Collapsible;
