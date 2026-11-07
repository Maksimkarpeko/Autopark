import { X } from "lucide-react";

import { Button } from "@/shared/components";

import type { NotificationUIProps } from "../types/notification-types";
import type { FC } from "react";

export const NotificationList: FC<
  Required<Pick<NotificationUIProps, "filterNotifications" | "closeNotification">>
> = ({ filterNotifications = [], closeNotification }) => {
  return (
    <div className="max-h-105 space-y-1.5 overflow-y-auto px-4">
      {filterNotifications.length > 0 ? (
        filterNotifications.map((notification) => (
          <div
            key={notification.id}
            className={`group relative rounded-md p-3.5 transition-colors ${
              !notification.isRead ? "bg-indigo-50" : "hover:bg-slate-50"
            }`}
          >
            {!notification.isRead && (
              <span className="absolute left-3 top-5 size-2.5 rounded-full bg-emerald-900" />
            )}

            <div className={`${!notification.isRead ? "pl-4" : "pl-4"}`}>
              <div className="flex items-start justify-between gap-2">
                <p
                  className={`text-sm font-semibold tracking-wide ${
                    notification.color ?? "text-slate-500"
                  }`}
                >
                  {notification.category}
                </p>

                <Button
                  onClick={() => closeNotification(notification.id)}
                  className="shrink-0 opacity-0 transition-opacity hover:text-red-500 group-hover:opacity-100"
                  aria-label="Удалить уведомление"
                >
                  <X className="size-4" />
                </Button>
              </div>

              <p className="mt-1 text-[15px] leading-5 text-slate-800">{notification.title}</p>

              <p className="mt-2 text-sm text-slate-500">{notification.date}</p>
            </div>
          </div>
        ))
      ) : (
        <div className="py-10 text-center text-sm text-slate-500">Нет новых уведомлений</div>
      )}
    </div>
  );
};
