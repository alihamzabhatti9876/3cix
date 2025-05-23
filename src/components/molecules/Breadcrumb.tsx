import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import TriangleStroke from '../atoms/triangleStroke';

type BreadcrumbProps = {
  items: Array<{
    label: string;
    href?: string;
  }>;
};

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center text-sm">
    
      {items.map((item, index) => (
        <React.Fragment key={index}>
         
          {item.href ? (
            <Link 
              to={item.href} 
              className={`hover:text-foreground `}
            >
              {item.label}
            </Link>
          ) : (
            <span className="font-medium">{item.label}</span>
          )}
        <TriangleStroke useGradient={index == items.length-1}/>
        </React.Fragment>
      ))}
    </nav>
  );
}