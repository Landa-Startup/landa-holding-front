import React from 'react'

function AboutUsCooperation() {
  return (
    <div className='h-[589px] relative bg-neutral-800 text-white'>
       <div className='grid auto-cols-auto text-center  '>
        <p className='mt-10 text-center text-xl shrink-0 not-italic	font-normal	leading-normal   font-gilda '>L&nbsp;A&nbsp;N&nbsp;D&nbsp;A&nbsp;&nbsp;&nbsp;H&nbsp;O&nbsp;L&nbsp;D&nbsp;I&nbsp;N&nbsp;G </p>
        <p className=' text-5xl shrink-0 not-italic	font-normal	leading-normal font-gilda'> Cooperation </p>
      </div> 
      <div className='grid auto-cols-auto	 mr-[644px] mt-[30px]'>
        <p className='-mb-4 shrink-0 text-center	font-barlow 	not-italicfont-semibold leading-6 text-xl'>Investment CenterThe</p> 
        <p className='  shrink-0 text-center	font-gilda 	not-italicfont-semibold leading-6	'><br />  Landa Investors Association is composed of a group of<br /> individuals active in the field of investment who collaborate<br /> with each other based on their investment priorities and invest<br /> in startups and new businesses.<br />If you are also interested in investing in new and innovative<br /> businesses and increasing your capital in the most modern<br /> way, we have provided an opportunity for you.</p>
        </div> 
      <div className='grid auto-cols-auto ml-[550px] -mt-[193px] '>
        <p className='shrink-0 text-center	font-barlow 	not-italicfont-semibold leading-6 -mb-4  text-xl'>Entrepreneur Center</p>
        <p className='  shrink-0 text-center	font-gilda 	not-italicfont-semibold leading-6	'><br /> The Entrepreneur Center is a community of active individuals<br /> in the field of business and entrepreneurship who form a<br /> dynamic and powerful technological ecosystem together.<br />If you also have an interest in building a business or possess<br /> special skills, join us by completing the Entrepreneur<br /> Membership form.</p> 

      </div> 
      <div >
        <button className="ml-[285px] mt-[57.5px] absolute justify-start items-center gap-4 inline-flex ">
          <div className="text-stone-100 text-3xl font-normal leading-6 tracking-wider font-condensed ">
            More
          </div>
          <div className="justify-start items-start gap-2.5 flex ">
            <div className="w-10 h-10 border border-stone-100" />
            <svg
              className="absolute text-white "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        </button>
        <button className="ml-[905px] mt-[57.5px] absolute justify-start items-center gap-4 inline-flex ">
          <div className="text-stone-100 text-3xl font-normal leading-6 tracking-wider font-condensed">
            More
          </div>
          <div className="justify-start items-start gap-2.5 flex">
            <div className="w-10 h-10 border border-stone-100" />
            <svg
              className="absolute text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        </button>

      </div>
    </div>  )
}

export default AboutUsCooperation;