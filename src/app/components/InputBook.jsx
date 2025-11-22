//app/components/InputBook.jsx

export default function InputBook() {
    return (
        <div className="bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-3xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Tambah Buku Baru</h2>
          </div>

          <div className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Judul Buku */}
              <div className="flex flex-col gap-2 group">
                <label className="font-semibold text-gray-700 text-sm flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  Judul Buku
                </label>
                <input 
                  className="p-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-200 bg-white/50" 
                  placeholder="Masukkan judul buku" 
                />
              </div>

              {/* Pengarang */}
              <div className="flex flex-col gap-2 group">
                <label className="font-semibold text-gray-700 text-sm flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  Pengarang
                </label>
                <input 
                  className="p-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 outline-none transition-all duration-200 bg-white/50" 
                  placeholder="Nama pengarang" 
                />
              </div>

              {/* Penerbit */}
              <div className="flex flex-col gap-2 group">
                <label className="font-semibold text-gray-700 text-sm flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Penerbit
                </label>
                <input 
                  className="p-3 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none transition-all duration-200 bg-white/50" 
                  placeholder="Nama penerbit" 
                />
              </div>

              {/* Tahun Terbit */}
              <div className="flex flex-col gap-2 group">
                <label className="font-semibold text-gray-700 text-sm flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  Tahun Terbit
                </label>
                <input 
                  type="number"
                  className="p-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 outline-none transition-all duration-200 bg-white/50" 
                  placeholder="2024" 
                />
              </div>

              {/* ISBN */}
              <div className="flex flex-col gap-2 group">
                <label className="font-semibold text-gray-700 text-sm flex items-center gap-2">
                  <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                  ISBN
                </label>
                <input 
                  className="p-3 rounded-xl border-2 border-gray-200 focus:border-pink-500 focus:ring-4 focus:ring-pink-100 outline-none transition-all duration-200 bg-white/50" 
                  placeholder="Nomor ISBN" 
                />
              </div>

              {/* Stok */}
              <div className="flex flex-col gap-2 group">
                <label className="font-semibold text-gray-700 text-sm flex items-center gap-2">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                  Stok
                </label>
                <input 
                  type="number"
                  className="p-3 rounded-xl border-2 border-gray-200 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100 outline-none transition-all duration-200 bg-white/50" 
                  placeholder="Jumlah stok" 
                />
              </div>
            </div>

            {/* Genre */}
            <div className="flex flex-col gap-2 group">
              <label className="font-semibold text-gray-700 text-sm flex items-center gap-2">
                <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                Genre
              </label>
              <input 
                className="p-3 rounded-xl border-2 border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none transition-all duration-200 bg-white/50" 
                placeholder="Contoh: Fiksi, Aksi, Horor" 
              />
            </div>

            {/* Gambar URL */}
            <div className="flex flex-col gap-2 group">
              <label className="font-semibold text-gray-700 text-sm flex items-center gap-2">
                <span className="w-2 h-2 bg-rose-500 rounded-full"></span>
                Gambar Buku (URL)
              </label>
              <input 
                className="p-3 rounded-xl border-2 border-gray-200 focus:border-rose-500 focus:ring-4 focus:ring-rose-100 outline-none transition-all duration-200 bg-white/50" 
                placeholder="Masukkan link gambar" 
              />
            </div>

            {/* Submit Button */}
            <button 
              type="button" 
              className="w-full mt-6 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl text-lg font-bold shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Tambah Buku
            </button>
          </div>
        </div>
    )
}