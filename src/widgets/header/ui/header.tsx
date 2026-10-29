import { AuthActions, Container } from "@/shared/components";

import { HeaderLogo } from "./header-logo";

export const Header = () => {
  return (
    <header className="border-b border-gray-200/50 py-2">
      <Container className="flex  justify-between">
        <HeaderLogo />
        <div></div>
        <AuthActions />
      </Container>
    </header>
  );
};
