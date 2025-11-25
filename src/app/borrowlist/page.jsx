import SidebarAdmin from "../components/admin/SidebarAdmin"
import BorrowList from "../components/admin/BorrowList"

import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
export default async function BorrowListPage() {
    
    const session = await getServerSession(authOptions);
    console.log(session);
    
    const user = session?.user;
    
    if (session.user.role !== "admin") {
      redirect("/forbidden");
    }

    return (
                <SidebarAdmin>
                    <div className="flex flex-col p-3 md:p-5 flex-1 w-full overflow-x-hidden">
                        <div className="flex flex-col text-start md:ml-5">
                            <h1 className="text-lg md:text-xl lg:text-2xl text-black">
                                <span className="text-[#6DC700]">Semua Buku</span>
                            </h1>

                            <p className="text-xs md:text-sm text-black">
                                Lorem ipsum dolor sit amet, consectetur adipiscing
                            </p>
                        </div>

                        <hr className="border-t border-black my-3 md:my-4 md:mx-5" />

                        <div className="flex flex-col lg:flex-row gap-3 md:gap-5 md:px-5">
                            <div className="flex-1 w-full">
                                <BorrowList />
                            </div>
                        </div>
                    </div>
                </SidebarAdmin>
    )
}