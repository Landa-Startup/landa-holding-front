'use client'
import { HomeCardsLeftProps } from '../../types/global';
import ButtonRefactor from '../common/ButtonRefactor';

export default function HomeCardsLeft({
  text,
  addedClass,
  titles,
  link,
  buttonText
}: HomeCardsLeftProps) {
  return (
    <div
      className={`order-2 first:self-end md:order-1 md:mb-0 md:py-20 lg:mb-0 ${addedClass}`}
    >
<<<<<<< HEAD
      <div className="flex flex-col items-start justify-center">
        <span className="lrt:tracking-[6.5px] font-gilda text-4xl md:pb-8 md:text-6xl">
          {titles}
        </span>
        <p className="md:text-md pb-20 text-justify font-EBGaramond text-base leading-[30px] first:mb-0 md:w-full lg:w-3/4 xl:w-2/3">
=======
      <div className="flex flex-col items-start justify-center ">
      <span className="lrt:tracking-[6.5px] ltr:font-gilda rtl:font-EBGaramond text-4xl md:text-6xl md:pb-8">
            {titles}
          </span>
        <p className="pb-20 text-justify font-normal text-base leading-[30px] first:mb-0 md:w-[721px] md:text-md">
>>>>>>> 819fd83ed2c8524e7d61a233f9fb1783d4fc3b1d
          {text}
        </p>
        <div className='w-1/2 md:w-1/3'>
          <ButtonRefactor text={buttonText} type="link" href={link} />
        </div>
      </div>
    </div>
  );
}
