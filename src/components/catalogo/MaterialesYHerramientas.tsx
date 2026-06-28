import Link from "next/link";
import { Icon } from '@iconify/react';

export default function MaterialesYHerramientas() {
  return (
    <>
      {/* Simulated Cross-Selling Materials */}
      <details className="group mt-6 border border-slate-200 rounded-xl bg-white shadow-sm [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex items-center justify-between p-6 cursor-pointer select-none">
          <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Icon icon="solar:box-line-duotone" className="w-6 h-6 text-teal-600" />
            Materiales utilizados en este tutorial
          </h3>
          <Icon icon="solar:alt-arrow-down-line-duotone" className="w-5 h-5 text-slate-500 transition-transform group-open:rotate-180" />
        </summary>
        <div className="px-6 pb-6 pt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Example Product 1 */}
            <Link href="#" className="flex items-center gap-4 p-3 rounded-lg border border-slate-100 hover:border-teal-500 hover:shadow-md transition-all group">
              <div className="w-16 h-16 bg-slate-100 rounded-md flex items-center justify-center shrink-0">
                <Icon icon="solar:bolt-line-duotone" className="w-8 h-8 text-slate-400 group-hover:text-teal-500 transition-colors" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-slate-900 text-sm line-clamp-1 group-hover:text-teal-600 transition-colors">Conmutador Niessen Zenit Blanco</h4>
                <p className="text-teal-600 font-bold mt-1">7,45 €</p>
              </div>
            </Link>

            {/* Example Product 2 */}
            <Link href="#" className="flex items-center gap-4 p-3 rounded-lg border border-slate-100 hover:border-teal-500 hover:shadow-md transition-all group">
              <div className="w-16 h-16 bg-slate-100 rounded-md flex items-center justify-center shrink-0">
                <Icon icon="solar:box-line-duotone" className="w-8 h-8 text-slate-400 group-hover:text-teal-500 transition-colors" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-slate-900 text-sm line-clamp-1 group-hover:text-teal-600 transition-colors">Cable Unipolar 1.5mm H07V-K Azul</h4>
                <p className="text-teal-600 font-bold mt-1">0,25 € / m</p>
              </div>
            </Link>

          </div>
          <button className="w-full flex items-center justify-center gap-2 mt-4 py-2.5 bg-teal-50 text-teal-700 hover:bg-teal-100 font-medium rounded-lg transition-colors text-sm">
            <Icon icon="solar:cart-large-2-line-duotone" className="w-5 h-5" />
            Añadir materiales al carrito
          </button>
        </div>
      </details>

      {/* Simulated Cross-Selling Tools */}
      <details className="group mt-4 border border-slate-200 rounded-xl bg-white shadow-sm [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex items-center justify-between p-6 cursor-pointer select-none">
          <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Icon icon="solar:wrench-line-duotone" className="w-6 h-6 text-teal-600" />
            Herramientas recomendadas
          </h3>
          <Icon icon="solar:alt-arrow-down-line-duotone" className="w-5 h-5 text-slate-500 transition-transform group-open:rotate-180" />
        </summary>
        <div className="px-6 pb-6 pt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Example Tool 1 */}
            <Link href="#" className="flex items-center gap-4 p-3 rounded-lg border border-slate-100 hover:border-teal-500 hover:shadow-md transition-all group">
              <div className="w-16 h-16 bg-slate-100 rounded-md flex items-center justify-center shrink-0">
                <Icon icon="solar:settings-line-duotone" className="w-8 h-8 text-slate-400 group-hover:text-teal-500 transition-colors" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-slate-900 text-sm line-clamp-1 group-hover:text-teal-600 transition-colors">Pelacables Automático Jokari</h4>
                <p className="text-teal-600 font-bold mt-1">22,50 €</p>
              </div>
            </Link>

            {/* Example Tool 2 */}
            <Link href="#" className="flex items-center gap-4 p-3 rounded-lg border border-slate-100 hover:border-teal-500 hover:shadow-md transition-all group">
              <div className="w-16 h-16 bg-slate-100 rounded-md flex items-center justify-center shrink-0">
                <Icon icon="solar:wrench-line-duotone" className="w-8 h-8 text-slate-400 group-hover:text-teal-500 transition-colors" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-slate-900 text-sm line-clamp-1 group-hover:text-teal-600 transition-colors">Destornillador Aislado 1000V</h4>
                <p className="text-teal-600 font-bold mt-1">8,95 €</p>
              </div>
            </Link>

          </div>
          <button className="w-full flex items-center justify-center gap-2 mt-4 py-2.5 bg-teal-50 text-teal-700 hover:bg-teal-100 font-medium rounded-lg transition-colors text-sm">
            <Icon icon="solar:cart-large-2-line-duotone" className="w-5 h-5" />
            Añadir herramientas al carrito
          </button>
        </div>
      </details>
    </>
  );
}
