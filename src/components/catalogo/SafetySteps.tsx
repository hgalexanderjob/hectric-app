import Link from "next/link";

export default function SafetySteps({ 
  nextStepHref,
  showNextButton = true
}: { 
  nextStepHref?: string;
  showNextButton?: boolean;
}) {
  return (
    <div className="space-y-8">
      <h3 className="text-2xl font-semibold text-slate-900">
        Pasos previos a la instalación
      </h3>
      <ol className="relative border-s border-slate-200 ml-3">
        {/* Step 0: Video */}
        <li className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-teal-50 rounded-full -start-3 ring-8 ring-white">
            <svg
              className="size-4 text-teal-600"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
              ></path>
            </svg>
          </span>
          <h3 className="flex items-center mb-1 text-lg font-semibold text-slate-900 my-2">
            Fundamentos de seguridad de la electrotecnia
            <span className="ms-2 bg-teal-50 border border-teal-200 text-teal-700 text-xs font-medium px-1.5 py-0.5 rounded">
              Obligatorio
            </span>
          </h3>
          <p className="mb-4 max-w-5xl text-slate-600">
            En hectric Antes de iniciar una instalación debemos aclarar el
            conocimiento y condiciones de seguridad necesarias para la correcta
            ejecución y finalización de la misma.
          </p>

          <div
            className="relative w-full overflow-hidden rounded-lg shadow-lg mb-6 max-w-3xl"
            style={{ paddingTop: "56.25%" }}
          >
            <iframe
              className="absolute bottom-0 left-0 right-0 top-0 h-full w-full"
              src="https://www.youtube.com/embed/8-M-3-mEaUE"
              allowFullScreen
            ></iframe>
          </div>
        </li>

        {/* Step 1 */}
        <li className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-teal-50 rounded-full -start-3 ring-8 ring-white">
            <svg
              className="size-4 text-teal-600"
              fill="none"
              strokeWidth="2"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </span>
          <h3 className="my-2 text-lg font-semibold text-slate-900">
            1. Desconectar
          </h3>
          <p className="text-slate-600 max-w-4xl">
            Realizar el corte efectivo de todas las fuentes de tensión. Debemos
            actuar sobre los elementos de mando y protección (PIA e IGA) del cuadro
            general de mando y protección (CGMP) para asegurar que el circuito de
            la estancia está totalmente aislado de la red eléctrica.
          </p>
        </li>

        {/* Step 2 */}
        <li className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-teal-50 rounded-full -start-3 ring-8 ring-white">
            <svg
              className="size-4 text-teal-600"
              fill="none"
              strokeWidth="2"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </span>
          <h3 className="my-2 text-lg font-semibold text-slate-900">
            2. Proteger contra la reconexión
          </h3>
          <p className="text-slate-600 max-w-4xl">
            Bloquear en posición de apertura los aparatos de corte. Es vital
            asegurar que nadie pueda restablecer el suministro accidentalmente.
            En instalaciones domésticas, se recomienda señalizar el cuadro
            eléctrico o utilizar bloqueos físicos en los magnetotérmicos.
          </p>
        </li>

        {/* Step 3 */}
        <li className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-teal-50 rounded-full -start-3 ring-8 ring-white">
            <svg
              className="size-4 text-teal-600"
              fill="none"
              strokeWidth="2"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </span>
          <h3 className="flex items-center mb-1 text-lg font-semibold text-slate-900 my-2">
            3. Verificar ausencia de tensión
            <span className="ms-2 bg-teal-50 border border-teal-200 text-teal-700 text-xs font-medium px-1.5 py-0.5 rounded">
              Obligatorio
            </span>
          </h3>
          <p className="mb-4 max-w-4xl text-slate-600">
            Antes de manipular los cables, utilice un multímetro o un detector
            de tensión para confirmar la ausencia total de corriente. Según el
            REBT, la verificación debe realizarse entre todos los conductores
            activos entre sí y con respecto a tierra.
          </p>
        </li>

        {/* Step 4 */}
        <li className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-teal-50 rounded-full -start-3 ring-8 ring-white">
            <svg
              className="size-4 text-teal-600"
              fill="none"
              strokeWidth="2"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </span>
          <h3 className="my-2 text-lg font-semibold text-slate-900">
            4. Puesta a tierra y cortocircuito
          </h3>
          <p className="text-slate-600 max-w-4xl">
            En trabajos en baja tensión domiciliaria, consiste en unir los
            conductores activos entre sí y conectarlos al circuito de tierra.
            Esto protege al operario desviando cualquier posible retorno accidental
            de corriente hacia la toma de tierra del edificio.
          </p>
        </li>

        {/* Step 5 */}
        <li className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-teal-50 rounded-full -start-3 ring-8 ring-white">
            <svg
              className="size-4 text-teal-600"
              fill="none"
              strokeWidth="2"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </span>
          <h3 className="my-2 text-lg font-semibold text-slate-900">
            5. Señalización de la zona de trabajo
          </h3>
          <p className="text-slate-600 max-w-4xl">
            Delimitar claramente el área donde se está trabajando. Es fundamental
            informar al resto de convivientes o trabajadores de la intervención
            eléctrica activa para evitar riesgos.
          </p>
        </li>

        {/* Step 6 */}
        <li className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-teal-50 rounded-full -start-3 ring-8 ring-white">
            <svg
              className="size-4 text-teal-600"
              fill="none"
              strokeWidth="2"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </span>
          <h3 className="my-2 text-lg font-semibold text-slate-900">
            6. Verificación de Secciones y Circuitos (ITC-BT-25)
          </h3>
          <p className="text-slate-600 max-w-4xl">
            Antes de proceder, es fundamental asegurar que las secciones de los
            conductores instalados cumplen con el reglamento: 1,5 mm² para alumbrado
            (C1), 2,5 mm² para tomas de uso general (C2) y 6 mm² para circuitos
            de potencia (C3).
          </p>
        </li>

        {/* Action Button */}
        {showNextButton && nextStepHref && (
          <li className="ms-6 mt-12 mb-8">
            <Link
              href={nextStepHref}
              className="inline-flex items-center gap-x-2 text-white bg-teal-600 hover:bg-teal-700 shadow-sm shadow-teal-500/50 rounded-lg px-6 py-3 font-medium transition-all"
            >
              Comenzar instalación
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </li>
        )}
      </ol>
    </div>
  );
}
