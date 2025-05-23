'use client';

import { Header } from '@/components/organisams/Header';
import { Sidebar } from '@/components/organisams/Sidebar';
import useIsMobile from '@/hooks/useIsMobile';
import React, { useState } from 'react';

// import { Header } from './Header';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [collapsed, setCollapsed] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useIsMobile();
  const handleBurgerClick = () => {
    if (isMobile) {
      setDrawerOpen(true);
    } else {
      setCollapsed(prev => !prev);
    }
  };
  return (
    <div className="flex h-screen bg-background">
      <Sidebar collapsed={collapsed}
        setCollapsed={setCollapsed} isMobile={isMobile}
        drawerOpen={drawerOpen}
        setDrawerOpen={setDrawerOpen} />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header onBurgerClick={handleBurgerClick} isMobile={isMobile}/>
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
