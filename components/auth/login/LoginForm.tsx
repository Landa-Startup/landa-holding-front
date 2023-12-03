'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { LoginFormData } from '../../../types/global';
import { login } from '../../../services/authService';
import { useRouter } from 'next/navigation';
import { parseCookies } from 'nookies';
import { DecodedToken } from '../../../types/global';
import NotificationSendForm from '../../common/form/NotificationSendForm';
import Image from 'next/image';
import Telephone from '../../../components/icons/auth/Login/Telephone';
import Landa from '../../../components/icons/auth/Login/Landa';
import Input from '../../../components/common/form/Input';
import Button from '../../../components/common/Button';

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
    <div className="relative flex">
      <div className="absolute left-32 top-9 flex items-end">
        <Landa />
        <span className="text-xl text-black">LANDA</span>
      </div>
      <Image
        className=" absolute hidden md:bottom-0 md:right-28 md:z-10 md:block"
        src="/static/images/panel/login/blur.png"
        alt="Landa Blur"
        width={589}
        height={800}
      />

      <div className="flex h-screen w-full flex-col items-center justify-center space-y-11 bg-[#CCB598] md:w-9/12">
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
            className={`input input-bordered w-[300px] rounded-md border border-gray-200 bg-white/50 px-3 py-2 text-gray-700 backdrop-blur-lg focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary md:h-[75px] md:w-[548px] ${
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
            className={`input input-bordered w-[300px] rounded-md border border-gray-200 bg-white/50 px-3 py-2 text-gray-700 backdrop-blur-lg focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary md:h-[75px] md:w-[548px] ${
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
              <span className="label-text font-barlow text-xl text-white">
                Remember me
              </span>
              <input type="checkbox" className="checkbox border border-white" />
            </label>
          </div>
          <Button
            text={send ? 'Submitting ....' : 'Submit'}
            size=''
            type='submit'
            bgColor="Primary"
            goto={""}
          />
          {/* <button
            type="submit"
            className="mt-3 btn btn-wide btn-neutral bg-primary rounded-sm border-none text-white self-center"
            disabled={send}
          >
            {send ? 'Submitting ....' : 'Submit'}
          </button> */}
        </form>
        <div className="absolute bottom-11 left-32 flex items-center gap-2">
          <Telephone />
          <div className="flex flex-col text-black">
            <span>Reservation</span>
            <span className="font-semibold">855 100 4444</span>
          </div>
        </div>
      </div>
      <div className="relative h-screen overflow-hidden bg-[#fff] md:w-[589px]">
        <div className="hidden md:block md:h-[802px] md:w-[589px]">
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
