import React, { useState } from 'react'
import TextArea from '../common/TextArea'
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { StartupsFormData } from '@/types/global'
import ChevDown from 'public/static/logos/ChevDown'

type Props = {
    register: UseFormRegister<StartupsFormData>
    errors: FieldErrors<StartupsFormData>
    solutionsLevel: number
    handleSolutionsLevelChange: (index: number) => void
}

const SolutionLevel = (props: Props) => {

  const {
    register,
    errors,
    solutionsLevel,
    handleSolutionsLevelChange
  } = props;     
  
  const [solutionsOpen, setSolutionsOpen] = useState<boolean>(false);

  return (
    <div>
        <div className={`w-full h-auto cursor-pointer py-6 my-4 ${solutionsOpen ? "bg-grayCheckBox" : "bg-grayDark"}`} onClick={() => {
          setSolutionsOpen(!solutionsOpen)
        }}>
          <div className='w-full h-auto flex justify-center items-center gap-2'>
               <p className='font-barlow text-white font-medium text-[24px] leading-[20px]'>Solutions</p>
               <div className={`${solutionsOpen ? "rotate-180" : "rotate-0"} transition-all duration-300 ease-out mt-2`}>
                 <ChevDown />
               </div>
          </div>
        </div>
        {solutionsOpen && (
          <>
               <div className='w-full md:w-2/3 mb-8 h-auto md:px-1'>
                 <TextArea 
                     title={'What is your unique value proposition (innovation)? What is new about what you do?*'}
                     register={register}
                     errors={errors} 
                     required={"this fiels is required"} 
                     nameTextArea={"solution&innovation"} 
                     patternValue={''} 
                     patternMessage={''} 
                     placeholder={'Description'}                                                        
                 />
               </div>
               <div className='w-full md:w-2/3 mb-8 h-auto md:px-1'>
                 <div className='w-full h-auto flex flex-col gap-4 items-start'>
                    <div className='w-full h-auto'>
                        <p className='px-2 text-lg text-[#6b6b6b] dark:text-current'>How much is level of your product and technology preparation?</p>
                    </div>
                    <div className='w-full h-auto flex flex-col gap-1 items-start px-2'>
                        {[
                            "The basic principle has been observed.",
                            "The technology concept has been formulated.",
                            "Experimental proof of concept.",
                            "The confirmed technology in laboratory.",
                            "The confirmed technology in the environmental conditions",
                            "The presented technology in the environmental conditions",
                            "Show the system prototype in the mvp operating environment.",
                            "The proved realistic system in the operating environment.",
                            "A complete and qualified system.",
                        ].map((item: string, index: number) => (
                            <div key={index} className='w-full flex flex-row gap-1 items-center'>
                                <div className='w-auto h-auto flex flex-row items-center gap-2 cursor-pointer' onClick={() => handleSolutionsLevelChange(index)}>
                                    <div className='border-2 rounded-full border-primary p-[1px]'>
                                        <div
                                            className={`w-2 h-2 rounded-full transition-all ${
                                              solutionsLevel == index ? "bg-primary" : "bg-white"
                                            }`}
                                        />
                                    </div>
                                </div>
                                <p className='text-black font-barlow font-medium text-[12px] xl:text-[14px] leading-[14px] mb-1'>{item}</p>
                            </div>
                        ))}
                    </div>
                 </div>
               </div>
               <div className='w-full md:w-2/3 mb-8 h-auto md:px-1'>
                 <TextArea 
                     title={'What is your unique value proposition (innovation)? What is new about what you do?*'}
                     register={register}
                     errors={errors} 
                     required={"this fiels is required"} 
                     nameTextArea={"solution&innovation"} 
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

export default SolutionLevel