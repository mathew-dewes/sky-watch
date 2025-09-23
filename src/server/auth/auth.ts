
import { PrismaClient } from "@prisma/client";
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma"

import { nextCookies } from "better-auth/next-js";
// import { sendEmail } from "./email";


const prisma = new PrismaClient()

export const auth = betterAuth({
  database: prismaAdapter(prisma,
    { provider: "sqlite" }),
  emailAndPassword: {
    enabled: true,minPasswordLength:8,
    // async sendResetPassword({ user, url }) {
    //   await sendEmail({
    //     to: user.email,
    //     subject: "Reset your password",
    //     text: `Click the link to reset your password: ${url}`,
    //   });
    // },
  },
  
  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string
    },
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    }
  },
  plugins: [nextCookies()]
});