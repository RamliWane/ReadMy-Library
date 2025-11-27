//app/components/BorrowList.jsx

export default function BorrowList() {
    return (
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-3xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center shadow-lg">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Sedang Meminjam</h2>
              <p className="text-sm text-gray-500">3 peminjaman aktif</p>
            </div>
          </div>

          <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
            {[
              { nama: "Ahmad Rizki", buku: "Clean Code", tanggal: "20 Nov 2024", jatuh_tempo:"4 Okt 2025" },
              { nama: "Siti Nurhaliza", buku: "The Pragmatic Programmer", tanggal: "19 Nov 2024", jatuh_tempo:"3 Okt 2025" },
              { nama: "Budi Santoso", buku: "Design Patterns", tanggal: "18 Nov 2024", jatuh_tempo:"2 Okt 2025"}
            ].map((item, index) => (
              <div 
                key={index} 
                className="group p-4 from-white to-gray-50 rounded-2xl border-2 border-gray-100 hover:border-emerald-300 hover:shadow-md transition-all duration-200"
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-bold text-gray-800">{item.nama}</p>
                    </div>
                    <p className="text-sm text-gray-600 ml-5 flex items-center gap-2">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      {item.buku}
                    </p>
                  </div>
                  <div className="flex gap-5">
                    <div className="text-center">
                      <p className="text-xs text-gray-500 mb-1">Dipinjam</p>
                      <p className="text-sm font-semibold text-gray-700">{item.tanggal}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-gray-500 mb-1">Jatuh Tempo</p>
                      <p className="text-sm font-semibold text-gray-700">{item.jatuh_tempo}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
    )
}