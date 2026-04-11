"use client";

import React from "react";

export default function FilterBook() {
    const filters = ["Semua", "Fiksi", "Sejarah", "Romance", "Religi", "Horror", "Inspirasi"];
    const [activeFilter, setActiveFilter] = React.useState("Semua");
    
    return (
        <div className="w-full px-2">
            <div className="flex flex-wrap gap-2">
                {filters.map((filter) => (
                    <button 
                        key={filter}
                        onClick={() => setActiveFilter(filter)}
                        className={` px-3 sm:px-4 py-1.5 sm:py-1 text-[13px] sm:text-[13px] rounded-md transition-colors whitespace-nowrap ${
                            activeFilter === filter
                                ? "bg-green-500 text-white hover:bg-green-600"
                                : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                        }`}
                    >
                        {filter}
                    </button>
                ))}
            </div>
        </div>
    );
}

