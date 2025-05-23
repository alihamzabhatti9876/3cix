import { cn } from '@/lib/utils';
import Image from 'next/image'
import React from 'react'

type CryptoCardProps = {
  name: string;
  symbol: string;
  price: string;
  change: string;
  color: string;
  icon: string;
  changeIsPositive: boolean;
};

export default function CryotoCardContent({name , price, change , icon ,symbol,changeIsPositive} : CryptoCardProps) {
  return (
    <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
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
                <div>
                  <h3 className="font-semibold text-lg">{symbol}</h3>
                  <p className="text-sm text-muted-foreground">{name}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-lg">{price}</p>
                <p
                  className={cn(
                    "text-sm font-medium",
                    changeIsPositive ? "text-green-500" : "text-red-500"
                  )}
                >
                  {changeIsPositive ? "+" : ""}{change}% {changeIsPositive ? "↑" : "↓"}
                </p>
              </div>
            </div>
  )
}
