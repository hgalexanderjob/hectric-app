import NormativaAIChat from "@/components/normativa/NormativaAIChat";
import RebtInteractiveViewer from "@/components/normativa/RebtInteractiveViewer";
import { Icon } from "@iconify/react";

export default function NormativaPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
        
        {/* Header */}
        <div className="mb-6 flex flex-col gap-2">
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900 flex items-center gap-3">
            <div className="p-2 bg-teal-50 text-teal-700 rounded-lg shadow-sm">
              <Icon icon="solar:document-text-line-duotone" className="size-6" />
            </div>
            Consulta Normativa REBT
          </h1>
          <p className="text-slate-600">
            Reglamento Electrotécnico para Baja Tensión interactivo con asistencia de IA.
          </p>
        </div>

        {/* Layout Principal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 lg:h-[calc(100vh-14rem)] lg:min-h-[600px]">
          
          {/* Lado Izquierdo: Visor Interactivo (75%) */}
          <div className="lg:col-span-9 h-[75vh] lg:h-full relative group">
            <RebtInteractiveViewer />
          </div>

          {/* Lado Derecho: Chat IA (25%) */}
          <div className="lg:col-span-3 lg:h-full relative">
            <div className="h-full">
              <NormativaAIChat />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
