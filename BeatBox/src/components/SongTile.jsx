import React from 'react';

const SongTile = ({ image, title, artist }) => {
    return (
        <div className="flex-shrink-0 w-28">
            <img
                src={image}
                alt={title}
                className="w-full h-28 rounded-lg"
            />
            <h4 className="text-sm text-white mt-1 truncate">{title}</h4>
            <p className="text-xs text-gray-400 truncate">{artist}</p>
        </div>
    );
};

export default SongTile;
