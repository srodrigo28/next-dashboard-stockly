import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "./_components/sidebar";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ['latin'],
  display: 'auto'
})

export const metadata: Metadata = {
  title: "Dashboard Exemplo",
  description: "Treina-Dev Dashbard aula",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body  className={` ${inter.className} antialiased`} >
        <div className="flex gap-8 h-full">
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  );
}
