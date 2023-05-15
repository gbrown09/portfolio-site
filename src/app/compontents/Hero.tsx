import React from 'react'

export default function Hero() {
    return (
    <div className="h-screen max-w-full px-8 mx-auto mt-12">
      <div className=" h-full text-center text-gray-800">
        <div className="min-h-80 max-h-[60rem] min-w-full h-full rounded-lg shadow-lg px-2 py-12 md:py-16 md:px-12 mt-[100px] bg-gradient-to-b from-slate-600 to-slate-800">
            <div className='flex flex-col h-full place-content-center'>
        <h1 className="mb-2 mt-2 text-white font-medium leading-tight">Hi, My name is Garrett Brown</h1>
        <p className="mb-4 text-lg text-neutral-100 dark:text-neutral-200 text-center">
            A Full Stack developer based in the Austin Metro Area. Enjoys both front and backend 
        </p>
        </div>
        </div>
      </div>
    </div>
    )
}