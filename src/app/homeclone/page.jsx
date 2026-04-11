//codingan homeclone
import NavbarClone from "../components/NavbarClone";
import SideBarClone from "../components/SideBarClone";
import NewReleaseBook from "../components/NewReleaseBook";
import BookCard from "../components/BookCard";
import RightBar from "../components/RightBar";
import LiterasiAct from "../components/LiterasiAct";
import HomeFooter from "../components/HomeFooter";

export default async function homeclone() {

    // Fetch data users dari API
    const users = await fetch("http://localhost:5000/users", {
        method: "GET",
        cache: "no-store",
    })
        .then(res => res.json())// Convert response jadi JSON
        .then(data => data.data);// Ambil property 'data' dari response

            const books = await fetch("http://localhost:5000/buku", {
        method: "GET",
        cache: "no-store",
    })
        .then(res => res.json())
        .then(data => data.data);

    return (
        <div className="h-screen flex flex-col overflow-hidden text-black">
            <NavbarClone />
            <div className="flex flex-1 overflow-hidden">
                <SideBarClone users={users} className=" flex-0" />

                <div className="main-grid overflow-y-auto overflow-x-hidden no-scrollbar animate-slide-up animate-delay-200 grid-rows-[auto_auto_auto]">
                    <header className="flex-1 [grid-area:header] min-w-0 p-0 sm:p-2 md:p-4 lg:p-4">
                        <div className="flex flex-col min-w-0 gap-3 p-3">
                            <section>
                                <h1 className="text-[17px] font-bold">TRENDING BOOK</h1>
                                <h1 className="text-[13px] font-mono">Temukan Inspirasi Mu!</h1>
                            </section>
                                <NewReleaseBook />
                        </div>
                    </header>

                    <aside className="[grid-area:aside]">
                        <div className="hidden xl:block w-70 sticky top-0 right-0 h-fit">
                            <RightBar />
                        </div>
                    </aside>

                    <main className="flex [grid-area:main] flex-col m-5">
                        <div className="flex flex-col gap-3 ">
                            <section>
                                <h1 className="text-[17px] font-bold">RECENTLY PLAYED</h1>
                                <h1 className="text-[13px] font-mono">Tingkatkan Literasi Mu!</h1>
                            </section>
                            <BookCard books={books}/>
                        </div>

                        <div className="flex flex-col gap-3">
                            <section>
                                <h1 className="text-[17px] font-bold">MOST POPULAR</h1>
                                <h1 className="text-[13px] font-mono">Ada Agenda Apa Saja Sekarang?</h1>
                            </section>
                            <LiterasiAct />
                        </div>

                    </main>
                    <div className="grid [grid-area:footer]">
                        <HomeFooter />
                    </div>
                </div>
            </div>
        </div>
    )
}