import Sidebar from "../components/Sidebar";
import RightBar from "../components/RightBar";
import SearcBar from "../components/SearchBar";
import FilterBook from "../components/FilterBook";
import BookCard from "../components/BookCard";
import HomeFooter from "../components/HomeFooter";



export default function Detail() {
    return (
        <section>
            <div className="flex bg-[#ECF4E8]">
                <Sidebar />
                <div className="bg-white mt-2 w-full m-3 rounded-xl h-auto">
                    <section>
                        <div className="flex flex-wrap justify-center items-start p-5 lg:pt-20">
                            <img className="w-65 h-90 object-cover rounded-sm shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]" src="./atomic-habbits-book.png" alt="" />
                            <div className="flex flex-col gap-4 lg:pl-15 lg:pt-5">
                                <h1 className="text-4xl text-black" style={{ fontFamily: "'Happy Monkey', cursive" }}>Atomic Habbits</h1>
                                <p className="text-[20px] text-black" style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>
                                    James Clear
                                </p>
                                <p className="text-[15px] italic text-black" style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, brsed do <br />eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />Ut enim ad minim veniam
                                </p>
                                <div className="flex items-center justify-between gap-2 pt-10">
                                    <button className="px-4 py-2 bg-white border text-black text-sm rounded-md hover:bg-[#6DC700] transition-colors">
                                        Pinjam
                                    </button>
                                    <div className="flex gap-5">
                                        <button className="p-2 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors">
                                            <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                                            </svg>
                                        </button>

                                        <button className="p-2 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors">
                                            <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <hr className="border-t border-gray-500 my-4" />
                            </div>
                        </div>

                        <div className="border border-gray-300 rounded p-5 m-2">
                            <h2 className="text-base font-medium text-gray-700 mb-4" style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>
                                Tersedia di:
                            </h2>

                            <div className="border-l-2 border-[#6DC700] pl-4 mb-4">
                                <h3 className="text-[#6DC700] font-medium text-base mb-3" style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>
                                    Perpustakaan Dmna aj ada
                                </h3>

                                <div className="flex gap-6 mb-3">
                                    <div className="flex items-center gap-2">
                                        <span className="text-sm text-gray-600" style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>Dapat Dipinjam:</span>
                                        <span className="text-sm font-semibold text-green-700" style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>5</span>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <span className="text-sm text-gray-600" style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>Baca di Tempat:</span>
                                        <span className="text-sm font-semibold text-gray-700" style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>0</span>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <span className="text-sm text-gray-600" style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>Sedang Dipinjam:</span>
                                        <span className="text-sm font-semibold text-orange-700" style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>0</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#CCC5B8] m-2">
                            <div className="flex justify-center items-center lg:gap-10 flex-wrap p-5">
                                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm w-80">
                                    <h2 className="text-lg font-semibold text-[#6DC700] mb-4" style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>
                                        Detail Buku
                                    </h2>
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-start">
                                            <span className="text-sm text-gray-500 font-medium">Judul Buku</span>
                                            <span className="text-sm text-gray-800 text-right max-w-[180px]">Laskar Pelangi</span>
                                        </div>
                                        <hr className="border-gray-200" />
                                        <div className="flex justify-between items-start">
                                            <span className="text-sm text-gray-500 font-medium">Pengarang</span>
                                            <span className="text-sm text-gray-800 text-right max-w-[180px]">Andrea Hirata</span>
                                        </div>
                                        <hr className="border-gray-200" />
                                        <div className="flex justify-between items-start">
                                            <span className="text-sm text-gray-500 font-medium">Penerbit</span>
                                            <span className="text-sm text-gray-800 text-right max-w-[180px]">Bentang Pustaka</span>
                                        </div>
                                        <hr className="border-gray-200" />
                                        <div className="flex justify-between items-start">
                                            <span className="text-sm text-gray-500 font-medium">Tahun Terbit</span>
                                            <span className="text-sm text-gray-800 text-right max-w-[180px]">2005</span>
                                        </div>
                                        <hr className="border-gray-200" />
                                        <div className="flex justify-between items-start">
                                            <span className="text-sm text-gray-500 font-medium">ISBN</span>
                                            <span className="text-sm text-gray-800 text-right max-w-[180px]">978-979-3062-79-2</span>
                                        </div>
                                        <hr className="border-gray-200" />
                                        <div className="flex justify-between items-start">
                                            <span className="text-sm text-gray-500 font-medium">Stok</span>
                                            <span className="text-sm font-semibold text-green-600 text-right">12 tersedia</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex justify-center flex-col items-start gap-4">
                                    <h1 className="text-[20px] text-black font-semibold" style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>
                                        Descriptions
                                    </h1>
                                    <h1 className="text-[15px] text-black text-left" style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip <br />ex ea commodo consequat.
                                    </h1>
                                    <h1 className="text-[15px] text-black text-left" style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip <br />ex ea commodo consequat.
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col flex-wrap">
                            <div className="flex flex-col text-start ml-5 mt-4">
                                <h1
                                    className="text-xl lg:text-xl text-black"
                                    style={{ fontFamily: "'Happy Monkey', cursive" }}
                                >
                                    <span className="text-[#6DC700]">Buku Rekomendasi Lainnya</span>
                                </h1>

                                <p
                                    className="text-[14px] text-black"
                                    style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
                                >
                                    Lorem ipsum dolor sit amet, consectetur adipiscing
                                </p>
                            </div>
                            <hr className="border-t border-black my-4 m-5" />
                            <div className="flex flex-wrap gap-5 p-3">
                                <BookCard />
                                <BookCard />
                                <BookCard />
                                <BookCard />
                                <BookCard />
                                <BookCard />
                                <BookCard />
                            </div>
                        </div>
                    </section>
                </div>
                <RightBar />
            </div>
        </section>
    )
}