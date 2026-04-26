//app/components/InputBook.jsx

'use client';

import { tambahBuku } from '@/lib/bookAction.js';

export default function InputBook() {
  return (
    <form action={tambahBuku}>
      <div className="bg-white/80 p-6 md:p-8 rounded-xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center shadow-lg">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800">TAMBAH BUKU BARU</h2>
        </div>

        <div className="space-y-5">
          <form action={tambahBuku}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2 group">
                <label className="font-bold text-gray-700 text-[12px] flex items-center gap-2">
                  JUDUL BUKU
                </label>
                <input
                  name="judul_buku"
                  className="p-3 rounded-xl text-black border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-200 bg-white/50"
                  placeholder="Masukkan judul buku"
                />
              </div>

              <div className="flex flex-col gap-2 group">
                <label className="font-bold text-gray-700 text-[12px] flex items-center gap-2">
                  PENGARANG
                </label>
                <input
                  name="pengarang"
                  className="p-3 rounded-xl text-black border-2 border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 outline-none transition-all duration-200 bg-white/50"
                  placeholder="Nama pengarang"
                />
              </div>

              <div className="flex flex-col gap-1 group">
                <label className="font-bold text-gray-700 text-[12px] flex items-center gap-2">
                  PENERBIT
                </label>
                <input
                  name="penerbit"
                  className="p-3 rounded-xl text-black border-2 border-gray-200 focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none transition-all duration-200 bg-white/50"
                  placeholder="Nama penerbit"
                />
              </div>

              <div className="flex flex-col gap-1 group">
                <label className="font-bold text-gray-700 text-[12px] flex items-center gap-2">
                  TAHUN TERBIT
                </label>
                <input
                  name="tahun_terbit"
                  type="number"
                  className="p-3 rounded-xl text-black border-2 border-gray-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 outline-none transition-all duration-200 bg-white/50"
                  placeholder="2024"
                />
              </div>

              <div className="flex flex-col gap-1 group">
                <label className="font-bold text-gray-700 text-[12px] flex items-center gap-2">
                  ISBN
                </label>
                <input
                  name="isbn"
                  className="p-3 rounded-xl text-black border-2 border-gray-200 focus:border-pink-500 focus:ring-4 focus:ring-pink-100 outline-none transition-all duration-200 bg-white/50"
                  placeholder="Nomor ISBN"
                />
              </div>

              <div className="flex flex-col gap-1 group">
                <label className="font-bold text-gray-700 text-[12px] flex items-center gap-2">
                  STOK
                </label>
                <input
                  name="stok"
                  type="number"
                  className="p-3 rounded-xl text-black border-2 border-gray-200 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100 outline-none transition-all duration-200 bg-white/50"
                  placeholder="Jumlah stok"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1 group pt-2">
              <label className="font-bold text-gray-700 text-[12px] flex items-center gap-2">
                GENRE
              </label>
              <input
                name="genre"
                className="p-3 rounded-xl text-black border-2 border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none transition-all duration-200 bg-white/50"
                placeholder="Contoh: Fiksi, Aksi, Horor"
              />
            </div>

            <div className="flex flex-col gap-1  group pt-2">
              <label className="font-bold text-gray-700 text-[12px] flex items-center gap-2">
                GAMBAR BUKU (URL)
              </label>
              <input
                name="gambar"
                className="p-3 rounded-xl text-black border-2 border-gray-200 focus:border-rose-500 focus:ring-4 focus:ring-rose-100 outline-none transition-all duration-200 bg-white/50"
                placeholder="Masukkan link gambar"
              />
            </div>

            <button
              type="submit"
              className="w-full mt-3 py-4 bg-black text-white rounded-2xl text-lg font-bold shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Tambah Buku
            </button>
          </form>
        </div>
      </div>
    </form>
  );
}
