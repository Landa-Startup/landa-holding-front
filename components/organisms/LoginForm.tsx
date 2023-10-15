'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { LoginFormData } from '../../app/types/global';
import { login } from '@/services/authService';
import { useRouter } from 'next/navigation';
import { parseCookies } from 'nookies';
import { DecodedToken } from 'app/types/global';
import NotificationSendForm from './base/NotificationSendForm';
import Image from 'next/image';

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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="101"
          viewBox="0 0 80 101"
          fill="none"
        >
          <g id="Vector 58">
            <path
              d="M18.7713 101C19.001 101 19.1158 101 19.2194 100.967C19.3072 100.939 19.3886 100.894 19.459 100.835C19.542 100.765 19.6031 100.667 19.7254 100.473L51.539 49.8817C51.6059 49.7753 51.6394 49.7221 51.6626 49.6648C51.6824 49.6161 51.6966 49.5653 51.705 49.5134C51.7148 49.4524 51.7138 49.3895 51.7118 49.2638L50.9673 2.64178C50.9495 1.53143 50.9407 0.976258 50.7374 0.775358C50.5695 0.60935 50.3292 0.539182 50.0984 0.588743C49.819 0.648721 49.5128 1.11188 48.9003 2.0382L32.5228 26.8083C32.4479 26.9216 32.4105 26.9782 32.3849 27.0397C32.3632 27.0919 32.3478 27.1466 32.3392 27.2026C32.3291 27.2684 32.3316 27.3362 32.3367 27.4719L33.1183 48.4452C33.1232 48.5766 33.1256 48.6423 33.1162 48.7061C33.1082 48.7605 33.0938 48.8137 33.0733 48.8646C33.0493 48.9245 33.0141 48.98 32.9436 49.0911L1.0985 99.2691C0.736554 99.8394 0.555583 100.125 0.575911 100.36C0.592868 100.557 0.691963 100.737 0.848814 100.857C1.03684 101 1.37458 101 2.05004 101H18.7713Z"
              fill="#222222"
            />
            <path
              d="M42.3994 69.0805C42.2604 69.2992 42.1909 69.4085 42.1641 69.5263C42.1413 69.6261 42.1407 69.7297 42.1623 69.8297C42.1878 69.9478 42.256 70.0579 42.3924 70.2782L61.0837 100.466C61.2055 100.663 61.2665 100.761 61.3497 100.832C61.4203 100.893 61.5021 100.938 61.5905 100.967C61.6947 101 61.8104 101 62.0419 101H77.9973C78.6592 101 78.9902 101 79.1772 100.859C79.3333 100.742 79.4331 100.564 79.4526 100.37C79.4759 100.137 79.3042 99.8539 78.9606 99.2881L52.6587 55.9681C52.3434 55.4488 52.1858 55.1891 51.9801 55.1007C51.8082 55.0268 51.6138 55.0248 51.4403 55.0952C51.2329 55.1794 51.07 55.4358 50.7442 55.9485L42.3994 69.0805Z"
              fill="#222222"
            />
          </g>
        </svg>
        <span className="text-black text-xl">LANDA</span>
      </div>
      <Image
        className="absolute right-28 bottom-0 z-10"
        src="/static/images/panel/login/blur.png"
        alt="Landa Blur"
        width={600}
        height={800}
      />

      <div className="w-9/12 bg-[#CCB598] h-screen flex flex-col items-center justify-center space-y-11">
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
            className={`w-[548px] h-[75px] input input-bordered bg-white/50 backdrop-blur-lg border border-gray-200 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary ${
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
            className={`w-[548px] h-[75px] input input-bordered bg-white/50 backdrop-blur-lg border border-gray-200 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary ${
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="42"
            height="42"
            fill="currentColor"
            className="bi bi-telephone text-black"
            viewBox="0 0 16 16"
          >
            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
          </svg>
          <div className="flex flex-col text-black">
            <span>Reservation</span>
            <span className="font-semibold">855 100 4444</span>
          </div>
        </div>
      </div>
      <div className="w-3/12 bg-[#fff] h-screen relative overflow-hidden">
        <div className="w-[600px] h-[800px]">
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
