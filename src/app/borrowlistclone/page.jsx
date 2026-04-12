import NavbarClone from "../components/NavbarClone";
import SidebarAdminClone from "../components/admin/SidebarAdminClone";
import BorrowList from "../components/admin/BorrowList"
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function KatalogClone() {
    const session = await getServerSession(authOptions);
    const user = session?.user;

    if (!session || !["admin", "petugas"].includes(session.user.role)) {
        redirect("/forbidden");
    }

    return (
        <div className="h-screen flex flex-col overflow-hidden text-black">
            <NavbarClone />
            <div className="flex flex-1 overflow-hidden">
                <SidebarAdminClone />
                <div className="flex-1 flex flex-col overflow-y-auto no-scrollbar p-6 gap-4">
                    <div>
                        <h1 className="text-xl font-bold">BORROW LIST</h1>
                        <p className="text-[14px]" style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                        </p>
                    </div>
                    <hr className="border-t border-black" />
                    <BorrowList />
                </div>
            </div>
        </div>
    )
}