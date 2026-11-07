import { CalendarDays, ClipboardList, CreditCard, User } from "lucide-react";

export const navigationItems = [
  {
    title: "Профиль",
    href: "/user-profile",
    icon: User,
  },
  {
    title: "Расписание",
    href: "/schedule",
    icon: CalendarDays,
  },
  {
    title: "Экзамены",
    href: "/exams",
    icon: ClipboardList,
  },
  {
    title: "Оплата",
    href: "/payment",
    icon: CreditCard,
  },
];
