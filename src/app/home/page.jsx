
import { Imprima } from "next/font/google";
import BookCard from "../components/BookCard";
import FilterActivity from "../components/FilterActivity";
import FilterBook from "../components/FilterBook";
import HomeFooter from "../components/HomeFooter";
import LiterasiAct from "../components/LiterasiAct";
import RightBar from "../components/RightBar";
import Sidebar from "../components/Sidebar";
import PopularBookCard from "../components/PopularBookCard";
export default async function HomePage() {
    const users = await fetch("http://localhost:5000/users", {
        method: "GET",
        cache: "no-store",
    })
        .then(res => res.json())
        .then(data => data.data);

    return (
        <Sidebar users={users}>
            <div className="">
                <div className="flex-1 flex-wrap items-center lg:p-4">
                    <div className="flex items-center lg:pl-8 lg:pt-3">
                        <img
                            className="w-auto rounded-2xl max-w-6xl"
                            src="/absurd-utama-2.png"
                            alt="Banner"
                        />
                    </div>
                    <div className=" flex bg-white mt-2 w-screen lg:w-full md:w-full h-auto rounded-xl overflow-hidden">
                        <section className="flex-1">
                            <div className="flex justify-between flex-wrap">
                                <div>
                                    <FilterBook />
                                </div>

                            </div>
                            <hr className="border-t border-black my-4 mx-5" />
                            <div className="flex items-start justify-center">
                                <div className="flex flex-col">
                                    <div className="lg:pl-12 md:pl-12 pl-5">
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
                                    <div className="flex flex-wrap justify-center gap-3 mt-5">
                                        <BookCard />
                                    </div>
                                </div>

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
                                    <div className="flex flex-wrap justify-center gap-3 mt-5">
                                        <PopularBookCard />
                                    </div>
                                </div>

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
                            <div className="flex flex-wrap justify-center gap-5">
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
            </div>
        </Sidebar>
    );
}