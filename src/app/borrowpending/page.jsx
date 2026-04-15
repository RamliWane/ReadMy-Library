import NavbarHome from "../components/NavbarHome";
import SidebarAdmin from "../components/admin/SidebarAdmin";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
import BorrowPending from "../components/admin/BorrowPending";

export default async function KatalogClone() {
    const session = await getServerSession(authOptions);
    const user = session?.user;

    if (!session || !["admin", "petugas"].includes(session.user.role)) {
        redirect("/forbidden");
    }

    return (
        <div className="h-screen flex flex-col overflow-hidden text-black">
            <NavbarHome />
            <div className="flex flex-1 overflow-hidden">
                <SidebarAdmin />
                <div className="flex-1 flex flex-col overflow-y-auto no-scrollbar p-6 gap-4">
                    <div>
                        <h1 className="text-xl font-bold">BORROW PENDING</h1>
                        <p className="text-[14px]" style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                        </p>
                    </div>
                    <hr className="border-t border-black" />
                    <BorrowPending />
                </div>
            </div>
        </div>
    )
}