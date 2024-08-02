"use client";

import {
  Sheet,
  SheetContent,
  // SheetDescription,
  SheetHeader,
  SheetTitle,
  // SheetTrigger,
} from "@/components/ui/sheet";
import { Trash } from "iconsax-react";
import { Button } from "@components/ui/button";
import { Cart, useCart } from "@/context/cart-context";
import { useCallback, useEffect, useState } from "react";
import { nanoid } from "nanoid";
import PayStackButton from "@components/shop/paystack-button";
import Image from "next/image";
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
    await purchaseCourse({
      course: cart.map((item) => item.id),
      reference,
    });
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
            <Image
              src={
                "https://res.cloudinary.com/dzpjlfcrq/image/upload/v1722470779/shopping-cart_gxsiyh.png"
              }
              alt={"cart image"}
              width={300}
              height={300}
              className={"max-w-[105px] mx-auto"}
            />
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
