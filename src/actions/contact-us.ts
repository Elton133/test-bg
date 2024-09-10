'use server';

import fetchWrapper from '@/lib/fetch-wrapper';

const sendMessage = async (data: { message: string }): Promise<any> => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/create/contact-us`;
  const response = await fetchWrapper<any>(
    url,
    {
      method: 'POST',
      body: JSON.stringify(data),
    },
    { tags: ['contact-us'] }
  );
  if ('error' in response) {
    console.error(response.error);
    return [];
  }
  return response;
};

export { sendMessage };
