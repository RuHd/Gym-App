"use client";

import { usePathname } from "next/navigation";

// Envolve cada página num <main> remontado a cada troca de rota (key={pathname}),
// disparando a animação .page-transition (fade-in) definida em globals.scss.
export default function Template({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <main key={pathname} className="page-transition">
      {children}
    </main>
  );
}