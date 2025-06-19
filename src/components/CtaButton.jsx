import React from "react";

const CtaButton = ({name}) => {
  return (
    <button className="bg-red-600 hover:bg-red-800 hover:shadow hover:shadow-red-600 text-md text-slate-50 rounded-3xl px-4 py-2 w-fit transition-all duration-300">
      {name}
    </button>
  );
};

export default CtaButton;
