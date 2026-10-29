"use client";

import { cn } from "cn";
import { GraduationCap, LockKeyhole } from "lucide-react";
import { useRouter } from "next/navigation";

import type { FC } from "react";

import { Button } from "./button";

interface AuthActionsProps {
  classname?: string;
}

export const AuthActions: FC<AuthActionsProps> = ({ classname }) => {
  const route = useRouter();

  const onClickSignIn = () => {
    route.push("/login");
  };

  const onClickSignUp = () => {
    route.push("/registration");
  };
  return (
    <div className={cn("flex gap-5", classname)}>
      <Button onClick={onClickSignUp} className="bg-primary-800 text-white hover:bg-primary-900">
        <GraduationCap className="mr-2 h-4 w-4" />
        Зарегистрироваться на обучение
      </Button>

      <Button onClick={onClickSignIn} variant="secondary" className="bg-[#eceeff]">
        <LockKeyhole className="mr-2 h-4 w-4" />
        Вход в личный кабинет
      </Button>
    </div>
  );
};
