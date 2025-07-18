import React from 'react'
import Lottie from 'lottie-react';
import page404 from '../../assets/page404.json';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

function Page404() {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center'>
      <Lottie animationData={page404} className='w-full sm:w-[45%]' />
      <Link to={'/'}
        className='px-4 py-2 w-fit rounded-full bg-white button gap-2 text-black text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 flex justify-center items-center text-center shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]'
      >
        <Home /> Return Home
      </Link>
    </div>
  )
}

export default Page404