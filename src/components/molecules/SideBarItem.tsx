import { cn } from '@/lib/utils';
import { ChevronRight, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';

type SidebarItemProps = {
  icon?: React.ElementType;
  label: string;
  isActive?: boolean;
  href?: string;
  hasSubmenu?: boolean;
  collapsed?: boolean;
  children?: React.ReactNode;
};

const SidebarItem = ({
  icon: Icon,
  label,
  isActive = false,
  href,
  hasSubmenu = false,
  collapsed = false,
  children
}: SidebarItemProps) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    if (hasSubmenu) {
      setOpen(!open);
    }
  };

  const itemContent = (
    <div
      onClick={handleClick}
      className={cn(
        'flex cursor-pointer items-center px-3 py-2 text-sm transition-all',
        collapsed ? 'justify-center' : 'gap-3',
        isActive
          ? 'bg-sidebar-accent text-sidebar-accent-foreground font-bold text-base border-l-4 border-l-[#70BCFD]'
          : 'text-sidebar-foreground/50 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
      )}
    >
      {Icon && (<Icon className="h-5 w-5" />)}
      {!collapsed && (
        <>
          <span className="flex-grow">{label}</span>
          {hasSubmenu && (open ? <ChevronDown className="h-4 w-4" color='#51b8e4'/> : <ChevronRight className="h-4 w-4" color='#51b8e4'/>)}
        </>
      )}
    </div>
  );

  return (
    <div>
      {href && !hasSubmenu ? <Link href={href}>{itemContent}</Link> : itemContent}
      {!collapsed && open && (
        <div className="ml-6 mt-1 space-y-1">{children}</div>
      )}
    </div>
  );
};

export default SidebarItem;
