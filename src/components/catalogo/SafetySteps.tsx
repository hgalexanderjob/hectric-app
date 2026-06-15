import Link from "next/link";

export default function SafetySteps({
  nextStepHref,
  showNextButton = true,
  mechanismType
}: {
  nextStepHref?: string;
  showNextButton?: boolean;
  mechanismType?: string;
}) {
  const isTelecom = ['toma-tv', 'toma-datos', 'toma-telefono', 'toma-audio', 'multimedia'].includes(mechanismType || '');

  return (
    <div className="space-y-8">
      <h3 className="text-2xl font-semibold text-slate-900">
        Pasos previos a la instalación
      </h3>
      <ol className="relative border-s border-slate-200 ml-3">
        {/* Step 0: Video & Intro */}
        <li className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-teal-50 rounded-full -start-3 ring-8 ring-white">
            <svg className="size-4 text-teal-600" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"></path>
            </svg>
          </span>
          <h3 className="flex items-center mb-1 text-lg font-semibold text-slate-900 my-2">
            {isTelecom ? "Fundamentos de Instalación de Telecomunicaciones" : "Fundamentos de seguridad de la electrotecnia"}
            <span className="ms-2 bg-teal-50 border border-teal-200 text-teal-700 text-xs font-medium px-1.5 py-0.5 rounded">
              Obligatorio
            </span>
          </h3>
          <p className="mb-4 max-w-5xl text-slate-600">
            {isTelecom
              ? "En Hectric, antes de iniciar una instalación de voz y datos o audiovisuales, es clave asegurar las condiciones óptimas para garantizar la máxima velocidad y evitar atenuaciones en la señal."
              : "En Hectric, antes de iniciar una instalación debemos aclarar el conocimiento y condiciones de seguridad necesarias para la correcta ejecución y finalización de la misma."}
          </p>

          {!isTelecom && (
            <div className="relative w-full overflow-hidden rounded-lg shadow-lg mb-6 max-w-3xl" style={{ paddingTop: "56.25%" }}>
              <iframe
                className="absolute bottom-0 left-0 right-0 top-0 h-full w-full"
                src="https://www.youtube.com/embed/8-M-3-mEaUE"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </li>

        {isTelecom ? (
          <>
            <li className="mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-teal-50 rounded-full -start-3 ring-8 ring-white">
                <svg className="size-4 text-teal-600" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </span>
              <h3 className="my-2 text-lg font-semibold text-slate-900">1. Identificación del Cableado</h3>
              <p className="text-slate-600 max-w-4xl">Verificar el tipo de cable (UTP, FTP, Coaxial, Par Telefónico) y asegurarse de no confundirlo ni cruzarlo con cableado de red eléctrica (230V).</p>
            </li>
            <li className="mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-teal-50 rounded-full -start-3 ring-8 ring-white">
                <svg className="size-4 text-teal-600" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </span>
              <h3 className="my-2 text-lg font-semibold text-slate-900">2. Ruteo y Canalización Separada</h3>
              <p className="text-slate-600 max-w-4xl">Evite rutar cables de datos o telecomunicaciones por los mismos conductos que los cables de baja tensión (230V) para prevenir interferencias electromagnéticas (diafonía).</p>
            </li>
            <li className="mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-teal-50 rounded-full -start-3 ring-8 ring-white">
                <svg className="size-4 text-teal-600" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </span>
              <h3 className="my-2 text-lg font-semibold text-slate-900">3. Respetar Radios de Curvatura</h3>
              <p className="text-slate-600 max-w-4xl">Manipular los cables con cuidado, evitando dobleces pronunciados o tirones fuertes. Respetar el radio mínimo de curvatura, especialmente en cables de red Cat 6/6A, para no degradar la transmisión de datos.</p>
            </li>
            <li className="mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-teal-50 rounded-full -start-3 ring-8 ring-white">
                <svg className="size-4 text-teal-600" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </span>
              <h3 className="my-2 text-lg font-semibold text-slate-900">4. Herramientas Específicas</h3>
              <p className="text-slate-600 max-w-4xl">Utilice herramientas adecuadas para el crimpado y conexionado (herramientas de impacto 110/Krone, pelacables coaxiales específicos) para evitar dañar los conductores internos o la malla de apantallamiento.</p>
            </li>
            <li className="mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-teal-50 rounded-full -start-3 ring-8 ring-white">
                <svg className="size-4 text-teal-600" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </span>
              <h3 className="my-2 text-lg font-semibold text-slate-900">5. Verificación de Continuidad</h3>
              <p className="text-slate-600 max-w-4xl">Tras realizar la conexión, es recomendable utilizar un tester de red o multímetro para asegurar que no hay cruces ni cortes en los hilos antes de atornillar el mecanismo a la caja.</p>
            </li>
          </>
        ) : (
          <>
            <li className="mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-teal-50 rounded-full -start-3 ring-8 ring-white">
                <svg className="size-4 text-teal-600" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </span>
              <h3 className="my-2 text-lg font-semibold text-slate-900">1. Corte efectivo de la tensión</h3>
              <p className="text-slate-600 max-w-4xl">Baja el interruptor general (IGA) y el magnetotérmico (PIA) correspondiente al circuito donde vas a trabajar desde el cuadro eléctrico de la vivienda para garantizar el aislamiento.</p>
            </li>
            <li className="mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-teal-50 rounded-full -start-3 ring-8 ring-white">
                <svg className="size-4 text-teal-600" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </span>
              <h3 className="my-2 text-lg font-semibold text-slate-900">2. Bloqueo y señalización</h3>
              <p className="text-slate-600 max-w-4xl">Asegúrate de que nadie pueda volver a subir los interruptores accidentalmente mientras trabajas. Si estás acompañado, avisa a todos los miembros de la vivienda de la intervención.</p>
            </li>
            <li className="mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-teal-50 rounded-full -start-3 ring-8 ring-white">
                <svg className="size-4 text-teal-600" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </span>
              <h3 className="flex items-center mb-1 text-lg font-semibold text-slate-900 my-2">
                3. Comprobación de ausencia de tensión
                <span className="ms-2 bg-teal-50 border border-teal-200 text-teal-700 text-xs font-medium px-1.5 py-0.5 rounded">¡Crítico!</span>
              </h3>
              <p className="mb-4 max-w-4xl text-slate-600">Nunca te fíes. Antes de manipular los conductores en la caja del mecanismo, utiliza un multímetro o un detector de tensión para confirmar la ausencia total de corriente.</p>
            </li>
            <li className="mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-teal-50 rounded-full -start-3 ring-8 ring-white">
                <svg className="size-4 text-teal-600" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </span>
              <h3 className="my-2 text-lg font-semibold text-slate-900">4. Aislamiento temporal de conductores</h3>
              <p className="text-slate-600 max-w-4xl">En entornos domésticos, si dejas cables pelados sueltos durante la instalación, protégelos temporalmente con una clema o borne de conexión para evitar contactos fortuitos si alguien restablece la corriente por error.</p>
            </li>
            <li className="mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-teal-50 rounded-full -start-3 ring-8 ring-white">
                <svg className="size-4 text-teal-600" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </span>
              <h3 className="my-2 text-lg font-semibold text-slate-900">5. Verificación de Secciones (ITC-BT-25)</h3>
              <p className="text-slate-600 max-w-4xl">Confirma que el cableado de la pared es el adecuado según normativa: 1,5 mm² para circuitos de iluminación y 2,5 mm² para tomas de corriente de uso general.</p>
            </li>
          </>
        )}

        {/* Action Button */}
        {showNextButton && nextStepHref && (
          <li className="ms-6 mt-12 mb-8">
            <Link
              href={nextStepHref}
              className="inline-flex items-center gap-x-2 text-white bg-teal-600 hover:bg-teal-700 shadow-sm shadow-teal-500/50 rounded-lg px-6 py-3 font-medium transition-all"
            >
              Comenzar instalación
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </Link>
          </li>
        )}
      </ol>
    </div>
  );
}
