"use client";

import { useState } from "react";
import { Series } from "@/app/catalogo/data";
import MechanismModal from "@/components/catalogo/MechanismModal";

export default function SeriesCard({ serie }: { serie: Series }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const imageUrl = serie.image || serie.thumbnail || "";

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="w-full text-left group flex flex-col focus:bg-slate-100 rounded-lg hover:bg-teal-100/50 focus:outline-hidden hover:shadow-lg shadow-md transition-all duration-300 border border-slate-100 bg-white"
      >
        <div className="p-4 md:p-5 h-full flex flex-col justify-center">
          <div className="flex justify-between items-center gap-x-3">
            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-lg mr-2 bg-slate-50 flex items-center justify-center shrink-0 p-2">
              <img
                className="max-w-full max-h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
                src={imageUrl}
                alt={`Serie ${serie.name}`}
              />
            </div>
            <div className="grow">
              <h3 className="block font-bold text-slate-700 text-lg group-hover:text-teal-700 transition-colors uppercase">
                {serie.name}
                {serie.badge === "Novedad" && (
                  <span className="ms-2 inline-flex items-center py-0.5 px-2 rounded-full text-[10px] font-medium bg-teal-100 text-teal-800 align-middle">
                    Novedad
                  </span>
                )}
              </h3>
              <p className="text-sm text-teal-600 mt-1 font-medium">
                {serie.modelsCount ? (
                  <span className="font-bold">{serie.modelsCount.toLocaleString("es-ES")}</span>
                ) : (
                  <span className="font-bold">+50</span>
                )}{" "}
                Modelos disponibles
              </p>
            </div>
            <div>
              <svg
                className="shrink-0 size-6 text-slate-400 group-hover:text-teal-600 transition-colors group-hover:translate-x-1 duration-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </div>
          </div>
        </div>
      </button>

      <MechanismModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        serie={serie} 
      />
    </>
  );
}
