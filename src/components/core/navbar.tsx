"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "@assets/logo.jpg";
import React, {useState } from "react";
import { useSession } from "next-auth/react";
import { NotificationBing, ShoppingCart } from "iconsax-react";
import MobileNav from "@components/core/mobile-nav";
import { IUser } from "@/types/user";
import { signOut } from "next-auth/react";
import {Cart, useCart} from "@/context/cart-context";
import { MenuButton } from "@components/ui/menu-button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@components/ui/dropdown-menu";
import { Button } from "@components/ui/button";
import CartPanel from "@components/shop/cart-panel";

export default function NavBar(): React.ReactElement {
  const [open, setOpen] = React.useState(false);
  const [openCart, setOpenCart] = useState(false);
  const { data: session } = useSession();
  const {dispatch, cart } = useCart();

  const handleToggleSidebar = () => {
    setOpen(!open);
  };

  const handleLogout = async () => {
    dispatch({ type: "CLEAR_CART", payload: {} as Cart});
    await signOut();
  };

  const handleToggleCart = () => {
    setOpenCart(!openCart);
  };


  return (
    <header className={"sm:h-[78px] h-[56px] z-20"}>
      <nav
        className={
          "flex items-center justify-between bg-white sm:border-[0.5px] sm:border-[#D3D5D6] py-3 sm:py-5 px-4 lg:px-16 xl:px-20 w-full fixed top-0 z-20"
        }
      >
        {open && session?.user && (
          <MobileNav open={open} onClose={handleToggleSidebar} />
        )}

        <div className={"flex gap-4 items-center"}>
          {session?.user && (
            <div className={"sm:hidden"}>
              <MenuButton isOpen={open} onClick={handleToggleSidebar} />
            </div>
          )}
          <Link href={"/"}>
            <Image
              loading={"lazy"}
              className={"w-7 sm:w-9"}
              placeholder={"blur"}
              src={Logo}
              alt={"BSG logo"}
              width={36}
              height={36}
            />
          </Link>
        </div>
        {session?.user && (
          <div className={"flex gap-2 items-center justify-start w-max"}>
            <DropdownMenu>
              <DropdownMenuTrigger>
                {/*TODO: Fix next auth types*/}
                <Image
                    // @ts-ignore
                  src={`${process.env.NEXT_PUBLIC_STORAGE_URL}/${session?.user.image}`}
                    // @ts-ignore
                  alt={session.user.name as string}
                  width={28}
                  height={28}
                  className={
                    "rounded-full cursor-pointer animate-fade animate-once animate-ease-linear"
                  }
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <Button
                  variant={"ghost"}
                  className={"w-full"}
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </DropdownMenuContent>
            </DropdownMenu>
            <NotificationBing
              className={
                "text-muted cursor-pointer animate-fade animate-once animate-ease-linear"
              }
            />
            <div className={'relative'}>
              <ShoppingCart
                onClick={handleToggleCart}
                className={
                  "text-muted cursor-pointer animate-fade animate-once animate-ease-linear"
                }
              />
              <div className={'absolute -top-2 -right-2 bg-[#FF170A] text-white text-center text-xs font-semibold rounded-full w-4 h-4'}>
                <span
                    className={
                    "text-xs"
                    }
                >
                    {cart.length}
                </span>
              </div>
            </div>
          </div>
        )}
      </nav>
      {openCart && (
        <CartPanel
          open={openCart}
          onClose={handleToggleCart}
          // @ts-ignore
          email={session?.user.email as string}
        />
      )}
    </header>
  );
}
