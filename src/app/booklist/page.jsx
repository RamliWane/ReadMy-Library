import SidebarAdmin from "../components/admin/SidebarAdmin"
import BookList from "../components/admin/BookList"

import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
export default async function BookListPage() {

    const session = await getServerSession(authOptions);
    console.log(session);

    const user = session?.user;

    if (session.user.role !== "admin") {
        redirect("/forbidden");
    }

    return (
        <SidebarAdmin>
            <div className="flex flex-col p-3 md:p-5 flex-1 w-full overflow-x-hidden">
                <div className="flex flex-col text-start items-center justify-center md:ml-5 p-1 rounded-xl bg-white max-w-sm mb-4">
                    <h1 className="text-lg md:text-xl lg:text-2xl text-black">
                        <span className="text-[#6DC700]" style={{ fontFamily: "'Happy Monkey', cursive" }}>Semua Buku</span>
                    </h1>
                </div>

                <div className="flex flex-col lg:flex-row gap-3 md:gap-5 md:px-5">
                    <div className="flex-1 w-full">
                        <BookList />
                    </div>
                </div>
            </div>
        </SidebarAdmin>
    )
}