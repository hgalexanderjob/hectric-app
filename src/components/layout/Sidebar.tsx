"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { useSidebar } from "./SidebarContext";
import { Icon } from '@iconify/react';

const navItems = [
  {
    name: "Inicio",
    href: "/",
    icon: <Icon icon="solar:home-smile-line-duotone" className="shrink-0 size-6" />,
  },
  {
    name: "Catálogo de Mecanismos",
    href: "/catalogo",
    icon: <Icon icon="solar:widget-line-duotone" className="shrink-0 size-6" />,
  },
  {
    name: "Vídeo-Tutoriales",
    href: "/tutoriales",
    icon: <Icon icon="solar:play-circle-line-duotone" className="shrink-0 size-6" />,
  },
  {
    name: "Guías y Manuales",
    href: "/guias",
    icon: <Icon icon="solar:document-line-duotone" className="shrink-0 size-6" />,
  },
  {
    name: "Consulta Normativa",
    href: "/normativa",
    icon: <Icon icon="solar:book-2-line-duotone" className="shrink-0 size-6" />,
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const { isOpen, setIsOpen } = useSidebar();

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-[70] bg-slate-900/50 backdrop-blur-sm transition-opacity lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        id="hs-application-sidebar"
        className={`transition-all duration-300 transform fixed top-0 inset-s-0 h-full max-w-xs w-full z-[80] bg-white border-e border-slate-200 lg:translate-x-0 lg:max-w-[16rem] lg:end-auto lg:bottom-0 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
        role="dialog"
        tabIndex={-1}
        aria-label="Sidebar"
      >
        <div className="relative flex flex-col h-full max-h-full">
        <div className="px-6 pt-4 flex items-center justify-between">
          {/* Logo */}
          <Link
            className="flex-none rounded-md text-xl inline-block font-semibold focus:outline-hidden focus:opacity-80"
            href="/"
            aria-label="hectric"
          >
            <img className="w-28 h-auto" src="/assets/images/logo/logo-light-2.png" alt="hectric Logo" />
          </Link>
          {/* End Logo */}

          <div className="lg:hidden">
            <button
              type="button"
              className="size-8 flex justify-center items-center text-slate-500 hover:bg-slate-100 rounded-lg focus:outline-hidden"
              data-hs-overlay="#hs-application-sidebar"
            >
              <span className="sr-only">Cerrar menú</span>
              <svg className="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:rounded-lg [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-slate-200">
          <nav className="mt-8 gap-x-4 gap-y-4 hs-accordion-group p-3 w-full flex flex-col flex-wrap">
            <ul className="flex flex-col space-y-1.5 text-slate-600">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={`w-full flex items-center gap-x-3.5 py-2 px-3 text-sm rounded-lg transition-all focus:outline-hidden ${
                        isActive
                          ? "bg-teal-50 text-teal-700 font-semibold"
                          : "hover:bg-slate-100 hover:text-slate-900"
                      }`}
                    >
                      {item.icon}
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
        {/* End Content */}

        {/* Sidebar Footer (Bottom Menu) */}
        <div className="mt-auto p-3 border-t border-slate-200">
          <Link
            href="/entrenate"
            className="w-full mb-3 px-3 py-2 inline-flex items-center gap-x-3.5 text-sm font-medium rounded-lg bg-white border border-slate-200 text-slate-700 shadow-sm hover:bg-teal-50 hover:text-teal-700 transition-all focus:outline-hidden"
          >
            <Icon icon="solar:square-academic-cap-line-duotone" className="shrink-0 size-6 text-teal-600" />
            Entrénate
          </Link>
          <Link
            href="/chat"
            className="w-full px-3 py-2 inline-flex items-center gap-x-3.5 text-sm font-medium rounded-lg bg-white border border-slate-200 text-slate-700 shadow-sm hover:bg-slate-50 transition-all focus:outline-hidden"
          >
            <img src="/assets/images/icons/hectric.ico" alt="Hectric IA" className="shrink-0 size-6 object-contain drop-shadow-sm" />
            <div>
              <span className="block text-start">hectric IA</span>
              <span className="block text-slate-500 text-xs font-normal">Asistente eléctrico</span>
            </div>
          </Link>
        </div>
      </div>
      </div>
    </>
  );
}
