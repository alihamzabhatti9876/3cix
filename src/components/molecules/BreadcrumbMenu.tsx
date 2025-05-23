import React from 'react'
import { Button } from '../ui/button'
import { ChevronLeft, ChevronRight, LayoutGrid } from 'lucide-react'

export default function BreadcrumbMenu() {
  return (
       <div className="flex items-center gap-2 mr-4">
          <Button variant="outline" size="icon" className="h-10 w-10 rounded-md">
            <LayoutGrid className="h-5 w-5 text-muted-foreground" />
          </Button>
          <Button variant="outline" size="icon" className="h-10 w-10 rounded-md">
            <ChevronLeft className="h-5 w-5 text-muted-foreground" />
          </Button>
          <Button variant="outline" size="icon" className="h-10 w-10 rounded-md">
            <ChevronRight className="h-5 w-5 text-blue-500" />
          </Button>

        </div>
  )
}
