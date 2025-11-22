import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
import Sidebar from "../components/Sidebar";

import React from 'react';
import InputBook from "../components/InputBook";
import BorrowList from "../components/BorrowList";
import BorrowPending from "../components/BorrowPending";
import SearcBar from "../components/SearchBar";

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
        <Sidebar />
        <div className="bg-white mt-2 w-full h-auto m-2">
          <section>
            <div className="flex flex-col flex-wrap">
              <div className="flex flex-col text-start ml-5 mt-4">
                <h1
                  className="text-xl lg:text-xl text-black"
                  style={{ fontFamily: "'Happy Monkey', cursive" }}
                >
                  <span className="text-[#6DC700]">Semua Buku</span>
                </h1>

                <p
                  className="text-[14px] text-black"
                  style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                </p>
              </div>
              <div className="pl-5">
                <SearcBar />
              </div>
              <hr className="border-t border-black my-4 m-5" />
              <div className="flex flex-wrap gap-5">
                {/* Kolom Kiri - Input Book */}
                <div className="flex-1 min-w-[400px]">
                  <InputBook />
                </div>

                {/* Kolom Kanan - Borrow Pending & List */}
                <div className="flex-1 min-w-[400px] flex flex-col gap-5">
                  <BorrowPending />
                  <BorrowList />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}