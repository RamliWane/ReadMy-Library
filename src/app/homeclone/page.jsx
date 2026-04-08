import NavbarClone from "../components/NavbarClone";
import SideBarClone from "../components/SideBarClone";
import NewReleaseBook from "../components/NewReleaseBook";
import BookCard from "../components/BookCard";
import RightBar from "../components/RightBar";
import LiterasiAct from "../components/LiterasiAct";

export default async function homeclone() {

    // Fetch data users dari API
    const users = await fetch("http://localhost:5000/users", {
        method: "GET",
        cache: "no-store",
    })
        .then(res => res.json())// Convert response jadi JSON
        .then(data => data.data);// Ambil property 'data' dari response

    return (
        <div className="h-screen flex flex-col overflow-y-auto overflow-x-hidden text-black">
            <NavbarClone />
            <div className="flex flex-1 overflow-hidden">
                <SideBarClone users={users} className="w-64 flex-0" />

                <div className="grid overflow-y-auto no-scrollbar grid-cols-[1.7fr_1.7fr_1.3fr] grid-rows-[1fr_1fr] justify-center" style={{
                    gridTemplateAreas:
                        `
              "header header aside"
              "main main aside"
            `
                }}>
                    <header className="flex-1 p-6 [grid-area:header]">
                        <div className="flex flex-col">
                            <h1 className="text-[17px] font-bold">TRENDING BOOK</h1>
                            <NewReleaseBook />
                        </div>
                    </header>

                    <aside className="flex-1 p-6 [grid-area:aside] flex justify-end">
                        <div className="hidden xl:block w-70 shrink-0 fixed z-20 top-0 right-0">
                            <RightBar />
                        </div>
                    </aside>

                    <main className="flex [grid-area:main] flex-col p-8 gap-8">
                        <div className="flex flex-col gap-4">
                            <h1 className="text-[17px] font-bold">RECENTLY PLAYED</h1>
                            <div className="flex gap-6">
                                <div className="flex flex-col">
                                    <BookCard />
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <h1 className="text-[17px] font-bold">MOST POPULAR</h1>
                            <LiterasiAct />
                        </div>

                    </main>

                </div>
            </div>
        </div>
    )
}