'use client'
import HomeCardsLeft from './HomeCardsLeft';
import HomeCardsRight from './HomeCardsRight';
import { HomeCardsProps } from '@/types/global';

export default async function HomeCards({
  titles,
  text,
  images,
  addedClass,
  link
}: HomeCardsProps) {

  return (
    <div
      className={`relative flex flex-col items-center justify-between border-b-2 border-primary px-9 py-5 last:border-none md:border-none md:p-28 ltr:md:flex-row rtl:md:flex-row-reverse`}
    >
      <HomeCardsLeft text={text} addedClass={addedClass} link={link} />
      <HomeCardsRight images={images} titles={titles} link={link} />
    </div>
  );
}
