'use client'
// import HomeCardsLeft from './HomeCardsLeft';
// import HomeCardsRight from './HomeCardsRight';
import HomeCardsSection from './HomeCardsSection';
import { HomeCardsProps } from '@/types/global';

export default function HomeCards({
  titles,
  text,
  images,
  // reverse = false, // Added a default value for the "reverse" prop
  // addedClass,
  link,
  buttonText
}: HomeCardsProps) {
  // Determine the flex direction based on the "reverse" prop
  // const flexDirectionClass = reverse
  //   ? 'flex-col md:flex-row'
  //   : 'flex-col md:flex-row-reverse';

  return (
    // <div className="flex justify-center">

    // <div
    //   className={`${flexDirectionClass} flex items-center justify-between border-b-2 border-primary px-9 py-5 last:border-none md:border-none md:py-0`}
    // >
      
    //   {/* <HomeCardsLeft text={text} titles={titles} addedClass={addedClass} link={link} buttonText={buttonText} /> */}
    //   {/* <HomeCardsRight images={images} titles={titles} link={link} /> */}
    // </div>
    // </div>
    <div>
       <HomeCardsSection text={text} images={images} reverse={false} link={link} titles={titles} buttonText={buttonText}/>
    </div>
  );
}