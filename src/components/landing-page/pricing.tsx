'use client';

import RateCard from '@components/ui/rate-card';
import { motion } from 'framer-motion';

export default function Pricing() {
  const today = new Date();
  const currentYear =
    today.getMonth() >= 7
      ? today.getFullYear() + 1
      : today.getFullYear();

  return (
    <section
      id="pricing"
      className=" relative py-24 px-4 lg:px-16 border-b border-b-border"
    >
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center max-w-screen-xl mx-auto">
        <div className="flex flex-col gap-6 font-medium items-start">
          <div className="flex flex-col gap-3">
            <h1 className="text-2xl lg:text-4xl font-bold">
              <span className="text-gradient bg-gradient-to-r from-[#063231] via-[#4E8E9B] to-[#063231]">
                Take A Look At Our Rates{' '}
              </span>
            </h1>
            <p className="text-sm lg:text-base leading-6">
              🔐 Processed securely by Paystack.
              <br />
              Having challenges paying? Please send an email to{' '}
              <a
                className="underline hover:text-gray-600"
                href="mailto:thebeststudyguidegh@gmail.com"
              >
                thebeststudyguidegh@gmail.com
              </a>{' '}
              for assistance.
            </p>
          </div>
          <p className="text-sm lg:text-base leading-6 font-bold text-red-600">
            All subscriptions end on 31st July {currentYear}
          </p>

          <a
            href="/login"
            className="relative inline-flex justify-center whitespace-nowrap rounded-lg px-4 py-4 max-w-xs w-full text-center text-white bg-gradient-to-r from-[#063231] to-[#4E8E9B] shadow before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(-45deg,transparent_25%,theme(colors.white/.5)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat before:animate-bg-move"
          >
            Get me started
          </a>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-4 w-full animate-fade">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{
                scale: 1,
                opacity: 1,
                transition: { duration: 0.5, delay: 0.1 },
              }}
            >
              <RateCard no_of_courses="1 course" price={120} />
            </motion.div>
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{
                scale: 1,
                opacity: 1,
                transition: { duration: 0.5, delay: 0.2 },
              }}
            >
              <RateCard no_of_courses="3 courses" price={300} />
            </motion.div>

            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{
                scale: 1,
                opacity: 1,
                transition: { duration: 0.5, delay: 0.3 },
              }}
            >
              <RateCard no_of_courses="5 courses" price={450} />
            </motion.div>
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{
                scale: 1,
                opacity: 1,
                transition: { duration: 0.5, delay: 0.4 },
              }}
            >
              <RateCard no_of_courses="7 courses" price={600} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
