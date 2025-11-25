import SidebarAdmin from "../components/admin/SidebarAdmin";
import InputBook from "../components/admin/InputBook";
import BookStats from "../components/admin/BookStats";

import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function TambahBukuPage() {
    const session = await getServerSession(authOptions);

    if (!session || session.user.role !== "admin") {
        redirect("/forbidden");
    }

    return (
       <SidebarAdmin>
            <div className="flex flex-col">
                <h1 className="text-2xl text-[#6DC700]">Semua Buku</h1>

                <hr className="my-4 border-black" />

                <div className="flex flex-col lg:flex-row gap-5">
                    <InputBook />
                    <BookStats />
                </div>
            </div>
        </SidebarAdmin>
    );
}