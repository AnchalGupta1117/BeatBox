import React from 'react';

const Controls = () => {
    return (
        <div>
            <div className="flex justify-between items-center px-4 py-2">
                <button className="bg-primary text-white px-8 py-2 rounded-full text-sm">
                    Shuffle
                </button>
                <div className="flex flex-col items-end">
                    <button className="bg-zinc-800 text-white px-8 py-2 rounded-full text-sm mb-1">
                        Play
                    </button>
                    <span className="text-primary text-sm">Date Added ↓</span>
                </div>
            </div>
            <div className="px-4 py-1">
                <span className="text-zinc-400 text-sm">205 Favorites</span>
            </div>
        </div>
    );
};

export default Controls;
