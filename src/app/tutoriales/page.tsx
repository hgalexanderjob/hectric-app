"use client";

import { useState } from 'react';
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

      {/* Search and Filters */}
      <div className="flex flex-col items-center gap-6 mb-12">
        
        {/* Search Bar */}
        <div className="relative w-full max-w-2xl">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            className="block w-full pl-11 pr-4 py-3.5 text-lg border border-slate-200 rounded-2xl leading-5 bg-white placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all shadow-sm"
            placeholder="Buscar por título, categoría o palabra clave..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Categories (Pills) */}
        <div className="flex flex-wrap justify-center gap-2 max-w-3xl">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === category
                  ? "bg-teal-600 text-white shadow-md shadow-teal-500/30 ring-2 ring-teal-600 ring-offset-2"
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 hover:border-slate-300 hover:text-slate-900"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Results Grid */}
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
  );
}
