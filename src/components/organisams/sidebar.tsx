'use client';

import React from 'react';
import { HomeOutlined, SettingOutlined } from '@ant-design/icons';
import Link from 'next/link';

const menuItems = [
  { label: 'Home', href: '/', icon: <HomeOutlined /> },
  { label: 'Settings', href: '/settings', icon: <SettingOutlined /> },
];

const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-white dark:bg-gray-900 border-r dark:border-gray-800 p-4 space-y-4 fixed top-0 left-0">
      <div className="text-xl font-bold text-gray-800 dark:text-white">🚀 MyApp</div>
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary transition px-2 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {item.icon}
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
