
'use client'

import useSWR from 'swr';
import TrendCard from '@/app/components/TrendCard';
import { fetchTrends } from '@/../services/trend-engine/src';

export default function Dashboard() {
  const { data: trends } = useSWR('/api/trends', fetchTrends);

  return (
    <main className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {trends?.map((t: any) => <TrendCard key={t.name} trend={t} />)}
    </main>
  );
}
