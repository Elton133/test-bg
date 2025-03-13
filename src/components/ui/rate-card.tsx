import Image from 'next/image';
import React from 'react';

interface RateCardProps {
  no_of_courses: string;
  price: number;
}

const RateCard: React.FC<RateCardProps> = ({
  no_of_courses,
  price,
}) => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="relative group flex flex-col items-start w-full xl:max-w-72 h-52 gap-4 border border-border rounded-lg px-4 pe-4 pb-4 ps-4 pt-5 hover:pt-4 hover:bg-brand-text hover:text-white ">
      <div className="h-16 flex flex-col gap-2">
        <Image
          className="group-hover:visible invisible" // Keep the space but toggle visibility
          src="https://res.cloudinary.com/dpyjjedao/image/upload/v1724163200/wired-flat-237-star-rating_swlijs.gif"
          width={28}
          height={28}
          alt="rating star flipping"
        />
        <p className="!text-black items-baseline px-4 py-1 font-bold text-sm bg-gradient-to-r from-[#FDCDC1] to-[#FDD66D] rounded-full">
          {no_of_courses}
        </p>
      </div>
      <p>The subscription ends on 31st July {currentYear}</p>
      <p className="text-3xl font-bold">
        <span className="text-sm">GHS </span>
        {price}
      </p>
    </div>
  );
};

export default RateCard;
