import Phone from '../icons/IconPhone';
import Email from '../icons/IconEmail';
import Location from '../icons/IconLocation';
import Link from 'next/link';
import IconLinkedinB from '../icons/IconLinkedinB';
import IconEmailB from '../icons/IconEmailB';
import { useTranslation } from 'app/i18n';
import { useLang } from 'stores/langStore';
import InstagramIconNew from '../icons/socialMediaIcons/InstagramIconNew';
import WhatsappIconNew from '../icons/socialMediaIcons/WhatsappIconNew';
export default async function ContactUsDescription() {
  const lang = useLang.getState().lang;

  const { t } = await useTranslation(lang, 'contact');

  return (
    <div className="h-full">
      <div className="mb-5 mt-10 flex flex-col items-center md:my-0 md:w-[464px] md:items-start">
        <h1 className="font-gilda text-4xl font-light md:text-5xl">
          {t('LandaHolding')}
        </h1>
        <p className="my-5 text-justify text-base">{t('text')}</p>
      </div>
      {/* TODO: make code more modular with new components */}
      {/* TODO: avoid hardcode links and urls */}
      <div className="flex flex-row gap-3">
        <Link
          href={'https://instagram.com/landa_holding?igshid=YTQwZjQ0NmI0OA=='}
          target="_blank"
        >
          <InstagramIconNew
            className="bi bi-instagram"
            width="28"
            height="28"
          />
        </Link>
        <Link href={'https://wa.me/989120539563'} target="_blank">
          <WhatsappIconNew className="bi bi-whatsapp" width="28" height="28" />
        </Link>
        <Link href={'mailto:info@landaholding.com'}>
          <IconEmailB />
        </Link>
        <Link
          href={'https://www.linkedin.com/company/landa-startup-inc'}
          target="_blank"
        >
          <IconLinkedinB />
        </Link>
      </div>
      {/* TODO: use translation instead hardcode */}
      <div className={`mt-10 flex flex-col gap-4`}>
        <div className="flex gap-5">
          <Phone />
          <div className="mb-5 flex flex-col ltr:text-left rtl:text-right">
            <span className="font-semibold">{t('phone')}</span>
            <ul className="gap-1">
              {/* TODO: create component for below icons */}
              <li>
                <Link href="tel:+14165577622">
                  <span>{lang === 'en' ? 'Toronto: ' : 'تورنتو: '}</span>
                  <span dir="ltr" className="text-[#AA8453]">
                    {t('addresses', { returnObjects: true }).cNumber}
                  </span>
                </Link>
              </li>
              <li>
                <Link href="tel:+14165577622">
                  <span>{lang === 'en' ? 'Tehran: ' : 'تهران: '}</span>
                  <span dir="ltr" className="text-[#AA8453]">
                    {t('addresses', { returnObjects: true }).tNumber}
                  </span>
                </Link>
              </li>
              <li>
                <Link href="tel:+14165577622">
                  <span>{lang === 'en' ? 'Isfahan: ' : 'اصفهان: '}</span>
                  <span dir="ltr" className="text-[#AA8453]">
                    {t('addresses', { returnObjects: true }).iNumber}
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* TODO: Separate component for email information */}
        <div className="flex gap-5">
          <Email />
          <ul>
            <li className="font-semibold ltr:text-left rtl:text-right">
              {t('email')}
            </li>
            <li>
              <a
                className="rtl-text-right text-[#AA8453] ltr:text-left"
                href="mailto:info@landaholding.com"
              >
                info@landaholding.com
              </a>
            </li>
          </ul>
        </div>
        {/* TODO: Separate component for location information */}
        <div className="flex gap-5">
          <Location />
          <div className="ml-2 flex flex-col ltr:text-left rtl:text-right">
            <span className="font-semibold">{t('address')}</span>
            <ul className="mx-4 list-disc space-y-3">
              <li>{t('addresses', { returnObjects: true }).canada}</li>
              <li>{t('addresses', { returnObjects: true }).tehran}</li>
              <li>{t('addresses', { returnObjects: true }).isfahan}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
