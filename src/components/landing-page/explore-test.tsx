'use client';

import { motion } from 'framer-motion';

export default function ExploreTest() {
  return (
    <section className=" relative py-24 px-4 lg:px-16 border-b border-b-border ">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center max-w-screen-xl mx-auto">
        <div className="flex flex-col gap-4 font-medium">
          <h1 className="text-2xl lg:text-4xl font-bold">
            Put Your{' '}
            <span className="text-gradient bg-gradient-to-r from-[#063231] via-[#4E8E9B] to-[#063231]">
              Knowledge{' '}
            </span>
            To Test!
          </h1>
          <p className="text-sm lg:text-base leading-6">
            Explore our library of over 5000 multiple-choice questions
            (MCQs) and get a sneak peek into what awaits you on the bar
            exam. Pick a course now and challenge yourself!
          </p>
        </div>
        <motion.video
          className="rounded-xl"
          width={600}
          height={500}
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
            src="https://res.cloudinary.com/dn5ks1ljf/video/upload/v1723764956/RPReplay_Final1709311747_db1v4r.mov"
            type="video/mp4"
          ></source>
        </motion.video>
      </div>
    </section>
  );
}
