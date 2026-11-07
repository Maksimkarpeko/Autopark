import { cn } from "cn";

import type { FC, PropsWithChildren } from "react";

type ContainerProps = {
  className?: string;
};

export const Container: FC<PropsWithChildren<ContainerProps>> = ({ children, className }) => {
  return <div className={cn("mx-auto max-w-7xl", className)}>{children}</div>;
};
