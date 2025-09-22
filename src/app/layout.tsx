import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import { getUserSession } from "@/server/auth/session";
import Navbar from "@/components/navigation/Navbar";

const poppins = Poppins({
  subsets:["latin"], 
  weight:["400", "300", "500", "600" ]
});

export const metadata: Metadata = {
  title: "Sky Watch",
  description: "The best place to stay informed on upcoming weather events",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  
  const session = await getUserSession();
  return (
 <html lang="en">
      <body
        className={`${poppins.className}  antialiased`}
      >
<Navbar session={session}/>
        <main className="mx-6 sm:mx-20 md:mx-30 lg:mx-50 mt-10">
      {children}
        </main>
  
      </body>
    </html>
  );
}
