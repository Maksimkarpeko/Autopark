import { Car, FolderArchive } from "lucide-react";

import { Card, CardContent } from "@/shared/components";

export const UserProfileDocumentFooter = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card className="border-slate-200">
        <CardContent className="p-4 flex items-center gap-3">
          <div className="w-12 h-12 bg-slate-100 rounded flex items-center justify-center shrink-0">
            <Car className="w-6 h-6 text-slate-500" />
          </div>
          <div>
            <div className="text-xs uppercase font-semibold text-slate-400">Учебная площадка</div>
            <div className="font-bold text-sm text-slate-900">Автодром «Северный»</div>
            <div className="text-xs text-slate-500">г. Гомель, ул. Речицкий просп. 11</div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-slate-200">
        <CardContent className="p-4 flex items-center gap-3">
          <div className="w-12 h-12 bg-slate-100 rounded flex items-center justify-center shrink-0">
            <FolderArchive className="w-6 h-6 text-slate-500" />
          </div>
          <div>
            <div className="text-xs uppercase font-semibold text-slate-400">Электронный архив</div>
            <div className="font-bold text-sm text-slate-900">Пакет документов № 842</div>
            <div className="text-xs text-slate-500">Все согласия на обработку ПДн получены</div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
