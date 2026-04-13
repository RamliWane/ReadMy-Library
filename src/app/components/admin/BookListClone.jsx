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

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('id-ID', options);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="grid grid-cols-[0.5fr_2fr_2fr_2fr_2fr] px-6 py-3 bg-gray-50 border-b border-gray-200 text-xs font-semibold text-gray-500 uppercase tracking-wider">
        <span>No</span>
        <span>Username</span>
        <span>Judul Buku</span>
        <span>Dipinjam</span>
        <span>Jatuh Tempo</span>
      </div>

      {list.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 px-4">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
            <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Belum Ada Pengajuan</h3>
          <p className="text-gray-500 text-center max-w-md">
            Saat ini tidak ada pengajuan peminjaman yang menunggu persetujuan.
          </p>
        </div>
      ) : (
        <div className="divide-y divide-gray-100">
          {list.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-[0.5fr_2fr_2fr_2fr_2fr] px-6 py-4 hover:bg-gray-50 transition-colors duration-150 items-center"
            >
              <span className="text-sm text-gray-500">{index + 1}</span>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center text-sm font-bold text-gray-600 shrink-0">
                  {item.username?.charAt(0).toUpperCase()}
                </div>
                <span className="font-semibold text-gray-800 text-sm">{item.username}</span>
              </div>

              <span className="text-sm text-gray-600">{item.judul_buku}</span>

              <span className="text-sm text-gray-600">{formatDate(item.tgl_peminjaman)}</span>

              <span className="text-sm text-gray-600">{formatDate(item.tgl_jatuh_tempo)}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}