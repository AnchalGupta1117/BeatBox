import React from 'react';

const ArtistTile = ({ image, name }) => {
  return (
    <div className="flex-shrink-0 w-20 text-center">
      <img
        src={image[2].link}
        alt={name}
        className="w-20 h-20 rounded-full border-2 border-primary"
      />
      <h4 className="text-sm text-white mt-1 truncate">{name}</h4>
    </div>
  );
};

export default ArtistTile;