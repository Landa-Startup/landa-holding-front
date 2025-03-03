import React, { useEffect, useState } from 'react'
import { useSubmit } from 'stores/dataStore';

type Props = {
    name: string
}

const StartUpFormCheckbox = (props: Props) => {

  const { name } = props;
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
                />
            </div>
            <p id={name} className='text-grayCheckBox font-barlow font-medium text-[15px] leading-[18px]'>{name}</p>
        </div>
    </div>
  )
}

export default StartUpFormCheckbox