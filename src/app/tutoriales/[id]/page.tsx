import { notFound } from 'next/navigation';
import Link from 'next/link';
import { tutorialsData } from '@/data/tutoriales';

export default function TutorialDetailPage({ params }: { params: { id: string } }) {
  const tutorial = tutorialsData.find(t => t.id === params.id);

  if (!tutorial) {
    notFound();
  }

  const isVideo = !!tutorial.videoUrl;

  return (
    <div className="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Back button */}
      <Link href="/tutoriales" className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-teal-600 transition-colors mb-8 group">
        <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
        Volver a Tutoriales
      </Link>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-teal-100 text-teal-800 text-sm font-semibold px-3 py-1 rounded-full">
            {tutorial.category}
          </span>
          <span className={`text-xs font-bold px-2 py-1 rounded border uppercase tracking-wider
            ${tutorial.difficulty === 'Baja' ? 'bg-green-50 text-green-700 border-green-200' : 
              tutorial.difficulty === 'Media' ? 'bg-amber-50 text-amber-700 border-amber-200' : 
              'bg-rose-50 text-rose-700 border-rose-200'}`}>
            {tutorial.difficulty}
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
          {tutorial.title}
        </h1>
        <p className="text-lg text-slate-600">
          {tutorial.description}
        </p>
      </div>

      {/* Video Player */}
      {isVideo && (
        <div className="relative w-full overflow-hidden rounded-2xl shadow-xl mb-12 bg-slate-900 border border-slate-200" style={{ paddingTop: "56.25%" }}>
          <iframe
            className="absolute bottom-0 left-0 right-0 top-0 h-full w-full"
            src={tutorial.videoUrl}
            allowFullScreen
            title={tutorial.title}
          ></iframe>
        </div>
      )}

      {/* Content Body */}
      <div className="prose prose-slate prose-lg max-w-none prose-headings:font-bold prose-a:text-teal-600 hover:prose-a:text-teal-500">
        <h2>Guía Paso a Paso</h2>
        <p>
          Bienvenido a la guía detallada de Hectric para la instalación y configuración de <strong>{tutorial.title}</strong>. 
          Asegúrate de haber seguido las 5 Reglas de Oro de seguridad antes de comenzar cualquier manipulación eléctrica.
        </p>

        <h3>Materiales Necesarios</h3>
        <ul>
          <li>Mecanismo/Dispositivo a instalar</li>
          <li>Destornillador plano y de estrella aislados (1000V)</li>
          <li>Pelacables automático o tijeras de electricista</li>
          <li>Multímetro o detector de tensión</li>
        </ul>

        <h3>Paso 1: Preparación</h3>
        <p>
          Verifica que la sección del cableado sea la correcta según el circuito (ej. 1.5mm² para iluminación, 2.5mm² para enchufes). Pela aproximadamente 11-12mm del extremo de los conductores.
        </p>

        <h3>Paso 2: Conexionado</h3>
        <p>
          Introduce los conductores pelados en los bornes correspondientes. Si el mecanismo utiliza bornes automáticos (sin tornillo), asegúrate de insertar el cable hasta el fondo y verificar que no queda cobre a la vista.
        </p>

        <div className="bg-amber-50 border-l-4 border-amber-500 p-4 my-6 rounded-r-lg">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-amber-800 mt-0">Precaución Importante</h3>
              <div className="mt-2 text-sm text-amber-700">
                <p>Nunca conectes el cable de fase (marrón, negro o gris) en el borne destinado al neutro (azul) o a la tierra (verde-amarillo).</p>
              </div>
            </div>
          </div>
        </div>

        <h3>Paso 3: Fijación</h3>
        <p>
          Acomoda los cables ordenadamente en el fondo de la caja universal. Coloca el mecanismo y aprieta los tornillos de las garras o del bastidor de forma alterna para evitar que quede torcido. Finalmente, coloca el marco y la tecla/tapa embellecedora.
        </p>

        <h3>Paso 4: Comprobación</h3>
        <p>
          Restaura la corriente en el cuadro general y comprueba el correcto funcionamiento del dispositivo instalado.
        </p>
      </div>
    </div>
  );
}
