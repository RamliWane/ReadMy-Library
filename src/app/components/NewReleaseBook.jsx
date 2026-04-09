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
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-1 rounded-full shadow-lg"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <button
                onClick={() => scroll('right')}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-1 rounded-full shadow-lg"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>

            <section 
                ref={scrollRef}
                className="w-full overflow-x-scroll p-1 no-scrollbar"
            >
                <div className="flex w-max gap-3">
                        {books?.slice(10, 16).map(item => (
                            <div key={item.id} className="max-w-md shrink">
                                <a href={`/detail?id=${item.id}`}
                                    key={item.id || item.judul_buku}>
                                    <div className="relative w-100 h-50 p-4 bg-[#9E8D6E] rounded-xl overflow-hidden">
                                        <div className="relative flex flex-col md:flex-row items-center justify-center gap-4">
                                            <div className="shrink-0">
                                                <img
                                                    src={item.gambar}
                                                    alt={item.judul_buku}
                                                    className="w-25 h-auto rounded-xl"
                                                />
                                            </div>

                                            <div className="flex flex-col gap-2 text-white">
                                                <h1 className="text-xl font-bold leading-tight" style={{ fontFamily: "'Happy Monkey', cursive" }}>
                                                    {item.judul_buku}
                                                </h1>

                                                <p className="text-[14px] font-light" style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>
                                                    {item.pengarang}
                                                </p>

                                                <div className="flex gap-1">
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

                                                <p className="text-[15px] leading-relaxed text-white" style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>
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