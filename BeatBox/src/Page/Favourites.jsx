import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import SongTile from '../components/SongTile';
import Controls from '../components/Controls';

const FavouriteSongs = () => {
    const dummySongs = [
        { image: 'https://via.placeholder.com/80', title: 'Ennai Vitu', artist: 'Yuvan Shankar Raja' },
        { image: 'https://via.placeholder.com/80', title: 'Enna Solla', artist: 'Anirudh Ravichander' },
        { image: 'https://via.placeholder.com/80', title: 'Pookkal Pookum', artist: 'G.V Prakash' },
        { image: 'https://via.placeholder.com/80', title: 'Selfie Pulla', artist: 'Anirudh Ravichander' },
        { image: 'https://via.placeholder.com/80', title: 'Dernière Danse', artist: 'Indila' },
        { image: 'https://via.placeholder.com/80', title: 'Smile', artist: 'Jimmy Durante' },
    ];

    return (
        <div className="bg-black min-h-screen text-white">
            <Header title="🎵 Favorites" />

            {/* Controls */}
            <Controls />

            {/* Song List */}
            <div className="px-4">
                <p className="text-sm text-gray-400">205 Favorites</p>
                <ul>
                    {dummySongs.map((song, index) => (
                        <SongTile key={index} {...song} />
                    ))}
                </ul>
            </div>

            {/* Navbar */}
            <Navbar />
        </div>
    );
};

export default FavouriteSongs;
