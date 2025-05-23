import { LogOut } from 'lucide-react'
import React from 'react'

export default function SideBarFooter({collapsed}: {collapsed: boolean}) {
  return (
  <div className="mt-auto p-4">
        <button className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground">
          <LogOut className="h-5 w-5" />
          {!collapsed && <span>Log Out</span>}
        </button>
      </div>
  )
}
