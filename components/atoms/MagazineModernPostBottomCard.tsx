import React from 'react';
import Image from 'next/image';
export default function MagazineModernPostBottomCard({
  image,
  description,
}: {
  image: string;
  description: string;
}) {
  return (
    <div className='mb-1 px-4'>
      <div className="flex justify-center">
        <Image
          className=""
          src={'/static/images/Rectangle 2882.png'}
          alt="Landa"
          width={330}
          height={430}
        />
      </div>
      <div className="flex justify-start mt-3 mb-3">
        <p className="text-justify text-slate-950 text-bold px-6">
          Quisque pretium fermentum quam, sit amet cursus ante sollicitudin vel.
          Morbi consequat risus consequat, porttitor orci sit amet, iaculis
          nisl. Integer quis sapien neceli ultrices euismod sit amet id lacus.
          Sed a imperdiet erat. Duis eu est dignissim lacus...
        </p>
      </div>
    </div>
  );
}
