import { Card } from '@/components/ui/card';
import { colorMap } from '@/constants';
import { generateChartData } from '@/utils';
import {
  Area,
  AreaChart,
  ResponsiveContainer
} from 'recharts';
import CryotoCardContent from './CryotoCardContent';

type CryptoCardProps = {
  name: string;
  symbol: string;
  price: string;
  change: string;
  changeIsPositive: boolean;
  color: string;
  icon: string;
  chartData?: { value: number }[];
};


export function CryptoCard({
  name,
  symbol,
  price,
  change,
  changeIsPositive,
  color,
  chartData = generateChartData(changeIsPositive),
  icon
}: CryptoCardProps) {


  const colors = colorMap[color] || { bg: 'bg-gray-50', text: 'text-gray-500', fill: '#6B7280' };

  return (
    <Card className="overflow-hidden border shadow-sm hover:shadow-md transition-shadow duration-300 bg-white py-0">
      <div className="py-1 px-2 pb-0">
       <CryotoCardContent name={name} price={price} change={change} icon={icon} color={color} symbol={symbol} changeIsPositive={changeIsPositive}/>
      </div>
      <div className="h-20 w-full mt-2">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id={`colorFill-${symbol}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={colors.fill} stopOpacity={0.2} />
                <stop offset="95%" stopColor={colors.fill} stopOpacity={0} />
              </linearGradient>
            </defs>
            <Area
              type="monotone"
              dataKey="value"
              stroke={colors.fill}
              fillOpacity={1}
              fill={`url(#colorFill-${symbol})`}
              strokeWidth={2}
              isAnimationActive={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
