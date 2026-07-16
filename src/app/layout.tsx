import type { Metadata } from "next";
import { Lexend, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.scss";
import Menu from "@/components/Menu/Menu";
import Template from "./template";
import AlertMessage from "@/components/AlertMessage";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  weight: ["400", "700"]
});

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "700"]
});


export const metadata: Metadata = {
  title: "Gym App",
  description: "Created By Ruan Mesquita",
};

// Layout raiz: monta a navegação fixa (Menu), o alerta global e o Template,
// que aplica a transição de fade-in entre rotas.
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${lexend.variable} ${jakartaSans.variable}`}>
      <body>
        <Menu/>
        <main className="page-transition">
          <AlertMessage message="O usuário foi cadastrado" msgType="alert" />
          <Template>
            {children}
          </Template>
        </main>
      </body>
    </html>
  );
}
