"use client";

import { useState } from 'react';
import Link from 'next/link';
import { tutorialsData, TutorialCategory } from '@/data/tutoriales';
import TutorialCard from '@/components/tutoriales/TutorialCard';

const CATEGORIES: ("Todas" | TutorialCategory)[] = [
  "Todas",
  "Mecanismos",
  "Cuadros Eléctricos",
  "Domótica",
  "Normativa",
  "Movilidad Eléctrica"
];

const BRANDS = [
  { name: "Niessen", series: 6, href: "/catalogo" }, // Link to standard catalog
  { name: "Legrand", series: 8, href: "#" },
  { name: "Schneider", series: 8, href: "#" },
  { name: "SIMON", series: 8, href: "#" },
  { name: "JUNG", series: 5, href: "#" },
  { name: "BJC", series: 4, href: "#" },
];

export default function TutorialesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<"Todas" | TutorialCategory>("Todas");

  // Filter tutorials based on search query and active category
  const filteredTutorials = tutorialsData.filter(tutorial => {
    const matchesSearch = tutorial.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          tutorial.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "Todas" || tutorial.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredTutorials = tutorialsData.filter(t => t.featured);
  
  const isSearching = searchQuery.trim() !== "" || activeCategory !== "Todas";

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Header Section */}
      <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
        <h1 className="text-3xl font-extrabold text-slate-900 sm:text-5xl tracking-tight mb-4">
          Tutoriales y <span className="text-teal-600">Guías</span>
        </h1>
        <p className="mt-2 text-lg text-slate-600">
          Aprende paso a paso a instalar y configurar material eléctrico con las directrices de Hidal Electric.
        </p>
      </div>

      {/* Search Bar */}
      <div className="max-w-2xl mx-auto mb-8">
        <label htmlFor="content-search" className="block mb-2.5 text-sm font-medium text-slate-900 sr-only">Buscar</label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none">
            <svg className="w-5 h-5 text-slate-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input 
            type="search" 
            id="content-search" 
            className="block w-full p-4 ps-12 bg-white border border-slate-200 rounded-lg text-slate-900 text-sm sm:text-base focus:ring-teal-500/20 focus:border-teal-500 transition-all shadow-sm placeholder:text-slate-400" 
            placeholder="¿Qué mecanismo quieres instalar hoy?" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button 
            className="absolute end-2.5 bottom-2.5 text-white bg-teal-600 hover:bg-teal-700 shadow-sm font-medium rounded-lg text-sm px-5 py-2 transition-all focus:outline-hidden"
          >
            Buscar
          </button>
        </div>
      </div>

      {/* Categories (Pills) */}
      <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto mb-16">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              activeCategory === category
                ? "bg-teal-600 text-white shadow-md shadow-teal-500/30 ring-2 ring-teal-600 ring-offset-2"
                : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 hover:border-slate-300 hover:text-slate-900"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {!isSearching ? (
        /* HUB LAYOUT (Default View) */
        <div className="space-y-16">
          
          {/* Tutoriales Destacados */}
          <section>
            <div className="mb-6 border-b border-slate-200 pb-2">
              <h3 className="text-2xl font-bold text-slate-800">
                Tutoriales destacados
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredTutorials.map((tutorial) => (
                <div key={tutorial.id} className="animate-in fade-in zoom-in-95 duration-300">
                  <TutorialCard tutorial={tutorial} />
                </div>
              ))}
            </div>
          </section>

          {/* Marcas Disponibles (From HTML) */}
          <section>
            <div className="mb-6 border-b border-slate-200 pb-2">
              <h3 className="text-2xl font-bold text-slate-800">
                Series disponibles
              </h3>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {BRANDS.map((brand) => (
                <Link 
                  key={brand.name}
                  href={brand.href}
                  className="group flex flex-col bg-white rounded-lg border border-slate-200 hover:bg-teal-50/50 focus:outline-hidden hover:shadow-lg shadow-sm transition-all duration-300"
                >
                  <div className="p-4 md:p-5">
                    <div className="flex justify-between items-center gap-x-3">
                      <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center shrink-0 border border-slate-200/60">
                        <svg className="size-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path fill="currentColor" className="text-teal-600/20" d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464"></path>
                            <path fill="currentColor" className="text-teal-600" fillRule="evenodd" d="M11.25 7.5V5.29a6.751 6.751 0 0 0 0 13.418V16.5a.75.75 0 1 1 1.5 0v2.209a6.751 6.751 0 0 0 0-13.418V7.5a.75.75 0 0 1-1.5 0M15 12a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-5 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clipRule="evenodd"></path>
                        </svg>
                      </div>
                      <div className="grow">
                        <h3 className="block font-semibold text-slate-800 group-hover:text-teal-700 transition-colors">
                          {brand.name}
                        </h3>
                        <p className="text-sm text-teal-600 font-medium">
                          {brand.series} series disponibles
                        </p>
                      </div>
                      <div>
                        <svg className="size-5 text-slate-400 group-hover:text-teal-600 transition-colors" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="m9 18 6-6-6-6"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

        </div>
      ) : (
        /* SEARCH RESULTS GRID */
        <div>
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-xl font-bold text-slate-800">
              Resultados de búsqueda
            </h3>
            <span className="text-sm text-slate-500">{filteredTutorials.length} tutoriales</span>
          </div>

          {filteredTutorials.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredTutorials.map((tutorial) => (
                <div key={tutorial.id} className="animate-in fade-in zoom-in-95 duration-300">
                  <TutorialCard tutorial={tutorial} />
                </div>
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="text-center py-20 bg-slate-50 rounded-2xl border border-dashed border-slate-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 text-slate-400 mb-4">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">No se encontraron tutoriales</h3>
              <p className="text-slate-500 max-w-md mx-auto">
                No hemos encontrado ningún tutorial que coincida con "{searchQuery}" en la categoría seleccionada. Intenta usar otros términos.
              </p>
              <button 
                onClick={() => { setSearchQuery(""); setActiveCategory("Todas"); }}
                className="mt-6 text-teal-600 font-semibold hover:text-teal-700 underline underline-offset-4"
              >
                Borrar filtros
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
