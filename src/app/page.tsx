export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:size-full before:-z-1 before:transform before:-translate-x-1/2">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
          <div className="mt-5 max-w-2xl text-center mx-auto">
            <h1 className="block font-bold text-slate-800 text-4xl md:text-5xl lg:text-6xl">
              Bienvenido a{" "}
              <span className="bg-clip-text bg-gradient-to-tl from-teal-600 to-teal-400 text-transparent">
                hectric
              </span>
            </h1>
          </div>

          <div className="mt-5 max-w-3xl text-center mx-auto">
            <p className="text-lg text-slate-600">
              La plataforma técnica de referencia para el electricista profesional.
              Catálogos, normativas, y un asistente IA especializado a tu disposición.
            </p>
          </div>

          <div className="mt-8 gap-3 flex justify-center">
            <a
              className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-teal-600 to-teal-500 hover:from-teal-600 hover:to-teal-600 border border-transparent text-white text-sm font-medium rounded-md focus:outline-hidden focus:ring-1 focus:ring-teal-600 py-3 px-4 shadow-sm shadow-teal-500/50"
              href="/catalogo"
            >
              Ver Catálogo
              <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </a>
            <a
              className="relative group inline-flex justify-center items-center gap-x-2 text-center bg-white border hover:border-slate-300 text-sm text-slate-700 hover:text-slate-900 font-medium hover:shadow-sm rounded-md focus:outline-hidden focus:ring-1 focus:ring-slate-300 py-3 px-4 shadow-sm"
              href="/chat"
            >
              Probar IA
            </a>
          </div>
        </div>
      </div>
      {/* End Hero Section */}
    </>
  );
}
