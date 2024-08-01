"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { Button } from "@components/ui/button";
import { ArrowRight, ShoppingCart } from "iconsax-react";
import { useCart } from "@/context/cart-context";

interface CourseCardProps {
  courseName?: string;
  progress?: number;
  imageUrl?: string;
  courseID?: string;
  purchased?: boolean;
}

export default function CourseCardWithButtons({
  courseName,
  imageUrl,
  courseID,
  purchased,
}: CourseCardProps) {
  const { dispatch, cart } = useCart();

  const handleAddToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        id: courseID as string,
        courseName: courseName as string,
      },
    });
  };

  const isAdded = cart.some((item) => item.id === courseID);

  return (
    <div
      className={
        "v-stack p-3 md:max-w-[300px] bg-white shadow-md w-full rounded-[18px] animate-once animate-flip-up animate-duration-300 animate-delay-200"
      }
    >
      <div className={"v-stack stack-center"}>
        <Image
          src={
            imageUrl ||
            "https://res.cloudinary.com/dzpjlfcrq/image/upload/v1721780876/c0e407a535283456f382c1a9d2c0c822_w46jpj.png"
          }
          alt={"course cover"}
          className={
            "rounded-lg w-full max-h-[180px] max-w-[300] object-center object-cover"
          }
          width={303}
          height={180}
        />
      </div>
      <div className={"v-stack justify-between w-full py-4 gap-2"}>
        <div className={"flex justify-between w-full"}>
          <p className={"text-xs sm:text-sm font-semibold"}>{courseName}</p>
        </div>
        <div className={"w-full flex gap-2 sm:justify-between"}>
          {!purchased && (
            <Button
              // onClick={() => {
              // }}
              variant={"outline"}
              className={"bg-white w-full"}
            >
              <div className={"flex items-center gap-2"}>
                <p className={"text-sm"}>View course</p>
                <ArrowRight
                  size={16}
                  className={"text-muted text-base cursor-pointer"}
                />
              </div>
            </Button>
          )}
          {!purchased && (
            <Button
              className={
                cn("bg-brand-yellow-primary text-xs md:text-sm text-primary hover:bg-brand-yellow-accent w-full", {
                  'bg-[#D3D5D6]': isAdded
                })
              }
              disabled={isAdded}
              onClick={handleAddToCart}
            >
              <div className={"flex items-center gap-2"}>
                <p
                  className={"text-xs font-semibold"}
                >
                  {`${!isAdded ? "Add to cart" : "Added"}`}
                </p>
                {!isAdded ? (
                  <ShoppingCart
                    size={16}
                    className={"text-muted text-primary cursor-pointer"}
                  />
                ) : (
                  <Check
                    size={16}
                    className={"text-muted text-primary cursor-pointer"}
                  />
                )}
              </div>
            </Button>
          )}
          {purchased && (
            <Button className={'bg-[#D3D5D6] text-[#70787C] hover:bg-gray-300'}>
              Purchased
            </Button>
          )
          }
        </div>
      </div>
    </div>
  );
}
