import "server-only";

import { cookies } from "next/headers";

export const getCookieItem = async (name: string) => {
  try {
    const cookieStore = await cookies();

    return cookieStore.get(name)?.value ?? null;
  } catch (error) {
    console.error(`Ошибка при получении значения из cookie по ключу "${name}":`, error);
    return null;
  }
};
