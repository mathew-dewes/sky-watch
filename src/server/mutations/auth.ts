"use server";

import z from "zod";


import { headers } from "next/headers";
import { APIError } from "better-auth/api";
import { redirect } from "next/navigation";

import { auth } from "../auth/auth";
import { loginUserSchema, registerUserSchema } from "../types/schemas";

export async function RegisterUser(values: z.infer<typeof registerUserSchema>) {


    const validate = registerUserSchema.safeParse(values);

    if (!validate.success) {
        return {
            status: "error", message: validate.error.message
        }
    }

    const { name, email, password } = values;


    try {
        await auth.api.signUpEmail({
        body: {
            email, password, name, callbackURL: "/"
        }
    });

    
    return {
        status: "success", message: "User created successfully"
    }
    } catch (error) {
         if (error instanceof APIError) {
        console.log(error.message, error.status)
            return {
        status: "error", message: error.message
    }

    } else {
        console.log(error);
        
        return {
        status: "error", message: "There was an error"
    }
    }
           
        
    }

  


}
export async function LoginUser(values: z.infer<typeof loginUserSchema>) {


    const validate = loginUserSchema.safeParse(values);

    if (!validate.success) {
        return {
            status: "error", message: validate.error.message
        }
    }

    const { email, password } = values;

    try {
         await auth.api.signInEmail({
        body: {
            email, password, callbackURL: "/"
        }

        
    });
   
    

        return {
        status: "success", message: "User created successfully"
    }
    } catch (error) {
          if (error instanceof APIError) {
        console.log(error.message, error.status)
            return {
        status: "error", message: error.message
    }

    } else {
        console.log(error);
        
        return {
        status: "error", message: "There was an error"
    }
    }
           
        
        
    }






}

export async function Logout() {

    const result = await auth.api.signOut({
        headers: await headers()
    });

    return result;

}


export async function signInSocial(provider: "github" | "google"){
                const {url} = await auth.api.signInSocial({
        body: {
            provider, callbackURL: "/"
        }

        
    });

    if (url){
        redirect(url)
    }

   

}

