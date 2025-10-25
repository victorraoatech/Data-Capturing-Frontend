import React from "react";

const ReadyToCapture = () => {
  return (
    <div className="bg-[#5D2A8B] rounded-xl text-white px-8 py-8 md:py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0 shadow-md">
      <div className="max-w-lg">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
          Ready to capture now?
        </h2>
        <p className="mt-2 text-sm md:text-base text-purple-100 opacity-90">
          Experience instant, accurate measurements with AI.
        </p>
      </div>

      <div className="flex items-center justify-end w-full md:w-auto">
        <button
          type="button"
          className="ml-0 md:ml-6 inline-flex items-center px-4 py-2 rounded-full bg-white text-purple-700 font-semibold shadow-sm hover:shadow-lg transition"
        >
          Upload Image
        </button>
      </div>
    </div>
  );
};

export default ReadyToCapture;
