import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { generateCandlestickData } from '@/utils';
import { ChevronDown, Info } from 'lucide-react';
import { useState } from 'react';
import {
    Bar,
    BarChart,
    CartesianGrid,
    ComposedChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from 'recharts';



const candlestickData = generateCandlestickData();
const highPrice = Math.max(...candlestickData.map(item => item.high));
const lowPrice = Math.min(...candlestickData.map(item => item.low));
const lastPrice = candlestickData[candlestickData.length - 1].close;
const startPrice = candlestickData[0].open;
const percentChange = ((lastPrice - startPrice) / startPrice * 100).toFixed(2);
const isNegativeChange = parseFloat(percentChange) < 0;
const totalVolume = candlestickData.reduce((sum, item) => sum + item.volume, 0);

const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        const data = payload[0].payload;
        return (
            <div className="bg-white p-3 border rounded-md shadow-lg text-xs">
                <div className="mb-1 font-medium">{label}</div>
                <div className="grid grid-cols-2 gap-3">
                    <div><span className="text-gray-500">Open</span><div>¥{data.open?.toLocaleString()}</div></div>
                    <div><span className="text-gray-500">Close</span><div>¥{data.close?.toLocaleString()}</div></div>
                    <div><span className="text-gray-500">High</span><div>¥{data.high?.toLocaleString()}</div></div>
                    <div><span className="text-gray-500">Low</span><div>¥{data.low?.toLocaleString()}</div></div>
                </div>
            </div>
        );
    }
    return null;
};

const VolumeTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        const data = payload[0].payload;
        return (
            <div className="bg-white p-2 border rounded-md shadow-lg text-xs">
                <div className="mb-1 font-medium">{label}</div>
                <div>Volume: {data.volume.toFixed(1)} BTC</div>
            </div>
        );
    }
    return null;
};

