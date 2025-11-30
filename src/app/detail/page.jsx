"use client";

import Sidebar from "../components/Sidebar";
import BorrowButton from "../components/BorrowButton";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function Detail() {

    const searchParams = useSearchParams();
    const id = searchParams.get("id");

    const [book, setBook] = useState(null);

    useEffect(() => {
        if (!id) return;

        fetch(`http://localhost:5000/buku/${id}`)
            .then(res => res.json())
            .then(data => setBook(data.data));
    }, [id]);

    if (!book) return <p className="p-10">Loading...</p>;

    return (
        <Sidebar>
            <div className="bg-white w-full p-4 rounded-xl overflow-hidden">
                <section className="from-gray-50 to-white">
                    <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
                        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                            <div className="w-full lg:w-auto flex justify-center lg:justify-start">
                                <img
                                    className="w-64 h-96 object-cover rounded-lg shadow-2xl transform transition-transform hover:scale-105 duration-300"
                                    src={book.gambar}
                                    alt={book.judul_buku}
                                />
                            </div>

                            <div className="flex-1 flex flex-col gap-5">
                                <div>
                                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Happy Monkey', cursive" }}>
                                        {book.judul_buku}
                                    </h1>
                                    <p className="text-xl text-gray-600 font-medium" style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>
                                        {book.pengarang}
                                    </p>
                                </div>

                                <p className="text-base text-gray-600 leading-relaxed max-w-2xl" style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                                </p>

                                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
                                    <BorrowButton />
                                    <div className="flex gap-3">
                                        <button className="p-3 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
                                            <svg className="w-6 h-6 text-gray-600 group-hover:text-[#6DC700] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                                            </svg>
                                        </button>

                                        <button className="p-3 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
                                            <svg className="w-6 h-6 text-gray-600 group-hover:text-[#6DC700] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <hr className="border-t border-gray-400 w-full" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="max-w-7xl mx-auto px-6 py-3">
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                        <h2 className="text-lg font-semibold text-gray-800 mb-5" style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>
                            Tersedia di:
                        </h2>

                        <div className="border-l-4 border-[#6DC700] pl-6 py-2 bg-green-50 rounded-r-lg">
                            <h3 className="text-[#6DC700] font-semibold text-lg mb-4" style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>
                                Perpustakaan Dmna aj ada
                            </h3>

                            <div className="flex flex-wrap gap-8">
                                <div className="flex flex-col gap-1">
                                    <span className="text-sm text-gray-600 font-medium" style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>Dapat Dipinjam</span>
                                    <span className="text-2xl font-bold text-green-600" style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>5</span>
                                </div>

                                <div className="flex flex-col gap-1">
                                    <span className="text-sm text-gray-600 font-medium" style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>Baca di Tempat</span>
                                    <span className="text-2xl font-bold text-gray-700" style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>0</span>
                                </div>

                                <div className="flex flex-col gap-1">
                                    <span className="text-sm text-gray-600 font-medium" style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>Sedang Dipinjam</span>
                                    <span className="text-2xl font-bold text-orange-600" style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>0</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-gradient-to-br from-[#E8E3D9] to-[#CCC5B8] py-12">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="flex flex-col lg:flex-row gap-8 items-start">
                            <div className="w-full lg:w-96 flex-shrink-0">
                                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg">
                                    <h2 className="text-xl font-bold text-[#6DC700] mb-6" style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>
                                        Detail Buku
                                    </h2>
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-start pb-3 border-b border-gray-200">
                                            <span className="text-sm text-gray-500 font-semibold">Judul Buku</span>
                                            <span className="text-sm text-gray-900 text-right max-w-[180px] font-medium">{book.judul_buku}</span>
                                        </div>

                                        <div className="flex justify-between items-start pb-3 border-b border-gray-200">
                                            <span className="text-sm text-gray-500 font-semibold">Pengarang</span>
                                            <span className="text-sm text-gray-900 text-right max-w-[180px] font-medium">{book.pengarang}</span>
                                        </div>

                                        <div className="flex justify-between items-start pb-3 border-b border-gray-200">
                                            <span className="text-sm text-gray-500 font-semibold">Penerbit</span>
                                            <span className="text-sm text-gray-900 text-right max-w-[180px] font-medium">{book.penerbit}</span>
                                        </div>

                                        <div className="flex justify-between items-start pb-3 border-b border-gray-200">
                                            <span className="text-sm text-gray-500 font-semibold">Tahun Terbit</span>
                                            <span className="text-sm text-gray-900 text-right max-w-[180px] font-medium">{book.tahun_terbit}</span>
                                        </div>

                                        <div className="flex justify-between items-start pb-3 border-b border-gray-200">
                                            <span className="text-sm text-gray-500 font-semibold">ISBN</span>
                                            <span className="text-sm text-gray-900 text-right max-w-[180px] font-mono">{book.isbn}</span>
                                        </div>

                                        <div className="flex justify-between items-start pt-2">
                                            <span className="text-sm text-gray-500 font-semibold">Stok</span>
                                            <span className="text-sm font-bold text-green-600 text-right">{book.stok} tersedia</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex-1">
                                <div className="bg-white rounded-xl p-8 shadow-lg">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>
                                        Deskripsi
                                    </h2>
                                    <div className="space-y-4 text-gray-700 leading-relaxed" style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>
                                        <p className="text-base">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        </p>
                                        <p className="text-base">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="max-w-7xl mx-auto px-6 py-12">
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: "'Happy Monkey', cursive" }}>
                            <span className="text-[#6DC700]">Buku Rekomendasi</span> Lainnya
                        </h2>
                        <p className="text-gray-600" style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                        </p>
                    </div>
                </section>
            </div>
        </Sidebar>
    );
}