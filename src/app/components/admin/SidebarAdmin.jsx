"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Search, Book, Users, BookOpen, Menu, Bell, User, Home, Settings, LogOut, HandHelping } from 'lucide-react';

export default function Sidebar({ children, users }) {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const currentUser = users?.[0] || { username: "Guest", role: "User" };

    const isActive = (path) => pathname === path;

    const menuItems = [
        { href: '/home', icon: Home, label: 'Beranda' },
        { href: '/dashboard', icon: Book, label: 'Dashboard' },
        { href: '/borrowpending', icon: Users, label: 'Pending' },
        { href: '/borrowlist', icon: HandHelping, label: 'Peminjaman' },
        { href: '/booklist', icon: BookOpen, label: 'Book List' },
        { href: '/settings', icon: Settings, label: 'Pengaturan' },
    ];

    return (
        <div className="flex min-h-screen bg-[#ECF4E8] overflow-hidden">
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
                            <h1 className="text-2xl font-bold text-slate-800" style={{ fontFamily: "'Homemade Apple', cursive" }}>
                                ReadMy
                            </h1>
                        </div>
                    </div>

                    <nav className="px-4 space-y-2 flex-1">
                        {menuItems.map((item) => {
                            const Icon = item.icon;
                            const active = isActive(item.href);
                            
                            return (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    className={`
                                        flex items-center gap-3 px-4 py-3 rounded-lg
                                        transition-colors duration-200
                                        ${active 
                                            ? 'bg-[#6DC700] text-white' 
                                            : 'text-slate-600 hover:bg-slate-50'
                                        }
                                    `}
                                >
                                    <Icon className="w-5 h-5" />
                                    <span className="font-medium" style={{ fontFamily: "'Happy Monkey', cursive" }}>
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
                        <span style={{ fontFamily: "'Happy Monkey', cursive" }}>Keluar</span>
                    </button>
                </div>
            </aside>

            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/40 z-10 lg:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}

            <main className="flex-1 flex flex-col overflow-hidden lg:pl-60 pt-10">
                <header className="fixed z-10 top-0 left-0 w-full bg-white shadow-sm">
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