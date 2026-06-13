"use client";

import { useState } from "react";
import Link from "next/link";
import { Brand, Series } from "@/app/catalogo/data";
import MechanismModal from "@/components/catalogo/MechanismModal";

export default function BrandCard({ brand }: { brand: Brand }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeModalSerie, setActiveModalSerie] = useState<Series | null>(null);

  return (
    <>
      <div className="overflow-hidden rounded-xl bg-white border border-slate-200 shadow-sm transition-all duration-300 hover:shadow-md hover:border-slate-300">
        {/* Encabezado de la Tarjeta */}
        <div
          className="cursor-pointer group flex flex-col h-full"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
        >
          {/* Área del Logo */}
          <div className="relative p-8 flex items-center justify-center min-h-[140px] bg-gradient-to-br from-slate-50/80 to-white overflow-hidden">
            {/* Decorative blur circle on hover */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-teal-400/0 group-hover:bg-teal-400/10 blur-2xl rounded-full transition-all duration-500"></div>
            
            <img
              className="w-auto h-12 max-w-[160px] object-contain drop-shadow-sm group-hover:scale-105 transition-transform duration-500 relative z-10"
              src={brand.logoSrc}
              alt={`Logo ${brand.name}`}
            />
          </div>

          {/* Fila Inferior: Botón de despliegue */}
          <div className={`flex justify-between items-center text-sm px-5 py-3.5 border-t transition-colors duration-300 ${isOpen ? "bg-teal-50/50 border-teal-100" : "bg-white border-slate-100 group-hover:bg-slate-50"}`}>
            <span className="text-slate-600 font-semibold group-hover:text-teal-600 transition-colors">
              Ver series ({brand.series.length})
            </span>
            <div className={`size-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? "bg-teal-600 text-white shadow-md shadow-teal-600/20" : "bg-slate-100 text-slate-500 group-hover:bg-teal-100 group-hover:text-teal-600"}`}>
              <svg
                className={`size-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </div>
          </div>
        </div>

        {/* Contenido Desplegable (Lista de Módulos) */}
        <div
          className="overflow-hidden bg-slate-50/80 border-t border-slate-100/0 transition-all duration-300"
          style={{ maxHeight: isOpen ? "1000px" : "0px", opacity: isOpen ? 1 : 0, borderColor: isOpen ? "#f1f5f9" : "transparent" }}
        >
          <ul className="p-2 space-y-1">
            {brand.series.map((serie) => (
              <li key={serie.name}>
                <button
                  onClick={() => setActiveModalSerie(serie)}
                  className="w-full text-left p-3 text-sm text-slate-600 hover:bg-slate-100 rounded-lg cursor-pointer flex justify-between items-center border border-transparent hover:border-slate-200 transition-all font-medium group/serie"
                >
                  <div className="flex items-center gap-x-3">
                    <span className="flex items-center gap-x-2">
                      {serie.name}
                      {serie.badge === "Novedad" && (
                        <span className="inline-flex items-center py-0.5 px-2 rounded-full text-xs font-medium bg-teal-100 text-teal-800">
                          Novedad
                        </span>
                      )}
                      {serie.badge === "Popular" && (
                        <span className="inline-flex items-center py-0.5 px-2 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                          Popular
                        </span>
                      )}
                    </span>
                  </div>
                  <svg
                    className="w-4 h-4 text-slate-500 opacity-0 group-hover/serie:opacity-100 transition-opacity"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <MechanismModal 
        isOpen={!!activeModalSerie} 
        onClose={() => setActiveModalSerie(null)} 
        serie={activeModalSerie} 
      />
    </>
  );
}
