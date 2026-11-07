export type Notification = {
  id: number;
  category: string;
  title: string;
  date: string;
  isRead: boolean;
  color?: string;
};

export type NotificationUIProps = {
  showNew?: boolean;
  setShowNew?: (value: boolean) => void;
  closeNotification?: (id: number) => void;
  setOpen?: VoidFunction;
  notifications?: Notification[];
  newNotificationsCount?: number;
  filterNotifications?: Notification[];
};
