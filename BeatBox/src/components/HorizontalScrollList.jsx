import React from 'react';

const HorizontalScrollList = ({ title, children }) => {
  return (
    <div className="px-4 w-full py-2">
      <div className="flex justify-between items-center">
        <h3 className="text-white font-bold">{title}</h3>
        <button className="text-pink-400 text-sm">See All</button>
      </div>
      <div className="flex space-x-4 overflow-x-scroll mt-2 no-scrollbar">
        {children}
      </div>
    </div>
  );
};

export default HorizontalScrollList;