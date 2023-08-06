import React from 'react'
import Image from 'next/image'
export default function MagazineModernPostCard() {
  return (
    <div className='px-16'>
      <div className='mb-8 mx-20 py-10'>
      <div className="flex flex-col justify-center">
        <Image
          className=""
          src={'/static/images/Rectangle 2880.png'}
          alt="Landa"
          width={800}
          height={300}
        />
      </div>
      <div className="flex flex-col justify-start">
        <h2 className="text-slate-950 text-2xl text-bold mt-5">
          12 DECEMBER 2022
        </h2>
        <h2 className="text-yellow-600 text-2xl text-bold mt-1">
          Newspaper create with a hobby
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
    </div>
  )
}
