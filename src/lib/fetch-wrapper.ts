import { cookies } from 'next/headers';

const fetchWrapper = async <T>(
  url: string,
  options: RequestInit = {},
  cacheOptions: { cache?: RequestCache; tags?: string[] } = {}
): Promise<T | { error: string }> => {
  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${cookies().get('__bsg_session')?.value}`,
      },
      cache: cacheOptions.cache || 'no-cache',
      next: cacheOptions.tags ? { tags: cacheOptions.tags } : undefined,
    });

    if (!response.ok) {
      const errorData = await response.json();
      return { error: errorData?.message || response.statusText };
    }

    const data = await response.json();
    return data as T;
  } catch (error) {
    return {
      error: (error as Error).message || 'Something went wrong',
    };
  }
};

export default fetchWrapper;
