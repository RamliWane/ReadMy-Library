//codingan NewReleaseBook
'use client'
import { useRef, useEffect, useState } from 'react';

export default function NewReleaseBook() {
    const scrollRef = useRef(null);
    const [books, setBooks] = useState([]);

    // const [active, setActive] = useState(0);
    // const total = 5;

    // Fetch data pakai useEffect
    useEffect(() => {
        fetch("http://localhost:5000/buku")
            .then(res => res.json())
            .then(data => setBooks(data.data));
    }, []);

    const handleScroll = (direction) => {
            console.log('scroll clicked', direction, scrollRef.current);

        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -450 : 450,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="relative w-full">
                <button
                    onClick={() => handleScroll('left')}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white p-1 rounded-full shadow-lg"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button
                    onClick={() => handleScroll('right')}
                    className="sticky right-2 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white p-1 rounded-full shadow-lg"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>

            <section  
                ref={scrollRef}
                className="max-w-full overflow-x-auto p-1 no-scrollbar px-8"
            >
                <div className="flex w-max gap-3">
                    {books?.slice(10, 16).map(item => (
                        <div key={item.id} className="w-[280px] sm:w-[380px] shrink-0">
                        <a href={`/detail?id=${item.id}`}>
                            <div className="relative w-full h-[160px] sm:h-[180px] p-4 bg-[#9E8D6E] rounded-xl overflow-hidden">
                            <div className="relative flex flex-row items-start gap-4 h-full">
                                <div className="shrink-0">
                                <img
                                    src={item.gambar}
                                    alt={item.judul_buku}
                                    className="w-20 sm:w-25 h-auto rounded-xl"
                                />
                                </div>

                                <div className="flex flex-col gap-2 text-white min-w-0">
                                <h1 className="text-sm sm:text-xl font-bold leading-tight line-clamp-2" style={{ fontFamily: "'Happy Monkey', cursive" }}>
                                    {item.judul_buku}
                                </h1>

                                <p className="text-[12px] sm:text-[14px] font-light" style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>
                                    {item.pengarang}
                                </p>

                                <div className="flex gap-1">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                    <svg key={star} className="w-3 h-3 sm:w-4 sm:h-4 fill-white" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                    ))}
                                </div>

                                <p className="text-[12px] sm:text-[15px] leading-relaxed text-white line-clamp-3" style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor i
                                </p>
                                </div>
                            </div>
                            </div>
                        </a>
                        </div>
                    ))}
                </div>
            </section>


            {/* <div className="flex justify-center gap-2 mt-3">
  {Array.from({ length: total }).map((_, i) => (
    <div
      key={i}
      onClick={() => setActive(i)}
      className={`h-2 rounded-full cursor-pointer transition-all duration-300 
        ${i === active ? "w-6 bg-blue-500" : "w-2 bg-gray-400"}`}
    />
  ))}
</div> */}


        </div>
    );
}