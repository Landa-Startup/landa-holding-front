import React from 'react';
import MagazineStartUpsCard from '../atoms/MagazineStartUpsCard';
export default function MagazineStartUps() {
  return (
    <div className="px-16">
      <div className="mx-auto">
        <h1 className="divide-y-7 text-slate-950 text-4xl text-center mt-5 mb-1 ">
          STARTUPS
        </h1>
      </div>
      <hr className="w-80 h-1 mx-auto mt-4 mb-9 bg-gray-200 border-0 dark:bg-gray-700"></hr>


      <MagazineStartUpsCard
        description="Quisque pretium fermentum quam, sit amet cursus ante sollicitudin vel. Morbi consequat risus consequat, porttitor orci sit amet, iaculis nisl. Integer quis sapien neceli ultrices euismod sit amet id lacus. Sed a imperdiet erat. Duis eu est dignissim lacus.."
        title="LANDA TRIP"
        image=""
      />
      <MagazineStartUpsCard
        description="Quisque pretium fermentum quam, sit amet cursus ante sollicitudin vel. Morbi consequat risus consequat, porttitor orci sit amet, iaculis nisl. Integer quis sapien neceli ultrices euismod sit amet id lacus. Sed a imperdiet erat. Duis eu est dignissim lacus.."
        title="DIACO"
        image="Rectangle 2878.png"
      />
      {/* TODO: add props for magazine startup card */}
    </div>
  );
}
