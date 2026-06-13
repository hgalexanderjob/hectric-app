"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import SearchForm from "@/components/catalogo/SearchForm";
import BrandCard from "@/components/catalogo/BrandCard";
import SeriesCard from "@/components/catalogo/SeriesCard";
import { brandsData } from "./data";

function CatalogoContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  // Initialize from URL parameter if it exists
  const initialQuery = searchParams.get("q") || "";
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [viewMode, setViewMode] = useState<"galeria" | "marcas">("galeria");

  // Sync state with URL when searchQuery changes, but wrap it in useEffect to debounce or just update on submit?
  // Since SearchForm updates searchQuery on every keystroke, let's keep the URL updated (optional) or just use the local state.
  useEffect(() => {
    const q = searchParams.get("q");
    if (q !== null && q !== searchQuery) {
      setSearchQuery(q);
    }
  }, [searchParams]);

  // Filtrar las marcas y sus series basadas en la búsqueda
  const filteredBrands = brandsData
    .map((brand) => {
      // Si el nombre de la marca coincide, mostrar todas sus series
      if (brand.name.toLowerCase().includes(searchQuery.toLowerCase())) {
        return brand;
      }

      // Si no, filtrar las series que coincidan
      const filteredSeries = brand.series.filter((serie) =>
        serie.name.toLowerCase().includes(searchQuery.toLowerCase())
      );

      // Solo retornar la marca si tiene series que coincidan
      if (filteredSeries.length > 0) {
        return { ...brand, series: filteredSeries };
      }

      return null;
    })
    .filter((brand) => brand !== null);

  return (
    <>
      <SearchForm searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {/* View Mode Toggle */}
      <div className="flex justify-center mt-6">
        <div className="inline-flex bg-slate-100 rounded-lg p-1 border border-slate-200">
          <button
            onClick={() => setViewMode("galeria")}
            className={`py-2 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-md transition-all ${
              viewMode === "galeria"
                ? "bg-white text-teal-700 shadow-sm"
                : "text-slate-500 hover:text-slate-700"
            }`}
          >
            <svg className="shrink-0 size-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
            </svg>
            Galería de Series
          </button>
          <button
            onClick={() => setViewMode("marcas")}
            className={`py-2 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-md transition-all ${
              viewMode === "marcas"
                ? "bg-white text-teal-700 shadow-sm"
                : "text-slate-500 hover:text-slate-700"
            }`}
          >
            <svg className="shrink-0 size-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
            Lista de Marcas
          </button>
        </div>
      </div>

      <div className="mt-10">
        {filteredBrands.length > 0 ? (
          viewMode === "marcas" ? (
            /* VISTA: Acordeón por Marcas */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
              {filteredBrands.map((brand) => (
                <BrandCard key={brand.id} brand={brand} />
              ))}
            </div>
          ) : (
            /* VISTA: Cuadrícula Visual */
            <div className="space-y-12">
              {filteredBrands.map((brand) => (
                <section key={brand.id} className="space-y-6">
                  <div className="border-b border-slate-200 pb-2">
                    <h3 className="text-xl font-normal text-slate-600">
                      Series de mecanismos{" "}
                      <span className="underline text-teal-600 underline-offset-8 decoration-teal-600 decoration-2 font-bold">
                        {brand.name}
                      </span>
                    </h3>
                  </div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                    {brand.series.map((serie) => (
                      <SeriesCard key={`${brand.id}-${serie.name}`} serie={serie} />
                    ))}
                  </div>
                </section>
              ))}
            </div>
          )
        ) : (
          <div className="text-center text-slate-500 py-10">
            No se encontraron mecanismos para "{searchQuery}"
          </div>
        )}
      </div>
    </>
  );
}

export default function CatalogoPage() {
  return (
    <Suspense fallback={<div className="text-center py-20 text-slate-500">Cargando catálogo...</div>}>
      <CatalogoContent />
    </Suspense>
  );
}
