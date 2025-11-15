import RightBar from "../components/RightBar";
import Sidebar from "../components/Sidebar";
import { Mic, Clock, MapPin } from 'lucide-react';

export default function Home() {
    return (
        <div className="flex bg-[#ECF4E8]">
            <Sidebar />
            <div className="flex-1 flex justify-center flex-col flex-wrap items-start">
                <img
                    className="w-full p-3 max-w-6xl h-60"
                    src="/absurd-utama.png"
                    alt="Banner"
                />
                <div className="bg-white mt-2 w-full h-screen">
                    <section>
                        <div className="flex flex-col text-start ml-5 mt-4">
                            <h1
                                className="text-xl lg:text-xl text-black"
                                style={{ fontFamily: "'Happy Monkey', cursive" }}
                            >
                                <span className="text-[#6DC700]">Recomended For You</span>
                            </h1>

                            <p
                                className="text-[14px] text-black"
                                style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing
                            </p>
                        </div>

                        <div className="flex flex-wrap items-center justify-center gap-2 mt-5">
                            <div className="relative flex flex-col max-w-xl items-center">
                                <img className="w-45 rounded-lg" src="./atomic-habbits-book.png" alt="Atomic Habits" />
                                <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black/70 to-transparent"></div>

                                <p
                                    className="text-[17px] bg-[#6DC700] w-30 h-7 flex items-center justify-center -mt-20 rounded-2xl text-white relative z-[10]"
                                    style={{ fontFamily: "'Alexandria', sans-serif" }}
                                >
                                    Fiksi
                                </p>

                                <h1 className="text-xl text-white font-bold z-10">Atomic Habits</h1>
                                <p
                                    className="text-[17px] text-white z-10"
                                    style={{ fontFamily: "'Alexandria', sans-serif" }}
                                >
                                    Abiel Yusuf
                                </p>
                            </div>
                            <div className="relative flex flex-col items-center">
                                <img className="w-45 rounded-lg" src="./atomic-habbits-book.png" alt="Atomic Habits" />
                                <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black/70 to-transparent"></div>

                                <p
                                    className="text-[17px] bg-[#6DC700] w-30 h-7 flex items-center justify-center -mt-20 rounded-2xl text-white relative z-[10]"
                                    style={{ fontFamily: "'Alexandria', sans-serif" }}
                                >
                                    Fiksi
                                </p>

                                <h1 className="text-xl text-white font-bold z-10">Atomic Habits</h1>
                                <p
                                    className="text-[17px] text-white z-10"
                                    style={{ fontFamily: "'Alexandria', sans-serif" }}
                                >
                                    Abiel Yusuf
                                </p>
                            </div>
                            <div className="relative flex flex-col items-center">
                                <img className="w-45 rounded-lg" src="./atomic-habbits-book.png" alt="Atomic Habits" />
                                <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black/70 to-transparent"></div>

                                <p
                                    className="text-[17px] bg-[#6DC700] w-30 h-7 flex items-center justify-center -mt-20 rounded-2xl text-white relative z-[10]"
                                    style={{ fontFamily: "'Alexandria', sans-serif" }}
                                >
                                    Fiksi
                                </p>

                                <h1 className="text-xl text-white font-bold z-10">Atomic Habits</h1>
                                <p
                                    className="text-[17px] text-white z-10"
                                    style={{ fontFamily: "'Alexandria', sans-serif" }}
                                >
                                    Abiel Yusuf
                                </p>
                            </div>
                            <div className="relative flex flex-col items-center">
                                <img className="w-45 rounded-lg" src="./atomic-habbits-book.png" alt="Atomic Habits" />
                                <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black/70 to-transparent"></div>

                                <p
                                    className="text-[17px] bg-[#6DC700] w-30 h-7 flex items-center justify-center -mt-20 rounded-2xl text-white relative z-[10]"
                                    style={{ fontFamily: "'Alexandria', sans-serif" }}
                                >
                                    Fiksi
                                </p>

                                <h1 className="text-xl text-white font-bold z-10">Atomic Habits</h1>
                                <p
                                    className="text-[17px] text-white z-10"
                                    style={{ fontFamily: "'Alexandria', sans-serif" }}
                                >
                                    Abiel Yusuf
                                </p>
                            </div>
                            <div className="relative flex flex-col items-center">
                                <img className="w-45 rounded-lg" src="./atomic-habbits-book.png" alt="Atomic Habits" />
                                <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black/70 to-transparent"></div>

                                <p
                                    className="text-[17px] bg-[#6DC700] w-30 h-7 flex items-center justify-center -mt-20 rounded-2xl text-white relative z-[10]"
                                    style={{ fontFamily: "'Alexandria', sans-serif" }}
                                >
                                    Fiksi
                                </p>

                                <h1 className="text-xl text-white font-bold z-10">Atomic Habits</h1>
                                <p
                                    className="text-[17px] text-white z-10"
                                    style={{ fontFamily: "'Alexandria', sans-serif" }}
                                >
                                    Abiel Yusuf
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col text-start ml-5 pt-10">
                            <h1
                                className="text-xl lg:text-xl text-black"
                                style={{ fontFamily: "'Happy Monkey', cursive" }}
                            >
                                <span className="text-[#6DC700]">Aktivitas Literasi</span>
                            </h1>
                            <p
                                className="text-[14px] text-black"
                                style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing
                            </p>
                        </div>
                        <div className="flex">
                            <div className="max-w-xs ml-5 mt-5 mb-10 bg-white rounded-lg shadow-lg overflow-hidden">
                                <div className="relative h-40 bg-gradient-to-br from-gray-700 to-gray-900">
                                    <img
                                        src="./aktivitas-literasi.jpeg"
                                        alt="Event venue"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                    <div className="p-3">
                                        <h2 className="text-xl font-bold text-gray-900 mb-6 leading-tight">
                                            Sosialisasi Dan Workshop Taman Bacaan
                                        </h2>

                                        <div className="space-y-4">
                                            <div className="flex items-center gap-1">
                                                <div className="flex-shrink-0">
                                                    <Mic className="w-5 h-5 text-gray-600" />
                                                </div>
                                                <span className="text-gray-700 text-sm">
                                                    Dr. Abiel Yusuf, M.Pd
                                                </span>
                                            </div>

                                            <div className="flex items-center gap-1">
                                                <div className="flex-shrink-0">
                                                    <Clock className="w-5 h-5 text-gray-600" />
                                                </div>
                                                <span className="text-gray-700 text-sm">
                                                    22 November 2025, 09:00 - 16:00 WIB
                                                </span>
                                            </div>

                                            <div className="flex items-center gap-1">
                                                <div className="flex-shrink-0">
                                                    <MapPin className="w-5 h-5 text-gray-600" />
                                                </div>
                                                <span className="text-gray-700 text-sm">
                                                    Pusat Dokumentasi Sastra HB Jassin
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                            <div className="max-w-xs ml-5 mt-5 mb-10 bg-white rounded-lg shadow-lg overflow-hidden">
                                <div className="relative h-40 bg-gradient-to-br from-gray-700 to-gray-900">
                                    <img
                                        src="./aktivitas-literasi.jpeg"
                                        alt="Event venue"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                    <div className="p-3">
                                        <h2 className="text-xl font-bold text-gray-900 mb-6 leading-tight">
                                            Sosialisasi Dan Workshop Taman Bacaan
                                        </h2>

                                        <div className="space-y-4">
                                            <div className="flex items-center gap-1">
                                                <div className="flex-shrink-0">
                                                    <Mic className="w-5 h-5 text-gray-600" />
                                                </div>
                                                <span className="text-gray-700 text-sm">
                                                    Dr. Abiel Yusuf, M.Pd
                                                </span>
                                            </div>

                                            <div className="flex items-center gap-1">
                                                <div className="flex-shrink-0">
                                                    <Clock className="w-5 h-5 text-gray-600" />
                                                </div>
                                                <span className="text-gray-700 text-sm">
                                                    22 November 2025, 09:00 - 16:00 WIB
                                                </span>
                                            </div>

                                            <div className="flex items-center gap-1">
                                                <div className="flex-shrink-0">
                                                    <MapPin className="w-5 h-5 text-gray-600" />
                                                </div>
                                                <span className="text-gray-700 text-sm">
                                                    Pusat Dokumentasi Sastra HB Jassin
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                            <div className="max-w-xs ml-5 mt-5 mb-10 bg-white rounded-lg shadow-lg overflow-hidden">
                                <div className="relative h-40 bg-gradient-to-br from-gray-700 to-gray-900">
                                    <img
                                        src="./aktivitas-literasi.jpeg"
                                        alt="Event venue"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                    <div className="p-3">
                                        <h2 className="text-xl font-bold text-gray-900 mb-6 leading-tight">
                                            Sosialisasi Dan Workshop Taman Bacaan
                                        </h2>

                                        <div className="space-y-4">
                                            <div className="flex items-center gap-1">
                                                <div className="flex-shrink-0">
                                                    <Mic className="w-5 h-5 text-gray-600" />
                                                </div>
                                                <span className="text-gray-700 text-sm">
                                                    Dr. Abiel Yusuf, M.Pd
                                                </span>
                                            </div>

                                            <div className="flex items-center gap-1">
                                                <div className="flex-shrink-0">
                                                    <Clock className="w-5 h-5 text-gray-600" />
                                                </div>
                                                <span className="text-gray-700 text-sm">
                                                    22 November 2025, 09:00 - 16:00 WIB
                                                </span>
                                            </div>

                                            <div className="flex items-center gap-1">
                                                <div className="flex-shrink-0">
                                                    <MapPin className="w-5 h-5 text-gray-600" />
                                                </div>
                                                <span className="text-gray-700 text-sm">
                                                    Pusat Dokumentasi Sastra HB Jassin
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <RightBar />
        </div>
    );
}