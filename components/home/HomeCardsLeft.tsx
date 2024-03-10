'use client'
import { HomeCardsLeftProps } from '../../types/global';
import ButtonRefactor from '../common/ButtonRefactor';
// import Button from '../common/Button';

export default function HomeCardsLeft({
  text,
  addedClass,
  link,
  buttonText
}: HomeCardsLeftProps) {


  return (
    <div
      className={`order-2 mt-3 first:self-end md:order-1 md:mb-0 md:py-32 lg:mb-0 ${addedClass}`}
    >
      <div className="flex flex-col items-center justify-center ">
        <p className="my-8 md:my-16 pb-14 text-justify font-barlow text-base leading-[30px] first:mb-0 md:w-[491px] md:text-xl">
          {text}
        </p>
        <ButtonRefactor text={buttonText} type="link" href={link} />
        {/* <Button
          goto={link}
          size='visit'
          bgColor='Primary'
        /> */}
      </div>
    </div>
  );
}
