'use client';

import { cn } from '@/lib/utils';
import {
  BarChart2,
  Bell,
  Gift,
  HelpCircle,
  Landmark,
  LayoutDashboard,
  RefreshCw,
  Settings,
  Wallet,
  Zap
} from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';
import SideBarFooter from '../molecules/SideBarFooter';
import SideBarHeader from '../molecules/SideBarHeader';
import SidebarItem from '../molecules/SideBarItem';
import SidebarSection from '../molecules/SideBarSection';

interface SidebarProps {
  collapsed: boolean;
  setCollapsed: (val: boolean) => void;
  isMobile: boolean;
  drawerOpen: boolean;
  setDrawerOpen: (val: boolean) => void;
}

export function Sidebar({
  collapsed,
  setCollapsed,
  isMobile,
  drawerOpen,
  setDrawerOpen
}: SidebarProps) {

  const pathname = usePathname();
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        isMobile &&
        drawerOpen &&
        drawerRef.current &&
        !drawerRef.current.contains(e.target as Node)
      ) {
        setDrawerOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [drawerOpen, isMobile]);

  useEffect(() => {
    if (isMobile && drawerOpen) {
      setDrawerOpen(false);
    }
  }, [pathname]);

  const SidebarContent = (
    <aside
      ref={drawerRef}
      className={cn(
        "flex flex-col h-screen overflow-y-auto bg-sidebar border-r border-border transition-all duration-300 z-50",
        isMobile ? "fixed top-0 left-0 w-[256px]" : collapsed ? "w-20" : "w-64"
      )}
    >
    <SideBarHeader collapsed={collapsed} />

    
      <div className="flex-1 overflow-y-auto">
        <SidebarSection title={!collapsed ? 'Quick Access' : ''}>
          <SidebarItem icon={LayoutDashboard} label="Dashboard" href="/dashboard" isActive collapsed={collapsed} />
          <SidebarItem icon={RefreshCw} label="Exchange" href="/dashboard" collapsed={collapsed} />
          <SidebarItem icon={Wallet} label="My Wallet" href="/dashboard" hasSubmenu collapsed={collapsed} />
          <SidebarItem icon={BarChart2} label="Tradeview" href="/dashboard" collapsed={collapsed} />
        </SidebarSection>

        <SidebarSection title={!collapsed ? 'Service' : ''}>
          <SidebarItem icon={Landmark} label="Transactions" hasSubmenu collapsed={collapsed}>
            <SidebarItem label="Buy & Sell Coin" href="/dashboard" collapsed={collapsed} />
            <SidebarItem label="Deposit Yen" href="/dashboard" collapsed={collapsed} />
            <SidebarItem label="Withdraw Yen" href="/dashboard" collapsed={collapsed} />
            <SidebarItem label="Send Coin" href="/dashboard" collapsed={collapsed} />
            <SidebarItem label="Receive Coin" href="/dashboard" collapsed={collapsed} />
            <SidebarItem label="Deposit Coin" href="/dashboard" collapsed={collapsed} />
          </SidebarItem>
          <SidebarItem icon={Gift} label="Rewards" href="/dashboard" hasSubmenu collapsed={collapsed} />
          <SidebarItem icon={Zap} label="Utility Plan" href="/dashboard" hasSubmenu collapsed={collapsed} />
        </SidebarSection>

        <SidebarSection title={!collapsed ? 'Account' : ''}>
          <SidebarItem icon={Bell} label="Notifications" href="/dashboard" collapsed={collapsed} />
          <SidebarItem icon={Settings} label="Settings" href="/dashboard" collapsed={collapsed} />
          <SidebarItem icon={HelpCircle} label="FAQ" href="/dashboard" collapsed={collapsed} />
        </SidebarSection>
      </div>

      <SideBarFooter collapsed={collapsed} />
    </aside>
  );

  return (
    <>
      {isMobile && !drawerOpen && (
        <button
          onClick={() => setDrawerOpen(true)}
          className="fixed top-4 left-4 z-[60]  p-2 rounded shadow-md"
        >
          <img
            src="/burger.svg"
            alt="Burger"
            width={20}
            height={20}
            className="cursor-pointer"
            onClick={() => setDrawerOpen(true)}

          />
        </button>
      )}

      {(!isMobile || drawerOpen) && SidebarContent}

      {isMobile && drawerOpen && (
        <div
          className="fixed inset-0 z-[40] bg-black/30 backdrop-blur-sm"
          onClick={() => setDrawerOpen(false)}
        />
      )}
    </>
  );
}
