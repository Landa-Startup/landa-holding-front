import React from 'react'
import MagazineStartUpsCard from './MagazineStartUpsCard'
export default function MagazineStartUps() {
  return (
    <div className='px-16'>
        <div className='mx-auto'><h1 className='divide-y-7 text-slate-950 text-5xl text-center mt-5 mb-1 '>STARTUPS</h1></div>
        <hr className="h-px mt-4 mb-9 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <MagazineStartUpsCard/>
        <MagazineStartUpsCard/>
        {/* TODO: add props for magazine startup card */}




    </div>
  )
}
