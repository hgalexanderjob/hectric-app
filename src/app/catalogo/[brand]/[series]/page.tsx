import { notFound } from "next/navigation";
import Link from "next/link";
import { brandsData, standardMechanisms } from "@/app/catalogo/data";
import SafetySteps from "@/components/catalogo/SafetySteps";

export default async function SeriesPage({
  params,
}: {
  params: Promise<{ brand: string; series: string }>;
}) {
  const { brand: brandSlug, series: seriesSlug } = await params;

  // Encontrar la marca (comparar el slug de la URL con el ID de la marca)
  const brandData = brandsData.find(
    (b) => b.id.toLowerCase() === brandSlug.toLowerCase()
  );

  if (!brandData) {
    notFound();
  }

  // Encontrar la serie (comparar la última parte del href con el seriesSlug)
  const seriesData = brandData.series.find((s) => {
    const segments = s.href.split("/");
    const expectedSlug = segments[segments.length - 1];
    return expectedSlug.toLowerCase() === seriesSlug.toLowerCase();
  });

  if (!seriesData) {
    notFound();
  }

  const bannerImage = seriesData.bannerImage;

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Breadcrumb / Back button */}
      <div className="max-w-7xl px-4 pt-6 lg:pt-10 pb-6 sm:px-6 lg:px-8 mx-auto">
        <Link
          href="/catalogo"
          className="inline-flex items-center gap-x-2 text-sm text-teal-600 hover:text-teal-800 font-medium transition-colors"
        >
          <svg className="shrink-0 size-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Volver al catálogo
        </Link>
      </div>

      <div className="max-w-7xl px-4 pb-12 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-6xl">
          <div className="space-y-5 md:space-y-8">
            <div className="space-y-6">
              {/* Banner Image */}
              <div className="mb-8 rounded-lg overflow-hidden bg-slate-100 shadow-sm border border-slate-200 h-64 md:h-96 relative flex items-center justify-center">
                {bannerImage ? (
                  <img
                    className="w-full h-full object-cover"
                    src={bannerImage}
                    alt={`Serie ${seriesData.name}`}
                  />
                ) : (
                  <div className="absolute inset-0 bg-linear-to-r from-teal-800 to-slate-900 flex flex-col items-center justify-center p-6 text-center">
                    <h1 className="text-white text-4xl md:text-6xl font-bold opacity-90 drop-shadow-md">
                      {seriesData.name}
                    </h1>
                    <p className="text-teal-100 mt-2 text-lg md:text-xl font-medium opacity-80 uppercase tracking-widest">
                      {brandData.name}
                    </p>
                  </div>
                )}
              </div>

              {/* Title & Description */}
              <div className="max-w-4xl">
                <h2 className="text-3xl text-slate-900 font-bold md:text-4xl">
                  Serie {brandData.name} {seriesData.name}
                </h2>
                <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                  {seriesData.description ||
                    `En hectric encontrarás una amplia gama de mecanismos ${brandData.name} para satisfacer todas tus necesidades. Desde interruptores y enchufes hasta soluciones domóticas de la serie ${seriesData.name}, tenemos todo lo que necesitas para equipar tu hogar o negocio con la máxima seguridad y diseño.`}
                </p>
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-slate-200">
              {/* Timeline de Seguridad */}
              <SafetySteps showNextButton={false} />
            </div>

            {/* Mechanism Selection Grid (Opción A) */}
            <div className="pt-8 mt-12 border-t border-slate-200">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">¿Qué mecanismo vas a instalar?</h2>
                <p className="mt-2 text-slate-600 text-lg">Selecciona la función técnica para cargar el tutorial en vídeo e iniciar hectric IA especializado en {seriesData.name}.</p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
                {standardMechanisms.map((mec) => (
                  <Link
                    key={mec.id}
                    href={`/catalogo/${brandSlug}/${seriesSlug}/instalacion/${mec.id}`}
                    className="group flex flex-col items-center p-6 bg-white border border-slate-200 rounded-2xl hover:border-teal-500 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center"
                  >
                    <div className="size-14 bg-slate-50 text-slate-500 group-hover:bg-teal-50 group-hover:text-teal-600 border border-slate-100 group-hover:border-teal-100 rounded-xl flex items-center justify-center mb-4 transition-colors">
                      <svg className="size-7 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        {mec.iconSvg}
                      </svg>
                    </div>
                    <h3 className="font-semibold text-slate-800 text-sm group-hover:text-teal-700 transition-colors">{mec.name}</h3>
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
