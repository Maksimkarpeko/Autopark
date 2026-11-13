import z from "zod";

export const userProfileSchema = z.object({
  fullName: z.string().min(2, "Укажите ФИО полностью"),
  birthDate: z.string().min(1, "Укажите дату рождения"),
  phone: z.string().min(7, "Некорректный номер телефона"),
  email: z.string().email("Некорректный email адрес"),
  address: z.string().min(5, "Укажите адрес регистрации"),
  passport: z.string().min(5, "Укажите паспортные данные"),
  snils: z.string().min(5, "Укажите СНИЛС"),
  medicalCert: z.string().min(3, "Укажите данные медосмотра"),
});

export type UserProfileFormValues = z.infer<typeof userProfileSchema>;
