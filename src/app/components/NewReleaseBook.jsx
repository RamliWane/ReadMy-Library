'use client'
import { useRef, useEffect, useState } from 'react';

export default function NewReleaseBook() {
    const scrollRef = useRef(null);
    const [books, setBooks] = useState([]);

    // Fetch data pakai useEffect
    useEffect(() => {
        fetch("http://localhost:5000/buku")
            .then(res => res.json())
            .then(data => setBooks(data.data));
    }, []);

    const scroll = (direction) => {
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
                onClick={() => scroll('left')}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <button
                onClick={() => scroll('right')}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>

            <section 
                ref={scrollRef}
                className="w-full overflow-x-scroll p-3 hide-scrollbar"
            >
                <div className="flex w-max gap-3">
                        {books?.slice(10, 13).map(item => (
                            <div key={item.id} className="max-w-md shrink">
                                <a href={`/detail?id=${item.id}`}
                                    key={item.id || item.judul_buku}>
                                    <div className="relative w-[430px] h-auto bg-[#9E8D6E] shadow-xl rounded-xl overflow-hidden">
                                        <div className="relative z-0 flex flex-col md:flex-row items-center gap-5 p-5">
                                            <div className="shrink-0">
                                                <img
                                                    src={item.gambar}
                                                    alt={item.judul_buku}
                                                    className="w-36 h-auto rounded-xl transform hover:scale-105 transition-transform duration-300"
                                                />
                                            </div>

                                            <div className="flex flex-col gap-3 text-white">
                                                <h1 className="text-3xl font-bold leading-tight" style={{ fontFamily: "'Happy Monkey', cursive" }}>
                                                    {item.judul_buku}
                                                </h1>

                                                <p className="text-xl font-light" style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>
                                                    {item.pengarang}
                                                </p>

                                                <div className="flex gap-1 my-1">
                                                    {[1, 2, 3, 4, 5].map((star) => (
                                                        <svg
                                                            key={star}
                                                            className="w-4 h-4 fill-white"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                                        </svg>
                                                    ))}
                                                </div>

                                                <p className="text-base leading-relaxed text-white" style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>
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
        </div>
    );
}