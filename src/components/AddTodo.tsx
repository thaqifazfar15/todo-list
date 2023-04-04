import React from "react";
import TodoPrompt from "./TodoPrompt";

function AddTodo({
  show,
  setShow,
}: {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div>
      <div
        onClick={() => setShow(!show)}
        className="fixed bg-black w-full h-full left-0 top-0 opacity-50"
      ></div>
      <TodoPrompt show={show} setShow={setShow} />
    </div>
  );
}

export default AddTodo;
