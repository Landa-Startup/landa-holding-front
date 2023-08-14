import React from 'react'
import IconMore from '@/components/atoms/IconMore'
function AboutUsCooperation() {
  return (
    <div className='h-[589px] bg-neutral-800 text-white'>
      <div className='text-center'>
        <p className='mt-10 text-center text-xl shrink-0 not-italic	font-normal	leading-normal   font-gilda '>L&nbsp;A&nbsp;N&nbsp;D&nbsp;A&nbsp;&nbsp;&nbsp;H&nbsp;O&nbsp;L&nbsp;D&nbsp;I&nbsp;N&nbsp;G </p>
        <p className=' text-5xl shrink-0 not-italic	font-normal	leading-normal font-gilda'> Cooperation </p>

      </div>
      <div className='flex flex-col'>
        <div className='flex flex-col'>
          <p className='font-barlow 	not-italicfont-semibold leading-6 text-xl'>Investment Center</p>
          <p className='	font-gilda 	not-italicfont-semibold leading-6	'><br />  Landa Investors Association is composed of a group of<br /> individuals active in the field of investment who collaborate<br /> with each other based on their investment priorities and invest<br /> in startups and new businesses.<br />If you are also interested in investing in new and innovative<br /> businesses and increasing your capital in the most modern<br /> way, we have provided an opportunity for you.</p>
          <div>
            <IconMore />
          </div>
          {/* <button className="  justify-start items-center gap-4 inline-flex ">
            <p className="text-stone-100 text-3xl font-normal leading-6 tracking-wider font-condensed ">
              More
            </p>
            <div className="justify-start items-start gap-2.5 flex ">
              <div className="w-10 h-10 border border-stone-100" />
              <IconMore />
            </div>
          </button> */}
        </div>
        <div className='flex flex-col'>
          <p>Invesment Center</p>
          <p>Invesment Center Invesment CenterInvesment CenterInvesment CenterInvesment CenterInvesment Center</p>
        </div>
      </div>
    </div>
  )
}

export default AboutUsCooperation;