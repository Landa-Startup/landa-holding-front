import React from 'react'

export default function AboutUsProfileCardTwo({ image, title, description }: { image: string, title: string, description: string }): JSX.Element {
  return (
    <div>
      <img
        className="w-[390px] h-[400px] shrink-0"
        src={image}
      ></img>
      <p className="text-black font-Gilda Display text-2xl not-italic	font-normal	leading-normal ml-[140px] mt-6	 ">
        {title}
      </p>
      <p className="text-black font-Gilda Display text-sm	 not-italic	font-normal	leading-normal  ml-[110px]	 ">
       {description}
      </p>
    </div>
  );
}
