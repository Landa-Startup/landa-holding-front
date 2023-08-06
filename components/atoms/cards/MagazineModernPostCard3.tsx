import React from 'react'
import Image from 'next/image'
export default function MagazineModernPostCard3() {
  return (
    <div className='px-16'>
      <div className='mb-16 mx-20 py-4'>
      <div className="flex flex-col justify-start">
        <h2 className="text-slate-950 text-2xl text-bold mt-1">
          12 DECEMBER 2022
        </h2>
        <br />
        <h2 className="text-yellow-600 text-2xl text-bold mt-1">
        Newspaper create with a hobby
        </h2>
      </div>
      <div className="flex flex-col justify-start">
        <p className="text-justify my-5 text-slate-950 text-bold">
          Quisque pretium fermentum quam, sit amet cursus ante sollicitudin vel.
          Morbi consequat risus consequat, porttitor orci sit amet, iaculis
          nisl. Integer quis sapien neceli ultrices euismod sit amet id lacus.
          Sed a imperdiet erat. Duis eu est dignissim lacus...
        </p>

        <p className="text-justify my-5 text-slate-950 text-bold">
          Quisque pretium fermentum quam, sit amet cursus ante sollicitudin vel.
          Morbi consequat risus consequat, porttitor orci sit amet, iaculis
          nisl. Integer quis sapien neceli ultrices euismod sit amet id lacus.
          Sed a imperdiet erat. Duis eu est dignissim lacus...
        </p>
        <div className="flex flex-col justify-center">
        <Image
          className=""
          src={'/static/images/Rectangle 2880.png'}
          alt="Landa"
          width={800}
          height={300}
        />
        <div className="mt-3 text-slate-950 px-4">
          <ul className='list-disc'>
            <li className='my-2'>this is item of this list for example</li>
            <li className='my-2'>this is item of this list for example</li>
            <li className='my-2'>this is item of this list for example</li>
            <li className='my-2'>this is item of this list for example</li>
          </ul>
        </div>
      </div>
      </div>
    </div>
    </div>
  )
}
