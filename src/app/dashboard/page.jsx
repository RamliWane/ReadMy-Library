import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
import Sidebar from "../components/Sidebar";

import React from 'react';
import InputBook from "../components/InputBook";
import BorrowList from "../components/BorrowList";

export default async function AdminDashboard() {
  const session = await getServerSession(authOptions);
  console.log(session);
  
  const user = session?.user;
  
  if(session.user.role !== "admin"){
      redirect("/forbidden");
  }
  return (
    <section>

        <Sidebar />
      <div className="ml-64 min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-4 md:p-8">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
          Admin Dashboard
        </h1>
        <p className="text-gray-600 text-lg">Kelola perpustakaan Anda dengan mudah</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {/* Form Tambah Buku */}
        <div>
          <InputBook />
        </div>
        {/* Sedang Meminjam */}
        <div>
          <BorrowList />
        </div>

        {/* Pengajuan Peminjaman */}
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-3xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 lg:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Pengajuan Peminjaman</h2>
              <p className="text-sm text-gray-500">Menunggu persetujuan Anda</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { nama: "Dewi Lestari", buku: "Refactoring", tanggal: "22 Nov 2024", status: "pending" },
              { nama: "Andi Wijaya", buku: "Domain Driven Design", tanggal: "22 Nov 2024", status: "pending" },
              { nama: "Linda Marlina", buku: "Microservices Patterns", tanggal: "21 Nov 2024", status: "pending" }
            ].map((item, index) => (
              <div 
                key={index} 
                className="group p-5 bg-gradient-to-br from-white to-amber-50 rounded-2xl border-2 border-amber-100 hover:border-amber-300 hover:shadow-lg transition-all duration-200"
              >
                <div className="flex flex-col gap-3">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center text-white font-bold shadow-md">
                        {item.nama.charAt(0)}
                      </div>
                      <div className="flex-1">
                        <p className="font-bold text-gray-800">{item.nama}</p>
                        <p className="text-xs text-gray-500">{item.tanggal}</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 flex items-center gap-2 ml-1">
                      <svg className="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      {item.buku}
                    </p>
                  </div>
                  
                  <div className="flex gap-2 mt-2">
                    <button className="flex-1 px-4 py-2.5 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl text-sm font-semibold shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Setujui
                    </button>
                    <button className="px-4 py-2.5 bg-gradient-to-r from-red-500 to-rose-600 text-white rounded-xl text-sm font-semibold shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}