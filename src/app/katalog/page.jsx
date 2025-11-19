import FilterBook from "../components/FilterBook";
import Sidebar from "../components/Sidebar";
import RightBar from "../components/RightBar";
import SearcBar from "../components/SearchBar";
import BookCard from "../components/BookCard";
import HomeFooter from "../components/HomeFooter";


export default function Katalog (){
    return(
        <section>
            <div className="flex bg-[#ECF4E8]">
                <Sidebar />
                <div className="bg-white mt-2 w-full h-auto m-2">
                    <section>
                        <div className="flex flex-col flex-wrap">
                            <div className="flex flex-col text-start ml-5 mt-4">
                                <h1
                                    className="text-xl lg:text-xl text-black"
                                    style={{ fontFamily: "'Happy Monkey', cursive" }}
                                >
                                    <span className="text-[#6DC700]">Semua Buku</span>
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
                            <hr className="border-t border-black my-4 m-5" />
                        </div>
                    </section>
                    <div className="flex flex-wrap gap-3 pl-2">
                        <BookCard />
                        <BookCard />
                        <BookCard />
                        <BookCard />
                        <BookCard />
                        <BookCard />
                    </div>
                    <div className="mb-10">
                        <HomeFooter />
                    </div>
                </div>
                <RightBar />
            </div>
        </section>
    )
}