import { CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { marketCapData } from '@/constants';
import TriangleStroke from '../atoms/triangleStroke';
import MarketCapItem from '../molecules/MarketCapItem';

export function MarketCap() {
    return (
        <div className="col-span-12 lg:col-span-4 py-2 ">
            <CardHeader>
                <div className="flex items-center gap-2">
                    <TriangleStroke useGradient={true} />
                    <CardTitle className="text-lg">Market Cap</CardTitle>
                </div>
                <div>

                </div>
            </CardHeader>

            <CardContent>
                <div className="space-y-1">
                    {marketCapData.map((item) => (
                        <MarketCapItem key={item.symbol} {...item} />
                    ))}
                </div>
            </CardContent>
        </div>
    );
}
