import React from 'react';

const Tabs = () => {
    const tabs = ['Suggested', 'Songs', 'Artists', 'Albums'];

    return (
        <div className="flex w-full justify-evenly space-x-8 text-white text-sm px-0 py-2 bg-backgroundColor">
            {tabs.map((tab, index) => (
                <button
                    key={index}
                    className="text-gray-400 hover:text-pink-400 focus:text-pink-400">
                    {tab}
                </button>
            ))}
        </div>
    );
};

export default Tabs;
