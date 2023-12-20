'use client';
import React from 'react';
import PostCard from './PostCard';
import { useSubmit } from 'stores/dataStore';
export default function MagazineCardsContainer() {
  const {cardsData} = useSubmit();

  // useEffect(() => {
  //   // Inside the useEffect, fetch the data and update the state
  //   async function fetchData() {
  //     try {
  //       const data = await useFetchBlog('/blog/list?format=json');
  //       setCardsData(data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   }

  //   fetchData();
  // }, []);



  // console.log(cardsData);

  return (
    <div className="col-span-2 flex flex-col gap-16">
      {cardsData?.map(({ title, description, thumbnail, slug, date} : { title: string, description: string | TrustedHTML, thumbnail: string, slug: string, date: string, file: string}, index: number) => (
        <PostCard
          slug={slug}
          key={index}
          image={thumbnail}
          date={date}
          title={title}
          description={description}
        />
      ))}
    </div>
  );
}
