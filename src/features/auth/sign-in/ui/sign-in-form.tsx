import { ArrowRight, LockKeyhole, Mail } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";

import { Label, Input, Button } from "@/shared/components";

import type { SignInFormValues } from "../schema/sign-in-schema";

export const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormValues>({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
  });

  const onLoginSubmit = async (data: SignInFormValues) => {
    console.log("Login:", data);

    // TODO: API request for login
  };

  return (
    <form onSubmit={handleSubmit(onLoginSubmit)} noValidate className="space-y-5">
      <div className="space-y-2">
        <Label htmlFor="email">Электронная почта</Label>

        <div className="relative">
          <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

          <Input
            id="email"
            type="email"
            placeholder="example@mail.com"
            autoComplete="email"
            aria-invalid={!!errors.email}
            className="pl-10"
            {...register("email", {
              required: "Введите электронную почту",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Введите корректный email",
              },
            })}
          />
        </div>

        {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between gap-2">
          <Label htmlFor="password">Пароль</Label>

          <Link
            href="/forgot-password"
            className="text-xs font-medium text-primary-800 transition-colors hover:text-primary-900"
          >
            Забыли пароль?
          </Link>
        </div>

        <div className="relative">
          <LockKeyhole className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

          <Input
            id="password"
            type="password"
            placeholder="Введите пароль"
            autoComplete="current-password"
            aria-invalid={!!errors.password}
            className="pl-10"
            {...register("password", {
              required: "Введите пароль",
            })}
          />
        </div>

        {errors.password && <p className="text-xs text-red-500">{errors.password.message}</p>}
      </div>

      <div className="flex items-center gap-2">
        <input
          id="remember"
          type="checkbox"
          className="h-4 w-4 rounded border-slate-300 accent-primary-800"
          {...register("remember")}
        />

        <Label htmlFor="remember" className="cursor-pointer text-xs font-normal text-slate-600">
          Запомнить меня
        </Label>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="h-11 w-full bg-primary-800 text-white hover:bg-primary-900"
      >
        {isSubmitting ? "Подождите..." : "Войти в систему"}

        {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
      </Button>
    </form>
  );
};
