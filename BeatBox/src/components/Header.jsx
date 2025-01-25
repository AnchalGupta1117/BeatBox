import React from 'react';

const Header = () => {
  return (
    <header className="w-full flex items-center justify-between p-4 text-white">
      {/* Circular Music Icon Button */}
      <div className="flex gap items-center">
        <button
          className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-pink-950 mr-2"
          aria-label="Music"
          onClick={() => {
            /* handle click event */
          }}
          onKeyDown={(e) =>
            e.key === 'Enter' &&
            {
              /* handle key down event */
            }
          }
          tabIndex="0"
        >
          <i className="fas fa-music"></i>
        </button>

        <h1 className="text-2xl font-bold">BeatBox</h1>
      </div>
      <button className="text-textPrimary">
        <i className="fas fa-search"></i>
      </button>
    </header>
  );
};

export default Header;