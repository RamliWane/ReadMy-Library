'use client';

import { Book, Users, BookOpen, TrendingUp } from 'lucide-react';

export default function StatsCards({ stats, loading }) {
  const items = [
    { icon: <Book className="w-5 h-5 text-white" />, value: stats?.totalBuku ?? 0, label: "Total Buku" },
    { icon: <Users className="w-5 h-5 text-white" />, value: stats?.anggotaAktif ?? 0, label: "Anggota Aktif" },
    { icon: <BookOpen className="w-5 h-5 text-white" />, value: stats?.bukuDipinjam ?? 0, label: "Buku Dipinjam" },
  ];

  if (loading) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 flex-1">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="bg-white p-4 rounded-xl shadow-sm animate-pulse">
            <div className="w-9 h-9 bg-slate-200 rounded-lg mb-3" />
            <div className="h-7 w-16 bg-slate-200 rounded mb-1" />
            <div className="h-3 w-24 bg-slate-200 rounded" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 flex-1">
      {items.map(({ icon, value, label }) => (
        <div key={label} className="bg-white p-4 rounded-xl shadow-sm">
          <div className="p-2 bg-black rounded-lg w-fit mb-3">{icon}</div>
          <p className="text-xl font-bold text-slate-800">{value}</p>
          <p className="text-xs text-slate-500 mt-0.5">{label}</p>
        </div>
      ))}
    </div>
  );
}