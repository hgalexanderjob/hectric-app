"use client";

import { useState, useMemo, useEffect } from "react";
import { rebtData, RebtSection } from "@/data/rebt";
import { Icon } from '@iconify/react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function RebtInteractiveViewer() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedId, setSelectedId] = useState<string>("articulos-generales");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  // Filter sections based on search query
  const filteredSections = useMemo(() => {
    if (!searchQuery.trim()) return rebtData;
    const lowerQuery = searchQuery.toLowerCase();
    return rebtData.filter(
      (section) =>
        section.title.toLowerCase().includes(lowerQuery) ||
        section.id.toLowerCase().includes(lowerQuery)
    );
  }, [searchQuery]);

  const selectedSection = useMemo(() => {
    return rebtData.find((s) => s.id === selectedId) || rebtData[0];
  }, [selectedId]);

  // Split content into pages
  const CHARS_PER_PAGE = 3500;
  const pages = useMemo(() => {
    const content = selectedSection.content;
    if (!content) return [];
    
    const blocks = content.split('\n\n');
    const result: string[] = [];
    let currentBlock = "";

    for (const block of blocks) {
      if (currentBlock.length + block.length > CHARS_PER_PAGE && currentBlock.length > 0) {
        result.push(currentBlock.trim());
        currentBlock = block + '\n\n';
      } else {
        currentBlock += block + '\n\n';
      }
    }
    if (currentBlock.trim().length > 0) {
      result.push(currentBlock.trim());
    }
    return result;
  }, [selectedSection.content]);

  // Handle clicking a link inside the markdown (if we eventually add internal links)
  useEffect(() => {
    // Scroll to top of reader when section changes
    setCurrentPage(1);
    const readerElement = document.getElementById('rebt-reader-content');
    if (readerElement) {
      readerElement.scrollTop = 0;
      window.scrollTo(0, 0); // Respaldo para móviles
    }
  }, [selectedId]);

  // Scroll to top on page change
  useEffect(() => {
    const readerElement = document.getElementById('rebt-reader-content');
    if (readerElement) {
      // Forzar que el scroll ocurra inmediatamente después de que el DOM se actualice
      setTimeout(() => {
        readerElement.scrollTop = 0;
        window.scrollTo(0, 0); // Respaldo para móviles
      }, 10);
    }
  }, [currentPage]);

  const handleSelect = (id: string) => {
    setSelectedId(id);
    setIsSidebarOpen(false); // Close sidebar on mobile after selection
  };

  return (
    <div className="flex flex-col lg:flex-row h-full w-full bg-white rounded-lg shadow-lg border border-slate-200 overflow-hidden relative">
      
      {/* Mobile Top Header (replaces floating button) */}
      <div className="lg:hidden flex items-center justify-between bg-slate-50 border-b border-slate-200 p-3.5 z-10 shadow-sm">
        <div className="flex flex-col overflow-hidden pr-4">
          <span className="text-[10px] font-bold text-teal-600 uppercase tracking-wider">{selectedSection.category}</span>
          <span className="text-sm font-bold text-slate-800 truncate">{selectedSection.title}</span>
        </div>
        <button 
          onClick={() => setIsSidebarOpen(true)} 
          className="shrink-0 p-2 bg-white rounded-lg border border-slate-200 text-slate-700 hover:text-teal-600 hover:border-teal-200 transition-colors shadow-sm"
        >
          <Icon icon="solar:hamburger-menu-line-duotone" className="size-5" />
        </button>
      </div>

      {/* Sidebar (Índice) */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-[70] w-full lg:w-80 bg-slate-50 border-r border-slate-200 flex flex-col transition-transform duration-300 ease-in-out shadow-2xl lg:shadow-none
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Header del Sidebar */}
        <div className="px-6 py-5 border-b border-slate-200 bg-white">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-3">
              <div className="p-1.5 bg-teal-50 text-teal-700 rounded-lg shadow-sm">
                <Icon icon="solar:book-2-line-duotone" className="size-5" />
              </div>
              <h2 className="font-bold text-slate-800 text-lg leading-none">Índice REBT</h2>
            </div>
            
            {/* Close button inside sidebar on mobile */}
            <button 
              className="lg:hidden p-1.5 text-slate-400 hover:text-slate-700 bg-slate-100 rounded-lg transition-colors"
              onClick={() => setIsSidebarOpen(false)}
            >
              <Icon icon="solar:close-circle-line-duotone" className="size-5" />
            </button>
          </div>
          
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <Icon icon="solar:magnifer-line-duotone" className="size-4 text-slate-400" />
            </div>
            <input 
              type="text" 
              placeholder="Buscar ITC o palabra clave..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full p-2.5 ps-9 bg-white border border-slate-200 rounded-lg text-slate-900 text-sm focus:ring-teal-500/20 focus:border-teal-500 transition-all placeholder:text-slate-400"
            />
          </div>
        </div>

        {/* Lista navegable */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-1 custom-scrollbar">
          {filteredSections.length > 0 ? (
            filteredSections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleSelect(section.id)}
                className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  selectedId === section.id 
                    ? 'bg-teal-50 text-teal-700 border border-teal-100' 
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-transparent'
                }`}
              >
                {section.title}
              </button>
            ))
          ) : (
            <div className="text-center p-4 text-slate-500 text-sm">
              No se encontraron coincidencias.
            </div>
          )}
        </div>
      </aside>

      {/* Overlay oscuro para el sidebar en móvil */}
      {isSidebarOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[60]" 
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Área de Lectura (Main Content) */}
      <main 
        id="rebt-reader-content"
        className="flex-1 h-full overflow-y-auto bg-white p-6 lg:p-12 custom-scrollbar scroll-smooth"
      >
        <div className="max-w-3xl mx-auto pt-10 lg:pt-0">
          
          <div className="mb-8 pb-4 border-b border-slate-100">
            <span className="inline-block px-2.5 py-1 bg-teal-50 text-teal-700 text-xs font-bold uppercase tracking-wider rounded-lg mb-3 border border-teal-100">
              {selectedSection.category}
            </span>
            <h1 className="text-2xl lg:text-3xl font-extrabold text-slate-900 leading-tight">
              {selectedSection.title}
            </h1>
          </div>

          <div className="prose prose-slate prose-teal max-w-none">
            {pages.length > 0 ? (
              <>
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {pages[currentPage - 1]}
                </ReactMarkdown>
                
                {/* Pagination Controls */}
                {pages.length > 1 && (
                  <div className="flex items-center justify-between mt-12 pt-6 border-t border-slate-200">
                    <button
                      onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                      disabled={currentPage === 1}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed bg-slate-100 hover:bg-slate-200 text-slate-700"
                    >
                      <Icon icon="solar:alt-arrow-left-line-duotone" className="size-5" />
                      Anterior
                    </button>
                    
                    <span className="text-sm font-semibold text-slate-500">
                      Página {currentPage} de {pages.length}
                    </span>
                    
                    <button
                      onClick={() => setCurrentPage(p => Math.min(pages.length, p + 1))}
                      disabled={currentPage === pages.length}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed bg-teal-600 hover:bg-teal-700 text-white shadow-sm"
                    >
                      Siguiente
                      <Icon icon="solar:alt-arrow-right-line-duotone" className="size-5" />
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="flex flex-col items-center justify-center p-8 bg-slate-50 border border-dashed border-slate-300 rounded-lg mt-10">
                <Icon icon="solar:info-circle-line-duotone" className="size-12 text-slate-300 mb-4" />
                <h3 className="text-lg font-bold text-slate-700 mb-2">Contenido no disponible aún</h3>
                <p className="text-slate-500 text-center text-sm max-w-md">
                  El texto oficial de la <strong>{selectedSection.title}</strong> aún no se ha volcado en la base de datos de esta aplicación. Puedes añadir este texto editando el archivo de datos de la normativa.
                </p>
              </div>
            )}
          </div>
          
        </div>
      </main>

    </div>
  );
}
