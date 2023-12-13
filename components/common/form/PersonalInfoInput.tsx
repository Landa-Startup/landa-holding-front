import React from 'react'
import Input from '../../common/form/Input';
import { useTranslation } from 'app/i18n/client';
import { useLang } from 'store';

type Props = {
  register: any;
  errors: any;
  nameInputs?: {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
  };
  noLabel?: boolean;
};

const PersonalInfoInput = ({
  register,
  errors,
  nameInputs,
  noLabel
}: Props) => {
  const { lang } = useLang((s) => s)

  const { t } = useTranslation(lang, 'formComponent');
  return (
    <>
      {nameInputs?.firstName && (
        <div className="col-span-1 w-full">
          {noLabel ? 
            <Input
              register={register}
              errors={errors}
              nameInput={nameInputs.firstName}
              type="text"
              required={t('firstNameRequired')}
              patternValue=""
              patternMessage=""
              placeholder={t('firstNamePlaceholder')}
              className="input input-bordered col-span-1 mb-1 mt-3 w-full placeholder-[#b2b1b0] drop-shadow-lg dark:placeholder-[#9CA3AF]"
            />
            :
            <Input
              register={register}
              errors={errors}
              nameInput={nameInputs.firstName}
              type="text"
              label={t('firstName')}
              required={t('firstNameRequired')}
              patternValue=""
              patternMessage=""
              placeholder={t('firstNamePlaceholder')}
              className="input input-bordered col-span-1 mb-1 mt-3 w-full placeholder-[#b2b1b0] drop-shadow-lg dark:placeholder-[#9CA3AF]"
              labelClass="text-[#6b6b6b] dark:text-current"
            />
          }
        </div>)}

      {nameInputs?.lastName && (
        <div className="col-span-1 w-full">
          {noLabel ? 
          <Input
            register={register}
            errors={errors}
            nameInput={nameInputs.lastName}
            type="text"
            required={t('lastNameRequired')}
            patternValue=""
            patternMessage=""
            placeholder={t('lastNamePlaceholder')}
            className="input input-bordered col-span-1 mb-1 mt-3 w-full placeholder-[#b2b1b0] drop-shadow-lg dark:placeholder-[#9CA3AF]"
          />
            :
          <Input
            register={register}
            errors={errors}
            nameInput={nameInputs.lastName}
            type="text"
            label={t('lastName')}
            required={t('lastNameRequired')}
            patternValue=""
            patternMessage=""
            placeholder={t('lastNamePlaceholder')}
            className="input input-bordered col-span-1 mb-1 mt-3 w-full placeholder-[#b2b1b0] drop-shadow-lg dark:placeholder-[#9CA3AF]"
            labelClass="text-[#6b6b6b] dark:text-current"
          />
          }
        </div>)}

      {nameInputs?.email && (
        <div className="col-span-1 w-full">
          {noLabel ? 
          <Input
            register={register}
            errors={errors}
            nameInput={nameInputs.email}
            type="email"
            required={t('emailRequired')}
            patternValue="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
            patternMessage={t('emailErrorMessage')}
            placeholder={t('EmailPlaceholder')}
            className="input input-bordered col-span-1 mb-1 mt-3 w-full placeholder-[#b2b1b0] drop-shadow-lg dark:placeholder-[#9CA3AF]"
          />
            :
          <Input
            register={register}
            errors={errors}
            nameInput={nameInputs.email}
            type="email"
            label={t('email')}
            required={t('emailRequired')}
            patternValue="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
            patternMessage={t('emailErrorMessage')}
            placeholder={t('EmailPlaceholder')}
            className="input input-bordered col-span-1 mb-1 mt-3 w-full placeholder-[#b2b1b0] drop-shadow-lg dark:placeholder-[#9CA3AF]"
            labelClass="text-[#6b6b6b] dark:text-current"
          />
          }
        </div>)}

      {nameInputs?.phoneNumber && (
        <div className="col-span-1 w-full">
          {noLabel ? 
          <Input
            register={register}
            errors={errors}
            nameInput={nameInputs.phoneNumber}
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
            nameInput={nameInputs.phoneNumber}
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
        </div>)}
    </>
  )
}

export {
    PersonalInfoInput
}