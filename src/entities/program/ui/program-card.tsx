import { Bike, Bus, CheckCircle2, Truck } from "lucide-react";

import { Card, CardContent, CardTitle } from "@/shared/components";

import type { Program } from "../types/program-type";
import type { FC } from "react";

interface ProgramCardProps {
  program: Program;
}

export const ProgramCard: FC<ProgramCardProps> = ({ program }) => {
  const ProgramIcon = program.icon === "bike" ? Bike : program.icon === "truck" ? Truck : Bus;

  return (
    <Card key={program.title} className="gap-0 border-[#eceaf8] bg-white py-0 shadow-none">
      <CardContent className="flex h-full flex-col p-5">
        <div className="flex items-center justify-between gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#e9ebff] text-emerald-900">
            <ProgramIcon className="h-5 w-5" />
          </div>

          <span className="rounded bg-[#eef0ff] px-2 py-1 text-[10px] text-slate-700">
            {program.category}
          </span>
        </div>

        <div className="mt-5 flex flex-wrap items-start justify-between gap-2">
          <CardTitle className="text-base font-semibold">{program.title}</CardTitle>

          <span className="text-xs font-medium text-slate-600">{program.price}</span>
        </div>

        <p className="mt-2 min-h-10 text-xs leading-5 text-slate-500">{program.description}</p>

        <div className="mt-4 grid grid-cols-2 rounded-md bg-[#f0f1ff] px-3 py-3 text-center">
          <div>
            <p className="text-[10px] text-slate-500">Теория</p>
            <p className="mt-1 text-xs font-medium">{program.theory}</p>
          </div>

          <div>
            <p className="text-[10px] text-slate-500">Практика</p>
            <p className="mt-1 text-xs font-medium">{program.practice}</p>
          </div>
        </div>

        <ul className="mt-4 flex-1 space-y-2">
          {program.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-xs leading-4 text-slate-600">
              <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-800" />
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};
