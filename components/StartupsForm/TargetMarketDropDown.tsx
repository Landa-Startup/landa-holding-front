import React, { useState } from 'react'
import TextArea from '../common/TextArea'
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { StartupsFormData } from '@/types/global'
import ChevDown from 'public/static/logos/ChevDown'

type Props = {
    register: UseFormRegister<StartupsFormData>
    errors: FieldErrors<StartupsFormData>
}

const TargetMarketDropDown = (props: Props) => {

  const {
    register,
    errors
  } = props;  

  const [targetMarketOpen, setTargetMarketOpen] = useState<boolean>(false);  

  return (
    <div>
        <div className={`w-full h-auto cursor-pointer py-6 my-4 ${targetMarketOpen ? "bg-grayCheckBox" : "bg-grayDark"}`} onClick={() => {
          setTargetMarketOpen(!targetMarketOpen)
        }}>
          <div className='w-full h-auto flex justify-center items-center gap-2'>
               <p className='font-barlow text-white font-medium text-[24px] leading-[20px]'>Target Market</p>
               <div className={`${targetMarketOpen ? "rotate-180" : "rotate-0"} transition-all duration-300 ease-out mt-2`}>
                 <ChevDown />
               </div>
          </div>
        </div>
        {targetMarketOpen && (
          <>
            <div className='w-full md:w-2/3 mb-8 h-auto md:px-1'>
              <TextArea 
                  title={'Based on what characteristics do you decide who are your customers and who are not?*'}
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
                  title={'Who are your current customers? How many customers have you had so far?*'}
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
                  title={'How have you estimated the size of the market?*'}
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
                  title={'How much is the total (TAM market accessible serviceable) (SAM market accessible) (SOM market addressable)?*'}
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

export default TargetMarketDropDown