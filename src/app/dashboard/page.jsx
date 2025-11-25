import { Search, Book, Users, BookOpen, TrendingUp, Menu, Bell, User, Home, Settings, LogOut } from 'lucide-react';
import SidebarAdmin from '../components/admin/SidebarAdmin';

import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
  
export default async function DashboardPerpustakaan() {
    
  
  const session = await getServerSession(authOptions);
  
  if (!session || session.user.role !== "admin") {
      redirect("/forbidden");
  }
  
  return (
    <SidebarAdmin>
          <div className="flex">
        <div className="p-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">Dashboard</h2>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Book className="w-6 h-6 text-blue-600" />
                </div>
                <span className="text-xs text-green-600 font-medium">+12%</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-1">2,543</h3>
              <p className="text-sm text-slate-500">Total Buku</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-green-100 rounded-lg">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <span className="text-xs text-green-600 font-medium">+8%</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-1">1,284</h3>
              <p className="text-sm text-slate-500">Anggota Aktif</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-orange-100 rounded-lg">
                  <BookOpen className="w-6 h-6 text-orange-600" />
                </div>
                <span className="text-xs text-red-600 font-medium">-3%</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-1">156</h3>
              <p className="text-sm text-slate-500">Buku Dipinjam</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-purple-600" />
                </div>
                <span className="text-xs text-green-600 font-medium">+15%</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-1">89</h3>
              <p className="text-sm text-slate-500">Peminjaman Hari Ini</p>
            </div>
          </div>

          {/* Tables Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Loans */}
            <div className="bg-white rounded-xl shadow-sm">
              <div className="p-6 border-b">
                <h3 className="text-lg font-semibold text-slate-800">Peminjaman Terbaru</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Book className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-800">Laskar Pelangi</p>
                        <p className="text-xs text-slate-500">Ahmad Fauzi</p>
                      </div>
                    </div>
                    <span className="text-xs text-slate-500">2 jam lalu</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                        <Book className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-800">Bumi Manusia</p>
                        <p className="text-xs text-slate-500">Siti Nurhaliza</p>
                      </div>
                    </div>
                    <span className="text-xs text-slate-500">5 jam lalu</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                        <Book className="w-5 h-5 text-orange-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-800">Perahu Kertas</p>
                        <p className="text-xs text-slate-500">Budi Santoso</p>
                      </div>
                    </div>
                    <span className="text-xs text-slate-500">1 hari lalu</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Popular Books */}
            <div className="bg-white rounded-xl shadow-sm">
              <div className="p-6 border-b">
                <h3 className="text-lg font-semibold text-slate-800">Buku Populer</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                        <Book className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-800">Harry Potter</p>
                        <p className="text-xs text-slate-500">45 peminjaman</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <TrendingUp className="w-4 h-4 text-green-600" />
                      <span className="text-xs text-green-600 font-medium">+12</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center">
                        <Book className="w-5 h-5 text-pink-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-800">The Hobbit</p>
                        <p className="text-xs text-slate-500">38 peminjaman</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <TrendingUp className="w-4 h-4 text-green-600" />
                      <span className="text-xs text-green-600 font-medium">+8</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                        <Book className="w-5 h-5 text-yellow-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-800">1984</p>
                        <p className="text-xs text-slate-500">32 peminjaman</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
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