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
      className={`order-2   first:self-end md:order-1 md:mb-0 md:py-20 lg:mb-0 ${addedClass}`}
    >
      <div className="flex flex-col items-start justify-center ">
      <span className="lrt:tracking-[6.5px] font-gilda text-4xl md:text-6xl md:pb-8">
            {titles}
          </span>
        <p className="pb-20 text-justify font-EBGaramond text-base leading-[30px] first:mb-0 md:w-[721px] md:text-md">
          {text}
        </p>
        <div className='w-1/2 md:w-1/3'>
          <ButtonRefactor text={buttonText} type="link" href={link} />
        </div>
        {/* <Button
          goto={link}
          size='visit'
          bgColor='Primary'
        /> */}
      </div>
    </div>
  );
}
