//codingan BookCard
"use client";
import React, { useState } from "react";

export default function BookCard({ books }) {

    const [page, setPage] = useState(0);
    
    const itemsPerPage = 10; // 5 kolom x 2 baris
    const totalPages = Math.ceil(books.length / itemsPerPage);
    const currentBooks = books.slice(page * itemsPerPage, (page + 1) * itemsPerPage);


    return (
       <div className="flex flex-col gap-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 p-1">
                {currentBooks.map(item => (
                    <a
                        href={`/detailclone?id=${item.id}`}
                        key={item.id || item.judul_buku}
                        className="relative group block"
                    >
                        <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                            <img
                                src={item.gambar}
                                alt={item.judul_buku}
                                className="w-full h-[200px] sm:h-[250px] md:h-[280px] object-cover"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/60 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 w-full p-2 sm:p-3 flex flex-col justify-end">
                                <span className="bg-[#6DC700] text-white text-[10px] sm:text-[12px] font-semibold px-2 py-1 rounded-lg mb-1 sm:mb-2 w-fit">
                                    {item.genre}
                                </span>
                                <h1 className="text-white font-bold text-xs sm:text-sm md:text-base mb-1 line-clamp-2">
                                    {item.judul_buku}
                                </h1>
                                <p className="text-white/90 text-[10px] sm:text-xs">
                                    {item.pengarang}
                                </p>
                            </div>
                        </div>
                    </a>
                ))}
            </div>

            <div className="flex items-center justify-center gap-4">
                <button
                    onClick={() => setPage(p => Math.max(0, p - 1))}
                    disabled={page === 0}
                    className="p-2 rounded-full bg-white shadow hover:bg-gray-100 disabled:opacity-30"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <span className="text-sm text-gray-500">{page + 1} / {totalPages}</span>

                <button
                    onClick={() => setPage(p => Math.min(totalPages - 1, p + 1))}
                    disabled={page === totalPages - 1}
                    className="p-2 rounded-full bg-white shadow hover:bg-gray-100 disabled:opacity-30"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
    )
}