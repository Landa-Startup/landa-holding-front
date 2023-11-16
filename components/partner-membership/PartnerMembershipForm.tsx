'use client';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Input from '../common/form/Input';
import Select from '../common/form/Select';
import PartnerMembershipTitle from './PartnerMembershipTitle';
import { PartnerMembershipFormData } from '../../app/types/global';
import NotificationSendForm from '../common/form/NotificationSendForm';
import TextArea from '../common/TextArea';
import GetCsrfToken from '@/utils/get-csrf-token';
import apiClient from '@/utils/api';
import { initialPartnerMembershipFormData } from '../../app/initials/initObjects'
import { countryList } from '../../app/[lang]/statics';
import { CountriesDataInterface } from '../../app/types/global'
import Button from '../common/Button';
import { submitPartnerMembershipForm } from 'pages/api/partner-membership';

// import { PartnerMembership } from '@prisma/client';

export default function PartnerMembershipForm() {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<PartnerMembershipFormData>({
    mode: 'onBlur',
    defaultValues: initialPartnerMembershipFormData,
  });

  const [formData, setFormData] = useState<PartnerMembershipFormData>(
    initialPartnerMembershipFormData
  );

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(true);
  const [send, setSend] = useState(false);
  const [showNotification, setShowNotification] = useState(true);
  const [csrfToken, setCsrfToken] = useState('');

  const [countries, setCountries] = useState(Array<CountriesDataInterface>);
  const [selectedCountry, setSelectedCountry] = useState('');

  useEffect(() => {
    async function fetchCsrfToken() {
      console.log("csrfToken", process.env.NEXT_PUBLIC_DJANGO_HOST_URL)
      const token = await GetCsrfToken(`${process.env.NEXT_PUBLIC_DJANGO_HOST_URL}/get-csrf-token`);
      setCsrfToken(token);
    }

    fetchCsrfToken();
  }, []);

  useEffect(() => {

    const countriesData = countryList.map((country: string) => ({
      value : country,
      text : country,
    }))
    setCountries(countriesData);
  }, []);

  const countriesData = countryList.map((country: string) => ({
    value : country,
    label : country,
  }))

  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(event.target.value);

    setFormData({
      ...formData,
      countryOfResidence: event.target.value, // Update the formData state
    });
  };

  const onSubmit = async (formData: PartnerMembershipFormData) => {
    // Set loading and sending states.
    setIsSubmitting(true);
    setSend(true);
  
    // Create a FormData object for form data.
    const sendFormData = new FormData();
  
    // Append all non-file form fields.
    Object.entries(formData).forEach(([fieldName, fieldValue]) => {
      if (typeof fieldValue !== 'object' || fieldValue === null) {
        sendFormData.append(fieldName, String(fieldValue));
      }
    });
  
    // Send the form data to the API.
    const res = await submitPartnerMembershipForm(formData, setFormData, csrfToken).then((response) => {
      setIsSuccess(true);
      setShowNotification(true);
      setSend(false);
      reset(initialPartnerMembershipFormData); // Country does not reset

      setTimeout(() => {
        setShowNotification(false);
      }, 10000); // 10 seconds in milliseconds
    }).catch((error) => {
      setShowNotification(true);
      setSend(false);
      setIsSuccess(false);
      reset(initialPartnerMembershipFormData);
      setTimeout(() => {
        setShowNotification(false);
      }, 10000); // 10 seconds in milliseconds
    })

  };

  return (
    <div>
      <div className="container m-16 px-5 lg:p-20 mx-auto bg-[#faf8f5] dark:bg-transparent">
        <PartnerMembershipTitle />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 my-6 gap-y-4 gap-x-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="col-span-1">
              <Input
                register={register}
                errors={errors}
                nameInput="firstName"
                type="text"
                label="First Name"
                required="First Name is Required."
                patternValue=""
                patternMessage=""
                placeholder="Enter your First Name"
                className="col-span-1 w-full mt-3 mb-1 input input-bordered drop-shadow-lg placeholder-[#b2b1b0] dark:placeholder-[#9CA3AF]"
                labelClass="text-[#6b6b6b] dark:text-current"
              />
            </div>

            <div className="col-span-1">
              <Input
                register={register}
                errors={errors}
                nameInput="lastName"
                type="text"
                label="Last Name"
                required="Last Name is Required."
                patternValue=""
                patternMessage=""
                placeholder="Enter your Last Name"
                className="col-span-1 w-full mt-3 mb-1 input input-bordered drop-shadow-lg placeholder-[#b2b1b0] dark:placeholder-[#9CA3AF]"
                labelClass="text-[#6b6b6b] dark:text-current"
              />
            </div>

            <div className="col-span-1">
              <Input
                register={register}
                errors={errors}
                nameInput="birthDate"
                type="date"
                label="Date of Birth"
                required="Date of Birth is Required."
                patternValue="(?:\d{1,2}[-/\s]\d{1,2}[-/\s]'?\d{2,4})|(?:\d{2,4}[-/\s]\d{1,2}[-/\s]\d{1,2})|(?:(?:January|February|March|April|May|June|July|August|September|October|November|December|Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sept|Sep|Oct|Nov|Dec)[\s-/,]*?\d{1,2}(?:\s)*(?:rd|th|st)?(?:\s)*[-/,]?(?:\s)*'?\d{2,4})|(?:\d{1,2}(?:\s)*(?:rd|th|st)?(?:\s)*(?:January|February|March|April|May|June|July|August|September|October|November|December|Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sept|Sep|Oct|Nov|Dec)(?:\s)*?[-/,]?(?:\s)*'?\d{2,4})"
                patternMessage="Please enter a valid Date of Birth (e.g., 2001/02/11)"
                placeholder="Enter your Date of Birth"
                className="col-span-1 w-full mt-3 mb-1 input input-bordered drop-shadow-lg placeholder-[#b2b1b0] dark:placeholder-[#9CA3AF]"
                labelClass="text-[#6b6b6b] dark:text-current"
              />
            </div>

            <div className="col-span-1">
              <Input
                register={register}
                errors={errors}
                nameInput="email"
                type="email"
                label="Email Address"
                required="Email Address is Required."
                patternValue="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
                patternMessage="Enter a Valid Email Address"
                placeholder="Enter your Email Address"
                className="col-span-1 w-full mt-3 mb-1 input input-bordered drop-shadow-lg placeholder-[#b2b1b0] dark:placeholder-[#9CA3AF]"
                labelClass="text-[#6b6b6b] dark:text-current"
              />
            </div>

            <Select
              register={register}
              errors={errors}
              nameInput='countrySelect'
              label='Select a country:'
              required=''
              className='col-span-1 w-full mt-3 mb-1 input input-bordered drop-shadow-lg placeholder-[#b2b1b0] dark:placeholder-[#9CA3AF] p-4'
              labelClass='text-[#6b6b6b] dark:text-current'
              placeholder='Select a Country'
              options={countriesData}
              handleChange={handleCountryChange}
              selected={selectedCountry}
            />

            <div className="col-span-1">
              <Input
                register={register}
                errors={errors}
                nameInput="provinceOfResidence"
                type="text"
                label="City Of Residence"
                required="City Of Residence is Required."
                patternValue=""
                patternMessage=""
                placeholder="Enter your City Of Residence"
                className="col-span-1 w-full mt-3 mb-1 input input-bordered drop-shadow-lg placeholder-[#b2b1b0] dark:placeholder-[#9CA3AF]"
                labelClass="text-[#6b6b6b] dark:text-current"
              />
            </div>

            <div className="col-span-1">
              <Input
                register={register}
                errors={errors}
                nameInput="companyName"
                type="text"
                label="Company Name"
                required="Company Name is Required."
                placeholder="Enter your Company Name"
                className="col-span-1 w-full mt-3 mb-1 input input-bordered drop-shadow-lg placeholder-[#b2b1b0] dark:placeholder-[#9CA3AF]"
                labelClass="text-[#6b6b6b] dark:text-current"
                patternValue=""
                patternMessage=""
              />
            </div>

            <div className="col-span-1">
              <Input
                register={register}
                errors={errors}
                nameInput="investmentCeiling"
                type="text"
                label="Field Of Professional"
                required="Investment Ceiling is Required."
                placeholder="Enter your Investment Ceiling"
                className="col-span-1 w-full mt-3 mb-1 input input-bordered drop-shadow-lg placeholder-[#b2b1b0] dark:placeholder-[#9CA3AF]"
                labelClass="text-[#6b6b6b] dark:text-current"
                patternValue={''}
                patternMessage={''}
              />
            </div>

            <div className="col-span-1 md:col-span-2">
              <TextArea
                title="How did you hear about us?*"
                register={register}
                errors={errors}
                placeholder="Description"
                nameTextArea="howDidYouKnowUs"
                patternMessage=""
                patternValue=""
                required="This field is required"
              />
            </div>
          </div>
          <div className="text-center">
            <Button
              text={send ? 'Submitting ....' : 'Submit'}
              type='submit'
              size='register'
              addedClass='mt-3 btn btn-wide dark:text-current'
              bgColor="Primary"
              goto=''
              disabled={send}
            />
          </div>
        </form>
        <NotificationSendForm
          submitting={isSubmitting}
          success={isSuccess}
          sendStatus={send}
          show={showNotification}
        />
      </div>
    </div>
  );
}
