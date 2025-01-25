import React from 'react';

const SongTile = ({ image, title, artist }) => {
  return (
    <div className="flex-shrink-0 w-36 px-2 cursor-pointer hover:scale-105 transition-transform duration-200">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-36 rounded-2xl shadow-xl object-cover hover:shadow-2xl transition-shadow duration-200"
        />
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-transparent to-black/10 hover:to-black/20 transition-all duration-200" />
      </div>
      <div className="mt-3 px-0.5">
        <h4 className="text-sm font-semibold text-white truncate text-left">
          {title}
        </h4>
        <p className="text-xs text-gray-400 truncate text-left mt-1">
          {artist}
        </p>
      </div>
    </div>
  );
};

export default SongTile;