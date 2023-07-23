import React from 'react';
import Image from 'next/image';
export default function MagazineStartUpsCard() {
  return (
    <div className='mb-16'>
      <div className="flex justify-center">
        <Image
          className=""
          src={'/static/images/startups.png'}
          alt="Landa"
          width={500}
          height={500}
        />
      </div>
      <div className="flex justify-start">
        <h2 className="text-slate-950 text-2xl text-bold mt-8">
          12 DECEMBER 2022
        </h2>
      </div>
      <div className="flex justify-start">
        <p className="text-justify text-slate-950 text-bold">
          Quisque pretium fermentum quam, sit amet cursus ante sollicitudin vel.
          Morbi consequat risus consequat, porttitor orci sit amet, iaculis
          nisl. Integer quis sapien neceli ultrices euismod sit amet id lacus.
          Sed a imperdiet erat. Duis eu est dignissim lacus...
        </p>
      </div>
    </div>
  );
}
