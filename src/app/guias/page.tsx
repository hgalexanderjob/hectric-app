import { guiasData, getAvailableBrands, getAvailableReferencias } from "@/data/guias";
import GuiasClient from "./GuiasClient";

export default function GuiasPage() {
  const availableBrands = getAvailableBrands();
  const availableReferencias = getAvailableReferencias();

  return (
    <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      <h1 className="text-3xl font-bold text-slate-800 sm:text-4xl">
        Guías y Manuales
      </h1>
      <p className="mt-1 text-slate-600">
        Consulta todos los manuales de instalación en formato digital.
      </p>

      <GuiasClient 
        initialGuias={guiasData} 
        availableBrands={availableBrands} 
        availableReferencias={availableReferencias} 
      />
    </div>
  );
}
