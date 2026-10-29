import { ShieldCheck } from "lucide-react";

import { AuthActions} from "@/shared/components";

import { SchoolInfoSection } from "./school-info-section";

export const HeroSection = () => {
  return (
    <section className="grid gap-5 lg:grid-cols-[minmax(0,2fr)_minmax(260px,0.92fr)]">
      <div className="flex flex-col justify-between gap-8 rounded-xl border border-[#eceaf8] bg-white p-6 sm:p-8">
        <div>
          <h1 className="mt-4 max-w-2xl text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
            Современная автошкола — обучение и цифровые сервисы
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-6 text-slate-600">
            Единая цифровая среда для курсантов, преподавателей и инструкторов: расписание занятий,
            изучение Правил дорожного движения Республики Беларусь, запись на практическое вождение
            и контроль успеваемости.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 rounded-lg bg-[#fafaff] p-3">
          <AuthActions />

          <span className="flex items-center gap-1.5 text-xs text-slate-600">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-700" />
            Обучение в РБ
          </span>
        </div>
      </div>
      <SchoolInfoSection />
    </section>
  );
};
