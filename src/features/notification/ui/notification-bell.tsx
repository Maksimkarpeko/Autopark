"use client";

import { Bell } from "lucide-react";
import { useState } from "react";

import {
  NotificationFooter,
  NotificationHeader,
  NotificationList,
  type Notification,
} from "@/entities/notification";
import { Button } from "@/shared/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/shared/components/ui/popover";

const INITIAL_NOTIFICATIONS: Notification[] = [
  {
    id: 1,
    category: "УЧЕБНАЯ ЧАСТЬ • РАСПИСАНИЕ",
    title: "Изменение расписания: занятие гр. 24-В перенесено на 19:00",
    date: "Сегодня, 08:30",
    isRead: false,
    color: "text-emerald-800",
  },
  {
    id: 2,
    category: "АТТЕСТАЦИОННАЯ КОМИССИЯ",
    title: "Приближение экзамена: Внутренний теоретический экзамен гр. 24-А 24 мая",
    date: "Вчера, 16:45",
    isRead: false,
    color: "text-blue-700",
  },
  {
    id: 3,
    category: "КУРАТОР ПОТОКА",
    title: "Изменение состава: в группу 24-С переведен курсант Николаев Д. П.",
    date: "21 мая, 12:10",
    isRead: true,
  },
  {
    id: 4,
    category: "ЭЛЕКТРОННЫЙ ЖУРНАЛ",
    title: "Напоминание: внесите результаты",
    date: "20 мая, 10:30",
    isRead: true,
  },
];

export const NotificationBell = () => {
  const [open, setOpen] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [notifications, setNotifications] = useState(INITIAL_NOTIFICATIONS);

  const newCount = notifications.filter((notification) => !notification.isRead).length;

  const filteredNotifications = showNew
    ? notifications.filter((notification) => !notification.isRead)
    : notifications;

  // const markAllAsRead = () => {
  //   setNotifications((prev) =>
  //     prev.map((notification) => ({
  //       ...notification,
  //       isRead: true,
  //     })),
  //   );
  // };

  const closeNotification = (id: number) => {
    setNotifications((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="border-r pr-5">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger
          render={
            <Button
              variant="ghost"
              size="icon"
              className="relative size-10 text-emerald-800"
              aria-label="Уведомления"
            />
          }
        >
          <Bell className="size-6" />

          {newCount > 0 && (
            <span className="absolute right-1 top-1 size-2.5 rounded-full bg-red-500 ring-2 ring-white" />
          )}
        </PopoverTrigger>

        <PopoverContent
          align="end"
          sideOffset={10}
          className="w-[min(480px,calc(100vw-24px))] overflow-hidden rounded-xl p-0"
        >
          <NotificationHeader
            newNotificationsCount={newCount}
            notifications={notifications}
            setShowNew={setShowNew}
            showNew={showNew}
          />
          <NotificationList
            filterNotifications={filteredNotifications}
            closeNotification={closeNotification}
          />
          <NotificationFooter newNotificationsCount={0} setOpen={() => setOpen(false)} />
        </PopoverContent>
      </Popover>
    </div>
  );
};
