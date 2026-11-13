import { Award, Calendar, Car, FileText, GraduationCap, Users } from "lucide-react";

import { Badge, Card, CardContent, CardHeader, CardTitle } from "@/shared/components";

export const UserProfileDocument = () => {
  return (
    <Card className="border-slate-200">
      <CardHeader className="flex flex-row items-center justify-between pb-2 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <FileText className="w-5 h-5 text-slate-600" />
          <CardTitle className="text-base font-bold">
            Блок 2. Сведения об обучении и договоре
          </CardTitle>
        </div>
        <span className="text-xs font-semibold text-slate-500">• Филиал «Сокол»</span>
      </CardHeader>
      <CardContent className="pt-4 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
            <div className="text-xs text-slate-500">Номер и дата договора</div>
            <div className="font-semibold text-sm text-slate-900 mt-1 flex items-center justify-between">
              <span>АШ-842/24 от 15 февраля 2024 г.</span>
              <FileText className="w-4 h-4 text-slate-400" />
            </div>
          </div>

          <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
            <div className="text-xs text-slate-500">Учебная группа</div>
            <div className="font-semibold text-sm text-slate-900 mt-1 flex items-center justify-between">
              <span>№ 24-В (вечерняя форма)</span>
              <Users className="w-4 h-4 text-slate-400" />
            </div>
          </div>

          <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
            <div className="text-xs text-slate-500">Категория транспортного средства</div>
            <div className="font-semibold text-sm text-slate-900 mt-1 flex items-center justify-between">
              <span>«В» (легковые автомобили, МКПП)</span>
              <Car className="w-4 h-4 text-slate-400" />
            </div>
          </div>

          <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
            <div className="text-xs text-slate-500">Плановый срок завершения</div>
            <div className="font-semibold text-sm text-slate-900 mt-1 flex items-center justify-between">
              <span>15 июня 2024 г.</span>
              <Calendar className="w-4 h-4 text-slate-400" />
            </div>
          </div>

          <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
            <div className="text-xs text-slate-500">Ведущий преподаватель теории</div>
            <div className="font-semibold text-sm text-slate-900 mt-1 flex items-center justify-between">
              <span className="flex items-center gap-1">
                <GraduationCap className="w-4 h-4 text-slate-400" /> Смирнова Е. В.
              </span>
              <span className="text-xs text-slate-400">Каб. 204</span>
            </div>
          </div>

          <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
            <div className="text-xs text-slate-500">Инструктор по вождению</div>
            <div className="font-semibold text-sm text-slate-900 mt-1 flex items-center justify-between">
              <span className="flex items-center gap-1">
                <Award className="w-4 h-4 text-slate-400" /> Ковалёв С. Н.
              </span>
              <span className="text-xs text-slate-400">Стаж 12 лет</span>
            </div>
          </div>
        </div>

        <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white rounded border border-slate-200">
              <Car className="w-5 h-5 text-slate-600" />
            </div>
            <div>
              <div className="font-bold text-sm text-slate-900">Hyundai Solaris</div>
              <div className="text-xs text-slate-500">
                Механическая трансмиссия, доп. педали сертифицированы
              </div>
            </div>
          </div>
          <Badge variant="outline" className="font-mono bg-white text-slate-800 border-slate-300">
            о 742 вв 777
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};
