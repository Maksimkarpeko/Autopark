"use server";
import { cookies } from "next/headers";

export const mockAuth = async () => {
  const cookiesStore = await cookies();

  cookiesStore.set("token", "user", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24,
  });
};
