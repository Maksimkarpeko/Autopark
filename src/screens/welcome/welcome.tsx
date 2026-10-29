import { Container } from "shared/components";

import { EcosystemSection } from "./ui/ecosystem-section";
import { HeroSection } from "./ui/hero-section";
import { ProgramSection } from "./ui/program-section";
import { StepsStudySection } from "./ui/steps-study-section";

export const WelcomePage = () => {
  return (
    <div className="min-h-screen bg-[#f8f7ff] text-slate-900">
      <Container>
        <div className="space-y-10 py-6 md:py-8">
          <HeroSection />
          <ProgramSection />

          <EcosystemSection />

          <StepsStudySection />
        </div>
      </Container>
    </div>
  );
};
