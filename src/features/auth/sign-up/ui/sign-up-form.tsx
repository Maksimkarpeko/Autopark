import { ArrowRight, LockKeyhole, Mail, User } from "lucide-react";
import { useForm } from "react-hook-form";

import { Label, Button, Input } from "@/shared/components";

import type { SignUpFormValues } from "../schema/sign-up-schema";

export const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormValues>({
    mode: "onChange",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  const onRegistrationSubmit = async (data: SignUpFormValues) => {
    console.log("Registration:", data);

    // TODO: API request for registration
  };

  return (
    <form onSubmit={handleSubmit(onRegistrationSubmit)} noValidate className="space-y-5">
      <div className="space-y-2">
        <Label htmlFor="firstName">Имя</Label>

        <div className="relative">
          <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

          <Input
            id="firstName"
            placeholder="Введите имя"
            autoComplete="given-name"
            aria-invalid={!!errors.firstName}
            className="pl-10"
            {...register("firstName", {
              required: "Введите имя",
              minLength: {
                value: 2,
                message: "Минимум 2 символа",
              },
            })}
          />
        </div>

        {errors.firstName && <p className="text-xs text-red-500">{errors.firstName.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="lastName">Фамилия</Label>

        <div className="relative">
          <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

          <Input
            id="lastName"
            placeholder="Введите фамилию"
            autoComplete="family-name"
            aria-invalid={!!errors.lastName}
            className="pl-10"
            {...register("lastName", {
              required: "Введите фамилию",
              minLength: {
                value: 2,
                message: "Минимум 2 символа",
              },
            })}
          />
        </div>

        {errors.lastName && <p className="text-xs text-red-500">{errors.lastName.message}</p>}
      </div>

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
        <Label htmlFor="password">Пароль</Label>

        <div className="relative">
          <LockKeyhole className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

          <Input
            id="password"
            type="password"
            placeholder="Введите пароль"
            autoComplete="new-password"
            aria-invalid={!!errors.password}
            className="pl-10"
            {...register("password", {
              required: "Введите пароль",
              minLength: {
                value: 8,
                message: "Пароль должен содержать минимум 8 символов",
              },
            })}
          />
        </div>

        {errors.password && <p className="text-xs text-red-500">{errors.password.message}</p>}

        <p className="text-xs text-slate-500">Используйте не менее 8 символов.</p>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="h-11 w-full bg-primary-800 text-white hover:bg-primary-900"
      >
        {isSubmitting ? "Подождите..." : "Зарегистрироваться"}

        {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
      </Button>
    </form>
  );
};
