'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { LoginFormData } from '../../../app/types/global';
import { login } from '@/services/authService';
import { useRouter } from 'next/navigation';
import { parseCookies } from 'nookies';
import { DecodedToken } from 'app/types/global';
import NotificationSendForm from '../../common/form/NotificationSendForm';
import Image from 'next/image';
import Telephone from '@/components/icons/auth/Login/Telephone';
import Landa from '@/components/icons/auth/Login/Landa';

export default function LoginPage() {
  const router = useRouter();

  // const initialFormData:
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginFormData>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(true);
  const [send, setSend] = useState(false);
  const [showNotification, setShowNotification] = useState(true);

  const onSubmit = async (formData: LoginFormData) => {
    const user = await login(formData.email, formData.password);
    if (user) {
      // read from cookie
      const cookies = parseCookies();
      const currentUser: DecodedToken = JSON.parse(cookies.currentUser);

      router.push(`/dashboard/${currentUser.role}`);
    }
  };

  return (
    <div className="flex relative">
      <div className="flex items-end absolute left-32 top-9">
        <Landa />
        <span className="text-black text-xl">LANDA</span>
      </div>
      <Image
        className=" hidden md:block absolute md:right-28 md:bottom-0 md:z-10"
        src="/static/images/panel/login/blur.png"
        alt="Landa Blur"
        width={589}
        height={800}
      />

      <div className="w-full md:w-9/12 bg-[#CCB598] h-screen flex flex-col items-center justify-center space-y-11">
        <span className="font-condensed text-7xl text-white">Login</span>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-9"
        >
          <input
            id="email"
            type="email"
            required
            {...register('email', {
              required: 'Your email is required.',
              //     value: /^[a-z ,.'-]+$/i,
              //     message: 'Enter a valid email.',
              // },
            })}
            placeholder="Email"
            className={`md:w-[548px] md:h-[75px] w-[300px] input input-bordered bg-white/50 backdrop-blur-lg border border-gray-200 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary ${
              errors.email ? 'border-red-500' : ''
            }`}
          />
          {errors.email && (
            <span className="mt-2 text-sm text-yellow-500">
              {errors.email.message}
            </span>
          )}
          <input
            id="password"
            type="password"
            required
            {...register('password', {
              required: 'Your password is required.',
              minLength: {
                value: 5,
                message: 'Your password must be at least 8 characters long.',
              },
            })}
            placeholder="Password"
            className={`md:w-[548px] md:h-[75px] w-[300px] input input-bordered bg-white/50 backdrop-blur-lg border border-gray-200 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary ${
              errors.password ? 'border-red-500' : ''
            }`}
          />
          {errors.password && (
            <span className="mt-2 text-sm text-yellow-500">
              {errors.password.message}
            </span>
          )}
          <div className="form-control self-start">
            <label className="label cursor-pointer flex-row-reverse gap-2">
              <span className="label-text text-white font-barlow text-xl">
                Remember me
              </span>
              <input type="checkbox" className="checkbox border border-white" />
            </label>
          </div>
          <button
            type="submit"
            className="mt-3 btn btn-wide btn-neutral bg-primary rounded-sm border-none text-white self-center"
            disabled={send}
          >
            {send ? 'Submitting ....' : 'Submit'}
          </button>
        </form>
        <div className="flex gap-2 items-center absolute left-32 bottom-11">
          <Telephone />
          <div className="flex flex-col text-black">
            <span>Reservation</span>
            <span className="font-semibold">855 100 4444</span>
          </div>
        </div>
      </div>
      <div className="md:w-[589px] bg-[#fff] h-screen relative overflow-hidden">
        <div className="hidden md:block md:w-[589px] md:h-[802px]">
          <Image
            className="absolute"
            src="/static/images/panel/login/notBlur.png"
            alt="Landa Blur"
            layout="fill"
          />
        </div>
      </div>
    </div>
  );
}