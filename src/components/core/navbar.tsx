'use client';

import Image from 'next/image';
import Link from 'next/link';
import Logo from '@assets/logo.jpg';
import React, { useRef, useState } from 'react';
import { getAnnouncements } from '@/actions/announcements';
import { useSession } from 'next-auth/react';
import { NotificationBing, ShoppingCart } from 'iconsax-react';
import MobileNav from '@components/core/mobile-nav';
import { signOut } from 'next-auth/react';
import { Cart, useCart } from '@/context/cart-context';
import { MenuButton } from '@components/ui/menu-button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@components/ui/dropdown-menu';
import { Button } from '@components/ui/button';
import CartPanel from '@components/shop/cart-panel';
import { usePathname } from 'next/navigation';
import { publicRoutes } from '@/middleware';
import { Session } from 'next-auth';
import useSWR from 'swr';
import { IAnnouncement } from '@/types/course';
import AnnouncementPanel from '@components/announcement/announcement-panel';
import { logout } from '@/actions/auth';

interface NavBarProps {
  session: Session | null;
}

export default function NavBar({
  session: ses,
}: NavBarProps): React.ReactElement {
  const path = usePathname();
  const [open, setOpen] = React.useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [openAnnouncement, setOpenAnnouncement] = useState(false);
  const { data: session } = useSession();
  const notificationRef = useRef<HTMLDivElement>(null);
  const { dispatch, cart } = useCart();
  const { data: announcements } = useSWR('/announcements', async () => {
    const response: IAnnouncement[] = await getAnnouncements();
    return response;
  });

  const handleToggleSidebar = () => {
    setOpen(!open);
  };

  const handleLogout = async () => {
    dispatch({ type: 'CLEAR_CART', payload: {} as Cart });
    await logout();
    await signOut({ redirect: true, callbackUrl: '/' });
    if (typeof window !== 'undefined') {
      window.localStorage.clear();
    }
  };

  const handleToggleCart = () => {
    setOpenCart(!openCart);
  };

  const handleAnnouncement = () => {
    setOpenAnnouncement(!openAnnouncement);
  };

  return (
    <header className={'sm:h-[78px] h-[50px] z-20 relative'}>
      <nav
        className={
          'flex items-center max-h-[50px] sm:max-h-[78px] h-full justify-between bg-white sm:border-[0.5px] sm:border-[#D3D5D6] py- sm:py-5 px-4 lg:px-16 xl:px-20 w-full fixed top-0 z-30'
        }
      >
        {open && (
          <MobileNav
            open={open}
            onClose={handleToggleSidebar}
            authenticated={session?.user && true}
          />
        )}

        <div className={'flex gap-4 items-center'}>
          {(path === '/' || !publicRoutes.includes(path)) && (
            <div className={'sm:hidden'}>
              <MenuButton isOpen={open} onClick={handleToggleSidebar} />
            </div>
          )}
          <Link href="/dashboard">
            <Image
              loading={'lazy'}
              className={'w-7 sm:w-9'}
              placeholder={'blur'}
              src={Logo}
              alt={'BSG logo'}
              width={36}
              height={36}
            />
          </Link>
        </div>
        {session === null &&
        (path === '/' || !publicRoutes.includes(path)) ? (
          <>
            <div>
              <ul className="hidden md:flex gap-4 ">
                <li>
                  <a
                    href="#about"
                    className={`relative py-2 px-2 text-underline hover:text-yellow-400`}
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    className={`relative py-2 px-2 text-underline hover:text-yellow-400`}
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#faq"
                    className={`relative py-2 px-2 text-underline hover:text-yellow-400`}
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div className="hidden md:flex gap-2 text-sm font-semibold">
              <Link href="/login">
                <button className="h-10 px-4 py-2 text-primary bg-[#E6EBEA] rounded-lg hover:bg-[#DAE0E0]">
                  Sign in
                </button>
              </Link>
              <Link href="/register">
                <Button>Get started</Button>
              </Link>
            </div>
          </>
        ) : null}
        {session?.user && (
          <div
            className={'flex gap-6 items-center justify-start w-max'}
          >
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Image
                  src={`${
                    session?.user?.image
                      ? `${process.env.NEXT_PUBLIC_STORAGE_URL}/${session?.user.image}`
                      : `https://ui-avatars.com/api/?name=${session?.user.firstName}+${session?.user.lastName}&background=063231&color=fff`
                  }`}
                  alt={session.user.name}
                  width={28}
                  height={28}
                  className={
                    'rounded-full cursor-pointer animate-fade animate-once animate-ease-linear'
                  }
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <Button
                  variant={'ghost'}
                  className={'w-full'}
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </DropdownMenuContent>
            </DropdownMenu>
            <div className={'relative'} ref={notificationRef}>
              <NotificationBing
                className={
                  'text-muted cursor-pointer animate-fade animate-once animate-ease-linear'
                }
                onClick={handleAnnouncement}
              />
              {announcements?.length && (
                <div
                  className={
                    'absolute -top-2 -right-2 bg-[#FF170A] text-white text-center text-xs font-semibold rounded-full w-4 h-4'
                  }
                >
                  <span className={'text-xs'}>
                    {announcements?.length ? announcements?.length : 0}
                  </span>
                </div>
              )}
            </div>
            <div className={'relative'}>
              <ShoppingCart
                onClick={handleToggleCart}
                className={
                  'text-muted cursor-pointer animate-fade animate-once animate-ease-linear'
                }
              />
              {cart?.length > 0 && (
                <div
                  className={
                    'absolute -top-2 -right-2 bg-[#FF170A] text-white text-center text-xs font-semibold rounded-full w-4 h-4'
                  }
                >
                  <span className={'text-xs'}>{cart.length}</span>
                </div>
              )}
            </div>
          </div>
        )}
      </nav>
      {openCart && (
        <CartPanel
          open={openCart}
          onClose={handleToggleCart}
          email={session?.user.email as string}
        />
      )}
      {openAnnouncement && (
        <AnnouncementPanel
          announcements={announcements!}
          onClose={handleAnnouncement}
          notificationIconRef={notificationRef}
        />
      )}
    </header>
  );
}
