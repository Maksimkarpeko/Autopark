import { CheckCircle2 } from "lucide-react";

import { Card, CardContent } from "@/shared/components";

import { roles } from '../constants/data';

export const EcosystemSection = () => {
  return (
    <section className="rounded-xl border border-[#e9e8fa] bg-[#f0f1ff] p-5 sm:p-7 lg:p-8">
      <p className="text-[10px] font-semibold uppercase tracking-widest text-emerald-800">
        Цифровая экосистема
      </p>

      <h2 className="mt-1 text-xl font-semibold tracking-tight">
        Единая информационная среда автошколы
      </h2>

      <p className="mt-2 max-w-3xl text-sm leading-5 text-slate-600">
        Автоматизация учебного процесса, управление расписанием, учёт посещаемости и успеваемости.
        Все участники обучения получают доступ к необходимой информации в личном кабинете.
      </p>

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        {roles.map((role) => {
          const Icon = role.icon;

          return (
            <Card key={role.title} className="border-white bg-white py-0 shadow-none">
              <CardContent className="p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#e9ebff] text-emerald-900">
                    <Icon className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold">{role.title}</h3>
                    <p className="mt-1 text-xs text-slate-500">{role.subtitle}</p>
                  </div>
                </div>

                <ul className="mt-5 space-y-4">
                  {role.features.map(([title, description]) => (
                    <li key={title} className="flex gap-2.5">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-800" />

                      <div>
                        <p className="text-xs font-medium">{title}</p>
                        <p className="mt-1 text-xs leading-5 text-slate-500">{description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
};
