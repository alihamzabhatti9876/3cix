import React from 'react'

export default function SideBarHeader({collapsed}: {collapsed: boolean}) {
  return (
      <div className="p-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8">
            <img src="/logo.svg" alt="Logo" width={40} height={40} />
          </div>
          {!collapsed && <span className="text-xl text-sidebar-foreground">COINSPACE</span>}
        </div>
      </div>
  )
}
