'use server';

import axiosInstance from '@/lib/axios';
import { cookies } from 'next/headers';
import { IUser } from '@/types/user';
import { redirect } from 'next/navigation';

export async function getUserSession(): Promise<IUser | null> {
  try {
    const { data } = await axiosInstance.get('/api/auth-user', {
      headers: {
        Authorization: `Bearer ${cookies().get('__bsg_session')?.value}`,
      },
    });
    if (data?.user) {
      cookies().set('__verified', data?.user?.user?.email_verified_at);
    }
    return data?.user;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    return null;
  }
}

export async function updateUserProfile(
  data: FormData
): Promise<IUser | null> {
  try {
    const response = await axiosInstance.post(
      '/api/update/profile',
      data,
      {
        headers: {
          Authorization: `Bearer ${cookies().get('__bsg_session')?.value}`,
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    return response.data;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
    return null;
  }
}

export async function deleteUserAccount({
  password,
}: {
  password: string;
}): Promise<any> {
  const response = await axiosInstance
    .delete(`/api/delete/account`, {
      data: { password },
      headers: {
        Authorization: `Bearer ${cookies().get('__bsg_session')?.value}`,
      },
    })
    .then((res) => res.data)
    .catch((e) => e.response.data);
  if (!response.status) {
    return response;
  }

  if (response.status) {
    redirect('/account-deleted');
  }
}

export async function changePassword(data: {
  old_password: string;
  new_password: string;
}) {
  try {
    const response = await axiosInstance.put(
      `/api/change-password`,
      data,
      {
        headers: {
          Authorization: `Bearer ${cookies().get('__bsg_session')?.value}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    // eslint-disable-next-line no-console
    return {
      // @ts-ignore
      error: error?.response?.data,
    };
  }
}

export async function logout() {
  try {
    const response = await axiosInstance.post(
      '/api/logout',
      {},
      {
        headers: {
          Authorization: `Bearer ${cookies().get('__bsg_session')?.value}`,
        },
      }
    );
    cookies().delete('__bsg_session');
    cookies().delete('__verified');
    return response.data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    return null;
  }
}

export async function resendVerificationEmail(email?: string) {
  try {
    const response = await axiosInstance.get('/api/resend/verify', {
      headers: {
        Authorization: `Bearer ${cookies().get('__bsg_session')?.value}`,
      },
    });
    return response.data;
  } catch (error) {
    // @ts-ignore
    console.log(error?.response?.data);
    // @ts-ignore
    return error?.response?.data;
  }
}

export async function deleteUser() {
  try {
    const response = await axiosInstance.delete(`/api/delete/account`, {
      headers: {
        Authorization: `Bearer ${cookies().get('__bsg_session')?.value}`,
      },
    });
    return response.data;
  } catch (e) {
    // @ts-ignore
    console.log(e?.response?.data);
    // @ts-ignore
    return e?.response?.data;
  }
}
