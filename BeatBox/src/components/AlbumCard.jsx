import React, { useState } from 'react';
import { topPlaylists } from '../../utils/topplaylists';

const AlbumCard = () => {
  const [playlist, setPlaylist] = useState(topPlaylists[0]);

  return (
    <div
      className="bg-primary text-white p-8 h-44 rounded-3xl flex items-center"
      tabIndex="0"
      aria-label={`Album: ${playlist.title}`}
      onClick={() => {
        /* handle click event */
      }}
      onKeyDown={(e) => {
        /* handle key down event */
      }}
    >
      <div className="flex-1">
        <p className="text-lg font-bold text-pink-950">New Album</p>
        <h2 className="text-2xl font-extrabold text-white">{playlist.title}</h2>
        <p className="text-lg font-semibold text-pink-950">
          {playlist.subtitle}
        </p>
      </div>
      <img
        src={playlist.image}
        alt="Album Cover"
        className="w-28 h-28 rounded-lg"
      />
    </div>
  );
};

export default AlbumCard;