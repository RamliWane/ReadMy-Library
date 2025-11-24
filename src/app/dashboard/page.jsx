"use server";

import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

import SidebarAdmin from "../components/admin/SidebarAdmin";
import InputBook from "../components/admin/InputBook";
import BorrowList from "../components/admin/BorrowList";
import BorrowPending from "../components/admin/BorrowPending";


export default async function AdminDashboard() {
    const session = await getServerSession(authOptions);
    console.log(session);

    const user = session?.user;

    if (session.user.role !== "admin") {
      redirect("/forbidden");
    }

  return (
    <section>
      <div className="flex bg-[#ECF4E8]"> 
        <SidebarAdmin />
          <div className="flex flex-col p-5 flex-wrap">

            <div className="flex flex-col text-start ml-5 mt-4">
              <h1 className="text-xl lg:text-xl text-black">
                <span className="text-[#6DC700]">Semua Buku</span>
              </h1>

              <p className="text-[14px] text-black">
                Lorem ipsum dolor sit amet, consectetur adipiscing
              </p>
            </div>

            <hr className="border-t border-black my-4 m-5" />

            <div className="flex flex-wrap gap-5">
              <div className="flex-1 min-w-[400px]">
                <InputBook />
              </div>

              <div className="flex-1 min-w-[400px] flex flex-col gap-5">
                <BorrowPending />
                <BorrowList />
              </div>
            </div>

          </div>
      </div>
    </section>
  );
}
