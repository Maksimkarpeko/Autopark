import { Bell } from "lucide-react";

import { Button } from "@/shared/components";

import type { NotificationUIProps } from "../types/notification-types";
import type { FC } from "react";

export const NotificationHeader: FC<
  Required<
    Pick<NotificationUIProps, "notifications" | "newNotificationsCount" | "setShowNew" | "showNew">
  >
> = ({ setShowNew, showNew, notifications = [], newNotificationsCount }) => {
  return (
    <div className="flex items-center justify-between gap-3 px-4 py-4">
      <div className="flex items-center gap-2">
        <Bell className="size-5 text-emerald-800" />

        <h3 className="text-lg font-semibold">Уведомления</h3>
      </div>

      <div className="flex rounded-md bg-slate-100 p-1">
        <Button
          onClick={() => setShowNew!(true)}
          className={`rounded px-3 py-1.5 text-sm font-medium transition-colors ${
            !showNew ? "bg-white text-emerald-800 shadow-sm" : "text-white"
          }`}
        >
          Новые ({newNotificationsCount})
        </Button>

        <Button
          onClick={() => setShowNew!(false)}
          className={`rounded px-3 py-1.5 text-sm font-medium transition-colors ${
            showNew ? "bg-white text-emerald-800 shadow-sm" : "text-white"
          }`}
        >
          Все ({notifications.length})
        </Button>
      </div>
    </div>
  );
};
