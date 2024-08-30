import { revalidatePath, revalidateTag } from 'next/cache';
import fetchWrapper from '@/lib/fetch-wrapper';

export const getAnnouncements = async (): Promise<any> => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/announcements`;
  const response = await fetchWrapper<any>(
    url,
    {},
    { tags: ['announcements'] }
  );
  if ('error' in response) {
    console.error(response.error);
    return [];
  }
  return response?.announcement;
};

export const markAnnouncementAsRead = async (userID: number) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/announcements/${userID}`;
  const response = await fetchWrapper<any>(
    url,
    {
      method: 'GET',
    },
    { tags: ['announcements'] }
  );
  if ('error' in response) {
    return response;
  }
  revalidatePath('/dashboard');
  revalidateTag('announcements');
  return response;
};
