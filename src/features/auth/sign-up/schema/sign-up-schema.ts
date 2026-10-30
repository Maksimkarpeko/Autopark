import { z } from "zod";

export const signUpSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(1, "Введите имя")
    .min(2, "Имя должно содержать минимум 2 символа")
    .regex(/^[\p{L}]+(?:[ '-][\p{L}]+)*$/u, "Имя содержит недопустимые символы"),

  lastName: z
    .string()
    .trim()
    .min(1, "Введите фамилию")
    .min(2, "Фамилия должна содержать минимум 2 символа")
    .regex(/^[\p{L}]+(?:[ '-][\p{L}]+)*$/u, "Фамилия содержит недопустимые символы"),

  email: z.string().trim().min(1, "Введите электронную почту").email("Введите корректный email"),

  password: z
    .string()
    .min(1, "Введите пароль")
    .min(8, "Пароль должен содержать минимум 8 символов")
    .regex(/[a-zA-Zа-яА-ЯёЁ]/, "Пароль должен содержать хотя бы одну букву")
    .regex(/\d/, "Пароль должен содержать хотя бы одну цифру"),
});

export type SignUpFormValues = z.infer<typeof signUpSchema>;
