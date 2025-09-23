"use client";


import Button from '@/components/ui/Button'
import HyperLink from '@/components/ui/HyperLink';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import z from 'zod';


import ErrorMessage from '@/components/ui/ErrorMessage';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import Providers from '../../_components/SocialLoginProviders';
import { LoginUser } from '@/server/mutations/auth';
import { loginUserSchema } from '@/server/types/schemas';






type FormFields = z.infer<typeof loginUserSchema>


export default function ResetPasswordForm() {
    const [serverError, setServerError] = useState("");
    const router = useRouter();


    const { register, handleSubmit, formState: { errors, isSubmitting } } =
        useForm<FormFields>({ resolver: zodResolver(loginUserSchema) });

    const onSubmit = async (values: FormFields) => {
        const result = await LoginUser(values);



        if (result.status === "error") {
            setServerError(result.message)
            console.log(result.message);
        } else {
            router.push("/");
            router.refresh()
        }

    }


    return (
        <form onSubmit={handleSubmit(onSubmit)} className='w-80 mt-10'>
              <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Old password</label>
                <input placeholder='Enter password' {...register("password")} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                {errors.password &&
                    <ErrorMessage message={errors.password?.message} />}
            </div>
         
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New password</label>
                <input placeholder='Enter password' {...register("password")} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                {errors.password &&
                    <ErrorMessage message={errors.password?.message} />}
            </div>


            <Button text='Login' isSubmitting={isSubmitting} submittingText='Logging in' />
            <p className="mt-5 text-red-500">{serverError}</p>
                    <HyperLink href='/auth/register' text='Dont have an account? CLICK HERE to Register' />

            <div className='mt-10'>
                <Providers isSubmitting={isSubmitting}/>
           
            </div> 
    


        </form>
    )
}


