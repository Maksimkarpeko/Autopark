import { AuthActions } from "@/shared/components";
import { getCookieItem } from "@/shared/utils/get-cookie-item";

import { HeaderLogo } from "./header-logo";
import { UserPanel } from "./user-panel";

export const Header = async () => {
  const token = await getCookieItem("token");

  return (
    <header className="flex gap-3 flex-col w-full items-center justify-between border-b border-gray-200 bg-white p-5 lg:flex-row  ">
      <div className="flex items-center w-64 shrink-0 ">
        <HeaderLogo isAuth={!!token} />
      </div>

      <div className="flex-1 px-6 text-sm text-slate-500"></div>

      <div className="flex items-center gap-4">{token ? <UserPanel /> : <AuthActions />}</div>
    </header>
  );
};
