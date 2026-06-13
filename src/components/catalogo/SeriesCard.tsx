"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Series, standardMechanisms } from "@/app/catalogo/data";

export default function SeriesCard({ serie }: { serie: Series }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [step, setStep] = useState<"mechanism" | "reference">("mechanism");
  const [selectedMechanism, setSelectedMechanism] = useState<any>(null);
  const [references, setReferences] = useState<any[]>([]);
  const [isLoadingRefs, setIsLoadingRefs] = useState(false);

  const imageUrl = serie.image || serie.thumbnail || "";

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      // Reset state when closing modal
      setTimeout(() => {
        setStep("mechanism");
        setSelectedMechanism(null);
        setReferences([]);
      }, 300);
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  const handleMechanismClick = async (mec: any) => {
    setSelectedMechanism(mec);
    setStep("reference");
    setIsLoadingRefs(true);

    const parts = serie.href.split("/").filter(Boolean);
    const brand = parts[1] || "niessen";
    const seriesId = parts[2] || "alba";

    try {
      const res = await fetch(`/api/references?brand=${brand}&series=${seriesId}&mechanism=${mec.id}`);
      const data = await res.json();
      setReferences(data.references || []);
    } catch (err) {
      console.error(err);
      setReferences([]);
    } finally {
      setIsLoadingRefs(false);
    }
  };

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

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <div
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsModalOpen(false)}
          />
          
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="px-4 sm:px-6 py-4 sm:py-5 border-b border-slate-100 flex items-start sm:items-center justify-between sticky top-0 bg-white/90 backdrop-blur-md z-10">
              {step === "mechanism" ? (
                <div>
                  <h2 className="text-lg sm:text-2xl font-bold text-slate-900 leading-tight">
                    ¿Qué mecanismo vas a instalar en <span className="text-teal-600">{serie.name}</span>?
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Selecciona la función técnica para cargar la instalación asistida por IA.
                  </p>
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => setStep("mechanism")}
                    className="p-2 -ml-2 text-slate-400 hover:text-teal-600 hover:bg-teal-50 rounded-full transition-colors"
                  >
                    <svg className="size-5 sm:size-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>
                  </button>
                  <div>
                    <h2 className="text-lg sm:text-2xl font-bold text-slate-900 leading-tight">
                      Selecciona la Referencia
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                      {selectedMechanism?.name}
                    </p>
                  </div>
                </div>
              )}
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors shrink-0 ml-2 sm:ml-4"
              >
                <svg className="size-5 sm:size-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-4 sm:p-6 overflow-y-auto">
              {step === "mechanism" ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-6">
                  {standardMechanisms.map((mec) => (
                    <button
                      key={mec.id}
                      onClick={() => handleMechanismClick(mec)}
                      className="group flex flex-col items-center p-4 sm:p-6 bg-white border border-slate-200 rounded-2xl hover:border-teal-500 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center focus:outline-hidden"
                    >
                      <div className="size-10 sm:size-14 bg-slate-50 text-slate-500 group-hover:bg-teal-50 group-hover:text-teal-600 border border-slate-100 group-hover:border-teal-100 rounded-xl flex items-center justify-center mb-2 sm:mb-4 transition-colors">
                        <svg className="size-6 sm:size-7 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                          {mec.iconSvg}
                        </svg>
                      </div>
                      <h3 className="font-semibold text-slate-800 text-xs sm:text-sm group-hover:text-teal-700 transition-colors">
                        {mec.name}
                      </h3>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                  {isLoadingRefs ? (
                    <div className="flex flex-col items-center justify-center py-12">
                      <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-teal-600 mb-4"></div>
                      <p className="text-slate-500 text-sm">Buscando referencias en la base de datos...</p>
                    </div>
                  ) : references.length > 0 ? (
                    <div className="flex flex-col gap-3">
                      {references.map((ref: any, idx) => (
                        <Link
                          key={idx}
                          href={`${serie.href}/instalacion/${selectedMechanism.id}?ref=${ref.sku}`}
                          className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border border-slate-200 rounded-xl hover:border-teal-500 hover:bg-teal-50/50 transition-all group"
                          onClick={() => setIsModalOpen(false)}
                        >
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <span className="bg-slate-100 text-slate-600 text-xs font-bold px-2 py-1 rounded-md uppercase tracking-wider group-hover:bg-teal-100 group-hover:text-teal-700 transition-colors">Ref. {ref.sku}</span>
                              {ref.type && <span className="text-slate-400 text-xs">{ref.type}</span>}
                            </div>
                            <p className="text-slate-800 font-medium text-sm sm:text-base">{ref.description}</p>
                          </div>
                          <div className="mt-3 sm:mt-0 flex items-center justify-end text-teal-600 font-medium text-sm">
                            <span>Instalar</span>
                            <svg className="size-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                          </div>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <div className="inline-flex items-center justify-center size-16 rounded-full bg-slate-100 text-slate-400 mb-4">
                        <svg className="size-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-bold text-slate-800 mb-2">Aún no hay referencias exactas</h3>
                      <p className="text-slate-500 text-sm mb-6 max-w-sm mx-auto">
                        Aún no tenemos escaneadas las referencias exactas para esta familia, pero puedes continuar con la instalación general.
                      </p>
                      <Link
                        href={`${serie.href}/instalacion/${selectedMechanism.id}`}
                        className="inline-flex items-center justify-center px-6 py-2.5 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition-colors focus:outline-hidden"
                        onClick={() => setIsModalOpen(false)}
                      >
                        Continuar con instalación general
                      </Link>
                    </div>
                  )}
                </div>
              )}
            </div>
            
            {/* Modal Footer */}
            <div className="px-4 sm:px-6 py-3 sm:py-4 bg-slate-50 border-t border-slate-100 flex justify-center sm:justify-end">
              <Link 
                href={serie.href}
                className="text-xs sm:text-sm font-medium text-teal-600 hover:text-teal-800 transition-colors flex items-center gap-1"
                onClick={() => setIsModalOpen(false)}
              >
                Ver información general de la serie
                <svg className="size-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
