import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { useRouter } from 'next/router';
import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });


const Appshell = ({ children }) => {
  const { pathname } = useRouter()
  const path = ['/404']

  return (
    <>
      {path.includes(pathname) ? (
        <div>
          {children}
        </div>
      ) : (
        <>
          <Toaster toastOptions={{
            style:{
              backgroundColor: '#000A12',
              color: '#e7eef6'
            },
            duration: 3000,
            position: 'top-right'
          }}/>
          <div className=" bg-[url('/bg.png')] bg-top bg-no-repeat">
            <div className="w-full backdrop-blur-sm sticky top-0 left-0 z-50 ">
              <div className="max-w-screen-xl mx-auto w-full lg:px-0 px-6">
                <Navbar />
              </div>
            </div>
            <div className={`w-full max-w-screen-xl mx-auto flex flex-col gap-16 lg:px-0 px-6 ${inter.className} -z-10`}>
              {children}
            </div>

            <div className="w-full bg-gradient-to-br from-secondary/5 to-accent/5">
              <div className="max-w-screen-xl mx-auto w-full lg:px-0 px-6">
                <Footer />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Appshell;