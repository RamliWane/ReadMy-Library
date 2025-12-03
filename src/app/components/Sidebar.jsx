"use client";

import { useState } from "react";
import { usePathname } from "next/navigation"; // Import usePathname
import { Book, Users, Menu, Bell, User, Home, Settings, LogOut } from 'lucide-react';

export default function Sidebar({ children, users }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Dapatkan path saat ini

  // Ambil user pertama atau sesuaikan logika Anda
  const currentUser = users?.[0] || { username: "Guest", role: "User" };

  // Fungsi helper untuk menentukan apakah link aktif
  const isActive = (path) => pathname === path;

  // Menu items array
  const menuItems = [
    { href: '/home', icon: Home, label: 'Home' },
    { href: '/katalog', icon: Book, label: 'Katalog Buku' },
    { href: '/profile', icon: Users, label: 'Profile' },
    { href: '/settings', icon: Settings, label: 'Pengaturan' },
  ];

  return (
    <div className="flex min-h-screen bg-[#ECF4E8] overflow-hidden">
      {/* Sidebar */}
      <aside
        className={`
          fixed z-20 top-0 left-0 h-full w-64 bg-white shadow-lg flex flex-col justify-between
          transform transition-all duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
      >
        <div>
          <div className="p-6">
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold text-slate-800" style={{ fontFamily: "'Homemade Apple', cursive" }}>
                ReadMy
              </h1>
            </div>
          </div>

          <nav className="px-4 space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.href);
              
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`
                    flex items-center gap-3 px-4 rounded-lg
                    transition-colors duration-200
                    ${active 
                      ? 'py-2 bg-[#6DC700] text-white' 
                      : 'py-3 text-slate-600 hover:bg-slate-50'
                    }
                  `}
                >
                  <Icon className="w-5 h-5" />
                  <span className={active ? "font-medium" : ""} style={{ fontFamily: "'Happy Monkey', cursive" }}>
                    {item.label}
                  </span>
                </a>
              );
            })}
          </nav>
        </div>

        <div className="p-4 border-t">
          <button className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-50 rounded-lg w-full transition-colors">
            <LogOut className="w-5 h-5" />
            <span>Keluar</span>
          </button>
        </div>
      </aside>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-10 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden lg:pl-60 pt-10">
        {/* Topbar */}
        <header className="fixed z-10 top-0 left-0 w-full bg-white">
          <div className="flex items-center justify-between px-8 py-4">
            <div className="flex items-center gap-4">
              <button
                className="lg:hidden"
                onClick={() => setIsOpen(true)}
              >
                <Menu className="w-6 h-6 text-slate-600" />
              </button>
            </div>

            <div className="flex items-center gap-4">
              <button className="relative p-2 hover:bg-slate-100 rounded-lg">
                <Bell className="w-6 h-6 text-slate-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>

              <div className="flex items-center gap-3">
                <div className="text-right">
                  <p className="text-sm font-medium text-slate-800">{currentUser.username}</p>
                  <p className="text-xs text-slate-500">{currentUser.role}</p>
                </div>
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-4">
          {children}
        </div>
      </main>
    </div>
  );
}