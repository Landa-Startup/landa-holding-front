import React from 'react'
import Input from '@/components/common/form/Input';
import { useTranslation } from 'app/i18n/client';
import { useLang } from 'stores/langStore';

type Props = {
  register: any;
  errors: any;
  nameInputs?: {
    full_name: string;
    phone_number: string;
  };
  noLabel?: boolean;
};

const LandaGeneInput = ({
  register,
  errors,
  nameInputs,
  noLabel
}: Props) =>{
  const { lang } = useLang((s) => s)

  const { t } = useTranslation(lang, 'landaGene');
  return (
    <>
      {nameInputs?.full_name && (
        <div className="col-span-1 w-full">
          {noLabel ?
            <Input
              register={register}
              errors={errors}
              nameInput={nameInputs.full_name}
              type="text"
              required={t('fullNameRequired')}
              patternValue=""
              patternMessage=""
              placeholder={t('fullNamePlaceholder')}
              className="input input-bordered col-span-1 mb-1 mt-3 w-full placeholder-[#b2b1b0] drop-shadow-lg dark:placeholder-[#9CA3AF]"
            />
            :
            <Input
              register={register}
              errors={errors}
              nameInput={nameInputs.full_name}
              type="text"
              label={t('fullName')}
              required={t('fullNameRequired')}
              patternValue=""
              patternMessage=""
              placeholder={t('fullNamePlaceholder')}
              className="input input-bordered col-span-1 mb-1 mt-3 w-full placeholder-[#b2b1b0] drop-shadow-lg dark:placeholder-[#9CA3AF]"
              labelClass="text-[#6b6b6b] dark:text-current"
            />
          }
        </div>)
      }

      {nameInputs?.phone_number && (
        <div className="col-span-1 w-full">
          {noLabel ?
          <Input
            register={register}
            errors={errors}
            nameInput={nameInputs.phone_number}
            type="text"
            required={t('phoneNumberRequired')}
            patternValue="^[0-9]{11}$"
            patternMessage={t('phoneNumberErrorMessage')}
            placeholder={t('phoneNumberPlaceholder')}
            className="input input-bordered col-span-1 mb-1 mt-3 w-full placeholder-[#b2b1b0] drop-shadow-lg dark:placeholder-[#9CA3AF]"
          />
            :
          <Input
            register={register}
            errors={errors}
            nameInput={nameInputs.phone_number}
            type="text"
            label={t('phoneNumber')}
            required={t('phoneNumberRequired')}
            patternValue="^[0-9]{11}$"
            patternMessage={t('phoneNumberErrorMessage')}
            placeholder={t('phoneNumberPlaceholder')}
            className="input input-bordered col-span-1 mb-1 mt-3 w-full placeholder-[#b2b1b0] drop-shadow-lg dark:placeholder-[#9CA3AF]"
            labelClass="text-[#6b6b6b] dark:text-current"
          />
          }
        </div>)
      }
    </>
  )
}

export {
  LandaGeneInput
}