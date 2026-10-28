import { Container } from "@/shared/components/ui/container";

import { HeaderLogo } from "./header-logo";

export const Header = () => {
  return (
    <header className="border-b border-gray-200/50 py-2">
      <Container className="flex  justify-between">
        <HeaderLogo />
        <div>Navigation</div>
        <div>Button registration and authorization</div>
      </Container>
    </header>
  );
};
