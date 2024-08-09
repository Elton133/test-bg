"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Trash } from "iconsax-react";
import { Button } from "@components/ui/button";
import { Cart, useCart } from "@/context/cart-context";
import { useCallback, useEffect, useState } from "react";
import { nanoid } from "nanoid";
import PayStackButton from "@components/shop/paystack-button";
import { useRouter } from "next/navigation";
import { purchaseCourse } from "@/actions/courses";

interface CartPanelProps {
  open: boolean;
  onClose: () => void;
  email: string;
}
export default function CartPanel({ open, onClose, email }: CartPanelProps) {
  const { cart, dispatch } = useCart();
  const [reference] = useState(nanoid());
  const router = useRouter();
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleRemoveFromCart = (id: string) => {
    const existingItem = cart.find((item) => item.id === id);
    if (existingItem) {
      dispatch({ type: "REMOVE_FROM_CART", payload: existingItem });
    }
  };

  const calculateTotal = useCallback(() => {
    const basePrice = 120;
    switch (cart.length) {
      case 1:
      case 2:
      case 4:
      case 6:
        setTotal(basePrice * cart.length);
        break;
      case 3:
        setTotal(basePrice * cart.length - 60);
        break;
      case 5:
        setTotal(basePrice * cart.length - 150);
        break;
      case 7:
        setTotal(basePrice * cart.length - 240);
        break;
      default:
        setTotal(0);
    }
  }, [cart.length]);

  useEffect(() => {
    calculateTotal();
  }, [calculateTotal, cart]);

  const paystackCallback = async (reference: string) => {
    setLoading(true);
    const res = await purchaseCourse({
      course: cart.map((item) => item.id),
      reference,
    });
    if (res?.status) {
      router.push("/dashboard/my-learning");
    }
  };

  const paystackConfig = {
    reference: reference,
    amount: total,
    email: email,
    loading: loading,
    disabled: cart.length === 0,
    onSuccess: () => {
      paystackCallback(reference);
      dispatch({ type: "CLEAR_CART", payload: {} as Cart });
    },
    onClose,
  };

  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent className={"w-[300px] sm:w-[400px]"}>
        <SheetHeader className={"py-2 bg-primary px-4"}>
          <SheetTitle className={"text-white py-[6%]"}>Cart</SheetTitle>
        </SheetHeader>
        {cart.length > 0 && (
          <div className={"px-4 py-6"}>
            <div className={"flex flex-col gap-y-4"}>
              {cart.map((item) => (
                <div
                  key={item.id}
                  className={
                    "flex justify-between items-center bg-gray-50 p-2 border-b animate-fade-up animate-once"
                  }
                >
                  <p className={"text-base font-semibold"}>{item.courseName}</p>
                  <Trash
                    size={20}
                    color={"#2C7873"}
                    onClick={() => handleRemoveFromCart(item.id)}
                    className={"hover:animate-bounce cursor-pointer"}
                  />
                </div>
              ))}
            </div>
            <div className={"py-16 flex flex-col gap-"}>
              <div className={"flex justify-between items-center"}>
                <p className={"text-muted"}>Total</p>
                <p className={"font-semibold"}>{`GHS ${total}`}</p>
              </div>
            </div>
            <PayStackButton {...paystackConfig} />
          </div>
        )}
        {cart.length === 0 && (
          <div className={"flex flex-col items-center gap-6 px-6 py-12"}>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="106"
                height="106"
                viewBox="0 0 106 106"
                fill="none"
              >
                <rect
                  width="105.5"
                  height="105.5"
                  rx="52.75"
                  transform="matrix(-1 0 0 1 105.75 0)"
                  fill="#F0F0F0"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M31.7362 18.566L27.7383 20.0467L34.5495 43.1456L52.614 37.1694L54.2428 36.6305L50.7632 25.1551L47.2835 13.6797L31.7362 18.566ZM44.174 19.4544L33.513 22.5639L36.1783 30.5597L46.8393 27.5983L44.174 19.4544Z"
                  fill="#FDD66D"
                />
                <path
                  d="M52.614 37.1694L34.5495 43.1456V44.4158H41.6327L44.174 43.886L53.6505 40.9246L52.614 37.1694Z"
                  fill="#FEF2D2"
                />
                <path
                  d="M54.2428 36.6305L52.614 37.1694L53.6505 40.9246L44.174 43.886H66.9768L69.0498 28.7828L50.7632 25.1551L54.2428 36.6305Z"
                  fill="#FDCDC1"
                />
                <path
                  d="M34.5495 43.1456L27.7383 20.0467L31.7362 18.566L47.2835 13.6797L50.7632 25.1551M34.5495 43.1456L52.614 37.1694M34.5495 43.1456V44.4158H41.6327L44.174 43.886M52.614 37.1694L54.2428 36.6305L50.7632 25.1551M52.614 37.1694L53.6505 40.9246M53.6505 40.9246L56.3158 40.1842M53.6505 40.9246L44.174 43.886M50.7632 25.1551L69.0498 28.7828L66.9768 43.886H44.174M33.513 22.5639L44.174 19.4544L46.8393 27.5983L36.1783 30.5597L33.513 22.5639Z"
                  stroke="#0B111C"
                  strokeWidth="0.29614"
                />
                <path
                  d="M70.1045 42.2092C70.1061 42.324 70.1117 42.4396 70.1215 42.5559L72.3348 69.1152C72.7081 73.4618 69.2682 77.195 64.895 77.195H36.4957C32.6557 77.195 29.2958 74.0485 29.0025 70.2352L27.5626 50.2357C27.2426 45.8091 30.6025 42.2092 35.0557 42.2092H70.1045Z"
                  fill="#B8C99B"
                />
                <path
                  d="M79.668 37.2227H75.0281C72.1481 37.2227 69.8815 39.7026 70.1215 42.5559M70.1215 42.5559L72.3348 69.1152C72.7081 73.4618 69.2682 77.195 64.895 77.195H36.4957C32.6557 77.195 29.2958 74.0484 29.0025 70.2352L27.5626 50.2357C27.2426 45.8091 30.6025 42.2092 35.0557 42.2092H70.1045C70.1061 42.324 70.1117 42.4396 70.1215 42.5559Z"
                  stroke="#0B111C"
                  strokeWidth="0.631564"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M38.3335 87.2219C38.3335 89.0628 39.8258 90.5552 41.6667 90.5552C43.5077 90.5552 45 89.0628 45 87.2219C45 85.381 43.5077 83.8887 41.6667 83.8887C39.8258 83.8887 38.3335 85.381 38.3335 87.2219Z"
                  fill="#C7C5B6"
                  stroke="#0B111C"
                  strokeWidth="0.631564"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M59.6694 87.2219C59.6694 89.0628 61.1618 90.5552 63.0027 90.5552C64.8436 90.5552 66.3359 89.0628 66.3359 87.2219C66.3359 85.381 64.8436 83.8887 63.0027 83.8887C61.1618 83.8887 59.6694 85.381 59.6694 87.2219Z"
                  fill="#C7C5B6"
                  stroke="#0B111C"
                  strokeWidth="0.631564"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M61 53.2227H29.0008"
                  stroke="#0B111C"
                  strokeWidth="0.631564"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className={"text-center font-medium text-lg"}>
              Your cart is empty!
            </h3>
            <p className={"text-[#70787C] text-sm text-center"}>
              Buy our courses now and access expertly crafted content
            </p>
            <Button
              variant={"outline"}
              className={
                "bg-white w-full mt-8 text-primary text-sm font-medium border border-primary focus-visible:border-primary focus-visible:ring-primary"
              }
              onClick={() => {
                router.push("/dashboard/shop");
                onClose();
              }}
            >
              Start shopping
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
