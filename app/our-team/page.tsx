import React from 'react';
import Banner from '@/components/molecules/Banner';
import PersonalTab from '@/components/atoms/cards/PersonalTab'


export default function page() {
  return (
    <div>
      {/* TODO: add props for this component */}
      <Banner
        image="/static/images/our-team/Frame2916.png "
        title="Our Team"
      />
      
      <div className='flex flex-row justify-between pr-36 pl-36 pt-12 pb-10 sm: gap-4 flex-wrap ' >
        <a href="#" className=' hover:bg-black border p-1'> Manager </a>
        <a href="#" className=' hover:bg-black border p-1'> Mentor </a>
        <a href="#" className=' hover:bg-black border p-1'> Programmer </a>
        <a href="#" className=' hover:bg-black border p-1'> Product Designer </a>
        <a href="#" className=' hover:bg-black border p-1'> Content Creator </a>
        <a href="#" className=' hover:bg-black border p-1'> Accountant </a>
        <a href="#" className=' hover:bg-black border p-1'> Public Relations Officer </a>
        <a href="#" className=' hover:bg-black border p-1'> Digital Marketer </a>


      </div>
      <div className="grid grid-cols-1 gap-4 pl-32 pr-32 pb-28 sm:grid-cols-2 md:grid-cols-3">
      <PersonalTab image='/static/images/our-team/Personals/EC2FE2AE-4C29-47CD-80BF-BE9C267C55B61.png'/>
      <PersonalTab image='/static/images/our-team/Personals/EC2FE2AE-4C29-47CD-80BF-BE9C267C55B61.png'/>
      <PersonalTab image='/static/images/our-team/Personals/EC2FE2AE-4C29-47CD-80BF-BE9C267C55B61.png'/>
      <PersonalTab image='/static/images/our-team/Personals/EC2FE2AE-4C29-47CD-80BF-BE9C267C55B61.png'/>
      <PersonalTab image='/static/images/our-team/Personals/EC2FE2AE-4C29-47CD-80BF-BE9C267C55B61.png'/>
      <PersonalTab image='/static/images/our-team/Personals/EC2FE2AE-4C29-47CD-80BF-BE9C267C55B61.png'/>
      <PersonalTab image='/static/images/our-team/Personals/EC2FE2AE-4C29-47CD-80BF-BE9C267C55B61.png'/>
      <PersonalTab image='/static/images/our-team/Personals/EC2FE2AE-4C29-47CD-80BF-BE9C267C55B61.png'/>
      <PersonalTab image='/static/images/our-team/Personals/EC2FE2AE-4C29-47CD-80BF-BE9C267C55B61.png'/>
      <PersonalTab image='/static/images/our-team/Personals/EC2FE2AE-4C29-47CD-80BF-BE9C267C55B61.png'/>


      </div>
    </div>
  );
}
