"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "@assets/logo.jpg";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { HambergerMenu, NotificationBing, ShoppingCart } from "iconsax-react";
import { X } from "lucide-react";
import MobileNav from "@components/core/mobile-nav";
import getUserSession from "@/services/get-user";
import { IUser } from "@/types/user";
import {MenuButton} from "@components/ui/menu-button";

export default function NavBar(): React.ReactElement {
  const [open, setOpen] = React.useState(false);
  const [user, setUser] = useState<IUser | null>();
  const { data: session } = useSession();

  const handleToggleSidebar = () => {
    setOpen(!open);
  };

  // Fetching on server hence why this useEffect. I personally hate it myself
  useEffect(() => {
    const getUser = async () => {
      const data = await getUserSession();
      setUser(data);
      return;
    };
    getUser();
  }, []);


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
              <div className={'sm:hidden'}>
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
        {session?.user && user && (
          <div className={"flex gap-2 items-center justify-start"}>
            <Image
              src={`${process.env.NEXT_PUBLIC_STORAGE_URL}/${user?.avatar}`}
              alt={user?.name as string}
              width={28}
              // loading={"lazy"}
              // blurDataURL={}
              height={28}
              // placeholder={"blur"}
              className={
                "rounded-full cursor-pointer animate-fade animate-once animate-ease-linear"
              }
            />
            <NotificationBing
              className={
                "text-muted cursor-pointer animate-fade animate-once animate-ease-linear"
              }
            />
            <ShoppingCart
              className={
                "text-muted cursor-pointer animate-fade animate-once animate-ease-linear"
              }
            />
          </div>
        )}
      </nav>
    </header>
  );
}
