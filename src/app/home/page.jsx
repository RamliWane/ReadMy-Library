import Sidebar from "../components/Sidebar";

export default function Dashboard() {
    return (
        <div className="flex bg-[#ECF4E8]">
            <Sidebar />
            <div className="flex-1 flex justify-center flex-col flex-wrap items-start p-6">
                <img className="w-full shadow-xl max-w-6xl h-60 object-cover" src="/absurd-utama.png" alt="Banner" />
                <div className="bg-white mt-10 rounded-xl">
                    <section>
                        <div className="flex items-start justify-start mt-5">
                            <div className="flex flex-col text-start ml-5">
                                <h1 className="text-3xl lg:text-3xl text-black" style={{ fontFamily: "'Happy Monkey', cursive" }}>
                                    <span className="text-[#6DC700]">Recomended For You</span>
                                </h1>
                                <p className="text-[16px] font-bold text-black" style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing
                                </p>
                                <p className="text-[16px] font-bold text-black" style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>
                                    elit, sed do eiusmod tempor in
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-wrap items-center justify-center gap-5 pl-3 mt-5">
                            <div className="relative flex flex-col items-center">
                                {/* Gambar */}
                                <img className="w-full" src="./atomic-habbits-book.png" alt="" />

                                {/* Gradient hitam transparan di bawah gambar */}
                                <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black/70 to-transparent"></div>

                                {/* Nama penulis */}
                                <p className="text-[17px] bg-[#6DC700] w-27 h-7 flex items-center justify-center -mt-20 rounded-2xl text-white relative z-[10]"
                                    style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>
                                    James Clear
                                </p>

                                {/* Judul */}
                                <h1 className="text-xl text-black" style={{ fontFamily: "'Happy Monkey', cursive" }}>
                                    <span className="text-[#6DC700]">Atomic Habbits</span>
                                </h1>

                                {/* Tanggal */}
                                <p className="text-[17px] text-[#B5830D] font-bold" style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>
                                    1 October 2025
                                </p>
                            </div>
                            <div className="flex flex-col items-center text center">
                                <img src="./laskar-pelangi-book.png" alt="" />
                                <p className="text-[17px] bg-[#6DC700] w-27 h-7 items-center flex justify-center -mt-20 rounded-2xl text-white" style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>
                                    James Clear
                                </p>
                                <h1 className="text-xl text-black" style={{ fontFamily: "'Happy Monkey', cursive" }}>
                                    <span className="text-[#6DC700]">Atomic Habbits</span>
                                </h1>
                                <p className="text-[17px] text-[#B5830D] font-bold" style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>
                                    1 October 2025
                                </p>
                            </div>
                            <div className="flex flex-col items-center text center">
                                <img src="./sapiens-book.png" alt="" />
                                <p className="text-[17px] bg-[#6DC700] w-27 h-7 items-center flex justify-center -mt-20 rounded-2xl text-white" style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>
                                    James Clear
                                </p>
                                <h1 className="text-xl text-black" style={{ fontFamily: "'Happy Monkey', cursive" }}>
                                    <span className="text-[#6DC700]">Atomic Habbits</span>
                                </h1>
                                <p className="text-[17px] text-[#B5830D] font-bold" style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>
                                    1 October 2025
                                </p>
                            </div>
                            <div className="flex flex-col items-center text center">
                                <img src="./mariposa-book.png" alt="" />
                                <p className="text-[17px] bg-[#6DC700] w-27 h-7 items-center flex justify-center -mt-20 rounded-2xl text-white" style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>
                                    James Clear
                                </p>
                                <h1 className="text-xl text-black" style={{ fontFamily: "'Happy Monkey', cursive" }}>
                                    <span className="text-[#6DC700]">Atomic Habbits</span>
                                </h1>
                                <p className="text-[17px] text-[#B5830D] font-bold" style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>
                                    1 October 2025
                                </p>
                            </div>
                            <div className="flex flex-col items-center text center">
                                <img src="./five-feet-apart-book.png" alt="" />
                                <p className="text-[17px] bg-[#6DC700] w-27 h-7 items-center flex justify-center -mt-20 rounded-2xl text-white" style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>
                                    James Clear
                                </p>
                                <h1 className="text-xl text-black" style={{ fontFamily: "'Happy Monkey', cursive" }}>
                                    <span className="text-[#6DC700]">Atomic Habbits</span>
                                </h1>
                                <p className="text-[17px] text-[#B5830D] font-bold" style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>
                                    1 October 2025
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
