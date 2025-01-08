import React from 'react';

const Navbar = () => {
    const navItems = [
        { icon: 'fas fa-home', label: 'Home' },
        { icon: 'fas fa-heart', label: 'Favorites' },
        { icon: 'fas fa-play', label: 'Playlist' },
        { icon: 'fas fa-user', label: 'Profile' },
    ];

    return (
        <nav className="fixed bottom-0 right-8 left-8 px-6 bg-black text-white py-2 flex justify-around items-center overflow-hidden sm:px-4 md:px-8">
            {navItems.map((item, index) => (
                <button key={index} className="flex flex-col items-center">
                    <i className={`${item.icon} text-lg`}></i>
                    <span className="text-xs">{item.label}</span>
                </button>
            ))}
        </nav>
    );
};

export default Navbar;
