import { Search, Book, Users, BookOpen, Menu, Bell, User, Home, Settings, LogOut } from 'lucide-react';

export default function SideBarAdmin({ children }) {
    return (
        <div className="bg-[#ECF4E8] flex min-h-screen">
            {/* Sidebar */}
            <div className="w-64 bg-white shadow-lg flex flex-col">
                <div className="p-6">
                    <div className="flex items-center gap-2">
                        <Book className="w-8 h-8 text-blue-600" />
                        <h1 className="text-xl font-bold text-slate-800">Perpustakaan</h1>
                    </div>
                </div>

                <nav className="px-4 space-y-2 flex-1">
                    <a href='./home' className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-50 rounded-lg">
                        <Home className="w-5 h-5" />
                        <span className="font-medium">Beranda</span>
                    </a>
                    <a href="./dashboard" className="flex items-center gap-3 px-4 py-3 bg-blue-50 text-blue-600 rounded-lg">
                        <Home className="w-5 h-5" />
                        <span className="font-medium">Dashboard</span>
                    </a>
                    <a href="./tambahbuku" className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-50 rounded-lg">
                        <Book className="w-5 h-5" />
                        <span>Tambah Buku</span>
                    </a>
                    <a href="./borrowpending" className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-50 rounded-lg">
                        <Users className="w-5 h-5" />
                        <span>Pending</span>
                    </a>
                    <a href="./borrowlist" className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-50 rounded-lg">
                        <BookOpen className="w-5 h-5" />
                        <span>Peminjaman</span>
                    </a>
                    <a href="./booklist" className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-50 rounded-lg">
                        <BookOpen className="w-5 h-5" />
                        <span>Book List</span>
                    </a>
                    <a className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-50 rounded-lg">
                        <Settings className="w-5 h-5" />
                        <span>Pengaturan</span>
                    </a>
                </nav>

                {/* Logout di bawah tanpa absolute */}
                <div className="p-4 border-t mt-auto">
                    <a className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-50 rounded-lg">
                        <LogOut className="w-5 h-5" />
                        <span>Keluar</span>
                    </a>
                </div>
            </div>


            {/* Main Content */}
            <div className="flex-1 flex flex-col">

                {/* Topbar */}
                <div className="bg-white shadow-sm">
                    <div className="flex items-center justify-between px-8 py-4">
                        <div className="flex items-center gap-4">
                            <button className="lg:hidden">
                                <Menu className="w-6 h-6 text-slate-600" />
                            </button>

                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                                <input
                                    type="text"
                                    placeholder="Cari buku, anggota..."
                                    className="pl-10 pr-4 py-2 border text-black border-slate-300 rounded-lg w-80 outline-none"
                                />
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <button className="relative p-2 hover:bg-slate-100 rounded-lg">
                                <Bell className="w-6 h-6 text-slate-600" />
                                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                            </button>

                            <div className="flex items-center gap-3">
                                <div className="text-right">
                                    <p className="text-sm font-medium text-slate-800">Admin</p>
                                    <p className="text-xs text-slate-500">Administrator</p>
                                </div>
                                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                                    <User className="w-6 h-6 text-white" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content dari PAGE */}
                <main className="flex-1 p-4">
                    {children}
                </main>

            </div>
        </div>
    );
}
