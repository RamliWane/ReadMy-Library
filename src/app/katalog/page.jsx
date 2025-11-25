import FilterBook from "../components/FilterBook";
import Sidebar from "../components/Sidebar";
import RightBar from "../components/RightBar";
import SearcBar from "../components/SearchBar";
import BookCard from "../components/BookCard";
import HomeFooter from "../components/HomeFooter";
import FilterActivity from "../components/FilterActivity";


export default function Katalog() {
    return (
        <Sidebar>
            <div className="p-4">
                <div className="flex-1 flex-wrap items-center">
                    <div className=" flex bg-white mt-2 w-full h-auto">
                        <section className="flex-1">
                            <div className="flex justify-start flex-col flex-wrap">
                                <div className="flex flex-col text-start ml-5 mt-4">
                                    <h1
                                        className="text-xl lg:text-xl text-black"
                                        style={{ fontFamily: "'Happy Monkey', cursive" }}
                                    >
                                        <span className="text-[#6DC700]">Katalog Buku</span>
                                    </h1>

                                    <p
                                        className="text-[14px] text-black"
                                        style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
                                    >
                                        Lorem ipsum dolor sit amet, consectetur adipiscing
                                    </p>
                                </div>
                                <div className="pl-5">
                                    <SearcBar />
                                </div>
                                <div className="pl-5">
                                    <FilterBook />
                                </div>

                            </div>
                            <hr className="border-t border-black my-4 mx-5" />

                            <div className="flex flex-wrap items-center justify-center gap-2 mt-5">
                                <BookCard />
                            </div>                            
                            <div className="mb-10">
                                <HomeFooter />
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </Sidebar>

    )
}