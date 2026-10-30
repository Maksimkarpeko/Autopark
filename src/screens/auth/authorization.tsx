"use client";

import { ArrowRight, GraduationCap, LockKeyhole } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { SignInForm, SignUpForm } from "@/features/auth";

export const AuthorizationPage = () => {
  const pathname = usePathname().slice(1);
  const isRegistration = pathname === "registration";

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f5f5fc] px-4 py-10">
      <div className="w-full max-w-md">
        <div className="overflow-hidden rounded-xl border border-[#e9e8f5] bg-white shadow-sm">
          <div className="px-6 pt-7 sm:px-8">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary-800 text-white">
                  <GraduationCap className="h-6 w-6" />
                </div>

                <div>
                  <p className="text-sm font-bold tracking-wide">АВТОШКОЛА</p>
                  <p className="text-[10px] text-slate-500">Система управления обучением</p>
                </div>
              </div>

              <span className="rounded-md bg-[#eef0ff] px-3 py-1.5 text-[10px] font-medium text-slate-600">
                Личный кабинет
              </span>
            </div>

            <div className="mt-7">
              <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
                {isRegistration ? "Регистрация в системе" : "Вход в систему"}
              </h1>

              <p className="mt-2 text-sm leading-5 text-slate-500">
                {isRegistration
                  ? "Создайте учетную запись для доступа к возможностям автошколы."
                  : "Войдите в личный кабинет, чтобы продолжить работу с системой."}
              </p>
            </div>
          </div>

          <div className="px-6 py-7 sm:px-8">
            {isRegistration ? <SignUpForm /> : <SignInForm />}
          </div>

          <div className="border-t border-[#eeedf6] bg-[#f7f7ff] px-6 py-5 sm:px-8">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-xs text-slate-500">
                  {isRegistration ? "Уже есть учетная запись?" : "Еще нет учетной записи?"}
                </p>

                <Link
                  href={isRegistration ? "/login" : "/registration"}
                  className="mt-1 inline-flex items-center gap-1 text-sm font-semibold text-primary-800 hover:text-primary-900"
                >
                  {isRegistration ? "Войти в личный кабинет" : "Зарегистрироваться"}

                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#e9ebff] text-primary-800">
                <LockKeyhole className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>

        <p className="mt-5 text-center text-xs leading-5 text-slate-400">
          Государственная система обучения
          <span className="mx-2">•</span>
          Автошкола
        </p>
      </div>
    </main>
  );
};
