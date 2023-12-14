'use client';
// import ButtonRefactor from '../common/ButtonRefactor';
import Button from '../common/Button';
import { useLang } from 'stores/langStore';
import { useRouter } from 'next/navigation';

export default function FeaturesCards({
  title,
  description,
  link
}: {
  title: string;
  description: string;
  link: string;
}) {
  const lang = useLang((s) => s.lang);
  const router = useRouter();

  const handleOnClick = () => {
    router.push(link);
  }

  return (
    <div className="flex flex-col justify-between bg-white  p-8 md:w-[580px]">
      <div className='flex flex-col'>
      <span className="font-gilda text-2xl text-primary">{title}</span>
      <p className="font-barlow text-base leading-7">{description}</p>
      </div>
      <Button
        goto={link}
        size="visit"
        text={lang === "en" ? "Register" : "ثبت نام"}
        addedClass="self-end"
        bgColor="Primary"
        onClick={handleOnClick}
        lang={lang}
      />
      {/* <ButtonRefactor text={lang === 'en' ? 'Register' : 'ثبت نام'} /> */}
    </div>
  );
}
