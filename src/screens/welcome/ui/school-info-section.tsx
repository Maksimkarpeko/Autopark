import { Card, CardContent } from "@/shared/components";

export const SchoolInfoSection = () => {
  return (
    <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
      <Card className="gap-2 border-[#eceaf8] bg-white py-4 shadow-none">
        <CardContent>
          <div className="flex items-center justify-between text-xs text-slate-500">
            ОБ АВТОШКОЛЕ
            <span className="rounded bg-[#eceeff] px-2 py-1 text-[10px] text-slate-700">РБ</span>
          </div>

          <p className="mt-3 text-sm text-slate-600">Направления обучения</p>
          <p className="text-2xl font-semibold tracking-tight">A · B · C</p>
          <p className="text-xs leading-5 text-slate-500">
            Подготовка водителей по выбранной категории
          </p>
        </CardContent>
      </Card>

      <Card className="gap-2 border-[#eceaf8] bg-white py-4 shadow-none">
        <CardContent>
          <p className="text-xs text-slate-500">Формат обучения</p>
          <p className="mt-3 text-2xl font-semibold tracking-tight">Теория + практика</p>
          <p className="text-xs leading-5 text-slate-500">
            Теоретические занятия и практическое вождение
          </p>
        </CardContent>
      </Card>

      <Card className="gap-2 border-[#eceaf8] bg-white py-4 shadow-none">
        <CardContent>
          <p className="text-xs text-slate-500">Документы для зачисления</p>
          <p className="mt-3 text-2xl font-semibold tracking-tight">Паспорт + медсправка</p>
          <p className="text-xs leading-5 text-slate-500">
            Перечень необходимых документов уточняется при записи
          </p>
        </CardContent>
      </Card>

      <p className="px-1 text-xs text-slate-500 sm:col-span-3 lg:col-span-1">
        Условия обучения уточняйте у представителя автошколы.
      </p>
    </div>
  );
};
