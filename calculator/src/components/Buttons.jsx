import React from "react";

const Buttons = ({ input, result, onButtonClick }) => {
  return (
    <>
      <div className="mx-auto w-96 bg-slate-400 h-auto pb-72 box-border border-slate-300">
        <div className="box-border bg-slate-200 h-16 w-64 mx-auto mb-4 text-right p-2 text-2xl">
          {input || "0"}
        </div>
        <div className="box-border bg-slate-200 h-16 w-64 mx-auto mb-10 text-right p-2 text-2xl">
          {result || "0"}
        </div>

        <div className="grid grid-cols-4 gap-4 p-4">
          {[
            "7",
            "8",
            "9",
            "/",
            "4",
            "5",
            "6",
            "*",
            "1",
            "2",
            "3",
            "-",
            "0",
            ".",
            "=",
            "+",
            "AC",
          ].map((btnValue) => (
            <button
              key={btnValue}
              className="px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-700"
              onClick={() => onButtonClick(btnValue)}
            >
              {btnValue}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Buttons;
