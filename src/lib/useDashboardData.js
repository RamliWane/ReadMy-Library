// useDashboardData.js
import { useState, useEffect } from 'react';

export function useDashboardData() {
  const [stats, setStats] = useState(null);
  const [totalbooks, setBooks] = useState([]);
  const [recentBorrows, setRecentBorrows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAll() {
      try {
        // Fetch paralel biar cepet
        const [booksRes, statsRes, borrowsRes] = await Promise.all([
            fetch('http://localhost:5000/buku/dashboard/totalbuku'),
            fetch('http://localhost:5000/users/dashboard/stats'),
            fetch('http://localhost:5000/peminjaman/dashboard/recentborrow')
        ]);

        const [booksData, statsData, borrowsData] = await Promise.all([
          booksRes.json(),
          statsRes.json(),
          borrowsRes.json()
        ]);

        setBooks(booksData);
        setStats({
            totalBuku: booksData.data[0].totalbuku,
            anggotaAktif: statsData.data[0].totaluser,
            bukuDipinjam: borrowsData.data[0].totalpeminjaman,
            });
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchAll();
  }, []);

  return { totalbooks, stats, recentBorrows, loading };
}