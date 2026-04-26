// useDashboardData.js
import { useState, useEffect } from 'react';

export function useDashboardData() {
  const [stats, setStats] = useState(null);
  const [recentBorrows, setRecentBorrows] = useState([]);
  const [popularBooks, setPopularBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAll() {
      try {
        // Fetch paralel biar cepet
        const [statsRes, borrowsRes, popularRes] = await Promise.all([
          fetch('/api/dashboard/stats'),
          fetch('/api/dashboard/recent-borrows'),
          fetch('/api/dashboard/popular-books'),
        ]);

        const [statsData, borrowsData, popularData] = await Promise.all([
          statsRes.json(),
          borrowsRes.json(),
          popularRes.json(),
        ]);

        setStats(statsData);
        setRecentBorrows(borrowsData);
        setPopularBooks(popularData);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchAll();
  }, []);

  return { stats, recentBorrows, popularBooks, loading };
}