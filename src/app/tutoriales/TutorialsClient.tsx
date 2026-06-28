"use client";

import { useState } from 'react';
import { Tutorial, TutorialCategory } from '@/data/tutoriales';
import TutorialCard from '@/components/tutoriales/TutorialCard';

const CATEGORIES: TutorialCategory[] = [
  "Todas",
  "Mecanismos",
  "Cuadros Eléctricos",
  "Domótica",
  "Normativa",
  "Herramientas"
];

export default function TutorialsClient({ initialTutorials }: { initialTutorials: Tutorial[] }) {
  const [activeCategory, setActiveCategory] = useState<TutorialCategory>("Todas");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter tutorials based on active category and search query
  const filteredTutorials = initialTutorials.filter(tutorial => {
    const matchesCategory = activeCategory === "Todas" || tutorial.category === activeCategory;
    const matchesSearch = tutorial.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          tutorial.channelName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-[85rem] mx-auto px-4 py-6 sm:px-6 lg:px-8 w-full min-w-0 animate-in fade-in duration-500">
      
      {/* Search and Category Chips */}
      <div className="sticky top-0 z-10 w-full bg-white/80 backdrop-blur-lg border-b border-slate-200/50 pt-4 pb-4 mb-6 space-y-4">
        
        {/* Search Bar */}
        <form className="max-w-2xl mx-auto" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="content-search" className="block mb-2.5 text-sm font-medium text-slate-800 sr-only">Buscar</label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="shrink-0 size-4 text-slate-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
              </svg>
            </div>
            <input 
              id="content-search" 
              className="block w-full p-3 ps-10 pe-24 bg-white border border-slate-200 rounded-lg text-slate-900 text-sm focus:ring-teal-500/20 focus:border-teal-500 transition-all shadow-sm placeholder:text-slate-400 focus:outline-none truncate" 
              placeholder="¿Qué mecanismo quieres instalar hoy?" 
              type="search" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              name="content-search" 
            />
            <button type="submit" className="absolute end-2 bottom-2 text-white bg-teal-600 hover:bg-teal-700 shadow-sm font-medium leading-5 rounded-lg text-xs px-4 py-1.5 transition-all focus:outline-none">
              Buscar
            </button>
          </div>
        </form>

        {/* Categories */}
        <div className="w-full overflow-x-auto hide-scrollbar pb-2">
          <div className="flex justify-center gap-3">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`shrink-0 whitespace-nowrap px-4 py-1.5 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  activeCategory === category
                    ? "bg-teal-50 text-teal-700 shadow-sm border border-teal-600"
                    : "bg-white border border-slate-200 text-slate-700 hover:border-teal-500 hover:text-teal-600 shadow-sm"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Video Grid */}
      {filteredTutorials.length > 0 ? (
        <div className="w-full min-w-0 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 gap-y-10 sm:gap-y-12">
          {filteredTutorials.map((tutorial) => (
            <TutorialCard key={tutorial.id} tutorial={tutorial} />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="text-center py-20 mt-10">
          <h3 className="text-xl font-bold text-slate-900 mb-2">No se encontraron vídeos</h3>
          <p className="text-slate-500 max-w-md mx-auto">
            No hay resultados que coincidan con tu búsqueda.
          </p>
          <button 
            onClick={() => {
              setActiveCategory("Todas");
              setSearchQuery("");
            }}
            className="mt-6 px-4 py-2 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 transition-colors"
          >
            Limpiar búsqueda
          </button>
        </div>
      )}
      
      {/* Custom styles to hide scrollbar for chips */}
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
