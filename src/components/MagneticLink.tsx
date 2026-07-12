"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import { useMagnetic } from "@/hooks/useMagnetic";

type MagneticLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
};

export default function MagneticLink({ children, ...props }: MagneticLinkProps) {
  const ref = useMagnetic<HTMLAnchorElement>();

  return (
    <a ref={ref} {...props}>
      {children}
    </a>
  );
}
