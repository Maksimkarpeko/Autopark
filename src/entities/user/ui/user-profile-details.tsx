import { CheckCircle2, User } from "lucide-react";

import { Badge, Card, CardContent, Progress } from "@/shared/components";

export const UserProfileDetails = () => {
  return (
    <>
      <div>
        <div className="text-xs uppercase tracking-wider font-semibold text-slate-500 mb-1">
          Учетная карточка • Категория B
        </div>
        <h1 className="text-2xl font-bold text-slate-900">Персональные данные учащегося</h1>
        <p className="text-sm text-slate-500">
          Сведения из единого реестра учащихся автошколы и параметры договора на обучение
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
        <Card className="md:col-span-2 border-slate-200">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="relative">
              <div className="w-16 h-16 rounded-lg bg-slate-200 flex items-center justify-center overflow-hidden">
                <User className="w-10 h-10 text-slate-500" />
              </div>
              <CheckCircle2 className="w-5 h-5 text-emerald-600 absolute -bottom-1 -right-1 bg-white rounded-full" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900">Смирнов Алексей Владимирович</h2>
              <p className="text-xs text-slate-500">Курсант филиала «Сокол» • Договор АШ-842/24</p>
              <div className="flex gap-2 mt-2">
                <Badge variant="secondary" className="text-xs bg-slate-100 text-slate-700">
                  Группа 24-В
                </Badge>
                <Badge variant="secondary" className="text-xs bg-slate-100 text-slate-700">
                  МКПП
                </Badge>
              </div>
            </div>
            <div className="ml-auto text-right hidden sm:block">
              <div className="text-xs text-slate-400 uppercase font-semibold">Текущий статус</div>
              <div className="text-sm font-bold text-emerald-600">Активное обучение</div>
              <div className="text-xs text-slate-500">До 15.06.2024</div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-emerald-950 text-white border-none">
          <CardContent className="p-4 space-y-3">
            <div className="flex justify-between items-center text-xs font-medium">
              <span className="uppercase tracking-wider">Прохождение программы</span>
              <span className="text-lg font-bold text-emerald-400">68%</span>
            </div>
            <Progress value={68} className="h-2 bg-emerald-900" />
            <div className="flex justify-between text-xs text-emerald-200 pt-1 border-t border-emerald-900">
              <span>Теория: 92/134 ч.</span>
              <span>Вождение: 38/56 ч.</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};
