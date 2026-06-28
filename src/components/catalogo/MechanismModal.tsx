"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { MechanismType, Series, standardMechanisms } from "@/app/catalogo/data";
import SafetySteps from "./SafetySteps";

interface MechanismModalProps {
  isOpen: boolean;
  onClose: () => void;
  serie: Series | null;
}

export default function MechanismModal({ isOpen, onClose, serie }: MechanismModalProps) {
  const router = useRouter();
  const [step, setStep] = useState<"mechanism" | "reference" | "disclaimer">("mechanism");
  const [selectedMechanism, setSelectedMechanism] = useState<MechanismType | null>(null);
  const [references, setReferences] = useState<any[]>([]);
  const [isLoadingRefs, setIsLoadingRefs] = useState(false);
  const [availableMecIds, setAvailableMecIds] = useState<string[] | null>(null);
  const [targetUrl, setTargetUrl] = useState<string | null>(null);
  const [acceptedDisclaimer, setAcceptedDisclaimer] = useState(false);

  // Prevent scrolling when modal is open and fetch data
  useEffect(() => {
    if (isOpen && serie) {
      document.body.style.overflow = "hidden";

      const fetchAvailable = async () => {
        const parts = serie.href.split("/").filter(Boolean);
        const brand = parts[1] || "niessen";
        const seriesId = parts[2] || "alba";
        try {
          const res = await fetch(`/api/available-mechanisms?brand=${brand}&series=${seriesId}`);
          const data = await res.json();
          setAvailableMecIds(data.availableMechanisms || []);
        } catch (e) {
          console.error("Error fetching available mechanisms", e);
          setAvailableMecIds([]);
        }
      };

      if (availableMecIds === null) {
        fetchAvailable();
      }
    } else {
      document.body.style.overflow = "unset";
      // Reset state when closing modal
      if (!isOpen) {
        setTimeout(() => {
          setStep("mechanism");
          setSelectedMechanism(null);
          setReferences([]);
          setTargetUrl(null);
          setAcceptedDisclaimer(false);
        }, 300);
      }
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen, serie]);

  const handleMechanismClick = async (mec: any) => {
    if (!serie) return;

    setSelectedMechanism(mec);
    setIsLoadingRefs(true);

    const parts = serie.href.split("/").filter(Boolean);
    const brand = parts[1] || "niessen";
    const seriesId = parts[2] || "alba";

    try {
      const res = await fetch(`/api/references?brand=${brand}&series=${seriesId}&mechanism=${mec.id}`);
      const data = await res.json();
      const filteredRefs = (data.references || []).filter((ref: any) => ref.type === "Mecanismo");
      setReferences(filteredRefs);
      setStep("reference");
    } catch (err) {
      console.error(err);
      setReferences([]);
      setStep("reference");
    } finally {
      setIsLoadingRefs(false);
    }
  };

  const handleReferenceClick = (url: string) => {
    setTargetUrl(url);
    setAcceptedDisclaimer(false);
    setStep("disclaimer");
  };

  const handleContinue = () => {
    if (targetUrl && acceptedDisclaimer) {
      router.push(targetUrl);
      onClose();
    }
  };

  if (!isOpen || !serie) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
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
          ) : step === "reference" ? (
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
          ) : (
            <div className="flex items-center gap-3">
              <button
                onClick={() => setStep("reference")}
                className="p-2 -ml-2 text-slate-400 hover:text-teal-600 hover:bg-teal-50 rounded-full transition-colors"
              >
                <svg className="size-5 sm:size-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
              </button>
              <div>
                <h2 className="text-lg sm:text-2xl font-bold text-slate-900 leading-tight text-red-600">
                  ¡Atención! Seguridad
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Pasos previos a la instalación
                </p>
              </div>
            </div>
          )}
          <button
            onClick={onClose}
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
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-6 min-h-[200px]">
              {availableMecIds === null ? (
                <div className="col-span-full flex flex-col items-center justify-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-teal-600 mb-2"></div>
                  <p className="text-xs text-slate-500">Cargando módulos disponibles...</p>
                </div>
              ) : standardMechanisms.filter((mec) => availableMecIds.includes(mec.id)).length > 0 ? (
                standardMechanisms
                  .filter((mec) => availableMecIds.includes(mec.id))
                  .map((mec) => (
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
                  ))
              ) : (
                <div className="col-span-full flex flex-col items-center justify-center text-center py-8">
                  <div className="inline-flex items-center justify-center size-12 rounded-full bg-slate-100 text-slate-400 mb-3">
                    <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <p className="text-sm text-slate-500">Aún no hay mecanismos digitalizados para esta serie.</p>
                </div>
              )}
            </div>
          ) : step === "reference" ? (
            <div className="animate-in fade-in slide-in-from-right-4 duration-300">
              {isLoadingRefs ? (
                <div className="flex flex-col items-center justify-center py-12">
                  <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-teal-600 mb-4"></div>
                  <p className="text-slate-500 text-sm">Buscando referencias en la base de datos...</p>
                </div>
              ) : references.length > 0 ? (
                <div className="flex flex-col gap-3">
                  {/* Botón para continuar sin referencia exacta */}
                  <button
                    onClick={() => handleReferenceClick(`${serie.href}/instalacion/${selectedMechanism?.id}`)}
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border-2 border-teal-500/30 bg-teal-50/20 rounded-xl hover:border-teal-500 hover:bg-teal-50 transition-all group w-full text-left focus:outline-hidden"
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-1 bg-teal-100 text-teal-600 rounded-full p-1.5 group-hover:bg-teal-500 group-hover:text-white transition-colors shrink-0">
                        <svg className="size-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z" />
                        </svg>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-teal-700 font-semibold text-sm">Opción Genérica</span>
                        </div>
                        <p className="text-slate-600 font-medium text-sm sm:text-base">Continuar sin modelo exacto (Guía general)</p>
                      </div>
                    </div>
                    <div className="mt-3 sm:mt-0 flex items-center justify-end text-teal-600 font-bold text-sm">
                      <span>Continuar</span>
                      <svg className="size-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                      </svg>
                    </div>
                  </button>

                  {/* Lista de referencias específicas */}
                  {references.map((ref: any, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleReferenceClick(`${serie.href}/instalacion/${selectedMechanism?.id}?ref=${ref.sku}`)}
                      className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border border-slate-200 rounded-xl hover:border-teal-500 hover:bg-teal-50/50 transition-all group w-full text-left focus:outline-hidden gap-4"
                    >
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className="shrink-0 bg-slate-50 rounded-lg p-2 group-hover:bg-white transition-colors border border-transparent group-hover:border-slate-100">
                          <img
                            src={`/hectric/niessen/assets/png/mechanisms/niessen-${ref.sku.replace(/\s+/g, '-')}.png`}
                            alt={`Mecanismo ${ref.sku}`}
                            className="h-16 w-16 sm:h-20 sm:w-20 object-contain mix-blend-multiply opacity-90 group-hover:opacity-100 transition-opacity drop-shadow-xs"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = "/assets/images/category/mechanisms/niessen.png";
                            }}
                          />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="bg-slate-100 text-slate-600 text-xs font-bold px-2 py-1 rounded-md uppercase tracking-wider group-hover:bg-teal-100 group-hover:text-teal-700 transition-colors">Ref. {ref.sku}</span>
                            {ref.type && <span className="text-slate-400 text-xs">{ref.type}</span>}
                          </div>
                          <p className="text-slate-800 font-medium text-sm sm:text-base">{ref.description}</p>
                        </div>
                      </div>
                      <div className="mt-3 sm:mt-0 flex items-center justify-end text-teal-600 font-medium text-sm">
                        <span>Instalar</span>
                        <svg className="size-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                      </div>
                    </button>
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
                  <button
                    onClick={() => handleReferenceClick(`${serie.href}/instalacion/${selectedMechanism?.id}`)}
                    className="inline-flex items-center justify-center px-6 py-2.5 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition-colors focus:outline-hidden"
                  >
                    Continuar con instalación general
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="animate-in fade-in slide-in-from-right-4 duration-300 flex flex-col gap-6">
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <div className="flex gap-3">
                  <div className="shrink-0 text-amber-600">
                    <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-amber-800 font-bold">Importante</h3>
                    <p className="text-sm text-amber-700 mt-1">
                      Antes de realizar cualquier manipulación en el sistema eléctrico de la vivienda, es vital que leas y comprendas las 5 Reglas de Oro de la seguridad eléctrica.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-slate-200 rounded-xl p-4 sm:p-6 bg-slate-50 overflow-hidden">
                <SafetySteps showNextButton={false} />
              </div>

              <div className="flex flex-col gap-4 mt-2">
                <label className="flex items-start gap-3 p-4 border border-slate-200 rounded-xl bg-white hover:bg-slate-50 cursor-pointer transition-colors group">
                  <div className="relative flex items-center pt-1">
                    <input
                      type="checkbox"
                      className="peer size-5 cursor-pointer appearance-none rounded-md border border-slate-300 checked:border-teal-600 checked:bg-teal-600 transition-all"
                      checked={acceptedDisclaimer}
                      onChange={(e) => setAcceptedDisclaimer(e.target.checked)}
                    />
                    <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-3.5 text-white opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span className="text-sm text-slate-700 group-hover:text-slate-900 leading-relaxed font-medium">
                    He leído y comprendido los pasos de seguridad. Acepto la exención de responsabilidad de Hidal y Hectric sobre la instalación eléctrica que voy a realizar.
                  </span>
                </label>

                <div className="flex justify-end mt-4">
                  <button
                    onClick={handleContinue}
                    disabled={!acceptedDisclaimer}
                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold transition-all shadow-sm
                      disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed disabled:shadow-none
                      bg-teal-600 text-white hover:bg-teal-700 focus:ring-4 focus:ring-teal-500/30"
                  >
                    Entendido, iniciar tutorial
                    <svg className="size-5 ml-2" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-4 sm:px-6 py-3 sm:py-4 bg-slate-50 border-t border-slate-100 flex justify-center sm:justify-end">
          <Link
            href={serie.href}
            className="text-xs sm:text-sm font-medium text-teal-600 hover:text-teal-800 transition-colors flex items-center gap-1"
            onClick={onClose}
          >
            Ver información general de la serie
            <svg className="size-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
