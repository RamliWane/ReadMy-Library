import React from "react";

export default async function BookCard(){
     // FETCH DATA KE BACKEND
    const books = await fetch("http://localhost:5000/buku", {
        method: "GET",
        cache: "no-store",
    })
    .then(res => res.json())
    .then(data => data.data);
    
    return(
        <>
            {books?.slice(0, 12).map(item => (
                <a 
                    href={`/detail?id=${item.id}`} 
                    key={item.id || item.judul_buku}
                    className="relative flex-shrink-0"
                    style={{ width: '220px', height: '320px' }} 
                >
                    <div className="w-full h-80 rounded-lg overflow-hidden shadow-lg">
                        <img 
                            src={item.gambar} 
                            alt={item.judul_buku} 
                            className="w-full pt-3 h-full object-cover"
                        />
                        
                        <div className="absolute pt-3 inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent"></div>
                        
                        <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col justify-end">
                            <span
                                className="bg-[#6DC700] text-white text-sm font-semibold px-4 py-1.5 rounded-lg mb-3 w-fit"
                                style={{ fontFamily: "'Alexandria', sans-serif" }}
                            >
                                {item.genre}
                            </span>
                            <h1 
                                className="text-white font-bold text-[17px] mb-2 line-clamp-2"
                                style={{ fontFamily: "'Happy Monkey', cursive" }}
                            >
                                {item.judul_buku}
                            </h1>
                            <p
                                className="text-white/90 text-base text-[13px]"
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