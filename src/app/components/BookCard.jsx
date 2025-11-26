import React from "react";

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
                    className="relative flex-shrink-0 w-full sm:w-[180px] md:w-[200px] lg:w-[220px]"
                >
                    <div className="w-full h-[280px] sm:h-[300px] md:h-[320px] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <img 
                            src={item.gambar} 
                            alt={item.judul_buku} 
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent"></div>
                        
                        <div className="absolute bottom-0 left-0 w-full p-4 sm:p-5 md:p-6 flex flex-col justify-end">
                            <span
                                className="bg-[#6DC700] text-white text-xs sm:text-sm font-semibold px-3 py-1 sm:px-4 sm:py-1.5 rounded-lg mb-2 sm:mb-3 w-fit"
                                style={{ fontFamily: "'Alexandria', sans-serif" }}
                            >
                                {item.genre}
                            </span>
                            <h1 
                                className="text-white font-bold text-base sm:text-[17px] mb-1 sm:mb-2 line-clamp-2"
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
        </>
    )
}