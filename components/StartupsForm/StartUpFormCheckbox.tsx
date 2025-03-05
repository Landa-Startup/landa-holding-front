import { StartupsFormData } from '@/types/global';
import React, { useEffect, useState } from 'react'
import { UseFormRegister } from 'react-hook-form';
import { useSubmit } from 'stores/dataStore';

type Props = {
    name: string
    register: UseFormRegister<StartupsFormData>
}

const StartUpFormCheckbox = (props: Props) => {

  const { name, register } = props;
  const {
    startupFormType, 
    setStartUpFormType
  } = useSubmit((s) => s)

  const [checked, setChecked] = useState(startupFormType == name);

  useEffect(() => {
    setChecked(startupFormType == name)
  },[startupFormType])

    
  return (
    <div className='w-full h-auto bg-whiteGold drop-shadow-md px-2 py-4'>
        <div className='w-full h-auto flex flex-row items-center gap-2 cursor-pointer' onClick={() => setStartUpFormType(name)}>
            <div className='border-2 rounded-full border-primary p-1'>
                <div
                    className={`w-4 h-4 rounded-full transition-all ${
                      checked ? "bg-primary" : "bg-whiteGold"
                    }`}
                >
                  <input 
                    type='radio'
                    className='w-full h-full inset-0 opacity-0'
                    value={name}
                    {...register("type", {
                      required: true,
                    })}
                  />
                </div>
            </div>
            <p id={name} className='text-grayCheckBox font-barlow font-medium text-[15px] leading-[18px]'>{name}</p>
        </div>
    </div>
  )
}

export default StartUpFormCheckbox