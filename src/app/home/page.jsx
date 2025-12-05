import BookCard from "../components/BookCard";
import FilterActivity from "../components/FilterActivity";
import FilterBook from "../components/FilterBook";
import HomeFooter from "../components/HomeFooter";
import LiterasiAct from "../components/LiterasiAct";
import RightBar from "../components/RightBar";
import Sidebar from "../components/Sidebar";
import NewReleaseBook from "../components/NewReleaseBook";

export default async function HomePage() {
    const users = await fetch("http://localhost:5000/users", {
        method: "GET",
        cache: "no-store",
    })
        .then(res => res.json())
        .then(data => data.data);

    return (
        <div className="flex w-full min-h-screen bg-gray-50 ">
            <Sidebar users={users}>
                <div className="flex-1 flex-wrap items-center lg:p-4 ">
                    <div className="flex bg-white mt-2 p-3 w-full h-auto rounded-xl overflow-hidden animate-slide-up animate-delay-200">
                        <section className="w-full">
                            <div className="flex items-start justify-center">
                                <div className="w-full">
                                    <div className="lg:pl-5 md:pl-12 pl-5">
                                        <h1
                                            className="text-xl lg:text-xl text-black"
                                            style={{ fontFamily: "'Happy Monkey', cursive" }}
                                        >
                                            <span className="text-[#6DC700]">New Release Book</span>
                                        </h1>

                                        <p
                                            className="text-[14px] text-black"
                                            style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
                                        >
                                            Lorem ipsum dolor sit amet, consectetur adipiscing
                                        </p>
                                    </div>
                                    <NewReleaseBook />
                                </div>
                            </div>
                        </section>
                    </div>

                    <div className="flex bg-white mt-2 w-screen lg:w-full md:w-full h-auto rounded-xl overflow-hidden animate-slide-up animate-delay-200">
                        <section className="flex-1">
                            <div className="flex items-start justify-center">
                                <div className="flex flex-col">
                                    <div className="flex justify-between flex-wrap mt-6">
                                        <div className="flex flex-col text-start ml-5">
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
                                        <div className="pl-3">
                                            <FilterBook />
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap justify-center gap-3 mt-5">
                                        <BookCard />
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
                                <div className="pl-3">
                                    <FilterActivity />
                                </div>
                            </div>
                            <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-3 m-4">
                                <div className="animate-slide-up animate-delay-300">
                                    <LiterasiAct />
                                </div>
                                <div className="animate-slide-up animate-delay-400">
                                    <LiterasiAct />
                                </div>
                                <div className="animate-slide-up animate-delay-500">
                                    <LiterasiAct />
                                </div>
                            </div>
                            <HomeFooter />
                        </section>
                    </div>
                </div>
            </Sidebar>

            <div className="hidden xl:block w-70 shrink-0">
                <div className="fixed top-0 right-0 ">
                    <RightBar />
                </div>
            </div>
        </div>
    );
}