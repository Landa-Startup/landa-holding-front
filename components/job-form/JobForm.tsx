'use client';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Input from '../common/form/Input';
import UploadInput from '../common/UploadInput';
import { JobFormData } from '../../app/types/global';
import NotificationSendForm from '../common/form/NotificationSendForm';
import GetCsrfToken from '@/utils/get-csrf-token';
import apiClient from '@/utils/api';
import { initialJobFormData } from '../../app/initials/initObjects'
import Button from '../common/Button';
import { submitApplyJobForm } from 'pages/api/jobs';

export default function JobForm() {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<JobFormData>({
    mode: 'onBlur',
    defaultValues: initialJobFormData,
  });

  const [formData, setFormData] = useState<JobFormData>(initialJobFormData);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(true);
  const [send, setSend] = useState(false);
  const [showNotification, setShowNotification] = useState(true);
  const [handleChangeFile, setHandleChangeFile] = useState();
  const [csrfToken, setCsrfToken] = useState('');
  useEffect(() => {
    async function fetchCsrfToken() {
      const token = await GetCsrfToken(`${process.env.NEXT_PUBLIC_DJANGO_HOST_URL}/get-csrf-token`);
      setCsrfToken(token);
    }
    fetchCsrfToken();
  }, []);

  //   const handleChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     const file = event.target.files && event.target.files[0];
  //     setFormData({ ...formData, cvFile: file as File });
  //     console.log('cvfile:', formData.cvFile);
  //   };

  const [cvFileState, setCvFileState] = useState<{ cvFile: File | '' }>({
    cvFile: '',
  });

  const handleCvFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const cvFile = event.target.files && event.target.files[0];
    if (event.target.files && event.target.files.length > 0) {
      setCvFileState({ cvFile: event.target.files[0] });
    }
  };

  const onSubmit = async (formData: JobFormData) => {
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
    submitApplyJobForm(formData, setFormData, csrfToken).then((response) => {
      setIsSuccess(true);
      setShowNotification(true);
      setSend(false);
      reset(initialJobFormData); // Country does not reset

      setFormData(initialJobFormData);

      setTimeout(() => {
        setShowNotification(false);
      }, 10000); // 10 seconds in milliseconds

      console.log(response);
    }).catch((error) => {
      setShowNotification(true);
      setSend(false);
      setIsSuccess(false);
      
      setFormData(initialJobFormData);

      setTimeout(() => {
        setShowNotification(false);
      }, 10000); // 10 seconds in milliseconds
    })
  };

  return (
    <>
    <div className='container m-16 px-5 lg:p-20 mx-auto bg-[#faf8f5] dark:bg-transparent'>
      <p className='text-2xl text-center font-barlow'>Landa Holding is dedicated to investing in creative people with innovative startup ideas. They provide these startups with the necessary resources for growth and success. The company is ready to attract technical and non-technical talent from all over the world and they offer flexible work arrangements including office and telecommuting options. Employees can expect professional growth opportunities, strong affiliations, international certifications, ongoing support, a multilingual environment, and more. Interested candidates can register on the company's website to join their talent pool and be considered for roles that match their skills and experience.</p>
    </div>
      <div className="container m-16 px-5 lg:p-20 mx-auto bg-[#faf8f5] dark:bg-transparent">
        <>
          <div className="container m-16 px-5 lg:p-0 mx-auto bg-[#faf8f5] dark:bg-transparent">
            <>
              <div className="text-center">
                <p className="mb-20 pt-10 lg:pt-0 text-3xl font-serif lg:text-6xl md:text-5xl tracking-wide">
                Work With Us
                </p>
              </div>
              <div>
                <p className="mb-4 text-4xl">Personal Information</p>
              </div>
              <div>
                <hr className="border-[#000000] dark:border-[#ffffff] mb-5" />
              </div>
            </>
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
                    patternMessage="Please Enter Correct Value!"
                    placeholder="Enter your Last Name"
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
                <div className="col-span-1">
                  <Input
                    register={register}
                    errors={errors}
                    nameInput="phoneNumber"
                    type="tel"
                    label="Phone Number"
                    required="Phone Number is Required."
                    patternValue="^(\d{10}|\d{11}|\d{12})$"
                    patternMessage="Enter a Valid Phone Number"
                    placeholder="Enter your Phone Number"
                    className="col-span-1 w-full mt-3 mb-1 input input-bordered drop-shadow-lg placeholder-[#b2b1b0] dark:placeholder-[#9CA3AF]"
                    labelClass="text-[#6b6b6b] dark:text-current"
                  />
                </div>
                <UploadInput title='CV File:' />
              </div>
              <div className="text-center">
                <Button
                  text={send ? 'Submitting ....' : 'Submit'}
                  type='submit'
                  size=''
                  addedClass='mt-3 btn btn-wide text-white dark:text-current'
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
        </>


      </div>
    </>
  );
}