export function CryptoDetailChart() {
    const [activeInterval, setActiveInterval] = useState('1');

    return (
        <div className="col-span-12 lg:col-span-8">
            <CardHeader className="flex flex-wrap justify-between items-center gap-2 border-b py-2 px-4 sm:px-6">
                <div className="flex items-center gap-1.5">
                    <span className="font-bold text-base">BTC</span>
                    <div className="flex items-center gap-3">
                        <span className="text-base text-gray-500 mt-4">/JPY</span>
                        <ChevronDown className="h-4 w-4 text-gray-500 mt-4" color='#51b8e4' />
                    </div>
                </div>
                <Button className="bg-custom-gradient rounded-sm h-8 w-20 shadow-lg">BUY</Button>
            </CardHeader>

            <CardHeader className="flex flex-wrap bg-[#FAFBFF] items-center justify-between gap-4 px-4 sm:px-6 border-b !pb-0 overflow-x-auto">
                <div className="text-right">
                    <p className="text-2xl font-bold">{lastPrice.toLocaleString()}</p>
                    <p className={`text-sm ${isNegativeChange ? 'text-red-500' : 'text-green-500'}`}>
                        {isNegativeChange ? '' : '+'}{percentChange}% {isNegativeChange ? '↓' : '↑'}
                    </p>
                </div>
                <div className="hidden md:block">
                    <div className="flex gap-6 text-sm">
                        <div className="flex gap-2">
                            <span className="text-gray-500 mt-2">High</span>
                            <span className="font-medium " >{highPrice.toLocaleString()}</span>
                        </div>
                        <div className="flex gap-2">
                            <span className="text-gray-500 mt-2">Low</span>
                            <span className="font-medium ">{lowPrice.toLocaleString()}</span>
                        </div>
                        <div className="flex gap-2">
                            <span className="text-gray-500 mt-2">24h Volume</span>
                            <span className="font-medium">{(totalVolume / 10).toFixed(1)} BTC</span>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <img src="/alert.svg" alt="BTC" width={20} height={20} className="cursor-pointer" />
                </div>
            </CardHeader>

            <div className="block md:hidden text-xs text-gray-500 px-4 pb-2 pt-1">
                <span>High: {highPrice.toLocaleString()} | Low: {lowPrice.toLocaleString()} | Vol: {(totalVolume / 10).toFixed(1)} BTC</span>
            </div>

            <CardContent className="p-0">
                <div className="border-b">
                    <div className="flex items-center justify-between px-4 sm:px-6 py-3 overflow-x-auto">
                        <Tabs value={activeInterval} onValueChange={setActiveInterval}>
                            <TabsList className="flex gap-2 overflow-x-auto bg-transparent p-0 h-auto">
                                {['1min', '5min', '15min', '1', '4hr', '1day'].map(interval => (
                                    <TabsTrigger
                                        key={interval}
                                        value={interval}
                                        className="px-3 py-1 text-sm rounded-none data-[state=active]:border-b-2 data-[state=active]:border-blue data-[state=active]:font-medium data-[state=active]:text-blue-600"
                                    >
                                        {interval.replace('min', ' min').replace('hr', ' hr').replace('1', '1 hr')}
                                    </TabsTrigger>
                                ))}
                            </TabsList>
                        </Tabs>
                    </div>
                </div>

                <div className="h-[300px] sm:h-[400px] w-full px-2 pt-4">
                    <ResponsiveContainer width="100%" height="100%">
                        <ComposedChart data={candlestickData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                            <XAxis dataKey="time" stroke="#94a3b8" fontSize={10} tickLine={false} axisLine={false} interval={Math.floor(candlestickData.length / 8)}
                                textAnchor="end" />
                            <YAxis domain={['dataMin - 2000', 'dataMax + 2000']} stroke="#94a3b8" fontSize={10} tickLine={false} orientation="right" axisLine={false} tickFormatter={(value) => `${value.toLocaleString()}`} />
                            <CartesianGrid strokeDasharray="3 3" horizontal vertical={false} stroke="#e2e8f0" />
                            <Tooltip content={<CustomTooltip />} />
                            {candlestickData.map((entry, index) => (
                                <g key={`candle-${index}`}>
                                    <line
                                        x1={index * 6.5 + 40}
                                        y1={400 * (1 - (entry.high - 710000) / 25000)}
                                        x2={index * 6.5 + 40}
                                        y2={400 * (1 - (entry.low - 710000) / 25000)}
                                        stroke={entry.color}
                                        strokeWidth={1}
                                    />
                                    <rect
                                        x={index * 6.5 + 37.5}
                                        y={400 * (1 - (Math.max(entry.open, entry.close) - 710000) / 25000)}
                                        width={5}
                                        height={Math.abs(400 * (entry.close - entry.open) / 25000)}
                                        fill={entry.color}
                                    />
                                </g>
                            ))}
                        </ComposedChart>
                    </ResponsiveContainer>
                </div>

                <div className="h-[60px] border-t">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={candlestickData} barGap={0} barCategoryGap={1}>
                            <XAxis dataKey="time" hide />
                            <YAxis hide />
                            <Tooltip content={<VolumeTooltip />} />
                            <Bar
                                dataKey="volume"
                                fill="#d1d5db"
                                shape={({ x, y, width, height }: any) => (
                                    <rect x={x} y={y} width={width} height={height} fill="#EFF2FC" fillOpacity={0.4} />
                                )}
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-2 p-2 border-t">
                    <div className="flex gap-1">
                        <button className="w-8 h-8 flex items-center justify-center text-gray-400 bg-gray-100 rounded-md">⟨</button>
                        <button className="w-8 h-8 flex items-center justify-center text-gray-400 bg-gray-100 rounded-md">□</button>
                        <button className="w-8 h-8 flex items-center justify-center text-gray-400 bg-gray-100 rounded-md">⟩</button>
                    </div>
                    <div className="flex items-center">
                        <div className="w-8 h-8 flex items-center justify-center text-gray-400 rounded-full border">
                            <Info className="h-4 w-4" />
                        </div>
                    </div>
                </div>
            </CardContent>
        </div>
    );
}
