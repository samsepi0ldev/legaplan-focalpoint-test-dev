import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";

import "./globals.scss";
import { TaskProvider } from "@/app/provider";

const inter = Inter_Tight({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "FocalPoint",
  description: "Gerenciador de tarefas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={inter.className}
      >
        <TaskProvider>
          {children}
        </TaskProvider>
      </body>
    </html>
  );
}
