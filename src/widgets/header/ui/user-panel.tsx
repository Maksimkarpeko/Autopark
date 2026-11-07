import { NotificationBell } from "@/features/notification";
import { UserBadge } from "@/entities/user";

export const UserPanel = () => {
  return (
    <div className="flex gap-6">
      <NotificationBell />
      <UserBadge name="Смирнов А. В." role="Учащийся" avatarUrl="/images/avatar.jpg" />
    </div>
  );
};
