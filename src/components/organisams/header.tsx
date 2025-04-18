'use client';

import React from 'react';
import { UserOutlined } from '@ant-design/icons';

const Header = () => {
  return (
    <header className="h-16 w-full bg-white dark:bg-gray-900 border-b dark:border-gray-800 flex items-center justify-between px-6 ml-64">
      <h1 className="text-lg font-semibold text-gray-800 dark:text-white">Dashboard</h1>
      <div className="flex items-center gap-4">
        <span className="text-gray-600 dark:text-gray-300">Hello, Maaz</span>
        <div className="w-8 h-8 bg-gray-300 dark:bg-gray-700 rounded-full flex items-center justify-center">
          <UserOutlined className="text-white" />
        </div>
      </div>
    </header>
  );
};

export default Header;
