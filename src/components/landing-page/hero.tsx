'use client';

import Lottie from 'react-lottie';
import GirlTyping from '@assets/lottie-files/juicy-girl.json';

export default function Hero() {
  return (
    <section className="relative pt-10 pb-36 border-b border-b-border ">
      <div className=" flex px-4 lg:px-16 flex-col lg:flex-row items-center max-w-screen-xl mx-auto">
        <div className="flex flex-col gap-4 font-medium animate-fade-right">
          <h1 className="text-3xl lg:text-7xl font-bold leading-relaxed">
            Prepare For Your{' '}
            <span className="text-gradient bg-gradient-to-r from-[#E4C162] via-[#FFEDBB] to-[#E4C162]">
              Bar Exam{' '}
            </span>
            With Us
          </h1>
          <p className="text-sm lg:text-base max-w-2xl leading-6">
            We provide law students with a centralized platform,
            streamlining access to key resources for efficient bar exam
            preparation.
          </p>
        </div>
        {/*<Image*/}
        {/*  src="https://res.cloudinary.com/dpyjjedao/image/upload/v1724163211/juicy-girl-working-at-home_yi3vx3.gif"*/}
        {/*  width={500}*/}
        {/*  height={400}*/}
        {/*  className={'animate-fade-left'}*/}
        {/*  alt="girl typing"*/}
        {/*/>*/}
        <Lottie
          options={{
            animationData: GirlTyping,
            loop: true,
            autoplay: true,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice',
              className: 'animate-fade-left',
            },
          }}
          height={400}
          width={500}
        />
      </div>
      <div className="absolute -bottom-60 justify-center flex w-full mx-auto z-10 overflow-hidden animate-jump-in animate-delay-300">
        <div
          id="about"
          className="flex flex-col items-center justify-center w-full max-w-sm lg:max-w-3xl h-80 bg-[rgb(255,251,240)] bg-[url('https://res.cloudinary.com/dpyjjedao/image/upload/v1724163200/blob-sm_l6dtgi.png')] lg:bg-[url('https://res.cloudinary.com/dpyjjedao/image/upload/v1724163199/blobb-bg_zvdcaj.png')] bg-center bg-cover bg-no-repeat rounded-xl py-11 px-11 text-center shadow-lg"
        >
          <p className="font-bold text-3xl mb-4">About The Team</p>
          <p className="leading-6 text-sm lg:text-base max-w-lg">
            The Best Study Guide is compiled and edited by a group of
            former students of the Ghana School of Law Post-Call Law
            Course named the Best Study Darlings. We created this
            comprehensive platform to serve as a one-stop solution for
            the Ghana Bar Exam preparation.
          </p>
        </div>
      </div>
    </section>
  );
}
