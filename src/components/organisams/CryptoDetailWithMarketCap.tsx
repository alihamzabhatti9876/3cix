import { Card } from "@/components/ui/card";
import { CryptoDetailChart } from "../molecules/CryptoDetailChart";
import { MarketCap } from "./MarketCap";


export default function CryptoDetailWithMarketCap() {
  return (
    <Card className="border shadow-sm py-0">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-2/3 border-r">
          <CryptoDetailChart />
        </div>
        <div className="w-full lg:w-1/3">
          <MarketCap />
        </div>
      </div>
    </Card>
  );
}
