import React from 'react';

const AlbumCard = () => {
    return (
        <div className="bg-pink-500 text-white p-4 rounded-lg flex items-center">
            <div className="flex-1">
                <p className="text-sm">New Album</p>
                <h2 className="text-lg font-bold">Ranjithame Tamil Song</h2>
                <p className="text-sm">Various Movie</p>
            </div>
            <img
                src="https://via.placeholder.com/80" 
                alt="Album Cover" 
                className="w-20 h-20 rounded-lg"
            />
        </div>
    );
};

export default AlbumCard;
