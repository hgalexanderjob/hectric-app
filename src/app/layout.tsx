import type { Metadata } from "next";
import { Poppins, Lato } from 'next/font/google';
import "./globals.css";
import PrelineScript from "@/components/PrelineScript";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";

import { SidebarProvider } from "@/components/layout/SidebarContext";

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

const lato = Lato({
  weight: ['100', '300', '400', '700', '900'],
  subsets: ['latin'],
  variable: '--font-lato',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "hectric | Plataforma Técnica de Material Eléctrico",
  description: "Tu plataforma técnica de referencia para la instalación y consulta de material eléctrico. Encuentra catálogos, tutoriales, guías y normativa REBT.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${poppins.variable} ${lato.variable} antialiased h-full`}>
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 font-sans overflow-x-clip">
        <SidebarProvider>
          <Header />
          <Sidebar />
          <main className="flex-grow w-full lg:ps-64">
            <div className="p-4 sm:p-10 space-y-4 sm:space-y-6">
              {children}
            </div>
          </main>
          {/* Aquí irá el Footer Component */}
        </SidebarProvider>
        
        <PrelineScript />
      </body>
    </html>
  );
}
