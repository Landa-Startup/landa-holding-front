import React from 'react';
import MagazineStartUps from '@/components/magazine/MagazineStartUps';
import MagazineModernPost from '@/components/magazine/MagazineModernPost';
import Banner from '@/components/common/Banner';
import { Metadata } from 'next';
import PostCard from '@/components/magazine/PostCard';

export const metadata: Metadata = {
  title: 'Landa Holding | Magazine',
  description: '',
};

const cardData = [
  {
    image: '/static/images/Magazine/cdc3059047142494426bf3fce2268a9e.png',
    date: 'MONDAY/ APRIL 25, 2022',
    title:
      'Microsoft: A Drop-out Success Story you’ll Embrace, Cherish, and Remember!',
    description:
      'Microsoft could be one of the first successful dropout stories I have ever heard of. A Harvard College dropout, Bill Gates, and his childhood friend Paul Allen established the bedrock for Microsoft in 1975, which has become the biggest software company in the world. Have you ever wondered how it reached the position it is in right now? It is well-known for the Windows Operating System Software and Office Application Suites. Although iPhone and Android dominate the market, what makes Microsoft a leader in the tech world?',
  },
  { image: '', date: '', title: '', description: '' },
  { image: '', date: '', title: '', description: '' },
];

export default function MagazinePage() {
  return (
    <div>
      <Banner image="/static/images/Magazine/hero.png" title="Magazine" />
      <div className="grid grid-cols-2 my-32 mx-28 gap-20">
        <div className="grid grid-rows-3 w-2/3">
          {cardData.map((card, index) => (
            <PostCard
              key={index}
              image={card.image}
              date={card.date}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
        <div className="w-1/3">
          <div className="bg-whiteGold max-w-xs p-3 rounded-lg">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
