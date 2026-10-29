import { CheckCircle2, ShieldCheck } from "lucide-react";

import { Card, CardContent } from "@/shared/components";

import { stages } from "../constants/data";

export const StepsStudySection = () => {
  return (
    <section>
      <p className="text-[10px] font-semibold uppercase tracking-widest text-emerald-800">
        Порядок обучения
      </p>

      <h2 className="mt-1 text-xl font-semibold tracking-tight">Этапы поступления в автошколу</h2>

      <p className="mt-2 text-sm text-slate-600">
        Основные шаги от подачи заявки до подготовки к экзаменам в ГАИ Республики Беларусь.
      </p>

      <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {stages.map((stage) => {
          const Icon = stage.icon;

          return (
            <Card key={stage.number} className="border-[#eceaf8] bg-white py-0 shadow-none">
              <CardContent className="p-5">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-medium tracking-tight">{stage.number}</span>
                  <Icon className="h-4 w-4 text-slate-500" />
                </div>

                <h3 className="mt-4 text-sm font-semibold">{stage.title}</h3>

                <p className="mt-2 min-h-24 text-xs leading-5 text-slate-500">{stage.text}</p>

                <div className="mt-4 flex items-center gap-2 text-xs text-emerald-800">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  {stage.footer}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="mt-4 flex flex-col gap-4 rounded-xl border border-[#e9e8fa] bg-[#f0f1ff] p-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-emerald-900 text-white">
            <ShieldCheck className="h-5 w-5" />
          </div>

          <div>
            <h3 className="text-sm font-semibold">Требования к кандидатам в водители</h3>

            <p className="mt-1 text-xs leading-5 text-slate-600">
              Возрастные требования, медицинские ограничения и условия допуска к экзаменам
              определяются законодательством Республики Беларусь и зависят от категории
              транспортного средства.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
