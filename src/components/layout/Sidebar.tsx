"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { useSidebar } from "./SidebarContext";

const navItems = [
  {
    name: "Inicio",
    href: "/",
    icon: (
      <svg className="shrink-0 size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
  {
    name: "Catálogo de Mecanismos",
    href: "/catalogo",
    icon: (
      <svg className="shrink-0 size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
  },
  {
    name: "Vídeo-Tutoriales",
    href: "/tutoriales",
    icon: (
      <svg className="shrink-0 size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
      </svg>
    ),
  },
  {
    name: "Guías y Manuales",
    href: "/guias",
    icon: (
      <svg className="shrink-0 size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    name: "Consulta Normativa",
    href: "/normativa",
    icon: (
      <svg className="shrink-0 size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
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
            <svg className="shrink-0 size-6 text-teal-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
            </svg>
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
