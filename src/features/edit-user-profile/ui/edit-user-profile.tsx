import { zodResolver } from "@hookform/resolvers/zod";
import {
  Calendar,
  CreditCard,
  Lock,
  Mail,
  MapPin,
  Phone,
  ShieldAlert,
  Unlock,
  User,
} from "lucide-react";
import { useForm } from "react-hook-form";

import {
  Badge,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Input,
} from "@/shared/components";

import type { FC } from "react";

import { userProfileSchema, type UserProfileFormValues } from "../schema/user-schema";

type EditUserProfileProps = {
  isEditing: boolean;
  setIsEditing: (value: boolean) => void;
};

export const EditUserProfile: FC<EditUserProfileProps> = ({ isEditing, setIsEditing }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserProfileFormValues>({
    resolver: zodResolver(userProfileSchema),
    defaultValues: {
      fullName: "Смирнов Алексей Владимирович",
      birthDate: "14 мая 2004 г. (20 лет)",
      phone: "+375 (29) 482-19-05",
      email: "a.smirnov2004@example.com",
      address: "г. Гомель, ул. Федюнинского, д. 9",
      passport: "Серия 4518 № 918274, выдан РВД по г. Гомель",
      medicalCert: "№ МС-48192 от 20.01.2024",
    },
  });

  const onSubmit = (data: UserProfileFormValues) => {
    console.log("Сохраненные данные Блока 1:", data);
    setIsEditing(false);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
    >
      <Card className="border-slate-200">
        <CardHeader className="flex flex-row items-center justify-between pb-2 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <User className="w-5 h-5 text-slate-600" />
            <CardTitle className="text-base font-bold">
              Блок 1. Основные сведения учащегося
            </CardTitle>
          </div>
          <Badge variant="outline" className="text-xs text-slate-500 gap-1 border-slate-300">
            {isEditing ? (
              <Unlock className="w-3 h-3 text-emerald-600" />
            ) : (
              <Lock className="w-3 h-3" />
            )}
            {isEditing ? "Режим редактирования" : "только чтение"}
          </Badge>
        </CardHeader>

        <CardContent className="pt-4 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs text-slate-500 font-medium">Фамилия, имя, отчество</label>
              <div className="relative">
                <Input
                  {...register("fullName")}
                  disabled={!isEditing}
                  className="pr-9 disabled:opacity-90 disabled:bg-slate-50"
                />
                <User className="w-4 h-4 absolute right-3 top-3 text-slate-400 pointer-events-none" />
              </div>
              {errors.fullName && <p className="text-xs text-red-500">{errors.fullName.message}</p>}
            </div>

            <div className="space-y-1">
              <label className="text-xs text-slate-500 font-medium">Дата рождения</label>
              <div className="relative">
                <Input
                  {...register("birthDate")}
                  disabled={!isEditing}
                  className="pr-9 disabled:opacity-90 disabled:bg-slate-50"
                />
                <Calendar className="w-4 h-4 absolute right-3 top-3 text-slate-400 pointer-events-none" />
              </div>
              {errors.birthDate && (
                <p className="text-xs text-red-500">{errors.birthDate.message}</p>
              )}
            </div>

            <div className="space-y-1">
              <label className="text-xs text-slate-500 font-medium">Номер телефона</label>
              <div className="relative">
                <Input
                  {...register("phone")}
                  disabled={!isEditing}
                  className="pr-9 disabled:opacity-90 disabled:bg-slate-50"
                />
                <Phone className="w-4 h-4 absolute right-3 top-3 text-slate-400 pointer-events-none" />
              </div>
              {errors.phone && <p className="text-xs text-red-500">{errors.phone.message}</p>}
            </div>

            <div className="space-y-1">
              <label className="text-xs text-slate-500 font-medium">Электронная почта</label>
              <div className="relative">
                <Input
                  {...register("email")}
                  disabled={!isEditing}
                  className="pr-9 disabled:opacity-90 disabled:bg-slate-50"
                />
                <Mail className="w-4 h-4 absolute right-3 top-3 text-slate-400 pointer-events-none" />
              </div>
              {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs text-slate-500 font-medium">
              Адрес регистрации по паспорту
            </label>
            <div className="relative">
              <Input
                {...register("address")}
                disabled={!isEditing}
                className="pr-9 disabled:opacity-90 disabled:bg-slate-50"
              />
              <MapPin className="w-4 h-4 absolute right-3 top-3 text-slate-400 pointer-events-none" />
            </div>
            {errors.address && <p className="text-xs text-red-500">{errors.address.message}</p>}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs text-slate-500 font-medium">Паспорт гражданина РФ</label>
              <div className="relative">
                <Input
                  {...register("passport")}
                  disabled={!isEditing}
                  className="pr-9 disabled:opacity-90 disabled:bg-slate-50"
                />
                <CreditCard className="w-4 h-4 absolute right-3 top-3 text-slate-400 pointer-events-none" />
              </div>
              {errors.passport && <p className="text-xs text-red-500">{errors.passport.message}</p>}
            </div>
          </div>

          <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
            <div className="space-y-1 flex-1">
              <span className="text-xs text-slate-500 font-medium block">
                Медицинская справка (форма № 003-В/у)
              </span>
              <div className="flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-emerald-600 shrink-0" />
                <Input
                  {...register("medicalCert")}
                  disabled={!isEditing}
                  className="h-8 text-sm font-semibold border-none bg-transparent shadow-none p-0 focus-visible:ring-0 disabled:opacity-100"
                />
              </div>
              {errors.medicalCert && (
                <p className="text-xs text-red-500">{errors.medicalCert.message}</p>
              )}
            </div>
            <div className="text-xs text-slate-500 text-right">
              <Badge variant="secondary" className="bg-emerald-100 text-emerald-800 mb-1">
                Действительна
              </Badge>
              <div>
                Срок действия: до 20.01.2025{" "}
                <span className="text-slate-400">(осталось 8 месяцев)</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </form>
  );
};
