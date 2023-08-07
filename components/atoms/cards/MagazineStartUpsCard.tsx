import React from 'react';
import Image from 'next/image';
export default function MagazineStartUpsCard({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mb-16">
      <div className="flex justify-center">
        <Image
          className=""
          src={'/static/images/Magazine/StartUps/camera.png'}
          alt="Landa"
          width={320}
          height={420}
        />
      </div>
      <div className="flex flex-col justify-start px-20">
        <h2 className="mt-4 text-2xl text-slate-950 text-bold">
          12 DECEMBER 2022
        </h2>

        <h2 className="mt-1 mb-6 text-2xl text-yellow-600 text-bold">
          LANDA TRIP
        </h2>
      </div>
      <div className="flex justify-start px-20">
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
