"use client";
import React from "react";

export default function FilterActivity(){
 const filters = ["Hari Ini", "Aktivitas Literasi", "Seremoni", "Story Telling", "Seminar", "Diskusi"];
    const [activeFilter, setActiveFilter] = React.useState("Hari Ini");
    
    return (
        <div className="w-full flex overflow-x-auto pt-5 pb-2 px-2 flex-wrap">
            <div className="flex gap-2 min-w-max">
                {filters.map((filter) => (
                    <button 
                        key={filter}
                        onClick={() => setActiveFilter(filter)}
                        className={`px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm rounded-md transition-colors whitespace-nowrap ${
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