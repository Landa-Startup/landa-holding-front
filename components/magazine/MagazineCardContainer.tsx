'use client';
import React, { useState, useEffect } from 'react';
import FetchBlogData from '@/utils/FetchBlogData';
import { MagazineData } from 'app/types/global';
export default function MagazineCardContainer({ url }: { url: string }) {
  const [cardData, setCardData] = useState<MagazineData>();

  useEffect(() => {
    // Inside the useEffect, fetch the data and update the state
    async function fetchData() {
      try {
        const data = await FetchBlogData(`/blog/details/${url}/?format=json`);
        setCardData(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, [url]); // Add 'url' to the dependency array

  return (
    <div>
      <div className="flex flex-col">
        <div className="flex gap-2">
          <span>title:</span>
          <span>{cardData?.title}</span>
        </div>
      </div>
    </div>
  );
}