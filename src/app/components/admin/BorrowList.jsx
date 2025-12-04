"use client"
import { useEffect, useState } from "react";

export default function BorrowList() {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const res = await fetch("http://localhost:5000/peminjaman/approved");
      const json = await res.json();
      setList(json.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  // ✅ Fungsi format tanggal
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('id-ID', options);
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm p-6 rounded-3xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center shadow-lg">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Sedang Meminjam
          </h2>
          <p className="text-sm text-gray-500">
            {list.length} peminjaman aktif
          </p>
        </div>
      </div>
    {list.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 px-4">
          <div className="w-24 h-24 bg-linear-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mb-6 shadow-inner">
            <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            Belum Ada Pengajuan
          </h3>
          <p className="text-gray-500 text-center max-w-md">
            Saat ini tidak ada pengajuan peminjaman yang menunggu persetujuan. Pengajuan baru akan muncul di sini.
          </p>
        </div>
      ) : (
      <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
        {list.map((item, index) => (
          <div
            key={index}
            className="group p-4 from-white to-gray-50 rounded-2xl border-2 border-gray-100 hover:border-emerald-300 hover:shadow-md transition-all duration-200"
          >
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <p className="font-bold text-gray-800">
                  {item.username}
                </p>
                <p className="text-sm text-gray-600 ml-5">
                  {item.judul_buku}
                </p>
              </div>

              <div className="flex gap-5">
                <div className="text-center">
                  <p className="text-xs text-gray-500 mb-1">
                    Dipinjam
                  </p>
                  <p className="text-sm font-semibold text-gray-700">
                    {formatDate(item.tgl_peminjaman)}
                  </p>
                </div>

                <div className="text-center">
                  <p className="text-xs text-gray-500 mb-1">
                    Jatuh Tempo
                  </p>
                  <p className="text-sm font-semibold text-gray-700">
                    {formatDate(item.tgl_jatuh_tempo)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      )}
    </div>
  );
}