
import React from 'react';
type SidebarSectionProps = {
  title: string;
  children: React.ReactNode;
};

const SidebarSection = ({ title, children }: SidebarSectionProps) => {
  return (
    <div className="py-2">
      <h2 className="mb-2 px-4 text-lg font-bold text-sidebar-foreground">{title}</h2>
      <div className="space-y-1">{children}</div>
    </div>
  );
};
export default SidebarSection;