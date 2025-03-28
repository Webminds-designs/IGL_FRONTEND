import React from "react";

const Preloader = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <div className="animate-spin mb-4">
        <svg
          className="w-16 h-16 text-blue-600"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            strokeWidth="4"
            strokeLinecap="round"
          ></circle>
          <path
            className="opacity-75"
            fillRule="evenodd"
            d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 17.938A8.001 8.001 0 114.062 13H6a6.002 6.002 0 0012 .938V19.938z"
            clipRule="evenodd"
          ></path>
        </svg>
      </div>
      <div className="text-2xl font-bold cursor-pointer ">IGLLOGO</div>
      <div>Loading ... </div>
    </div>
  );
};

export default Preloader;
