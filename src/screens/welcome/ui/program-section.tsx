import { ProgramCard, PROGRAMS } from "@/entities/program";

export const ProgramSection = () => {
  return (
    <section id="programs">
      <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-widest text-emerald-800">
            Учебный план
          </p>
          <h2 className="mt-1 text-xl font-semibold tracking-tight">
            Программы подготовки водителей
          </h2>
        </div>

        <p className="max-w-md text-xs leading-5 text-slate-500">
          Программы обучения и требования к кандидатам определяются действующими нормативными
          правовыми актами Республики Беларусь.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {PROGRAMS.map((program) => {
          return <ProgramCard program={program} key={program.title} />;
        })}
      </div>
    </section>
  );
};
