'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { LoginFormData } from '../../app/types/global';
import { login } from '@/services/authService';
import { useRouter } from 'next/navigation';
import { parseCookies } from 'nookies';
import { DecodedToken } from 'app/types/global';
import NotificationSendForm from './base/NotificationSendForm';

export default function LoginPage() {
    const router = useRouter();

    // const initialFormData: 
    const { register, handleSubmit, formState: { errors }, reset } = useForm<LoginFormData>({});
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
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 my-6 gap-y-5 gap-x-6 md:grid-cols-2">
                    <div className="flex flex-col">
                        <input
                            id="email"
                            type="email"
                            {...register('email', {
                                required: 'Your email is required.',
                                // pattern: {
                                //     value: /^[a-z ,.'-]+$/i,
                                //     message: 'Enter a valid email.',
                                // },
                            })}
                            placeholder="Your email*"
                            className={`w-full input input-bordered drop-shadow-lg bg-white ${errors.email ? 'border-red-500' : ''
                                }`}
                        />
                        {errors.email && (
                            <span className="mt-2 text-sm text-yellow-500">
                                {errors.email.message}
                            </span>
                        )}
                    </div>
                    <div className="flex flex-col">
                        <input
                            id="password"
                            type="password"
                            {...register('password', {
                                required: 'Your password is required.',
                                minLength: {
                                    value: 8,
                                    message: 'Your password must be at least 8 characters long.',
                                },
                            })}
                            placeholder="Your password*"
                            className={`w-full input input-bordered drop-shadow-lg bg-white ${errors.password ? 'border-red-500' : ''
                                }`}
                        />
                        {errors.password && (
                            <span className="mt-2 text-sm text-yellow-500">
                                {errors.password.message}
                            </span>
                        )}
                    </div>

                </div>
                <div className="text-center">
                    <button
                        type="submit"
                        className="mt-3 btn btn-wide btn-neutral bg-primary border-none text-white"
                        disabled={send}
                    >
                        {send ? 'Submitting ....' : 'Submit'}
                    </button>
                </div>
            </form>
        </div>
    )
}