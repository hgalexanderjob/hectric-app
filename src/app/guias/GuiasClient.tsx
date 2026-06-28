"use client";

import { useState, useMemo } from "react";
import { Guia } from "@/data/guias";
import { getAvailableSeries } from "@/data/guias";
import { Icon } from '@iconify/react';

export default function GuiasClient({ 
  initialGuias, 
  availableBrands, 
  availableReferencias 
}: { 
  initialGuias: Guia[],
  availableBrands: string[],
  availableReferencias: string[]
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBrands, setSelectedBrands] = useState<Set<string>>(new Set());
  const [selectedSeries, setSelectedSeries] = useState<Set<string>>(new Set());
  const [selectedReferencias, setSelectedReferencias] = useState<Set<string>>(new Set());
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  const itemsPerPage = 8;

  const currentAvailableSeries = useMemo(() => {
    return getAvailableSeries(selectedBrands);
  }, [selectedBrands]);

  // Filter logic
  const filteredGuias = useMemo(() => {
    let result = initialGuias;

    if (searchQuery.trim() !== "") {
      const lowerQuery = searchQuery.toLowerCase();
      result = result.filter(g => g.title.toLowerCase().includes(lowerQuery));
    }

    if (selectedBrands.size > 0) {
      result = result.filter(g => selectedBrands.has(g.brand));
    }

    if (selectedSeries.size > 0) {
      result = result.filter(g => selectedSeries.has(g.series));
    }

    if (selectedReferencias.size > 0) {
      result = result.filter(g => selectedReferencias.has(g.referencia));
    }

    return result;
  }, [initialGuias, searchQuery, selectedBrands, selectedSeries, selectedReferencias]);

  // Pagination logic
  const totalPages = Math.ceil(filteredGuias.length / itemsPerPage);
  const currentGuias = filteredGuias.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleBrandToggle = (brand: string) => {
    setSelectedBrands(prev => {
      const next = new Set(prev);
      if (next.has(brand)) {
        next.delete(brand);
      } else {
        next.add(brand);
      }
      return next;
    });
    // Limpiar series seleccionadas si cambian las marcas
    setSelectedSeries(new Set());
    setCurrentPage(1);
  };

  const handleSeriesToggle = (series: string) => {
    setSelectedSeries(prev => {
      const next = new Set(prev);
      if (next.has(series)) next.delete(series);
      else next.add(series);
      return next;
    });
    setCurrentPage(1);
  };

  const handleReferenciaToggle = (ref: string) => {
    setSelectedReferencias(prev => {
      const next = new Set(prev);
      if (next.has(ref)) next.delete(ref);
      else next.add(ref);
      return next;
    });
    setCurrentPage(1);
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedBrands(new Set());
    setSelectedSeries(new Set());
    setSelectedReferencias(new Set());
    setCurrentPage(1);
  };

  return (
    <div className="mt-8 flex flex-col lg:flex-row gap-8 items-start relative animate-in fade-in duration-500">
      
      {/* Mobile Filter Toggle */}
      <button 
        className="lg:hidden w-full flex items-center justify-center gap-2 py-3 bg-white border border-slate-200 rounded-lg text-slate-700 font-medium shadow-sm active:bg-slate-50"
        onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
      >
        <Icon icon="solar:tuning-square-2-line-duotone" className="size-5" />
        Filtros de Búsqueda {selectedBrands.size + selectedSeries.size + selectedReferencias.size > 0 && `(${selectedBrands.size + selectedSeries.size + selectedReferencias.size})`}
      </button>

      {/* Sidebar (Filtros) */}
      <aside className={`w-full lg:w-1/4 flex-shrink-0 flex flex-col gap-6 bg-white p-5 rounded-lg border border-slate-200 shadow-sm ${isMobileFiltersOpen ? 'block' : 'hidden lg:flex'}`}>
        
        {/* Búsqueda */}
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <Icon icon="solar:magnifer-line-duotone" className="size-5 text-slate-400" />
          </div>
          <input 
            type="text" 
            placeholder="Buscar manual..." 
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
            className="block w-full p-3 ps-10 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 text-sm focus:ring-teal-500/20 focus:border-teal-500 transition-all placeholder:text-slate-500 focus:bg-white"
          />
        </div>

        {/* Botón Borrar Filtros */}
        <button 
          onClick={clearFilters}
          disabled={!searchQuery && selectedBrands.size === 0 && selectedSeries.size === 0 && selectedReferencias.size === 0}
          className="w-full py-2.5 px-4 text-sm font-semibold rounded-lg border border-slate-200 text-slate-600 bg-white hover:bg-slate-50 hover:text-slate-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Borrar filtros
        </button>

        <div className="h-px bg-slate-100 my-2"></div>

        {/* Filtro: Marca */}
        <details className="group [&_summary::-webkit-details-marker]:hidden" open>
          <summary className="flex items-center justify-between cursor-pointer select-none py-1">
            <span className="font-semibold text-slate-800 text-sm">Marca</span>
            <Icon icon="solar:alt-arrow-down-line-duotone" className="size-4 text-slate-400 transition-transform group-open:rotate-180" />
          </summary>
          <div className="mt-4 flex flex-col gap-3 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
            {availableBrands.map(b => (
              <label key={b} className="flex items-center gap-3 cursor-pointer group/label">
                <input 
                  type="checkbox" 
                  checked={selectedBrands.has(b)}
                  onChange={() => handleBrandToggle(b)}
                  className="size-4 rounded-sm border-slate-300 text-teal-600 focus:ring-teal-500/30 cursor-pointer"
                />
                <span className="text-sm text-slate-600 group-hover/label:text-slate-900 transition-colors">
                  {b}
                </span>
              </label>
            ))}
          </div>
        </details>

        <div className="h-px bg-slate-100 my-2"></div>

        {/* Filtro: Serie */}
        <details className="group [&_summary::-webkit-details-marker]:hidden" open>
          <summary className="flex items-center justify-between cursor-pointer select-none py-1">
            <span className="font-semibold text-slate-800 text-sm">Serie</span>
            <Icon icon="solar:alt-arrow-down-line-duotone" className="size-4 text-slate-400 transition-transform group-open:rotate-180" />
          </summary>
          <div className="mt-4 flex flex-col gap-3 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
            {currentAvailableSeries.length > 0 ? currentAvailableSeries.map(s => (
              <label key={s} className="flex items-center gap-3 cursor-pointer group/label">
                <input 
                  type="checkbox" 
                  checked={selectedSeries.has(s)}
                  onChange={() => handleSeriesToggle(s)}
                  className="size-4 rounded-sm border-slate-300 text-teal-600 focus:ring-teal-500/30 cursor-pointer"
                />
                <span className="text-sm text-slate-600 group-hover/label:text-slate-900 transition-colors">
                  {s}
                </span>
              </label>
            )) : (
               <p className="text-xs text-slate-400 italic">No hay series disponibles para esta marca.</p>
            )}
          </div>
        </details>

        <div className="h-px bg-slate-100 my-2"></div>

        {/* Filtro: Referencia */}
        <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex items-center justify-between cursor-pointer select-none py-1">
            <span className="font-semibold text-slate-800 text-sm">Mecanismo</span>
            <Icon icon="solar:alt-arrow-down-line-duotone" className="size-4 text-slate-400 transition-transform group-open:rotate-180" />
          </summary>
          <div className="mt-4 flex flex-col gap-3 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
            {availableReferencias.map(r => (
              <label key={r} className="flex items-center gap-3 cursor-pointer group/label">
                <input 
                  type="checkbox" 
                  checked={selectedReferencias.has(r)}
                  onChange={() => handleReferenciaToggle(r)}
                  className="size-4 rounded-sm border-slate-300 text-teal-600 focus:ring-teal-500/30 cursor-pointer"
                />
                <span className="text-sm text-slate-600 group-hover/label:text-slate-900 transition-colors">
                  {r}
                </span>
              </label>
            ))}
          </div>
        </details>

      </aside>

      {/* Main Content (Cuadrícula de documentos) */}
      <div className="w-full lg:w-3/4 flex flex-col">
        
        {/* Resultados Header */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-900">
            {filteredGuias.length} {filteredGuias.length === 1 ? 'catálogo' : 'catálogos'}
          </h2>
        </div>

        {/* Grid */}
        {filteredGuias.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {currentGuias.map(guia => (
              <div 
                key={guia.id}
                className="group flex flex-col p-4 bg-white border border-slate-200 rounded-lg shadow-sm hover:shadow-md hover:border-teal-500/50 transition-all"
              >
                <div className="flex gap-4">
                  {/* Thumbnail / Icon */}
                  <div className="shrink-0 size-16 bg-slate-100 border border-slate-200 rounded-lg flex items-center justify-center text-slate-400 group-hover:bg-teal-50 group-hover:text-teal-600 group-hover:border-teal-100 transition-colors">
                    {guia.format === 'PDF' && <Icon icon="solar:document-line-duotone" className="size-8" />}
                    {guia.format === 'ZIP' || guia.format === 'RAR' ? <Icon icon="solar:archive-line-duotone" className="size-8" /> : null}
                    {guia.format !== 'PDF' && guia.format !== 'ZIP' && guia.format !== 'RAR' && <Icon icon="solar:book-2-line-duotone" className="size-8" />}
                  </div>

                  {/* Info */}
                  <div className="flex flex-col flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="inline-block px-2 py-0.5 bg-teal-50 border border-teal-100 text-teal-700 text-[10px] font-bold tracking-wide rounded-md uppercase line-clamp-1">
                        {guia.brand} - {guia.series}
                      </span>
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm leading-tight line-clamp-2 group-hover:text-teal-700 transition-colors" title={guia.title}>
                      {guia.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-2 font-medium">Ref: {guia.referencia}</p>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100">
                  <a href={guia.url} className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-teal-600 transition-colors group/btn">
                    Descargar
                    <Icon icon="solar:download-square-line-duotone" className="size-4 text-slate-500 group-hover/btn:text-teal-600 transition-colors" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 bg-white border border-slate-200 rounded-lg border-dashed">
            <Icon icon="solar:archive-line-duotone" className="size-12 text-slate-300 mb-4" />
            <p className="text-lg font-semibold text-slate-700">No se encontraron resultados</p>
            <p className="text-sm text-slate-500 mt-1">Prueba con otros filtros o términos de búsqueda</p>
            <button 
              onClick={clearFilters}
              className="mt-6 px-4 py-2 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 transition-colors text-sm"
            >
              Limpiar búsqueda
            </button>
          </div>
        )}

        {/* Paginación */}
        {totalPages > 1 && (
          <div className="mt-10 flex items-center justify-center gap-4">
            <button 
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-slate-900 disabled:opacity-30 disabled:hover:text-slate-600 transition-colors"
            >
              &larr; Anterior
            </button>
            
            <div className="flex items-center gap-1">
              {Array.from({ length: totalPages }).map((_, i) => {
                const page = i + 1;
                const isActive = page === currentPage;
                return (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`size-8 rounded-lg flex items-center justify-center text-sm font-medium transition-colors ${
                      isActive 
                        ? 'bg-teal-50 text-teal-700 font-bold border border-teal-200/50' 
                        : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    {page}
                  </button>
                )
              })}
            </div>

            <button 
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-slate-900 disabled:opacity-30 disabled:hover:text-slate-600 transition-colors"
            >
              Siguiente &rarr;
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
