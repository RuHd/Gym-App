"use client";

import { usePathname } from "next/navigation";

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