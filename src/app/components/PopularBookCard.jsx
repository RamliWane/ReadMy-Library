import React from "react";
import { Star } from 'lucide-react';


export default async function BookCard(){
    const books = await fetch("http://localhost:5000/buku", {
        method: "GET",
        cache: "no-store",
    })
    .then(res => res.json())
    .then(data => data.data);
    
    return(
        <>
                {books?.map(item => (
                    <a 
                        href={`/detail?id=${item.id}`} 
                        key={item.id || item.judul_buku}
                        className="relative bg-gray-500 h-[175px] rounded-lg"
                    >
                        <div className=" rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <img 
                                src={item.gambar} 
                                alt={item.judul_buku} 
                                className="h-[110px] w-[100px] object-cover"
                            />
                            <div className="absolute inset-0 from-black/95 via-black/60 to-transparent"></div>
                            
                            <div className="absolute p-2 left-0 w-full flex flex-col justify-end">
                                <p
                                    className="text-white/90 text-[9px]"
                                    style={{ fontFamily: "'Alexandria', sans-serif" }}
                                >
                                    {item.pengarang}
                                </p>
                                <h1 
                                    className="text-white font-bold text-base text-[10px] line-clamp-2"
                                    style={{ fontFamily: "'Happy Monkey', cursive" }}
                                >
                                    {item.judul_buku}
                                </h1>
                                
                                <span
                                    className="text-white text-[9px] font-semibold"
                                    style={{ fontFamily: "'Alexandria', sans-serif" }}
                                >
                                    {item.genre}
                                </span>
                            </div>
                        </div>
                    </a>
                ))}
        </>
    )
}