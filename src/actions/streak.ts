'use server';

import fetchWrapper from '@/lib/fetch-wrapper';

const getStreak = async (): Promise<any> => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/streak`;
  const response = await fetchWrapper<any>(
    url,
    {},
    { tags: ['streak'] }
  );
  if ('error' in response) {
    console.error(response.error);
    return [];
  }
  return response;
};

const markStreakAsCompleted = async () => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/create/streak`;
  const response = await fetchWrapper<any>(
    url,
    {
      method: 'GET',
    },
    { tags: ['streak'] }
  );
  if ('error' in response) {
    return response;
  }
  return response;
};

export { getStreak, markStreakAsCompleted };
