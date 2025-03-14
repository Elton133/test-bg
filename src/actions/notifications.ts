'use server';

import fetchWrapper from '@/lib/fetch-wrapper';
import { revalidateTag } from 'next/cache';

export interface NotificationRes {
  settings: { show: boolean; receive: boolean; special_offer: boolean };
}
export const getNotificationSettings = async (userId: string) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/notification-settings/${userId}`;

  const res = await fetchWrapper<NotificationRes>(
    url,
    {
      method: 'GET',
    },
    {
      tags: ['notification-settings'],
    }
  );

  if ('error' in res) {
    return res;
  }

  return res;
};

export const updateNotificationSettings = async (data: {
  show: boolean;
  receive: boolean;
  special_offer: boolean;
}) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/notification-settings`;

  const res = await fetchWrapper<{ message: string; data: any }>(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if ('error' in res) {
    return res;
  }
  revalidateTag('notification-settings');
  return res;
};
