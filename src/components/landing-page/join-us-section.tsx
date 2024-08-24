'use client';

import { motion } from 'framer-motion';

export default function JoinUsSection() {
  return (
    <section className=" relative py-24 lg:ps-16 bg-[#FDD66D] border-b border-b-border">
      <div className="flex flex-col lg:flex-row gap-4  items-center max-w-screen-xl mx-auto">
        <div className="flex flex-col gap-4 px-4 font-medium">
          <h1 className="text-2xl lg:text-4xl font-bold">
            We will be your{' '}
            <span className="text-gradient bg-gradient-to-r from-[#063231] via-[#4E8E9B] to-[#063231]">
              Best Study Guide
            </span>
          </h1>
          <p className="text-sm lg:text-base leading-6">
            Guiding you every step of the way towards acing your bar
            exam and launching your legal career with confidence.
          </p>
          <a
            href="/login"
            className="relative inline-flex justify-center whitespace-nowrap rounded-lg px-4 py-4 max-w-xs w-full text-center text-white bg-gradient-to-r from-[#063231] to-[#4E8E9B] shadow before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(-45deg,transparent_25%,theme(colors.white/.5)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat before:animate-bg-move"
          >
            Join The BSG Family!
          </a>
        </div>
        <motion.video
          className=""
          width={800}
          height={800}
          autoPlay
          muted
          loop
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{
            scale: 1,
            opacity: 1,
            transition: { duration: 0.5 },
          }}
        >
          <source
            src="https://res.cloudinary.com/dpyjjedao/video/upload/v1724170736/ayes_video_fu6wim.mp4"
            type="video/mp4"
          ></source>
        </motion.video>
      </div>
    </section>
  );
}
