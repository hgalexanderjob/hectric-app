"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useSidebar } from "./SidebarContext";
import { Icon } from '@iconify/react';

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
            <Icon icon="solar:home-smile-line-duotone" className="size-4" />
            <span className={pathSegments.length === 0 ? "text-teal-600 font-semibold" : ""}>Inicio</span>
          </Link>
          
          {pathSegments.map((segment, index) => {
            const isLast = index === pathSegments.length - 1;
            const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
            
            return (
              <div key={href} className="flex items-center gap-x-2">
                <Icon icon="solar:alt-arrow-right-line-duotone" className="size-3 text-slate-300" />
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
                <Icon icon="solar:magnifer-line-duotone" className="size-5" />
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
                <Icon icon="solar:cart-large-2-line-duotone" className="size-5" />
            </a>

            {/* Iniciar Sesión / Perfil */}
            <button
              type="button"
              className="p-2 inline-flex items-center justify-center text-sm font-medium rounded-lg text-slate-500 hover:text-teal-600 hover:bg-slate-100 transition-all focus:outline-hidden"
              data-hs-overlay="#hs-modal-signin"
              title="Iniciar Sesión"
            >
                <Icon icon="solar:user-line-duotone" className="size-6" />
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
                <Icon icon="solar:hamburger-menu-line-duotone" className="shrink-0 size-4" />
              <span className="sr-only">Toggle navigation</span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
