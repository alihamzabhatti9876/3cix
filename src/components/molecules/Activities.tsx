import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import React from 'react';
import TriangleStroke from '../atoms/triangleStroke';

type ActivityItemProps = {
  date: string;
  detail: string;
  price: string;
  isPricePositive?: boolean;
};

function ActivityItem({
  date,
  detail,
  price,
  isPricePositive,
}: ActivityItemProps) {
  return (
    <div className="flex items-center justify-between py-3 border-b border-b-[1px] last:border-0">
      <div className="w-28 text-sm text-muted-foreground">{date}</div>
      <div className="flex-1 text-sm">{detail}</div>
      <p
        className="text-sm font-bold bg-clip-text text-transparent"
        style={{
          backgroundImage:
            'linear-gradient(75.37deg, #0043FF 25.69%, #A370F1 105.3%)',
        }}
      >
        {price}
      </p>
    </div>
  );
}

function GradientTabsTrigger({
  value,
  children,
}: {
  value: string;
  children: React.ReactNode;
}) {
  return (
    <TabsTrigger
      value={value}
      className={cn(
        "text-xs relative bg-transparent shadow-none",
       
        "data-[state=active]:bg-transparent data-[state=active]:shadow-none",
        
        "data-[state=active]:after:content-[''] data-[state=active]:after:absolute data-[state=active]:after:left-0 data-[state=active]:after:bottom-0 data-[state=active]:after:w-full data-[state=active]:after:h-[2px] data-[state=active]:after:bg-[linear-gradient(75.37deg,_#0043FF_25.69%,_#A370F1_105.3%)]"
      )}
    >
      {children}
    </TabsTrigger>
  );
}


export function Activities() {
  return (
    <Card className="col-span-12 lg:col-span-6 border shadow-sm">
      <CardHeader>
        <div className="flex items-center gap-2">
          <TriangleStroke useGradient={true} />
          <CardTitle className="text-lg">Latest Activities</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <Tabs defaultValue="all" style={{ width: '100%' }}>
          <div className="overflow-x-auto">
            <TabsList className="flex w-max whitespace-nowrap bg-white rounded-md px-1 md:px-4">
              <GradientTabsTrigger value="all">ALL</GradientTabsTrigger>
              <GradientTabsTrigger value="btc">BTC</GradientTabsTrigger>
              <GradientTabsTrigger value="eth">ETH</GradientTabsTrigger>
              <GradientTabsTrigger value="xrp">XRP</GradientTabsTrigger>
              <GradientTabsTrigger value="xem">XEM</GradientTabsTrigger>
              <GradientTabsTrigger value="lsk">LSK</GradientTabsTrigger>
              <GradientTabsTrigger value="bth">BTH</GradientTabsTrigger>
              <GradientTabsTrigger value="fct">FCT</GradientTabsTrigger>
              <GradientTabsTrigger value="etc">ETC</GradientTabsTrigger>
              <GradientTabsTrigger value="jpy">JPY</GradientTabsTrigger>
            </TabsList>
          </div>

          <div className="flex justify-between text-sm font-medium py-4 px-4 bg-[#FAFBFF] border-b-2 border-t-2">
            <div className="w-28">Date</div>
            <div className="flex-1">Detail</div>
            <div>Price</div>
          </div>

          <TabsContent value="all" className="mt-0 px-4">
            <ActivityItem
              date="2018/10/02 10:57:46"
              detail="Deposit Japanese Yen"
              price="+10,000 JPY"
              isPricePositive={true}
            />
            <ActivityItem
              date="2018/10/10 10:57:46"
              detail="Bought Bitcoin"
              price="+ 0.00081847 BTC"
              isPricePositive={true}
            />
            <ActivityItem
              date="2018/10/10 10:57:46"
              detail="Service fee"
              price="- 500 JPY"
              isPricePositive={false}
            />
            <ActivityItem
              date="2018/10/15 10:57:46"
              detail="Sold Ethereum"
              price="+ 12,500 JPY"
              isPricePositive={true}
            />
            <ActivityItem
              date="2018/10/16 10:57:46"
              detail="Withdrawn Japanese Yen"
              price="- 20,000 JPY"
              isPricePositive={false}
            />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
