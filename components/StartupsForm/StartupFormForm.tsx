'use client';
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { StartupsFormData } from '../../app/types/global';
import { initialStartupsFormData } from '../../app/initials/initObjects'
import StartupFormPersonalInformation from './StartupFormPersonalInformation';
import StartupFormIdea from './StartupFormIdea';
import StartupFormMVP from './StartupFormMVP';
import StartupFormFirstSale from './StartupFormFirstSale';
import StartupFormSaleDevelopment from './StartupFormSaleDevelopment';
import NotificationSendForm from '../common/form/NotificationSendForm';
import GetCsrfToken from '@/utils/get-csrf-token';
import { countryList } from '../../app/[lang]/statics';
import { CountriesDataInterface } from '../../app/types/global'
import Select from '../common/form/Select';
import Button from '../common/Button';
import { handleFileChange } from '@/utils/functions';
import { submitStartupsForm } from 'pages/api/startups-form';
import { useSearchParams } from 'next/navigation';

//TODO: add this enum in a file and import it to index.ts api file , global.d file

export default function StartupFormForm() {

  enum Type {
    IDEA = 'IDEA',
    MVP = 'MVP',
    TRIAL = 'TRIAL',
    FisrtSale = 'FisrtSale', // Typo: Should be "FirstSale"
    SaleDevelopment = 'SaleDevelopment',
  }

  const Types = [
    Type.IDEA,
    Type.MVP,
    Type.TRIAL,
    Type.FisrtSale,
    Type.SaleDevelopment
  ]

  const typesData = Types.map((type: string) => ({
    value : type,
    label : type,
  }))

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<StartupsFormData>({
    mode: 'onBlur',
    defaultValues: initialStartupsFormData,
  });
  
  const searchParams:any|null= useSearchParams()
  const query = searchParams.get('type') 
  console.log(query)
  const [selectedRadio, setSelectedRadio] = useState(query);


  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(true);

  const [send, setSend] = useState(false);
  const [showNotification, setShowNotification] = useState(true);

  const [countries, setCountries] = useState(Array<CountriesDataInterface>);
  const [selectedCountry, setSelectedCountry] = useState('');
  
  const handleItemChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRadio(event.target.value);
  };
  const [filePost, setFilePost] = useState<{ businessPlanFile: File | '' }>({
    businessPlanFile: '',
  });
  const [filePost2, setFilePost2] = useState<{ pitchDeckFile: File | '' }>({
    pitchDeckFile: '',
  });
  const [filePost3, setFilePost3] = useState<{ financialFile: File | '' }>({
    financialFile: '',
  });

  const [formData, setFormData] = useState<StartupsFormData>(
    initialStartupsFormData
  );

  const [csrfToken, setCsrfToken] = useState('');

  useEffect(() => {
    async function fetchCsrfToken() {
      const token = await GetCsrfToken(
        `${process.env.NEXT_PUBLIC_DJANGO_HOST_URL}/get-csrf-token`
      );
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
  
  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(event.target.value);

    setFormData({
      ...formData,
      countryOfResidence: event.target.value, // Update the formData state
    });
  };

  const onSubmit = async (formData: StartupsFormData) => {
    // Set loading and sending states.
    setIsSubmitting(true);
    setSend(true);
  
    // Create a FormData object for form data.
    const sendFormData = new FormData();
  
    // Handle conditional file attachments.
    const filePostMap = {
      businessPlanFile: filePost.businessPlanFile,
      pitchDeckFile: filePost2.pitchDeckFile,
      financialFile: filePost3.financialFile,
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
      }
    });
  
    // Convert file objects to Blob and append them.
    if (formData.pitchDeckFile) {
      sendFormData.append('pitchDeckFile', formData.pitchDeckFile as Blob);
    }
  
    if (formData.businessPlanFile) {
      sendFormData.append('businessPlanFile', formData.businessPlanFile as Blob);
    }
  
    if (formData.financialModelFile) {
      sendFormData.append('financialModelFile', formData.financialModelFile as Blob);
    }
  
    // Send the form data to the API.
    submitStartupsForm(formData, setFormData, csrfToken).then(() => {
      setIsSuccess(true);
      setShowNotification(true);
      setSend(false);
      reset(initialStartupsFormData); // Country does not reset

      setTimeout(() => {
        setShowNotification(false);
      }, 10000); // 10 seconds in milliseconds
    }).catch(() => {
      setShowNotification(true);
      setSend(false);
      setIsSuccess(false);
      reset(initialStartupsFormData);
      setTimeout(() => {
        setShowNotification(false);
      }, 10000); // 10 seconds in milliseconds
    })
  };

  return (
    <div>
    <div className="text-center pt-20 bg-[#222] container m-10 px-5 lg:p-2 mx-auto">   
      <p className="font-serif text-3xl pb-3 pt-0 tracking-wide md:pt-0 md:text-5xl lg:text-6xl lg:pt-10  xl:text-7xl text-white sm:mt-0 ">Startup Validation Form</p>
      <p className="lg:font-serif text-2xl pt-0 pb-10 tracking-wide text-white md:pt-0 md:pb-10 lg:pb-10 ">Your Project</p>
    </div>
      <div className="container m-10 px-5 lg:p-20 mx-auto bg-[#faf8f5] dark:bg-transparent">
        {/* <StartupFormTitle /> */}
        <div>
          <p className="mb-4 text-4xl">Personal Information</p>
        </div>

        <div>
          <hr className="border-[#000000] dark:border-[#ffffff] mb-5"/>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <StartupFormPersonalInformation
            register={register}
            errors={errors}
            selectedCountry={selectedCountry}
            handleCountryChange={handleCountryChange}
            countries={countries}
          />

          <div className="grid grid-cols-1 my-6 gap-y-4 gap-x-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="col-span-2">
          <div className="bg-[#222222CC]">
            <p className="text-xl mb-3 text-white pt-5 pb-5 pl-10 w-[310px] md:w-[550px] md:text-3xl lg:w-[450px] xl:w-[650px] lg:text-3xl border-b ">
              Growth and Scale-up
            </p>
            <hr className=" dark:border-[#222222CC] mb-5 mt-0 " />
          </div>
          </div>
          </div>
          <Select
            register={register}
            errors={errors}
            nameInput='statusSelect'
            label='Select Your Status: '
            required='Your Status is Required'
            className='select select-bordered w-full max-w-xs mt-4'
            labelClass='text-[#6b6b6b] dark:text-current'
            placeholder='Select Your Status'
            options={typesData}
            handleChange={handleItemChange}
          />
          <br />
          {(() => {
            if (selectedRadio == 'IDEA') {
              return <StartupFormIdea register={register} errors={errors} />;
            } else {
              return <div></div>;
            }
          })()}

          {(() => {
            if (selectedRadio == 'MVP') {
              return (
                <StartupFormMVP
                  register={register}
                  errors={errors}
                  handleBusinessPlanFileChange={(e:React.ChangeEvent<HTMLInputElement>) => {handleFileChange(e, setFilePost)}}
                  handlePitchDeckFileChange={(e:React.ChangeEvent<HTMLInputElement>) => {handleFileChange(e, setFilePost2)}}
                  handleFinancialFileChange={(e:React.ChangeEvent<HTMLInputElement>) => {handleFileChange(e, setFilePost3)}}
                />
              );
            } else {
              return <div></div>;
            }
          })()}

          {(() => {
            if (selectedRadio == 'FisrtSale') {
              return (
                <StartupFormFirstSale
                  register={register}
                  errors={errors}
                  handleBusinessPlanFileChange={(e:React.ChangeEvent<HTMLInputElement>) => {handleFileChange(e, setFilePost)}}
                  handlePitchDeckFileChange={(e:React.ChangeEvent<HTMLInputElement>) => {handleFileChange(e, setFilePost2)}}
                  handleFinancialFileChange={(e:React.ChangeEvent<HTMLInputElement>) => {handleFileChange(e, setFilePost3)}}
                />
              );
            } else {
              return <div></div>;
            }
          })()}

          {(() => {
            if (selectedRadio == 'SaleDevelopment') {
              return (
                <StartupFormSaleDevelopment
                  register={register}
                  errors={errors}
                  handleBusinessPlanFileChange={(e:React.ChangeEvent<HTMLInputElement>) => {handleFileChange(e, setFilePost)}}
                  handlePitchDeckFileChange={(e:React.ChangeEvent<HTMLInputElement>) => {handleFileChange(e, setFilePost2)}}
                  handleFinancialFileChange={(e:React.ChangeEvent<HTMLInputElement>) => {handleFileChange(e, setFilePost3)}}
                />
              );
            } else {
              return <div></div>;
            }
          })()}
          <div className="text-start mt-10 ml-1">
            <Button
              text={send ? 'Submitting ....' : 'Submit'}
              type='submit'
              size=''
              addedClass='mt-3 btn btn-wide text-white dark:text-current'
              bgColor="Primary"
              goto=''
              disabled={Boolean(!selectedRadio)}
            />
          </div>
          <NotificationSendForm
            submitting={isSubmitting}
            success={isSuccess}
            sendStatus={send}
            show={showNotification}
          />
        </form>
      </div>
    </div>
  );
}
