"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useSidebar } from "./SidebarContext";

export default function Header() {
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [headerSearchQuery, setHeaderSearchQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const { isOpen, setIsOpen } = useSidebar();

  // Close search when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchInputRef.current && !searchInputRef.current.contains(event.target as Node)) {
        setIsSearchExpanded(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearchSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && headerSearchQuery.trim() !== "") {
      router.push(`/catalogo?q=${encodeURIComponent(headerSearchQuery.trim())}`);
      setIsSearchExpanded(false);
      setHeaderSearchQuery("");
    }
  };

  // Parse pathname to create breadcrumbs
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter((segment) => segment !== "");

  const getBreadcrumbName = (segment: string) => {
    // Basic formatting: capitalize first letter
    const formatted = segment.charAt(0).toUpperCase() + segment.slice(1);
    if (formatted === "Catalogo") return "Catálogo";
    return formatted;
  };

  return (
    <header className="sticky top-0 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-[48] w-full bg-white md:bg-white/80 md:backdrop-blur-md border-b border-slate-200 shadow-sm text-sm py-2.5 lg:ps-64">
      <nav className="px-4 sm:px-6 flex basis-full items-center w-full mx-auto">
        <div className="me-5 lg:me-0 lg:hidden">
          {/* Logo */}
          <a
            className="flex-none rounded-md text-xl inline-block font-semibold focus:outline-hidden focus:opacity-80"
            href="#"
            aria-label="hectric"
          >
            <img className="w-28 h-auto" src="/assets/images/logo/logo-light-2.png" alt="hectric logo" />
          </a>
          <div className="lg:hidden ms-1"></div>
        </div>

        {/* Breadcrumbs / Page Title Area (Left) */}
        <div className="hidden md:flex items-center gap-x-2 text-sm text-slate-500 font-medium whitespace-nowrap">
          <Link href="/" className="flex items-center gap-x-2 hover:text-teal-600 transition">
            <svg className="size-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
            <span className={pathSegments.length === 0 ? "text-teal-600 font-semibold" : ""}>Inicio</span>
          </Link>
          
          {pathSegments.map((segment, index) => {
            const isLast = index === pathSegments.length - 1;
            const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
            
            return (
              <div key={href} className="flex items-center gap-x-2">
                <svg className="size-3 text-slate-300" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
                {isLast ? (
                  <span className="text-teal-600 font-semibold">{getBreadcrumbName(segment)}</span>
                ) : (
                  <Link href={href} className="hover:text-teal-600 transition">
                    {getBreadcrumbName(segment)}
                  </Link>
                )}
              </div>
            );
          })}
        </div>

        {/* Global Actions Area (Right) */}
        <div className="w-full flex items-center justify-end ms-auto gap-x-2 md:gap-x-3">
          
          {/* Expandable Search Input */}
          <div className="hidden md:flex items-center" ref={searchInputRef}>
            <div
              className={`relative transition-all duration-300 ease-in-out flex items-center justify-end ${
                isSearchExpanded ? "w-64" : "w-10"
              }`}
            >
              <button
                onClick={() => {
                  setIsSearchExpanded(!isSearchExpanded);
                  if (!isSearchExpanded) {
                    setTimeout(() => document.getElementById("header-search")?.focus(), 100);
                  }
                }}
                className={`absolute z-30 p-2 text-slate-500 hover:text-teal-600 transition-colors rounded-lg hover:bg-slate-100 ${
                  isSearchExpanded ? "start-1" : "start-0"
                }`}
                aria-label="Buscar tutoriales"
              >
                <svg className="size-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </button>
              
              <input
                type="text"
                id="header-search"
                name="header-search"
                value={headerSearchQuery}
                onChange={(e) => setHeaderSearchQuery(e.target.value)}
                onKeyDown={handleSearchSubmit}
                className={`py-2 pe-4 block w-full bg-white border-slate-200 rounded-lg text-sm text-slate-800 placeholder:text-slate-400 focus:outline-hidden focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all shadow-sm ${
                  isSearchExpanded ? "ps-10 opacity-100" : "ps-10 opacity-0 pointer-events-none"
                }`}
                placeholder="¿Qué quieres aprender?"
              />
            </div>
          </div>

          <div className="flex flex-row items-center justify-end gap-2">
            {/* Tienda online */}
            <a
              href="https://shop.hectric.es/"
              target="_blank"
              rel="noreferrer"
              className="p-2 inline-flex items-center justify-center text-sm font-medium rounded-lg text-slate-500 hover:text-teal-600 hover:bg-slate-100 transition-all focus:outline-hidden"
              title="Tienda Online"
            >
              <svg className="size-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
            </a>

            {/* Iniciar Sesión / Perfil */}
            <button
              type="button"
              className="p-2 inline-flex items-center justify-center text-sm font-medium rounded-lg text-slate-500 hover:text-teal-600 hover:bg-slate-100 transition-all focus:outline-hidden"
              data-hs-overlay="#hs-modal-signin"
              title="Iniciar Sesión"
            >
              <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>

            <div className="hidden sm:inline-block sm:mx-1 lg:hidden">
              <div className="w-px h-4 bg-slate-200"></div>
            </div>

            {/* Offcanvas Toggle / Burger Menu */}
            <button 
              type="button" 
              onClick={() => setIsOpen(!isOpen)}
              className="relative size-9 lg:hidden flex justify-center items-center text-sm font-semibold rounded-lg bg-layer border border-layer-line text-layer-foreground hover:bg-layer-hover focus:outline-hidden focus:bg-layer-focus disabled:opacity-50 disabled:pointer-events-none" 
              aria-label="Toggle navigation" 
            >
              <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="18" height="18" x="3" y="3" rx="2"/>
                <path d="M15 3v18"/>
                <path d="m8 9 3 3-3 3"/>
              </svg>
              <span className="sr-only">Toggle navigation</span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
