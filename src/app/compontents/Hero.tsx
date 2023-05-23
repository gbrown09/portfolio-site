import React from "react";

export default function Hero() {
  return (
    <div className="h-screen max-w-[80%] mx-auto mt-12">
      <div className=" h-full text-center">
        <div className="min-h-80 max-h-[60rem] min-w-full h-full rounded-lg shadow-lg px-2 py-12 md:py-16 md:px-12 bg-gradient-to-br from-base-100 to-neutral">
          <div className="flex flex-col h-full place-content-center">
            <h1 className="mb-2 mt-2 sm:text-4xl md:text-7xl font-bold font-mono leading-tight">
              Hi, My name is Garrett Brown
            </h1>
            <p className="mb-4 text-lg text-center">
              A Full Stack developer based in the Austin Metro Area focused on building Front-end
              and Back-end applications that lead to successfull software solutions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
