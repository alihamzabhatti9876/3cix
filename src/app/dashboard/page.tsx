'use client';


import { Activities } from '@/components/molecules/Activities';
import { Breadcrumb } from '@/components/molecules/Breadcrumb';
import BreadcrumbMenu from '@/components/molecules/BreadcrumbMenu';
import { CryptoCard } from '@/components/molecules/CryptoCard';

import { NewsFeed } from '@/components/molecules/NewsFeed';
import CryptoDetailWithMarketCap from '@/components/organisams/CryptoDetailWithMarketCap';
import { cryptocurrencies } from '@/constants';


export default function Dashboard() {


  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <Breadcrumb items={[{ label: "Welcome" }, { label: "Dashboard" }]} />
        <BreadcrumbMenu />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {cryptocurrencies.map((crypto) => (
          <CryptoCard key={crypto.symbol} {...crypto} />
        ))}
      </div>
      <CryptoDetailWithMarketCap />

      <div className="grid grid-cols-12 gap-6">
        <Activities />
        <NewsFeed />
      </div>
    </div>
  );
}
