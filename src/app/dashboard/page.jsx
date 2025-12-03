import { Search, Book, Users, BookOpen, TrendingUp, Menu, Bell, User, Home, Settings, LogOut } from 'lucide-react';
import SidebarAdmin from '../components/admin/SidebarAdmin';

import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
import InputBook from '../components/admin/InputBook';
  
export default async function DashboardPerpustakaan() {
    
  
  const session = await getServerSession(authOptions);
  
  if (!session || session.user.role !== "admin") {
      redirect("/forbidden");
  }
  
  return (
    <SidebarAdmin>
        <div className="flex flex-col lg:flex-row p-4 sm:p-6 gap-4 lg:gap-0 animate-slide-up animate-delay-200">
          <div className='flex flex-col gap-2 w-full lg:w-auto'>
            <div className='bg-white p-2 sm:p-1 w-full lg:max-w-sm flex items-center justify-center rounded-lg shadow'>
              <h1 className='text-black text-xl sm:text-2xl text-center' style={{ fontFamily: "'Happy Monkey', cursive" }}>Dashboard Perpustakaan</h1>
            </div>
            <InputBook />
          </div>
        <div className="w-full lg:p-8 p-0 mt-4 lg:mt-0">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-black rounded-lg">
                  <Book className="w-6 h-6 text-white" />
                </div>
                <span className="text-xs text-green-600 font-medium">+12%</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-1">2,543</h3>
              <p className="text-sm text-slate-500">Total Buku</p>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-black rounded-lg">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <span className="text-xs text-green-600 font-medium">+8%</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-1">1,284</h3>
              <p className="text-sm text-slate-500">Anggota Aktif</p>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-black rounded-lg">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <span className="text-xs text-red-600 font-medium">-3%</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-1">156</h3>
              <p className="text-sm text-slate-500">Buku Dipinjam</p>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-black rounded-lg">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <span className="text-xs text-green-600 font-medium">+15%</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-1">89</h3>
              <p className="text-sm text-slate-500">Peminjaman Hari Ini</p>
            </div>
          </div>

          {/* Tables Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {/* Recent Loans */}
            <div className="bg-white rounded-xl shadow-sm">
              <div className="p-4 sm:p-6 border-b">
                <h3 className="text-base sm:text-lg font-semibold text-slate-800">Peminjaman Terbaru</h3>
              </div>
              <div className="p-4 sm:p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                        <Book className="w-5 h-5 text-blue-600" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-slate-800 truncate">Laskar Pelangi</p>
                        <p className="text-xs text-slate-500 truncate">Ahmad Fauzi</p>
                      </div>
                    </div>
                    <span className="text-xs text-slate-500 whitespace-nowrap ml-2">2 jam lalu</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center shrink-0">
                        <Book className="w-5 h-5 text-green-600" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-slate-800 truncate">Bumi Manusia</p>
                        <p className="text-xs text-slate-500 truncate">Siti Nurhaliza</p>
                      </div>
                    </div>
                    <span className="text-xs text-slate-500 whitespace-nowrap ml-2">5 jam lalu</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center shrink-0">
                        <Book className="w-5 h-5 text-orange-600" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-slate-800 truncate">Perahu Kertas</p>
                        <p className="text-xs text-slate-500 truncate">Budi Santoso</p>
                      </div>
                    </div>
                    <span className="text-xs text-slate-500 whitespace-nowrap ml-2">1 hari lalu</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Popular Books */}
            <div className="bg-white rounded-xl shadow-sm">
              <div className="p-4 sm:p-6 border-b">
                <h3 className="text-base sm:text-lg font-semibold text-slate-800">Buku Populer</h3>
              </div>
              <div className="p-4 sm:p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 min-w-0 flex-1">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center shrink-0">
                        <Book className="w-5 h-5 text-purple-600" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium text-slate-800 truncate">Harry Potter</p>
                        <p className="text-xs text-slate-500">45 peminjaman</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 shrink-0 ml-2">
                      <TrendingUp className="w-4 h-4 text-green-600" />
                      <span className="text-xs text-green-600 font-medium">+12</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 min-w-0 flex-1">
                      <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center shrink-0">
                        <Book className="w-5 h-5 text-pink-600" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium text-slate-800 truncate">The Hobbit</p>
                        <p className="text-xs text-slate-500">38 peminjaman</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 shrink-0 ml-2">
                      <TrendingUp className="w-4 h-4 text-green-600" />
                      <span className="text-xs text-green-600 font-medium">+8</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 min-w-0 flex-1">
                      <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center shrink-0">
                        <Book className="w-5 h-5 text-yellow-600" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium text-slate-800 truncate">1984</p>
                        <p className="text-xs text-slate-500">32 peminjaman</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 shrink-0 ml-2">
                      <TrendingUp className="w-4 h-4 text-green-600" />
                      <span className="text-xs text-green-600 font-medium">+5</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SidebarAdmin>

  );
}