import BookCard from "../components/BookCard";
import FilterActivity from "../components/FilterActivity";
import FilterBook from "../components/FilterBook";
import HomeFooter from "../components/HomeFooter";
import LiterasiAct from "../components/LiterasiAct";
import RightBar from "../components/RightBar";
import Sidebar from "../components/Sidebar";

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
                <div className="bg-white mt-2 w-full h-auto">
                    <section>
                        <div className="flex justify-between flex-wrap">
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
                            <div>
                                <FilterBook />
                            </div>
                        </div>

                        <div className="flex flex-wrap items-center justify-center gap-2 mt-5">
                            <BookCard />
                            <BookCard />
                            <BookCard />
                            <BookCard />
                            <BookCard />
                        </div>
                        <div className="flex justify-between flex-wrap mt-6">
                            <div className="flex flex-col text-start ml-5 mt-4">
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
                            <div>
                                <FilterActivity />
                            </div>
                        </div>
                        <div className="flex flex-wrap">
                            <LiterasiAct />
                            <LiterasiAct />
                            <LiterasiAct />
                        </div>

                        <div className="flex flex-col text-start ml-5">
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
                        <div className="flex flex-wrap">
                            <LiterasiAct />
                            <LiterasiAct />
                            <LiterasiAct />
                        </div>
                        
                        <div className="mb-10">
                            <HomeFooter />
                        </div>
                    </section>
                </div>
            </div>
            <RightBar />
        </div>
    );
}