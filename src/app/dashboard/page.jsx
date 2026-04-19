import { Search, Book, Users, BookOpen, TrendingUp, Menu, Bell, User, Home, Settings, LogOut } from 'lucide-react';
import SidebarAdmin from '../components/admin/SidebarAdmin';

import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
import InputBook from '../components/admin/InputBook';
import NavbarHome from '../components/NavbarHome';

export default async function DashboardPerpustakaan() {
  // Ambil session dari server
  const session = await getServerSession(authOptions);
  console.log(session);

  const user = session?.user; // Ambil data user dari session

  //kalo gak login atau role bukan admin/petugas
  if (!session || !["admin", "petugas"].includes(session.user.role)) {
    redirect("/forbidden");
  }

  return (
    <div className="h-screen flex flex-col overflow-hidden text-black">
      <NavbarHome />
      <div className="flex flex-1 overflow-hidden">
        <SidebarAdmin />

        <main className="flex-1 overflow-y-auto overflow-x-hidden no-scrollbar p-4 sm:p-6 animate-slide-up animate-delay-200 space-y-6">

          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="bg-white px-4 py-3 rounded-lg shadow shrink-0">
              <h1 className="text-black text-xl text-center" style={{ fontFamily: "'Happy Monkey', cursive" }}>
                Dashboard Perpustakaan
              </h1>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 flex-1">
              {[
                { icon: <Book className="w-5 h-5 text-white" />, value: 0, label: "Total Buku" },
                { icon: <Users className="w-5 h-5 text-white" />, value: 0, label: "Anggota Aktif" },
                { icon: <BookOpen className="w-5 h-5 text-white" />, value: 0, label: "Buku Dipinjam" },
                { icon: <TrendingUp className="w-5 h-5 text-white" />, value: 0, label: "Peminjaman Hari Ini" },
              ].map(({ icon, value, label }) => (
                <div key={label} className="bg-white p-4 rounded-xl shadow-sm">
                  <div className="p-2 bg-black rounded-lg w-fit mb-3">{icon}</div>
                  <p className="text-xl font-bold text-slate-800">{value}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

            <div className="lg:col-span-1">
              <InputBook />
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">

              <div className="bg-white rounded-xl shadow-sm">
                <div className="p-4 border-b">
                  <h3 className="text-sm font-semibold text-slate-800">Peminjaman Terbaru</h3>
                </div>
                <div className="p-4 space-y-3">
                  {[
                    { title: "Laskar Pelangi", borrower: "Ahmad Fauzi", time: "2 jam lalu" },
                    { title: "Bumi Manusia", borrower: "Siti Nurhaliza", time: "5 jam lalu" },
                    { title: "Perahu Kertas", borrower: "Budi Santoso", time: "1 hari lalu" },
                  ].map(({ title, borrower, time }) => (
                    <div key={title} className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2 min-w-0">
                        <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center shrink-0">
                          <Book className="w-4 h-4 text-white" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs font-medium text-slate-800 truncate">{title}</p>
                          <p className="text-xs text-slate-500 truncate">{borrower}</p>
                        </div>
                      </div>
                      <span className="text-xs text-slate-400 whitespace-nowrap">{time}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm">
                <div className="p-4 border-b">
                  <h3 className="text-sm font-semibold text-slate-800">Buku Populer</h3>
                </div>
                <div className="p-4 space-y-3">
                  {[
                    { title: "Harry Potter", count: 45 },
                    { title: "The Hobbit", count: 38 },
                    { title: "1984", count: 32 },
                  ].map(({ title, count }) => (
                    <div key={title} className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center shrink-0">
                        <Book className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="text-xs font-medium text-slate-800">{title}</p>
                        <p className="text-xs text-slate-500">{count} peminjaman</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </main>
      </div>
    </div>
  );
}