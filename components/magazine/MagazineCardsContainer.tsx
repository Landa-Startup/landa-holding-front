'use client';
import React, { useState, useEffect } from 'react';
import PostCard from './PostCard';
import FetchBlogData from '@/utils/FetchBlogData';
import { MagazineData } from 'app/types/global';
export default function MagazineCardsContainer() {
  const [cardData, setCardData] = useState<MagazineData[]>();

  useEffect(() => {
    // Inside the useEffect, fetch the data and update the state
    async function fetchData() {
      try {
        const data = await FetchBlogData('/blog/list?format=json');
        setCardData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []); // The empty dependency array ensures this runs only on component mount

  return (
    <div className="flex flex-col gap-16 col-span-2">
      {cardData?.map((card, index) => (
        <PostCard
          slug={card.slug}
          key={index}
          image={card.thumbnail}
          date={card.date}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
}
