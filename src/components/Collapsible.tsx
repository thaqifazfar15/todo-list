import { React, useState } from "react";

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
    <div className="">
      <button onClick={toggle}>{value}</button>

      {open && (
        <div>
          {datas.map((data, idx) => (
            <p key={idx}>{data.name}</p>
          ))}
        </div>
      )}
    </div>
  );
}

export default Collapsible;
