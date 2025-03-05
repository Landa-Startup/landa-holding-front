import React, { useState } from 'react'
import TextArea from '../common/TextArea'
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { StartupsFormData } from '@/types/global'
import UploadFile from 'public/static/logos/UploadFile'
import ChevDown from 'public/static/logos/ChevDown'

type Props = {
    register: UseFormRegister<StartupsFormData>
    errors: FieldErrors<StartupsFormData>
    handlePitchFileChange: (file: any) => void
    handleFinancialModelFileChange: (file: any) => void
}

const BussinessModelDropDown = (props: Props) => {

  const {
    register,
    errors,
    handleFinancialModelFileChange
  } = props;    

  const [businessOpen, setBusinessOpen] = useState<boolean>(false);

  return (
    <div>
        <div className={`w-full h-auto cursor-pointer py-6 my-4 ${businessOpen ? "bg-grayCheckBox" : "bg-grayDark"}`} onClick={() => {
          setBusinessOpen(!businessOpen)
        }}>
            <div className='w-full h-auto flex justify-center items-center gap-2'>
                 <p className='font-barlow text-white font-medium text-[24px] leading-[20px]'>Business Model</p>
                 <div className={`${businessOpen ? "rotate-180" : "rotate-0"} transition-all duration-300 ease-out mt-2`}>
                   <ChevDown />
                 </div>
            </div>
        </div>
        {businessOpen && (
                <>
                    <div className='w-full md:w-2/3 mb-8 h-auto md:px-1'>
                        <TextArea 
                            title={'Describe the method of monetization of your plan?*'}
                            register={register}
                            errors={errors} 
                            required={"this fiels is required"} 
                            nameTextArea={"MonetizationOfYourPlan"} 
                            patternValue={''} 
                            patternMessage={''} 
                            placeholder={'Description'}                                                        
                        />
                    </div>
                    <div className='w-full md:w-2/3 mb-8 h-auto md:px-1'>
                        <TextArea 
                            title={'Please clearly mention the structure of your sales cycle from contact to delivery.*'}
                            register={register}
                            errors={errors} 
                            required={"this fiels is required"} 
                            nameTextArea={"structureOfYourSales"} 
                            patternValue={''} 
                            patternMessage={''} 
                            placeholder={'Description'}                                                        
                        />
                    </div>
                    <div className='w-full h-auto flex justify-start items-center'>
                        <p className='text-black font-medium text-[15px] leading-[18px]'>If your plan has a financial model, please upload it.</p>
                    </div>
                    <div className='w-full md:w-1/3 h-auto bg-whiteGold drop-shadow-md flex justify-center relative overflow-hidden mt-2 mb-6'>
                        <label className="cursor-pointer relative w-12 h-12 flex items-center justify-center rounded-full hover:bg-gray-200 transition">
                            <input
                                  type="file"
                                  name='financialModelFile'
                                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                  onChange={(e) => {
                                    handleFinancialModelFileChange(e.target.files ? e.target.files[0] : '')
                                  }}
                            />
                            <p className='text-grayDark font-barlow font-medium text-[13px] leading-4'>Choose File</p>
                            <UploadFile />
                        </label>
                    </div>
                    <div className='w-full md:w-2/3 mb-8 h-auto md:px-1'>
                        <TextArea 
                            title={'Have you previously cooperated with investors or accelerators?*'}
                            register={register}
                            errors={errors} 
                            required={"this fiels is required"} 
                            nameTextArea={"cooperatedWithInvestors"} 
                            patternValue={''} 
                            patternMessage={''} 
                            placeholder={'Description'}                                                        
                        />
                    </div>
                    <div className='w-full md:w-2/3 mb-8 h-auto md:px-1'>
                        <TextArea
                            title={'How did you get to know us?*'}
                            register={register}
                            errors={errors} 
                            required={"this fiels is required"} 
                            nameTextArea={"getToKnowUs"} 
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

export default BussinessModelDropDown