import React from "react";
const SkeletonLoader: React.FC = () => {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg animate-pulse">
      <div className="flex items-center gap-2">
        <div className="w-11 h-11 rounded-full bg-gray"></div>
        <div className="flex flex-col gap-2">
          <div className="w-36 h-3 bg-gray"></div>
          <div className="w-20 h-3 bg-gray"></div>
        </div>
      </div>
      <div className="w-full h-5 bg-gray my-4"></div>
      <div className="w-full h-36 bg-gray my-4"></div>
      <div className="flex justify-between items-center">
        <div className="w-20 h-6 rounded-md bg-gray"></div>
        <div className="w-20 h-6 rounded-md bg-gray"></div>
        <div className="w-20 h-6 rounded-md bg-gray"></div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
