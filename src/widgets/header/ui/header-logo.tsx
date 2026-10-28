import { Car } from "lucide-react";

import { APP_TEXT } from "@/shared/constants";

export const HeaderLogo = () => {
  const { header } = APP_TEXT;

  return (
    <div className="flex">
      <div className="border bg-primary  w-10 h-10 flex justify-center items-center rounded-[10px]">
        <Car className="text-white" size={25} />
      </div>
      <h1 className="font-bold text-2xl p-1">{header.title}</h1>
    </div>
  );
};
