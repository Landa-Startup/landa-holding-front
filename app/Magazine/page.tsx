import React from 'react'
import LandaMagazine from '@/components/LandaMagazine'
import LandaMagazineCard from '@/components/LandaMagazineCard'
import MagazineStartUps from '@/components/MagazineStartUps'
import Hero from '@/components/Hero'
import MagazineModernPost from '@/components/MagazineModernPost'
import Footer from '@/components/Footer'


export default function page() {
  return (
  <div>
    <Hero/>
    <div className='grid grid-row w-screen'>
      <div className='grid grid-cols-3 divide-x-8 divide-red-900 h-[884px] bg-neutral-500'>
        <div className='bg-neutral-100'><MagazineStartUps/></div>
        <div className='col-span-2 bg-neutral-800'>
          <MagazineModernPost/>
        </div>  

      </div>


    </div>
  
  </div>
  )
}
