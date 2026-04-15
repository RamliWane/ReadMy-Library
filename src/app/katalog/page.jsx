import NavbarHome from "../components/NavbarHome";
import Sidebar from "../components/Sidebar";
import SearchBar from "../components/SearchBar";
import FilterBook from "../components/FilterBook";
import MasanryColumnBook from "../components/MasanryColumnBook";
import HomeFooter from "../components/HomeFooter";


export default function KatalogClone() {
    return (
        <div className="h-screen flex flex-col overflow-y-auto overflow-x-hidden text-black">
            <NavbarHome />
            <div className="flex flex-1 overflow-hidden">
                <Sidebar className="w-64 flex-0" />

                <div className="grid overflow-y-auto no-scrollbar grid-cols-[1.7fr_1.7fr] grid-rows-[1fr_1fr] justify-center" style={{
                    gridTemplateAreas:
                        `
              "header header"
              "main main"
            `
                }}>
                    <div className="flex-1 flex-wrap items-center animate-slide-up animate-delay-200 [grid-area:header]">
                        <div className=" flex mt-2 w-full h-auto">
                            <section className="flex-1">
                                <div className="flex justify-start flex-col flex-wrap">
                                    <div className="flex flex-col text-start ml-5 mt-4">
                                        <h1
                                            className="text-xl font-bold text-black"
                                        >
                                            <span>KATALOG BUKU</span>
                                        </h1>
                                        <p
                                            className="text-[14px] text-black"
                                            style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
                                        >
                                            Lorem ipsum dolor sit amet, consectetur adipiscing
                                        </p>
                                    </div>
                                    <div className="pl-5 pt-2">
                                        <SearchBar />
                                    </div>
                                    <div className="pl-3 pt-2">
                                        <FilterBook />
                                    </div>

                                </div>
                                <hr className="border-t border-black my-4 mx-5" />

                                <div className="mt-5 m-10">
                                    <MasanryColumnBook />
                                </div>
                                <div className="mb-10">
                                    <HomeFooter />
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}