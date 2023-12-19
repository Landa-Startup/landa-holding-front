// import AboutusPersonalTabs from './AboutusPersonalTabs';
import { useTranslation } from 'app/i18n';
import { useLang } from 'stores/langStore';

export default async function AboutUsProfile() {

  const lang = useLang.getState().lang
  const { t } = await useTranslation(lang, "aboutUs");

  return (
    <div className="mb-10 flex w-full flex-col justify-center bg-[#FAFAFA]">
      <div className="m-auto flex w-5/6 flex-col justify-center px-4 py-10">
        <div
          className='flex flex-col justify-items-center py-5 text-black rtl:mr-10 lg:ml-64'
        >
          <h2 className="tracking-0 font-condensed text-xl font-normal leading-normal ltr:tracking-widest md:text-2xl">
            {t('professionals')}
          </h2>
          <h1 className="rtl:tracking-0 font-gilda text-3xl  font-normal leading-normal md:text-4xl">
            {t("boardOfDirectors")}
          </h1>
        </div>

        <div className="mb-8 flex flex-col justify-between gap-24 md:flex-row md:gap-10">
          {/* TODO: complete this section */}
          {/* {t('boardMemebers', { returnObjects: true }).map(({ name, image, links, position }: { name: string; image: string; links: object, position: string }, index: number) => (
            <AboutusPersonalTabs
              key={index}
              image={image}
              name={name}
              position={position}
              linkedIn={links.linkedin}
              email={links.email}
              website={links.website}
              instagram={links.instagram}
            />
          ))} */}

        </div>
      </div>
    </div>
  );
}
