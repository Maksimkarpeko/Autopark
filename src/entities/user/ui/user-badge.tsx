import { LogOut, UserRound } from "lucide-react";
import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/shared/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu";

type UserBadgeProps = {
  name: string;
  role: string;
  avatarUrl?: string;
};

export const UserBadge = ({ name, role, avatarUrl }: UserBadgeProps) => {
  return (
    <div className="flex items-center gap-3">
      <div className="flex flex-col items-end">
        <span className="text-lg font-semibold text-slate-900">{name}</span>

        <span className="text-sm text-muted-foreground">{role}</span>
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar className="size-12 border-primary cursor-pointer border-2 ">
            <AvatarImage src={avatarUrl} alt={name} />
            <AvatarFallback>
              {name
                .split(" ")
                .map((part) => part[0])
                .slice(0, 2)
                .join("")}
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" className="w-44">
          <DropdownMenuItem>
            <Link href="/user-profile" className="cursor-pointer">
              <div className={"flex gap-1.5"}>
                <div>
                  <UserRound className="mr-2 size-4" />
                </div>
                <p className="block">Профиль</p>
              </div>
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem className="cursor-pointer">
            <LogOut className="mr-2 size-4" />
            Выйти
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
