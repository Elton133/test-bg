'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Explore() {
  return (
    <section className="bg-background relative py-24 px-4 lg:px-16 border-b border-b-border ">
      <div className="flex flex-col-reverse lg:flex-row gap-10 lg:gap-20 items-center max-w-screen-xl mx-auto">
        <motion.div
          className={'max-w-[400px] w-full'}
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{
            scale: 1,
            opacity: 1,
            transition: { duration: 0.5 },
          }}
        >
          <Image
            src="https://res.cloudinary.com/dpyjjedao/image/upload/v1724163203/books_mexubf.png"
            width={400}
            height={400}
            alt="bsg books"
            className={''}
          />
        </motion.div>
        <motion.div
          className="flex flex-col gap-4 font-medium"
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{
            scale: 1,
            opacity: 1,
            transition: { duration: 0.5 },
          }}
        >
          <h1 className="text-2xl lg:text-4xl font-bold">
            Explore the study guides put together by{' '}
            <span className="text-gradient bg-gradient-to-r from-[#063231] via-[#4E8E9B] to-[#063231]">
              past law students{' '}
            </span>
          </h1>
          <p className="text-sm lg:text-base leading-6">
            Master key concepts and exam strategies by exploring
            insights within the Study Guides
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 border-y gap-y-6 border-black text-medium py-4">
            <div className="flex flex-col">
              <p className="font-semibold text-2xl lg:text-3xl">7</p>
              <p>
                Comprehensive <br /> Courses
              </p>
            </div>
            <div className="flex flex-col">
              <p className="font-semibold text-2xl lg:text-3xl">7</p>
              <p>
                Past Question <br />
                Indices (2018-2023)
              </p>
            </div>
            <div className="flex flex-col">
              <p className="font-semibold text-2xl lg:text-3xl">50+</p>
              <p>
                Essential
                <br />
                Topics
              </p>
            </div>
            <div className="flex flex-col">
              <p className="font-semibold text-2xl lg:text-3xl">100+</p>
              <p>
                Interactive
                <br />
                MCQs
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
