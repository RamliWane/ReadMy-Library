'use client';

import InputBook from '../InputBook';
import StatsCards from './StatsCards';
import RecentBorrows from './RecentBorrows';
import PopularBooks from './PopularBooks';
import { useDashboardData } from './useDashboardData';

export default function DashboardContent() {
  const { stats, recentBorrows, popularBooks, loading } = useDashboardData();

  return (
    <div className="flex flex-col gap-6">

      <StatsCards stats={stats} loading={loading} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-1">
          <InputBook />
        </div>
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <RecentBorrows data={recentBorrows} loading={loading} />
          <PopularBooks data={popularBooks} loading={loading} />
        </div>
      </div>

    </div>
  );
}