'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import Input from '../common/form/Input';
import { initialApplicationFormData } from '../../app/initials/initObjects'
import { LandaGeneFormData } from '../../app/types/global';
import NotificationSendForm from '../common/form/NotificationSendForm';
import GetCsrfToken from '@/utils/get-csrf-token';
import apiClient from '@/utils/api';
import Button from '../common/Button';

export default function LandaGene() {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LandaGeneFormData>({
    mode: 'onBlur',
    defaultValues: initialApplicationFormData,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(true);
  const [send, setSend] = useState(false);
  const [showNotification, setShowNotification] = useState(true);
  const [csrfToken, setCsrfToken] = useState('');

  useEffect(() => {
    async function fetchCsrfToken() {
      const token = await GetCsrfToken("https://panel-back.landaholding.com/get-csrf-token");
      setCsrfToken(token);
    }

    fetchCsrfToken();
  }, []);

  const onSubmit = async (data: LandaGeneFormData) => {
    setIsSubmitting(true);
    setSend(true);
    try {
      const response = await apiClient.post(
        'landa-gene-application-form',
        JSON.stringify(data),
        {
          headers: {
            'X-CSRFToken': csrfToken,
            'Content-Type': 'application/json',
          },
        }
      );
      // if (!response.ok) {
      //   console.error('Failed to submit form data.');
      // }
      console.log(response.data.message);
      setIsSuccess(true);
      setShowNotification(true);
      setSend(false);
      const timeout = setTimeout(() => {
        setShowNotification(false);
      }, 10000);
      reset(initialApplicationFormData);
      console.log('Form data sent successfully!');
    } catch (error) {
      console.log(error);
      setShowNotification(true);
      setSend(false);
      setIsSuccess(false);
      console.error('Error sending form data:', error);
      const timeout = setTimeout(() => {
        setShowNotification(false);
      }, 10000);
      timeout;
    }
  }

  return (
    <div className='w-full flex flex-col items-start gap-[3px] h-screen overflow-scroll snap-start'>
        <div className='w-full flex flex-col md:flex-row md:justify-around md:gap-4 items-center p-4'>
          <div className='flex p-0 flex-col items-center gap-[4px]'>
            <div className='flex p-0 items-start relative'>
              <svg xmlns="http://www.w3.org/2000/svg" width="100" height="150" viewBox="0 0 179 229" fill="none" className='absolute'>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M84.9384 194.675C94.2862 81.1799 168.309 50.1219 176.448 32.9844C182.143 20.9982 177.156 9.05347 161.526 3.00388C122.899 -11.95 120.992 40.9333 117.243 50.7554C85.4498 134.041 18.8225 158.334 11.2991 166.013C-8.62919 186.349 0.50454 214.56 26.5735 225.033C49.1766 234.112 82.5713 223.405 84.9384 194.675Z" fill="#274192"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="120" height="200" viewBox="0 0 222 318" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M199.299 224.677C67.7205 134.097 76.1345 33.8586 60.4503 13.0781C49.4806 -1.45799 31.9209 -4.68781 14.8814 7.51177C-27.2299 37.6597 35.6014 77.2806 45.1603 88.2232C126.218 181.019 114.21 268.639 118.829 282.041C131.061 317.543 170.888 327.961 199.769 307.886C224.809 290.48 232.606 247.607 199.299 224.677Z" fill="#274192"/>
              </svg>
            </div>
            <p className='text-blue font-sans text-[15px] md:text-[25px] font-[600] leading-normal'>LANDA GENE</p>
          </div>

          <div className='flex w-full md:w-3/5 p-4 items-center shrink-0'>
            <p className='text-black w-full font-sans text-[15px] font-[400] leading-normal lg:text-[25px] md:leading-[30px] lg:leading-[40px] tracking-[0px] text-justify'>
            Landa Gene is an innovative and forward-thinking genetics start-up with the 
            potential to transform the healthcare industry. Landa Gene was founded by
            Landa International Holding Company as a subsidiary dedicated to identifying 
            and preventing disease through genetic testing. We have helped individuals 
            concerned about their health and the health of their loved ones build an 
            effective communication bridge between themselves and medical specialists 
            via the use of technology and AI.
            </p>
          </div>
        </div>

        <div className='w-full flex flex-col md:flex-row-reverse md:justify-around items-center p-4'>
          <div className='flex shrink-0 w-full md:w-1/2 h-auto md:h-[500px] lg:h-[400px] lg:w-1/3 p-4'>
            {/* <Image
              src="/static/images/gene-1.png"
              alt="gene-1"
              fill={true}
            /> */}
            <img 
              src="/static/images/gene-1.png" 
              alt="gene-1" 
              className='w-full h-full'
            />
          </div>

          <div className='flex w-full md:w-1/2 lg:w-2/3 p-4 items-center shrink-0'>
            <p className='text-black w-full font-sans text-[15px] font-[400] leading-normal md:leading-[28px] lg:text-[25px] md:mt-2 tracking-[0px] lg:leading-[40px] text-justify'>
              The medical treatment you or your family members receive may be altered based on the
              results of genetic testing, which searches for alterations in your DNA known as mutations or
              variations. A genetic issue that increases your risk of cancer, for instance, can be diagnosed with this
              method. Results from genetic testing that need only a blood or spit sample are often available within
              a few weeks. Due to the fact that you share DNA with your relatives, it is possible that they, too, have
              the same genetic alteration that you have been diagnosed with. To ensure that the correct individual
              in your family is tested, that the proper test is ordered, that you receive your findings, and that you
              are linked with the relevant physicians or specialists, we provide genetic counselling both before and
              after genetic testing.
            </p>
          </div>
        </div>

        <div className='w-full flex flex-col md:flex-row md:justify-around items-center p-4'>
          <div className='flex shrink-0 w-full md:w-1/2 h-auto md:h-[450px] lg:h-[400px] lg:w-2/5 p-4'>
            {/* <Image
              src="/static/images/gene-1.png"
              alt="gene-1"
              fill={true}
            /> */}
            <img 
              src="/static/images/gene-2.png" 
              alt="gene-1" 
              className='w-full h-full'
            />
          </div>

          <div className='flex w-full md:w-3/5 p-4 items-center shrink-0'>
            <p className='text-black w-full font-sans text-[15px] font-[400] leading-normal lg:text-[25px] md:leading-[45px] tracking-[0px] text-justify'>
              The monitoring of DNA mutations and alterations through genetic testing has several
              beneficial consequences for public health and disease prevention. Cancer risk due to inherited
              mutations can be identified, for instance, by means of genetic testing. Various samples of blood and
              saliva will be collected for this test. Because of the high degree of genetic similarity between
              members of the same family, genetic testing has the potential benefit of revealing the existence of a
              problem in different members of the same family.
            </p>
          </div>
        </div>

        <div className='w-full h-auto flex items-start px-[32px] py-[31px] bg-[#F8F5F0]'>
          <div className='flex flex-col h-auto w-full justify-between items-center p-0'>
            <div className='flex flex-col w-full items-start p-0'>
              <p className='w-full text-primary text-justify font-sans text-[18px] font-[700] leading-normal md:tracking-[2px]'>
                Please fill out the following form to indicate your interest in collaborating with the Landa Gene startup or future opportunities:
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className='w-full'>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-4 gap-y-4 gap-x-2 w-full'>
                <div className="col-span-1 w-full">
                  <Input
                    register={register}
                    errors={errors}
                    nameInput="name"
                    type="text"
                    label=""
                    required="Your Name is Required."
                    patternValue=""
                    patternMessage=""
                    placeholder="your Name"
                    className="col-span-1 w-full mt-3 mb-1 input input-bordered drop-shadow-lg placeholder-[#b2b1b0] dark:placeholder-[#9CA3AF]"
                    containerClass='w-full'
                    labelClass=""
                  />
                </div>

                <div className="col-span-1 w-full">
                  <Input
                    register={register}
                    errors={errors}
                    nameInput="phone"
                    type="text"
                    label=""
                    required="Your Phone Number is Required."
                    patternValue=""
                    patternMessage=""
                    placeholder="your Number"
                    className="col-span-1 w-full mt-3 mb-1 input input-bordered drop-shadow-lg placeholder-[#b2b1b0] dark:placeholder-[#9CA3AF]"
                    containerClass='w-full'
                    labelClass=""
                  />
                </div>

                <div className="col-span-1 w-full">
                  <Input
                    register={register}
                    errors={errors}
                    nameInput="email"
                    type="text"
                    label=""
                    required="Your Email is Required."
                    patternValue=""
                    patternMessage=""
                    placeholder="your Email"
                    className="col-span-1 w-full mt-3 mb-1 input input-bordered drop-shadow-lg placeholder-[#b2b1b0] dark:placeholder-[#9CA3AF]"
                    containerClass='w-full'
                    labelClass=""
                  />
                </div>

                <div className="col-span-1 w-full">
                  <Input
                    register={register}
                    errors={errors}
                    nameInput="company"
                    type="text"
                    label=""
                    required=""
                    patternValue=""
                    patternMessage=""
                    placeholder="Name of Your Organization, if applicable"
                    className="col-span-1 w-full mt-3 mb-1 input input-bordered drop-shadow-lg placeholder-[#b2b1b0] dark:placeholder-[#9CA3AF]"
                    containerClass='w-full'
                    labelClass=""
                  />
                </div>
              </div>

              <div className="text-center">
                <Button
                  text='Send Request'
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
        </div>
    </div>
  );
}
