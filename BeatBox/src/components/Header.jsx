import React from 'react';

const Header = () => {
    return (
        <header className="w-full flex items-center justify-between px-4 py-2 bg-black text-white">
            <h1 className="text-lg font-bold">🎵 Feel It</h1>
            <button className="text-pink-400">
                <i className="fas fa-search"></i>
            </button>
        </header>
    );
};

export default Header;
