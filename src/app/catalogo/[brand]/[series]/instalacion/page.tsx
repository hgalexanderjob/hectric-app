import { notFound } from "next/navigation";
import Link from "next/link";
import { brandsData } from "@/app/catalogo/data";
import AIChat from "@/components/catalogo/AIChat";
import CommunityComments from "@/components/catalogo/CommunityComments";

export default async function InstalacionPage({
  params,
}: {
  params: Promise<{ brand: string; series: string }>;
}) {
  const { brand: brandSlug, series: seriesSlug } = await params;

  // Encontrar la marca
  const brandData = brandsData.find(
    (b) => b.id.toLowerCase() === brandSlug.toLowerCase()
  );

  if (!brandData) {
    notFound();
  }

  // Encontrar la serie
  const seriesData = brandData.series.find((s) => {
    const segments = s.href.split("/");
    const expectedSlug = segments[segments.length - 1];
    return expectedSlug.toLowerCase() === seriesSlug.toLowerCase();
  });

  if (!seriesData) {
    notFound();
  }

  return (
    <div className="bg-slate-50 min-h-screen pb-10">
      {/* Contenido Principal */}
      <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
        
        {/* Breadcrumb & Warning (Non-sticky, integrated into flow) */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <Link
            href={seriesData.href}
            className="inline-flex items-center gap-x-2 text-sm font-semibold text-slate-500 hover:text-teal-600 transition-colors bg-white/50 hover:bg-white px-3 py-1.5 rounded-lg border border-slate-200/60 shadow-sm"
          >
            <svg className="shrink-0 size-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Volver a {seriesData.name}
          </Link>
          
          <div className="flex items-center gap-x-2">
            <Link 
              href="/aviso-legal"
              className="group inline-flex items-center gap-x-2 py-1.5 px-3 rounded-lg text-xs font-medium bg-slate-100/80 hover:bg-slate-200 text-slate-600 hover:text-slate-900 border border-slate-200 transition-colors"
            >
              <svg className="shrink-0 size-4 text-amber-500 group-hover:text-amber-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <span>Exención de responsabilidad</span>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Lado Izquierdo: Vídeo y Detalles (60%) */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col gap-y-6">
            
            {/* Header del tutorial */}
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
                Instalación de {brandData.name} {seriesData.name}
              </h1>
              <p className="mt-2 text-slate-600">
                Sigue paso a paso este tutorial interactivo para instalar los mecanismos de la serie {seriesData.name} con total seguridad.
              </p>
            </div>

            {/* Video Player (16:9) */}
            <div className="relative w-full overflow-hidden rounded-2xl shadow-xl border border-slate-200 bg-black" style={{ paddingTop: "56.25%" }}>
              <iframe
                className="absolute top-0 left-0 bottom-0 right-0 w-full h-full"
                src="https://www.youtube.com/embed/8-M-3-mEaUE?autoplay=0&rel=0"
                title={`Tutorial de instalación ${brandData.name} ${seriesData.name}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Fichas técnicas y descargas */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-800 mb-4">Material Complementario</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a href="#" className="group flex items-center justify-between p-4 rounded-xl border border-slate-200 hover:border-teal-300 hover:bg-teal-50 transition-all">
                  <div className="flex items-center gap-x-3">
                    <div className="size-10 bg-red-100 text-red-600 rounded-lg flex items-center justify-center shrink-0">
                      <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-800 group-hover:text-teal-700">Ficha Técnica Oficial</p>
                      <p className="text-xs text-slate-500">PDF, 2.4 MB</p>
                    </div>
                  </div>
                  <svg className="size-5 text-slate-400 group-hover:text-teal-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                </a>
                
                <a href="#" className="group flex items-center justify-between p-4 rounded-xl border border-slate-200 hover:border-teal-300 hover:bg-teal-50 transition-all">
                  <div className="flex items-center gap-x-3">
                    <div className="size-10 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center shrink-0">
                      <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-800 group-hover:text-teal-700">Normativa REBT</p>
                      <p className="text-xs text-slate-500">ITC-BT-25 y 26</p>
                    </div>
                  </div>
                  <svg className="size-5 text-slate-400 group-hover:text-teal-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Comunidad y Consejos */}
            <CommunityComments brandName={brandData.name} seriesName={seriesData.name} />

          </div>

          {/* Lado Derecho: Chat IA (40%) */}
          <div className="lg:col-span-5 xl:col-span-4 h-full">
            <div className="sticky top-[140px]">
              <AIChat 
                brandId={brandSlug} 
                seriesId={seriesSlug} 
                seriesName={`${brandData.name} ${seriesData.name}`} 
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
