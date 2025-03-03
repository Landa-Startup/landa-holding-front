import React, { useState } from 'react'
import TextArea from '../common/TextArea';
import ChevDown from 'public/static/logos/ChevDown';
import { StartupsFormData } from '@/types/global';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

type Props = {
    register: UseFormRegister<StartupsFormData>
    errors: FieldErrors<StartupsFormData>
}

const PropertyDropDown = (props: Props) => {

  const {
    register,
    errors
  } = props;

  const [propertyOpen, setPropertyOpen] = useState<boolean>(false);  

  return (
    <div>
        <div className={`w-full h-auto cursor-pointer py-6 my-4 ${propertyOpen ? "bg-grayCheckBox" : "bg-grayDark"}`} onClick={() => {
          setPropertyOpen(!propertyOpen)
        }}>
          <div className='w-full h-auto flex justify-center items-center gap-2'>
               <p className='font-barlow text-white font-medium text-[24px] leading-[20px]'>Property</p>
               <div className={`${propertyOpen ? "rotate-180" : "rotate-0"} transition-all duration-300 ease-out mt-2`}>
                 <ChevDown />
               </div>
          </div>
        </div>
        {propertyOpen && (
          <>
            <div className='w-full md:w-2/3 mb-8 h-auto md:px-1'>
              <TextArea
                  title={'How much revenue has your startup made since its inception?*'}
                  register={register}
                  errors={errors} 
                  required={"this fiels is required"} 
                  nameTextArea={"businessModel"} 
                  patternValue={''} 
                  patternMessage={''} 
                  placeholder={'Description'}                                            
              />
            </div>
            <div className='w-full md:w-2/3 mb-8 h-auto md:px-1'>
              <TextArea 
                  title={'How much is your monthly income?*'}
                  register={register}
                  errors={errors} 
                  required={"this fiels is required"} 
                  nameTextArea={"businessModel"} 
                  patternValue={''} 
                  patternMessage={''} 
                  placeholder={'Description'}                                            
              />
            </div>
            <div className='w-full md:w-2/3 mb-8 h-auto md:px-1'>
              <TextArea 
                  title={'What is your current interest rate?*'}
                  register={register}
                  errors={errors} 
                  required={"this fiels is required"} 
                  nameTextArea={"businessModel"} 
                  patternValue={''} 
                  patternMessage={''} 
                  placeholder={'Description'}                                            
              />
            </div>
            <div className='w-full md:w-2/3 mb-8 h-auto md:px-1'>
              <TextArea 
                  title={'How much current funding did you raise before starting your business?*'}
                  register={register}
                  errors={errors} 
                  required={"this fiels is required"} 
                  nameTextArea={"businessModel"} 
                  patternValue={''} 
                  patternMessage={''} 
                  placeholder={'Description'}                                            
              />
            </div>
            <div className='w-full md:w-2/3 mb-8 h-auto md:px-1'>
              <TextArea 
                  title={'How much capital do you need to start your project?*'}
                  register={register}
                  errors={errors} 
                  required={"this fiels is required"} 
                  nameTextArea={"businessModel"} 
                  patternValue={''} 
                  patternMessage={''} 
                  placeholder={'Description'}                                            
              />
            </div>
          </>
        )}
    </div>
  )
}

export default PropertyDropDown