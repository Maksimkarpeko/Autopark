import { Check } from "lucide-react";

import { Button } from "@/shared/components";

import type { NotificationUIProps } from "../types/notification-types";
import type { FC } from "react";

export const NotificationFooter: FC<
  Required<Pick<NotificationUIProps, "newNotificationsCount" | "setOpen">>
> = ({ newNotificationsCount, setOpen }) => {
  return (
    <div className="flex items-center justify-between px-4 py-3">
      <Button
        // onClick={markAllAsRead}
        disabled={newNotificationsCount === 0}
        className="text-sm font-semibold  transition-colors  disabled:opacity-40"
      >
        <Check className="mr-1 inline size-4" />
        Прочитать все
      </Button>

      <Button
        onClick={setOpen}
        className="text-sm text-white font-semibold "
      >
        Закрыть
      </Button>
    </div>
  );
};
