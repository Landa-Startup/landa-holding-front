'use client';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { WorkWithUSFormData } from '../../types/global';
import NotificationSendForm from '../common/form/NotificationSendForm';
import GetCsrfToken from '../../utils/get-csrf-token';
import Input from '../common/form/Input';
import { initialWorkWithUSFormData } from '../../initials/initObjects';
import { submitWorkWithUsForm } from 'pages/api/work-with-us';
import { useTranslation } from 'app/i18n/client';
import { useLang } from 'stores/langStore';
import { useSubmit } from 'stores/dataStore';
import Button from '../common/Button';
import Select from '../common/form/Select';
import { useFile } from 'stores/fileStore';
import UploadInput from '../common/UploadInput';

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

  const { cvFileState, handleCvFileChange } = useFile((s) => s);

  const PositionsItem = [Positions.Professor, Positions.Student];

  const PositionsData = PositionsItem.map((type: any) => ({
    value: type,
    label: type
  }));

  const [selectPosition, setSelectPosition] = useState('');

  const [cvFileRequired, setCvFileRequired] = useState('');

  const handleItemChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectPosition(event.target.value);
    if (event.target.value == 'Professor') {
      setCvFileRequired(
        t('workWithUS', { returnObjects: true }).cvFileRequired
      );
    }

    // if(event.target.value === t('workWithUS.Professor')) {
    //   // console.log("Professor");
    // }
  };

  enum TypeOfContractWithStudent { 
    Hiring = t('workWithUS.hiring'),
    Intership = t('workWithUS.Internship'),
    UniversityIntership = t('workWithUS.UniversityInternship')
  }

  enum TypeOfContractWithProfessor {
    Consultation = t('workWithUS.professionalConsultation')
  }

  const TypeOfContractWithStudentItem = [
    TypeOfContractWithStudent.Hiring,
    TypeOfContractWithStudent.Intership,
    TypeOfContractWithStudent.UniversityIntership
  ];

  const TypeOfContractWithProfessorItem = [
    TypeOfContractWithProfessor.Consultation
  ];

  const TypeOfContractWithStudentData = TypeOfContractWithStudentItem.map(
    (type: any) => ({
      value: type,
      label: type
    })
  );

  const TypeOfContractWithProfessorData = TypeOfContractWithProfessorItem.map(
    (type: any) => ({
      value: type,
      label: type
    })
  );

  const [selectStudentContract, setSelectStudentContract] = useState('');
  const [selectProfessorContract, setSelectProfessorContract] = useState('');

  const handleContractWithStudentItemChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectStudentContract(event.target.value);
  };

  const handleContractWithProfessorItemChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectProfessorContract(event.target.value);
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

    const filePostMap = {
      cvFile: cvFileState.cvFile
    };

    for (const [fieldName, file] of Object.entries(filePostMap)) {
      if (file) {
        sendFormData.append(fieldName, file, file.name);
      }
    }

    // Append all non-file form fields.
    Object.entries(formData).forEach(([fieldName, fieldValue]) => {
      if (typeof fieldValue !== 'object' || fieldValue === null) {
        sendFormData.append(fieldName, String(fieldValue));
      } else sendFormData.append(fieldName, fieldValue[0]);
    });

    // if (formData.cvFile) {
    //   sendFormData.append('cvFile', formData.cvFile as Blob);
    // }

    // Send the form data to the API.
    submitWorkWithUsForm(sendFormData, csrfToken)
      .then(() => {
        console.log(sendFormData)
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
        <div className="py-10">
          <h3 className="text-center text-2xl md:text-3xl">
            {t('workWithUS', { returnObjects: true }).formTitle}
          </h3>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
          <div className="grid grid-cols-1 gap-x-6 bg-[#F8F5F0] p-4 md:grid-cols-2 lg:grid-cols-3">
            <Select
              register={register}
              errors={errors}
              nameInput="your_position"
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

            {selectPosition !== t('workWithUS.Professor') ? (
              <Select
                register={register}
                errors={errors}
                nameInput="type_of_contract"
                label={
                  t('workWithUS', { returnObjects: true }).contractPlaceholder
                }
                required=""
                className="select select-bordered mt-4 w-full max-w-xs px-8"
                labelClass="text-[#6b6b6b] dark:text-current"
                placeholder={
                  t('workWithUS', { returnObjects: true }).contractPlaceholder
                }
                options={TypeOfContractWithStudentData}
                handleChange={handleContractWithStudentItemChange}
                selected={selectStudentContract}
              />
            ) : (
              <Select
                register={register}
                errors={errors}
                nameInput="type_of_contract"
                label={
                  t('workWithUS', { returnObjects: true }).contractPlaceholder
                }
                required=""
                className="select select-bordered mt-4 w-full max-w-xs px-8"
                labelClass="text-[#6b6b6b] dark:text-current"
                placeholder={
                  t('workWithUS', { returnObjects: true }).contractPlaceholder
                }
                options={TypeOfContractWithProfessorData}
                handleChange={handleContractWithProfessorItemChange}
                selected={selectProfessorContract}
              />
            )}
          </div>
          {/* next line */}
          <div className="border-b-2 border-black bg-[#F8F5F0]">
            <p className="px-5 py-3 text-2xl md:text-3xl">
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
                nameInput="your_last_name"
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
                nameInput="email"
                type="text"
                label={t('workWithUS', { returnObjects: true }).email}
                required={
                  t('workWithUS', { returnObjects: true }).emailRequired
                }
                patternValue=""
                patternMessage=""
                placeholder={
                  t('workWithUS', { returnObjects: true }).emailPlaceholder
                }
                className="input input-bordered col-span-1 mb-1 mt-3 w-full placeholder-[#b2b1b0] drop-shadow-md dark:placeholder-[#9CA3AF]"
                labelClass="text-[#6b6b6b]"
              />
            </div>
            <div className="col-span-1">
              <Input
                register={register}
                errors={errors}
                nameInput="phone_number"
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
          <div className="border-b-2 border-black bg-[#F8F5F0]">
            <p className="px-5 py-3 text-2xl md:text-3xl">
              {t('workWithUS', { returnObjects: true }).formSubtitleBottom}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-x-6 bg-[#F8F5F0] p-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="col-span-1">
              <Input
                register={register}
                errors={errors}
                nameInput="your_field_of_study"
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
                nameInput="your_subfield"
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
            <div className="col-span-1">
              <UploadInput
                title={t('workWithUS', { returnObjects: true }).cvFile}
                register={register}
                required={cvFileRequired}
                errors={errors}
                nameInput="cvFile"
                handleChange={handleCvFileChange}
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
// eslint-disable-next-line max-lines
}
