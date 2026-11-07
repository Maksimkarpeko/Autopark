import Link from "next/link";

import { navigationItems } from "../constants/navigate-items";

export const HeaderSideBar = () => {
  return (
    <aside className="flex h-[calc(100vh-4rem)] w-64 shrink-0 flex-col border-r border-gray-200 bg-white">
      <nav className="flex flex-col gap-1 p-3">
        {navigationItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = index === 0;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`
                flex items-center gap-3 rounded-md px-3 py-2.5
                text-sm transition-colors
                ${
                  isActive
                    ? "bg-indigo-50 font-medium text-indigo-900 border-l-4 border-indigo-600"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }
              `}
            >
              <Icon className="size-5 shrink-0" />
              <span>{item.title}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};
