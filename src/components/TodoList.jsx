import React from "react";

const TodoList = ({ text, id, isComplete, deleteTodo, toggle }) => {
  return (
    <div className="flex items-center my-3 gap-2">
      <div
        onClick={() => {
          toggle(id);
        }}
        className=" flex flex-1 items-center cursor-pointer "
      >
        <img
          className="w-7"
          src={isComplete ? "src/assets/tick.png" : "src/assets/not_tick.png"}
          alt=""
        />

        <p
          className={`text-slate-700 ml-4 text-[17px] decoration-slate-500
            ${isComplete ? "line-through" : " "} `}
        >
          {text}{" "}
        </p>
      </div>

      <img
        onClick={() => {
          deleteTodo(id);
        }}
        className="w-3.5 cursor-pointer"
        src="src/assets/delete.png"
        alt=""
      />
    </div>
  );
};

export default TodoList;
