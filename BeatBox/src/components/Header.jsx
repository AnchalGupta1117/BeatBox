import React from 'react';

const Header = ({ title = "🎵 Feel It" }) => {
    return (
        <header className="w-full flex items-center justify-between px-4 py-2  text-white">
            <h1 className="text-lg font-bold">{title}</h1>
            <button className="text-pink-400">
                <i className="fas fa-search"></i>
            </button>
        </header>
    );
};

export default Header;
