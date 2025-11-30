import React from "react";

export default async function BookCard(){
    const books = await fetch("http://localhost:5000/buku", {
        method: "GET",
        cache: "no-store",
    })
    .then(res => res.json())
    .then(data => data.data);
    
    return(
        <div className="flex flex-wrap justify-center gap-5">
                {books?.map(item => (
                    <a 
                        href={`/detail?id=${item.id}`} 
                        key={item.id || item.judul_buku}
                        className="relative w-auto"
                    >
                        <div className=" rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <img 
                                src={item.gambar} 
                                alt={item.judul_buku} 
                                className="h-[250px] w-auto object-cover"
                            />
                            <div className="absolute inset-0 from-black/95 via-black/60 to-transparent"></div>
                            
                            <div className="absolute bottom-0 left-0 w-full p-3 flex flex-col justify-end">
                                <span
                                    className="bg-[#6DC700] text-white text-[12px] font-semibold px-2 py-1 rounded-lg mb-2 sm:mb-3 w-fit"
                                    style={{ fontFamily: "'Alexandria', sans-serif" }}
                                >
                                    {item.genre}
                                </span>
                                <h1 
                                    className="text-white font-bold text-base sm:text-[13px] mb-1 sm:mb-2 line-clamp-2"
                                    style={{ fontFamily: "'Happy Monkey', cursive" }}
                                >
                                    {item.judul_buku}
                                </h1>
                                <p
                                    className="text-white/90 text-xs sm:text-[13px]"
                                    style={{ fontFamily: "'Alexandria', sans-serif" }}
                                >
                                    {item.pengarang}
                                </p>
                            </div>
                        </div>
                    </a>
                ))}
        </div>
    )
}