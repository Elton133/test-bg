'use server';
import fetchWrapper from '@/lib/fetch-wrapper';

export const getAnnouncements = async (): Promise<any> => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/announcements`;
  const response = await fetchWrapper<any>(
    url,
    { cache: 'no-store' },
    { tags: ['announcements'] }
  );
  if ('error' in response) {
    console.error(response.error);
    return [];
  }
  return response?.announcements;
};

export const markAnnouncementAsRead = async (id: number) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/announcements/${id}`;
  const response = await fetchWrapper<any>(url, {
    method: 'GET',
  });
  if ('error' in response) {
    return response;
  }
  return response;
};
