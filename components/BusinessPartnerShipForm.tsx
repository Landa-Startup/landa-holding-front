import React from 'react';
import {useForm} from 'react-hook-form'
export default function BusinessPartnerShiphtmlform() {
  const initialFormData = {
    name: "",
    email: "",
    phone: "",
    members_count: "",
    pitch: null as File | null,
  };


  return (
    <div className="mx-auto w-7/12 bg-white">
      <h2 className="text-slate-950 text-center text-6xl mb-3 mt-16">
        PARTNER Membership FORM
      </h2>
      <h3 className="text-slate-950 text-center text-1xl mb-16 pr-16">
        Drop us a line through the form below and we'll get back to you
      </h3>
      <h4 className="text-slate-950 text-left text-2xl ">
        Personal Informations
      </h4>
      <hr className="h-0.5 mt-2 mb-6 bg-gray-100 border-0 dark:bg-gray-700"></hr>

      <form action="" className="flex flex-col">
        <div className="grid grid-cols-3 mb-10 justify-center items-center">
          <div className="grid justify-center items-center">
            <label htmlFor="" className="block mb-1 text-slate-950">
              Full Name
            </label>
            <input type="text" className="mb-4 bg-amber-100 p-1 pr-8 pl-14 rounded-md shadow-md" />
            <br />
            <label htmlFor="" className="block mb-1 text-slate-950">
              Email
            </label>
            <input type="text" className="mb-4 bg-amber-100 p-1 rounded-md shadow-md" />
            <br />
            <label htmlFor="" className="block mb-1 text-slate-950">
              Street Address
            </label>
            <input type="text" className="mb-4 bg-amber-100 p-1 rounded-md shadow-md" />
            <br />
            <label htmlFor="" className="block mb-1 text-slate-950">
              Company Name
            </label>
            <input type="text" className="mb-4 bg-amber-100 p-1 rounded-md shadow-md" />
          </div>

          <div className="grid justify-center items-center">
            <label htmlFor="" className="block mb-1 text-slate-950">
              Phone Number
            </label>
            <input type="text" className="mb-4 bg-amber-100 p-1 pr-8 pl-14 rounded-md shadow-md" />
            <br />
            <label htmlFor="" className="block mb-1 text-slate-950">
              Country Of esidence
            </label>
            <input type="text" className="mb-4 bg-amber-100 p-1 rounded-md shadow-md" />
            <br />
            <label htmlFor="" className="block mb-1 text-slate-950">
              Street Address Line 2
            </label>
            <input type="text" className="mb-4 bg-amber-100 p-1 rounded-md shadow-md" />
            <br />
            <label htmlFor="" className="block mb-1 text-slate-950">
              Investment Ceiling
            </label>
            <input type="text" className="mb-4 bg-amber-100 p-1 rounded-md shadow-md" />
          </div>

          <div className="grid justify-center items-center">
            <label htmlFor="" className="block mb-1 text-slate-950">
              Birth Time
            </label>
            <input type="text" className="mb-4 bg-amber-100 p-1 pr-8 pl-14 rounded-md shadow-md" />
            <br />
            <label htmlFor="" className="block mb-1 text-slate-950">
              Province Of Residence 
            </label>
            <input type="text" className="mb-4 bg-amber-100 p-1 rounded-md shadow-md" />
            <br />
            <label htmlFor="" className="block mb-1 text-slate-950">
              Postal/Zip Code
            </label>
            <input type="text" className="mb-4 bg-amber-100 p-1 rounded-md shadow-md" />
            <br />
            <label htmlFor="" className="block mb-1 text-slate-950">
              Your Position In Team
            </label>
            <input type="text" className="mb-4 bg-amber-100 p-1 rounded-md shadow-md" />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="mb-6">
            <label htmlFor="" className="block text-slate-950 mb-2">
              Preferred areas for investment*
            </label>
            <input type="text" className="w-full bg-amber-100 p-1 rounded-md shadow-md" />
          </div>
          <div className="mb-16">
            <label htmlFor="" className="block text-slate-950 mb-2">
            How did you get to know us? *
            </label>
            <input type="text" className="w-full bg-amber-100 p-1 rounded-md shadow-md" />
          </div>
          <div className='mx-auto'>
            <button type='submit' className='bg-amber-800 text-white px-12 py-2 rounded-lg mb-24'>Send</button>
          </div>
        </div>
      </form>
    </div>
  );
}
