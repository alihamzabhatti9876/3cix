import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react'

type MarketCapItemProps = {
    symbol: string;
    name: string;
    price: string;
    change: string;
    changeIsPositive: boolean;
    color: string;
    icon: string;
};

export default function MarketCapItem({
    symbol,
    name,
    price,
    change,
    changeIsPositive,
    color,
    icon,
}: MarketCapItemProps) {
    return (
        <div className="flex items-center justify-between px-2 py-4 hover:bg-accent transition-colors border-b-[2px]">
            <div className="flex items-center gap-2">
                <div className={cn("w-7 h-7 rounded-full flex items-center justify-center", `bg-${color}/10`)}>
                    {
                        icon && (
                            <Image
                                src={icon}
                                alt={`${name} icon`}
                                width={40} 
                                height={40} 
                                className="rounded-full"
                            />
                        )
                    }
                </div>
                <span className="text-sm font-medium">{name}</span>
            </div>
            <div className="text-right flex flex-row gap-2">
                <p className="text-sm font-medium ">{price}</p>
                <p
                    className={cn(
                        "text-xs",
                        changeIsPositive ? "text-green-500" : "text-red-500"
                    )}
                    style={{ marginTop: 'revert' }}
                >
                    {change}%  {changeIsPositive ? "↑" : "↓"}
                </p>
            </div>
        </div>
    );
}
