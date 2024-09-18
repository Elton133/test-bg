'use client';

import { Edit2, Lock1, NotificationBing } from 'iconsax-react';
import { BookOpen } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navItems = [
  {
    id: 1,
    title: 'Edit Profile',
    icon: <Edit2 size={24} strokeWidth={1.5} />,
    url: '/dashboard/account-settings/edit-profile',
  },
  {
    id: 2,
    title: 'Change Password',
    icon: <Lock1 size={24} strokeWidth={1.5} />,
    url: '/dashboard/account-settings/change-password',
  },
  {
    id: 3,
    title: 'Notifications',
    icon: <NotificationBing size={24} strokeWidth={1.5} />,
    url: '/dashboard/account-settings/notification',
  },
  {
    id: 4,
    title: 'Privacy policy',
    icon: <BookOpen size={24} strokeWidth={1.5} />,
    url: '/dashboard/account-settings/privacy',
  },
  {
    id: 5,
    title: 'Terms & Conditions',
    icon: <Edit2 size={24} strokeWidth={1.5} />,
    url: '/dashboard/account-settings/billing',
  },
];

export default function SettingsNavigationPane() {
  const path = usePathname();

  return (
    <section
      className={cn('md:max-w-[312px] w-full', {
        'hidden md:flex md:flex-col gap-6': navItems.some(
          (item) => path === item.url
        ),
        'v-stack gap-6': navItems.some((item) => path !== item.url),
      })}
    >
      <p className={'text-xs text-muted'}>General</p>
      {navItems.slice(0, 3).map((item) => (
        <Link
          href={item.url}
          key={item.id}
          className={cn('h-stack p-2 rounded-[5px]', {
            'bg-gray-100': path === item.url,
          })}
        >
          {item.icon}
          <p className={'text-base font-medium'}>{item.title}</p>
        </Link>
      ))}
      <p className={'text-xs text-muted'}>Legal</p>
      {navItems.slice(3).map((item) => (
        <Link
          href={item.url}
          key={item.id}
          className={cn('h-stack p-2 rounded-[5px]', {
            'bg-gray-100': path === item.url,
          })}
        >
          {item.icon}
          <p className={'text-base font-medium'}>{item.title}</p>
        </Link>
      ))}
    </section>
  );
}
