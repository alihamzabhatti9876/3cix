import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import TriangleStroke from '../atoms/triangleStroke';

type NewsItemProps = {
  title: string;
  excerpt: string;
  imageUrl: string;
  category: string;
};

function NewsItem({ title, excerpt, imageUrl, category }: NewsItemProps) {
  return (
    <div className="relative rounded-xl border w-full p-4 bg-white shadow-sm overflow-hidden">

      <div className='w-[80%] md:w-[90%] flex flex-col gap-3'>
        <div className="text-xs text-muted-foreground font-semibold">Today &nbsp; 11:36</div>

        <h3 className="text-md font-semibold text-gray-900 leading-snug">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-snug  line-clamp-2 pr-20">
          {excerpt}
        </p>
      </div>
   
      <div className="absolute top-0 right-0 w-32 h-full pointer-events-none">
        <div
          className="absolute top-0 right-0 w-full h-full"
          style={{
            clipPath: 'polygon(100% 0, 100% 100%, 0 100%)',
            background: 'linear-gradient(135deg, #6366f1, #a855f7)', 
          }}
        >
          <div className="flex flex-col relative items-end justify-end mb-2 mr-2 h-full text-white">
            <img src={imageUrl} alt={category} className="w-16 h-16 mb-1" />
            <span className="absolute bottom-6 text-xs font-semibold text-white/50">{category}</span>
          </div>
        </div>
      </div>
    </div>
  );
}



export function NewsFeed() {
  return (
    <Card className="col-span-12 lg:col-span-6 border shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <TriangleStroke useGradient={true} />
          <CardTitle className="text-lg">Crypto Newsfeed</CardTitle>
        </div>
        <Button variant="ghost" size="sm" className="text-md text-gray-300 font-thin rounded-md border-[1px]">Subscribe</Button>
      </CardHeader>
      <CardContent>
        <div className="mb-4  ">
        
          <NewsItem
            title="Beyond Bad Trades: Cybersecurity Risks to Cryptocurrency Exchange Users"
            excerpt="Cryptocurrency mining malware is not the only type of cryptocurrency-related threat — cybercriminals have resorted to using various tactics to get their hands on digital currencies."
            imageUrl="/cyber.svg"
            category="Security"
          />
        </div>
        <div>
  
          <NewsItem
            title="Ripple News Today: Ripple is planning to upgrade the technology"
            excerpt="The Ripple team announced plans to improve their blockchain technology with new features aimed at enhancing transaction speed and security."
            imageUrl="/cyber.svg"
            category="Technology"
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="sm" className="w-full text-xs">View all news</Button>
      </CardFooter>
    </Card>
  );
}
