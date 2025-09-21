"use client";


import Button from '@/components/ui/Button'
import HyperLink from '@/components/ui/HyperLink';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import z from 'zod';
import ErrorMessage from '../../../../components/ui/ErrorMessage';
import { useState } from 'react';
import Providers from '../../_components/SocialLoginProviders';
import { useRouter } from 'next/navigation';
import { RegisterUser } from '@/server/mutations/auth';
import { registerUserSchema } from '@/server/types/schemas';
import LocationSearchSelector from './LocationSearchSelector';





type FormFields = z.infer<typeof registerUserSchema>
export default function RegisterForm() {
        const router = useRouter();
    
        const [serverError, setServerError] = useState("")


    const {register, setValue ,handleSubmit, formState:{errors, isSubmitting}} =
        useForm<FormFields>({resolver: zodResolver(registerUserSchema)});


        const onSubmit = async (values: FormFields) =>{
  const result = await RegisterUser(values);


            if (result.status === "error"){
                setServerError(result.message)
                console.log(result.message);
                
            } else{
                     router.push("/");
            router.refresh()
            }
            

        }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className='w-80 mt-10'>
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                <input {...register("name")} type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Full name"/>
         {errors.name && 
                <ErrorMessage message={errors.name?.message}/>}
            </div>
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input {...register("email")} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@example.com"/>
                {errors.email && 
                <ErrorMessage message={errors.email?.message}/>}
            </div>
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                <input placeholder='8 characters minimum' {...register("password")} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                      {errors.password && 
                <ErrorMessage message={errors.password?.message}/>}
            </div>
             <div className="mb-5 mt-10">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Location</label>

            <LocationSearchSelector setValue={setValue} register={register}/>
            {errors.name && 
                <ErrorMessage message={errors.location?.message}/>}
            </div>

            
        <Button text='Register' isSubmitting={isSubmitting} submittingText='Submitting'/>
                <p className="mt-5 text-red-500">{serverError}</p>
             <HyperLink href='/auth/login' text='Already have an account? CLICK HERE to Login'/>
    <div className='mt-10'>
                 <Providers isSubmitting={isSubmitting}/>
            
             </div> 

        </form>
    )
}


