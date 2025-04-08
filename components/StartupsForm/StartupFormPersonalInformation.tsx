import * as React from 'react';
import Input from '../common/form/Input';
import { PersonalInfoInput } from '../common/form/PersonalInfoInput';
import { useTranslation } from 'app/i18n/client';
import { useLang } from 'stores/langStore';
import Select from '../common/form/Select';

export default function StartupFormPersonalInformation({
  register,
  errors
}: {
  register: any;
  errors: any;
}) {
  const { lang } = useLang((s) => s);
  const { t } = useTranslation(lang, 'formComponent');
  return (
    <>
      <div className="mb-12 grid grid-cols-1 gap-x-6 gap-y-4 bg-[#F8F5F0] p-3 md:grid-cols-2 lg:grid-cols-3">
        <PersonalInfoInput
          register={register}
          errors={errors}
          nameInputs={{
            firstName: 'firstName',
            lastName: 'lastName',
            phoneNumber: '',
            email: 'email',
            jobPosition: ''
          }}
        />

        <Input
          register={register}
          errors={errors}
          nameInput="birthDate"
          type="date"
          label={t('birthDate')}
          required={t('birthDateRequired')}
          patternValue="(?:\d{1,2}[-/\s]\d{1,2}[-/\s]'?\d{2,4})|(?:\d{2,4}[-/\s]\d{1,2}[-/\s]\d{1,2})|(?:(?:January|February|March|April|May|June|July|August|September|October|November|December|Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sept|Sep|Oct|Nov|Dec)[\s-/,]*?\d{1,2}(?:\s)*(?:rd|th|st)?(?:\s)*[-/,]?(?:\s)*'?\d{2,4})|(?:\d{1,2}(?:\s)*(?:rd|th|st)?(?:\s)*(?:January|February|March|April|May|June|July|August|September|October|November|December|Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sept|Sep|Oct|Nov|Dec)(?:\s)*?[-/,]?(?:\s)*'?\d{2,4})"
          patternMessage={t('birthDateErrorMessage')}
          placeholder={t('birthDatePlaceholder')}
          className="input col-span-1 mb-1 mt-2 w-full bg-whiteGold dark:placeholder-[#9CA3AF]"
          labelClass=" dark:text-current"
        />

        <Select
          register={register}
          errors={errors}
          nameInput="countryOfResidence"
          label={t('countryOfResidence')}
          required={t('countryOfResidenceRequired')}
          labelClass=" dark:text-current"
          className="input col-span-1 mb-1 mt-3 w-full bg-whiteGold dark:placeholder-[#9CA3AF]"
          placeholder={t('countryOfResidencePlaceholder')}
          options={t('countries', { returnObjects: true })}
        />

        <Input
          register={register}
          errors={errors}
          nameInput="provinceOfResidence"
          type="text"
          label={t('provinceOfResidence')}
          required={t('provinceOfResidenceRequired')}
          patternValue=""
          patternMessage=""
          placeholder={t('provinceOfResidencePlaceholder')}
          className="input  col-span-1 bg-whiteGold mb-1 mt-3 w-full"
          labelClass=" dark:text-current"
        />
      </div>
    </>
  );
}
