'use client';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
// import InvestorRegistrationTitle from './InvestorRegistrationTitle';
import { WorkWithUSFormData } from '../../types/global';
import NotificationSendForm from '../common/form/NotificationSendForm';
import GetCsrfToken from '../../utils/get-csrf-token';
import Input from '../common/form/Input';
import { initialWorkWithUSFormData } from '../../initials/initObjects';
import { submitWorkWithUsForm } from 'pages/api/work-with-us';
// import ButtonRefactor from '../common/ButtonRefactor';
import { useTranslation } from 'app/i18n/client';
import { useLang } from 'stores/langStore';
import { useSubmit } from 'stores/dataStore';
import Button from '../common/Button';
import Select from '../common/form/Select';

export default function WorkWithUs() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<WorkWithUSFormData>({
    mode: 'onBlur',
    defaultValues: initialWorkWithUSFormData
  });

  const lang = useLang((s) => s.lang);

  const { t } = useTranslation(lang, 'formComponent');

  enum Positions {
    Professor = t('workWithUS.Professor'),
    Student = t('workWithUS.student')
  }

  const PositionsItem = [Positions.Professor, Positions.Student];

  const PositionsData = PositionsItem.map((type: any) => ({
    value: type,
    label: type
  }));

  const [selectPosition, setSelectPosition] = useState('');

  const handleItemChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectPosition(event.target.value);
  };

  enum TypeOfContract {
    Hiring = t('workWithUS.hiring'),
    Intership = t('workWithUS.Internship'),
    UniversityIntership = t('workWithUS.UniversityInternship')
  }

  const TypeOfContractItem = [
    TypeOfContract.Hiring,
    TypeOfContract.Intership,
    TypeOfContract.UniversityIntership
  ];

  const TypeOfContractData = TypeOfContractItem.map((type: any) => ({
    value: type,
    label: type
  }));

  const [selectTypeOfContract, setSelectTypeOfContract] = useState('');

  const handleContractItemChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectTypeOfContract(event.target.value);
  };

  const {
    csrfToken,
    handleTokenChange,
    handleSubmitingChange,
    handleSendChange,
    handleNotifChange,
    handleSuccessChange
  } = useSubmit((s) => s);

  useEffect(() => {
    async function fetchCsrfToken() {
      const token = await GetCsrfToken(
        `${process.env.NEXT_PUBLIC_DJANGO_HOST_URL}/get-csrf-token`
      );
      handleTokenChange(token);
    }
    fetchCsrfToken();
  }, []);

  const onSubmit = async (formData: WorkWithUSFormData) => {
    // Set loading and sending states.
    handleSubmitingChange(true);
    handleSendChange(true);

    // Create a FormData object for form data.
    const sendFormData = new FormData();

    // Append all non-file form fields.
    Object.entries(formData).forEach(([fieldName, fieldValue]) => {
      if (typeof fieldValue !== 'object' || fieldValue === null) {
        sendFormData.append(fieldName, String(fieldValue));
      }
    });

    // Send the form data to the API.
    submitWorkWithUsForm(sendFormData, csrfToken)
      .then(() => {
        handleSuccessChange(true);
        handleNotifChange(true);
        handleSendChange(false);
        reset(initialWorkWithUSFormData); // Country does not reset
        setTimeout(() => {
          handleNotifChange(false);
        }, 10000); // 10 seconds in milliseconds
      })
      .catch(() => {
        handleSuccessChange(true);
        handleNotifChange(false);
        handleSendChange(false);
        reset(initialWorkWithUSFormData);

        setTimeout(() => {
          handleNotifChange(false);
        }, 10000); // 10 seconds in milliseconds
      });
  };

  // const errorsList = Object.entries(errors).map(([name, value]) => ({
  //   name: name,
  //   value: value
  // }))

  return (
    <>
      <div className="container m-[-1rem] mx-auto my-20 gap-y-0 px-5 font-barlow lg:p-20">
        <div className="bg-[#F8F5F0] py-10">
          <h3 className="text-center text-2xl md:text-3xl">
            {t('workWithUS', { returnObjects: true }).formTitle}
          </h3>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
          <div className="grid grid-cols-1 gap-x-6 bg-[#F8F5F0] p-4 md:grid-cols-2 lg:grid-cols-3">
            <Select
              register={register}
              errors={errors}
              nameInput="statusSelect"
              label={
                t('workWithUS', { returnObjects: true }).PositionPlaceholder
              }
              required=""
              className="select select-bordered mt-4 w-full max-w-xs px-8"
              labelClass="text-[#6b6b6b] dark:text-current"
              placeholder={
                t('workWithUS', { returnObjects: true }).PositionPlaceholder
              }
              options={PositionsData}
              handleChange={handleItemChange}
              selected={selectPosition}
            />

            <Select
              register={register}
              errors={errors}
              nameInput="statusSelect"
              label={
                t('workWithUS', { returnObjects: true }).contractPlaceholder
              }
              required=""
              className="select select-bordered mt-4 w-full max-w-xs px-8"
              labelClass="text-[#6b6b6b] dark:text-current"
              placeholder={
                t('workWithUS', { returnObjects: true }).contractPlaceholder
              }
              options={TypeOfContractData}
              handleChange={handleContractItemChange}
              selected={selectTypeOfContract}
            />
          </div>
          {/* next line */}
          <div className="border-b-2 bg-[#F8F5F0] border-black">
            <p className="text-2xl py-3 px-5 md:text-3xl">
              {t('workWithUS', { returnObjects: true }).formSubtitleTop}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-x-6 bg-[#F8F5F0] p-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="col-span-1">
              <Input
                register={register}
                errors={errors}
                nameInput="your_first_name"
                type="text"
                label={t('firstName')}
                required={t('firstNameRequired')}
                placeholder={t('firstNamePlaceholder')}
                className="input input-bordered col-span-1 mb-1 mt-3 w-full placeholder-[#b2b1b0] drop-shadow-lg dark:placeholder-[#9CA3AF]"
                labelClass="text-[#6b6b6b] dark:text-current"
                patternValue=""
                patternMessage=""
              />
            </div>
            <div className="col-span-1">
              <Input
                register={register}
                errors={errors}
                nameInput="your_first_name"
                type="text"
                label={t('lastName')}
                required={t('lastNameRequired')}
                placeholder={t('lastNamePlaceholder')}
                className="input input-bordered col-span-1 mb-1 mt-3 w-full placeholder-[#b2b1b0] drop-shadow-lg dark:placeholder-[#9CA3AF]"
                labelClass="text-[#6b6b6b] dark:text-current"
                patternValue=""
                patternMessage=""
              />
            </div>
            <div className="col-span-1">
              <Input
                register={register}
                errors={errors}
                nameInput="Your_national_id_number"
                type="text"
                label={
                  t('workWithUS', { returnObjects: true }).NationalIDNumber
                }
                required={
                  t('workWithUS', { returnObjects: true })
                    .NationalIDNumberRequired
                }
                patternValue=""
                patternMessage=""
                placeholder={
                  t('workWithUS', { returnObjects: true })
                    .NationalIDNumberPlaceholder
                }
                className="input input-bordered col-span-1 mb-1 mt-3 w-full placeholder-[#b2b1b0] drop-shadow-md dark:placeholder-[#9CA3AF]"
                labelClass="text-[#6b6b6b]"
              />
            </div>
            <div className="col-span-1">
              <Input
                register={register}
                errors={errors}
                nameInput="phone"
                type="text"
                label={t('phoneNumber')}
                required={t('phoneNumberRequired')}
                patternValue="^[0-9]{11}$"
                patternMessage={t('phoneNumberErrorMessage')}
                placeholder={t('phoneNumberPlaceholder')}
                className="input input-bordered col-span-1 mb-1 mt-3 w-full placeholder-[#b2b1b0] drop-shadow-md dark:placeholder-[#9CA3AF]"
                labelClass="text-[#6b6b6b]"
              />
            </div>
          </div>
          {/* next line */}
          <div className="border-b-2 bg-[#F8F5F0] border-black">
            <p className="text-2xl py-3 px-5 md:text-3xl">
              {t('workWithUS', { returnObjects: true }).formSubtitleBottom}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-x-6 bg-[#F8F5F0] p-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="col-span-1">
              <Input
                register={register}
                errors={errors}
                nameInput="your_first_name"
                type="text"
                label={t('workWithUS', { returnObjects: true }).StudyField}
                required={
                  t('workWithUS', { returnObjects: true }).StudyFieldRequired
                }
                placeholder={
                  t('workWithUS', { returnObjects: true }).StudyFieldPlaceholder
                }
                className="input input-bordered col-span-1 mb-1 mt-3 w-full placeholder-[#b2b1b0] drop-shadow-lg dark:placeholder-[#9CA3AF]"
                labelClass="text-[#6b6b6b] dark:text-current"
                patternValue=""
                patternMessage=""
              />
            </div>
            <div className="col-span-1">
              <Input
                register={register}
                errors={errors}
                nameInput="your_first_name"
                type="text"
                label={t('workWithUS', { returnObjects: true }).StudySubField}
                required={
                  t('workWithUS', { returnObjects: true }).StudySubFieldRequired
                }
                placeholder={
                  t('workWithUS', { returnObjects: true })
                    .StudySubFieldPlaceholder
                }
                className="input input-bordered col-span-1 mb-1 mt-3 w-full placeholder-[#b2b1b0] drop-shadow-lg dark:placeholder-[#9CA3AF]"
                labelClass="text-[#6b6b6b] dark:text-current"
                patternValue=""
                patternMessage=""
              />
            </div>
          </div>
          <div className="mx-auto w-full pb-4 md:w-auto">
            {/* <ButtonRefactor type="submit" text={t('sendButton')} disabled={errorsList[0] ? true : false}/> */}
            <Button type="submit" bgColor="Primary" />
          </div>
        </form>
        <NotificationSendForm />
      </div>
    </>
  );
}
