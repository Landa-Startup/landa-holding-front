import React from 'react';
import Image from 'next/image';
import MagazineModernPostCard from './cards/MagazineModernPostCard';
import MagazineModernPostCard2 from './cards/MagazineModernPostCard2';
import MagazineModernPostCard3 from './cards/MagazineModernPostCard3';
import MagazineModernPostBottomSpace from './MagazineModernPostBottomSpace';

export default function MagazineModernPost() {
  return (
    <div>
      <div className="mx-auto">
        <h2 className="divide-y-8 text-slate-950 text-4xl text-left mt-5 ml-20 px-16">
          MODERN POST
        </h2>
      </div>
      <div className="mx-auto">
        <h3 className="text-slate-950 text-1xl text-left mt-5 px-36 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          commodi iste nobis est voluptatem voluptates ratione provident eos
          culpa, neque unde ab minima harum! Autem veniam similique laboriosam
          dolorem mollitia.
        </h3>
      </div>
      <MagazineModernPostCard />
      <hr className="h-0.5 mt-4 mb-9 mr-64 bg-gray-100 border-0 dark:bg-gray-700"></hr>
      <MagazineModernPostCard2 />
      <hr className="h-0.5 mt-4 mr-64 mb-9 bg-gray-100 border-0 dark:bg-gray-700"></hr>
      <MagazineModernPostCard3 />
      <hr className="h-0.5 mt-4 mr-64 mb-9 bg-gray-100 border-0 dark:bg-gray-700"></hr>
      <div className="mx-auto">
        <h3 className="text-slate-950 text-3xl text-left text-bold mt-5 px-24 mb-6 text-justify">
          12 DECEMBER 2022
        </h3>
      </div>
      <MagazineModernPostBottomSpace />
    </div>
  );
}
