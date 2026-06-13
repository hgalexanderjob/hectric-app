import Link from "next/link";

export default function AvisoLegalPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-x-2 text-sm text-slate-500 hover:text-teal-600 font-medium transition-colors mb-6"
          >
            <svg className="shrink-0 size-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Volver al inicio
          </Link>
          
          <h1 className="text-3xl font-bold text-slate-900 mb-6">
            Aviso Legal y Exención de Responsabilidad
          </h1>
          
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
            <p className="text-slate-600">
              Esta sección está en construcción. Próximamente se incluirán aquí los términos de exención de responsabilidad para hectric y hidal respecto a las instrucciones de instalación y el uso de material eléctrico.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
