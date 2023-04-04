import React from "react";

function TodoPrompt({
  show,
  setShow,
}: {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="fixed left-[50%] top-[50%] -translate-y-1/2 -translate-x-1/2 bg-[#ed9390] rounded-sm shadow-md min-h-[25rem] w-[20rem] px-4 py-6 flex items-center flex-col gap-4">
      <h3 className="text-white text-2xl font-bold mb-6">Add New Todo</h3>
      <input
        className="rounded-sm p-1 w-[13rem] h-9"
        type="text"
        name="title"
        id="title"
        placeholder="Title"
        required
      />
      <input
        className="rounded-sm p-1 w-[13rem] h-9"
        type="date"
        name="date"
        id="date"
        required
      />
      <div className="p-1 w-[13rem] h-9 text-center">
        <label className="mr-3" htmlFor="priority">
          Priority:
        </label>
        <select className="p-1" name="priority" id="priority">
          <option value="red">High</option>
          <option value="orange">Medium</option>
          <option value="yellow">Low</option>
        </select>
      </div>
      <button
        className="px-6 py-3 text-lg mt-6 hover:bg-slate-100 active:bg-slate-200 active:shadow-xl rounded-md shadow-lg bg-white"
        type="submit"
        onClick={() => setShow(!show)}
      >
        Submit
      </button>
    </div>
  );
}

export default TodoPrompt;
