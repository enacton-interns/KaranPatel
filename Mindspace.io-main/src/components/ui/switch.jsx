import * as React from "react";

export const Switch = ({ checked = false, onChange = () => {} }) => {
  return (
    <button
      onClick={() => onChange(!checked)} //  Toggle logic
      className={`w-14 h-7 flex items-center rounded-full p-1 duration-300 ease-in-out ${
        checked ? "bg-green-500" : "bg-gray-400"
      }`}
    >
      <div
        className={`bg-white w-5 h-5 rounded-full shadow-md transform duration-300 ease-in-out ${
          checked ? "translate-x-7" : ""
        }`}
      ></div>
    </button>
  );
};
