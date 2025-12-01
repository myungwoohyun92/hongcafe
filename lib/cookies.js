'use server';

import { cookies } from 'next/headers';

export const setCookie = async (key, value, options = {}) => {
  const cookieStore = await cookies();
  cookieStore.set(key, value, {
    maxAge: options.maxAge || 60 * 60 * 24 * 7,
    httpOnly: options.httpOnly ?? true,
    secure: options.secure ?? process.env.NODE_ENV === 'production',
    sameSite: options.sameSite || 'lax',
    path: options.path || '/',
  });
}

export const getCookie = async (key) => {
  const cookieStore = await cookies();
  return cookieStore.get(key)?.value;
}

export const deleteCookie = async (key) => {
  const cookieStore = await cookies();
  cookieStore.delete(key);
}

export const getAllCookies = async () => {
  const cookieStore = await cookies();
  return cookieStore.getAll();
}