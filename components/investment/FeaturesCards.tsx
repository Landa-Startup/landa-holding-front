'use client';
import { useSubmit } from 'providers/StateProvider';
import ButtonRefactor from '../common/ButtonRefactor';

export default function FeaturesCards({
  title,
  description
}: {
  title: string;
  description: string;
  link: string;
}) {
  const { lang } = useSubmit();
  // const router = useRouter();

  // const handleOnClick = () => {
  //   router.push(link);
  // }

  return (
    <div className="flex flex-col bg-white  p-8 md:w-[580px]">
      <span className="font-gilda text-2xl text-primary">{title}</span>
      <p className="font-barlow text-base leading-7">{description}</p>
      {/* <Button
        goto={link}
        size="visit"
        text={lang === "en" ? "Register" : "ثبت نام"}
        addedClass="self-end"
        bgColor="Primary"
        onClick={handleOnClick}
        lang={lang}
      /> */}
      <ButtonRefactor text={lang === 'en' ? 'Register' : 'ثبت نام'} />
    </div>
  );
}
