'use client';

import { Book } from 'lucide-react';

export default function PopularBooks({ data, loading }) {
  if (loading) {
    return (
      <div className="bg-white rounded-xl shadow-sm">
        <div className="p-4 border-b">
          <h3 className="text-sm font-semibold text-slate-800">Buku Populer</h3>
        </div>
        <div className="p-4 space-y-3">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center gap-2 animate-pulse">
              <div className="w-8 h-8 bg-slate-200 rounded-lg shrink-0" />
              <div className="space-y-1">
                <div className="h-3 w-28 bg-slate-200 rounded" />
                <div className="h-3 w-20 bg-slate-200 rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="p-4 border-b">
        <h3 className="text-sm font-semibold text-slate-800">Buku Populer</h3>
      </div>
      <div className="p-4 space-y-3">
        {data.length === 0 ? (
          <p className="text-xs text-slate-400 text-center py-2">Belum ada data</p>
        ) : (
          data.map(({ id, judulBuku, jumlahPeminjaman }) => (
            <div key={id} className="flex items-center gap-2">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center shrink-0">
                <Book className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="text-xs font-medium text-slate-800">{judulBuku}</p>
                <p className="text-xs text-slate-500">{jumlahPeminjaman} peminjaman</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}