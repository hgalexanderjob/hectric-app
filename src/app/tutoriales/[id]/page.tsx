import { notFound } from 'next/navigation';
import Link from 'next/link';
import { fetchTutorials } from '@/lib/youtube';
import ExpandableDescription from '@/components/tutoriales/ExpandableDescription';
import MaterialesYHerramientas from '@/components/catalogo/MaterialesYHerramientas';
import { Icon } from '@iconify/react';

export default async function TutorialDetailPage(props: { params: Promise<{ id: string }> | { id: string } }) {
  // En Next.js 15+ los params son asíncronos y hay que desenvolverlos
  const params = await props.params;
  const decodedId = decodeURIComponent(params.id).toLowerCase();
  
  const tutorialsData = await fetchTutorials();
  const tutorial = tutorialsData.find(t => t.id.toLowerCase() === decodedId);

  if (!tutorial) {
    console.error("Tutorial no encontrado para el ID:", decodedId);
    notFound();
  }

  return (
    <div className="max-w-[85rem] px-4 py-8 sm:px-6 lg:px-8 mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Top back navigation and Disclaimer */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <Link href="/tutoriales" className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors group">
          <Icon icon="solar:alt-arrow-left-line-duotone" className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Volver a todos los vídeos
        </Link>

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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Main Video Section */}
        <div className="lg:col-span-2">
          {/* AI Tutorial Banner */}
          {tutorial.aiTutorialUrl && (
            <Link 
              href={tutorial.aiTutorialUrl}
              className="flex flex-col sm:flex-row items-center sm:justify-between gap-4 mb-6 p-4 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-teal-500 hover:shadow-md transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className="shrink-0 p-2 bg-slate-50 rounded-lg border border-slate-100">
                  <img src="/assets/images/icons/hectric.ico" alt="Hectric IA" className="size-8 object-contain drop-shadow-sm" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base sm:text-lg leading-tight group-hover:text-teal-600 transition-colors">Guía interactiva</h3>
                  <p className="text-slate-500 text-xs sm:text-sm mt-0.5">Paso a paso con hectric IA</p>
                </div>
              </div>
              <div className="w-full sm:w-auto px-5 py-2.5 bg-teal-600 text-white text-center font-bold rounded-lg text-sm group-hover:bg-teal-700 transition-colors whitespace-nowrap shadow-sm">
                Iniciar Tutorial
              </div>
            </Link>
          )}

          {/* User's YouTube iframe snippet */}
          <div className="embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded-xl shadow-lg bg-black mb-4" style={{ paddingTop: "56.25%" }}>
            <iframe 
              className="embed-responsive-item absolute bottom-0 left-0 right-0 top-0 h-full w-full" 
              src={`https://www.youtube.com/embed/${tutorial.youtubeId}?autoplay=1`} 
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              title={tutorial.title}
            ></iframe>
          </div>

          {/* Video Information */}
          <div className="mt-4">
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
              {tutorial.title}
            </h1>
            
            <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-b border-slate-200">
              
              {/* Channel Info */}
              <div className="flex items-center gap-3">
                <img 
                  src={tutorial.channelAvatar} 
                  alt={tutorial.channelName} 
                  className="w-12 h-12 rounded-full bg-slate-200 object-cover"
                />
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">{tutorial.channelName}</h3>
                  <p className="text-sm text-slate-500">{tutorial.views}</p>
                </div>
              </div>

              {/* Actions (View on YouTube) */}
              <div className="flex items-center gap-2">
                <a 
                  href={`https://www.youtube.com/watch?v=${tutorial.youtubeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-full transition-colors font-semibold text-sm shadow-sm"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                  Ver en YouTube
                </a>
              </div>
            </div>

            {/* Expandable Description Box */}
            <ExpandableDescription 
              views={tutorial.views}
              publishedAt={tutorial.publishedAt}
              category={tutorial.category}
              description={tutorial.description}
            />

            {/* Simulated Cross-Selling Materials & Tools */}
            <MaterialesYHerramientas />
          </div>
        </div>

        {/* Sidebar: Recommended Videos (Placeholder list) */}
        <div className="lg:col-span-1 hidden lg:block">
          <h3 className="font-bold text-slate-900 mb-4 text-lg">Siguientes vídeos</h3>
          <div className="flex flex-col gap-4">
            {tutorialsData.filter(t => t.id !== tutorial.id).slice(0, 5).map(related => (
              <Link href={`/tutoriales/${related.id}`} key={related.id} className="flex gap-3 group">
                <div className="relative w-40 aspect-video rounded-lg overflow-hidden shrink-0 bg-slate-100">
                  <img 
                    src={`https://img.youtube.com/vi/${related.youtubeId}/hqdefault.jpg`} 
                    alt={related.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute bottom-1 right-1 bg-black/80 text-white text-[10px] px-1 py-0.5 rounded">
                    {related.duration}
                  </div>
                </div>
                <div className="flex flex-col overflow-hidden">
                  <h4 className="text-sm font-semibold text-slate-900 line-clamp-2 leading-tight group-hover:text-teal-600 transition-colors">
                    {related.title}
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-1">{related.channelName}</p>
                  <p className="text-xs text-slate-500">{related.views}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
