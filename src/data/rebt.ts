export interface RebtSection {
  id: string;
  title: string;
  category: "Artículos" | "ITC-BT";
  content?: string; // Markdown format
}

export const rebtData: RebtSection[] = [
  // Artículos Generales
  {
    id: "articulos-generales",
    title: "Artículos del Reglamento (1 al 29)",
    category: "Artículos",
    content: `
# Bienvenido al Visor Interactivo del REBT por Hectric

Esta herramienta digital ha sido desarrollada por **Hectric**, tu plataforma técnica de referencia para material eléctrico, con el propósito de facilitar a instaladores y profesionales del sector la consulta rápida, interactiva y accesible del **Reglamento Electrotécnico para Baja Tensión** (REBT) y sus Instrucciones Técnicas Complementarias (ITC-BT).

## Sobre la Fuente y Aplicabilidad
Los textos normativos aquí contenidos provienen del marco legal vigente aplicable a las instalaciones eléctricas de baja tensión. Esta herramienta está diseñada como apoyo técnico para agilizar las búsquedas en obra o en fase de diseño. Sin embargo, no sustituye la lectura de las publicaciones oficiales del Boletín Oficial del Estado (BOE).

> [!WARNING]
> **Exención de Responsabilidad:** Hectric proporciona esta herramienta con fines puramente informativos y de consulta. No nos hacemos responsables de errores, omisiones o desactualizaciones en el texto, ni de los daños, perjuicios o fallos en las instalaciones derivados del uso o interpretación de esta información por parte de los usuarios. El instalador o ingeniero es el único responsable de asegurar que sus proyectos cumplen con la normativa legal vigente aplicable en cada momento.

## ¿Cómo utilizar esta herramienta?
1. **Navegación:** Utiliza el panel lateral izquierdo para explorar los diferentes artículos y las 52 instrucciones técnicas (ITC-BT).
2. **Búsqueda Rápida:** Escribe en el buscador superior para filtrar instantáneamente por número de ITC o palabras clave (ej. *"Locales de pública concurrencia"*).
3. **Lectura Optimizada:** El contenido central se adapta dinámicamente a tu pantalla, eliminando la necesidad de hacer zoom continuo como ocurre con los archivos PDF tradicionales.
4. **Asistente IA:** Si tienes dudas sobre un cálculo de sección, protecciones o la interpretación de un artículo, puedes consultar a **Hectric IA** utilizando el panel derecho. El asistente está configurado con conocimientos especializados en normativa eléctrica.

---

## Sobre el Reglamento (Artículos 1 al 29)
El presente Reglamento tiene por objeto establecer las condiciones técnicas y garantías que deben reunir las instalaciones eléctricas conectadas a una fuente de suministro en los límites de baja tensión, con la finalidad de:

- **Preservar** la seguridad de las personas y los bienes.
- **Asegurar** el normal funcionamiento de dichas instalaciones y prevenir perturbaciones en otras instalaciones y servicios.
- **Contribuir** a la fiabilidad técnica y a la eficiencia económica de las instalaciones.

*(El texto legal completo de los artículos generales se volcará en esta sección próximamente).*
`
  },
  
  // ITCs (Instrucciones Técnicas Complementarias)
  { 
    id: "itc-bt-01", 
    title: "ITC-BT-01: Terminología", 
    category: "ITC-BT",
    content: `

## CONSIDERACIONES GENERALES

Las definiciones específicas de los términos utilizados en las ITC particulares pueden encontrarse en el texto de dichas ITC.

Para aquellos términos no definidos en la presente instrucción ni en las ITC particulares se aplicará lo dispuesto en la norma UNE 21.302


### AISLAMIENTO DE UN CABLE

Conjunto de materiales aislantes que forman parte de un cable y cuya función específica es soportar la tensión.


### AISLAMIENTO PRINCIPAL

Aislamiento de las partes activas, cuyo deterioro podría provocar riesgo de choque eléctrico.


### AISLAMIENTO FUNCIONAL

Aislamiento necesario para garantizar el funcionamiento normal y la protección fundamental contra los choques eléctricos.


### AISLAMIENTO REFORZADO

Aislamiento cuyas características mecánicas y eléctricas hace que pueda considerarse equivalente a un doble aislamiento.


### AISLAMIENTO SUPLEMENTARIO

Aislamiento independiente, previsto además del aislamiento principal, a efectos de asegurar la protección contra choque eléctrico en caso de deterioro del aislamiento principal.


### AISLANTE

Substancia o cuerpo cuya conductividad es nula o, en la práctica, muy débil.


### ALTA SENSIBILIDAD

Se consideran los interruptores diferenciales como de alta sensibilidad cuando el valor de esta es igual o inferior a 30 mA.


### AMOVIBLE

Calificativo que se aplica a todo material instalado de manera que se pueda quitar fácilmente.


### APARATO AMOVIBLE

Puede ser:

– Aparato portátil a mano, cuya utilización, es uso normal, exige la acción constante de la misma.

– Aparato movible, cuya utilización, en uso normal, puede necesitar su desplazamiento.

– Aparato semi-fijo, solo puede ser desplazado cuando está sin tensión.


### APARATO DE CALDEO ELÉCTRICO

Aparato que produce calor de forma deliberada por medio de fenómenos eléctricos. Destinado a elevar la temperatura de un determinado medio o fluido.


### APARAMENTA

Equipo, aparato o material previsto para ser conectado a un circuito eléctrico con el fin de asegurar una o varias de las siguientes funciones: protección, control, seccionamiento, conexión.


### APARATO FIJO

Es el que está instalado en forma inamovible.


### BANDEJA

Material de instalación constituido por un perfil, de paredes perforadas o sin perforar, destinado a soportar cables y abierto en su parte superior.


### BASE MÓVIL

Base prevista para conectarse a, o a integrase con, cables flexibles y que puede desplazarse fácilmente cuando está conectada al circuito de alimentación


### BORNE O BARRA PRINCIPAL DE TIERRA

Borne o barra prevista para la conexión a los dispositivos de puesta a tierra de los conductores de protección, incluyendo los conductores de equipotencialidad y eventualmente los conductores de puesta a tierra funcional.


### CABLE

Conjunto constituido por:

– Uno o varios conductores aislados

– Su eventual revestimiento individual.

– La eventual protección del conjunto

– El o los eventuales revestimientos de protección que se dispongan

Puede tener, además, uno o varios conductores no aislados.


### CABLE BLINDADO CON AISLAMIENTO MINERAL

Cable aislado por una materia mineral y que tiene una cubierta de protección constituida por cobre, aluminio o aleación de éstos. Estas cubiertas, a su vez, pueden estar protegidas por un revestimiento adecuado.


### CABLE CON CUBIERTA ESTANCA

Son aquellos cables que disponen de una cubierta interna o externa que proporcionan una protección eficaz contra la penetración de agua.


### CABLE FLEXIBLE

Cable diseñado para garantizar una conexión deformable en servicio y en el que la estructura y la elección de los materiales son tales que cumplen las exigencias correspondientes.


### CABLE FLEXIBLE FIJADO PERMANENTEMENTE

Cable flexible de alimentación a un aparato, unido a éste de manera que solo se pueda desconectar de él con ayuda de un útil.


### CABLE MULTICONDUCTOR

Cable que incluye más de un conductor, algunos de los cuales puede no estar aislado.


### CABLE UNIPOLAR

Cable que tiene un solo conductor aislado.


### CABLE CON NEUTRO CONCÉNTRICO

Cable con un conductor concéntrico destinado a utilizarse como conductor de neutro.


### CANAL

Recinto situado bajo el nivel del suelo o piso y cuyas dimensiones no permiten circular por él y que, en caso de ser cerrado, debe permitir el acceso a los cables en toda su longitud.


### CANALIZACIÓN AMOVIBLE

Canalización que puede ser quitada fácilmente.


### CANALIZACIÓN ELÉCTRICA

Conjunto constituido por uno o varios conductores eléctricos y los elementos que aseguran su fijación y, en su caso, su protección mecánica.


### CANALIZACIÓN FIJA

Canalización instalada en forma inamovible, que no puede ser desplazada.


### CANALIZACIÓN MOVIBLE

Canalización que puede ser desplazada durante su utilización.


### CANAL MOLDURA

Variedad de canal de paredes llenas, de pequeñas dimensiones, conteniendo uno o varios alojamientos para conductores.


### CANAL PROTECTORA

Material de instalación constituido por un perfil, de paredes llenas o perforadas, destinado a contener conductores y otros componentes eléctricos y cerrado por una tapa desmontable.


### CEBADO

Establecimiento de un arco como consecuencia de una perforación de aislamiento.


### CERCA ELÉCTRICA

Cerca formada por uno o varios conductores, sujetos a pequeños aisladores, montados sobre postes ligeros a una altura apropiada a los animales que se pretende alejar y electrizados de tal forma que las personas o los animales que los toquen no reciban descargas peligrosas.


### CIRCUITO

Un circuito es un conjunto de materiales eléctricos (conductores, aparamenta, etc.) de diferentes fases o polaridades, alimentadas por la misma fuente de energía y protegidos contra las sobreintensidades por el o los mismos dispositivos de protección. No quedan incluidos en esta definición los circuitos que formen parte de los aparatos de utilización o receptores.


### CONDUCTO

Envolvente cerrada destinada a alojar conductores aislados o cables en las instalaciones eléctricas, y que permiten su reemplazamiento por tracción.


### CONDUCTOR DE UN CABLE

Parte de un cable que tiene la función específica de conducir corriente.


### CONDUCTOR AISLADO

Conjunto que incluye el conductor, su aislamiento y sus eventuales pantallas.


### CONDUCTOR EQUIPOTENCIAL

Conductor de protección que asegura una conexión equipotencial.


### CONDUCTOR FLEXIBLE

Conductor constituido por alambres suficientemente finos y reunidos de forma que puedan utilizarse como un cable flexible.


### CONDUCTOR MEDIANO (VER PUNTO MEDIANO)

CONDUCTOR DE PROTECCIÓN (CP o PE)

Conductor requerido en ciertas medidas de protección contra choques eléctricos y que conecta alguna de las siguientes partes:

– Masas

– Elementos conductores

– Borne principal de tierra

– Toma de tierra

– Punto de la fuente de alimentación unida a tierra o a un neutro artificial.


### CONDUCTOR NEUTRO

Conductor conectado al punto de una red y capaz de contribuir al transporte de energía eléctrica.

CONDUCTOR CPN o PEN

Conductor puesto a tierra que asegura, al mismo tiempo, las funciones de conductor de protección y de conductor neutro.


### CONDUCTORES ACTIVOS

Se consideran como conductores activos en toda instalación los destinados normalmente a la transmisión de la energía eléctrica. Esta consideración se aplica a los conductores de fase y al conductor neutro en corriente alterna y a los conductores polares y al compensador en corriente continua.


### CONECTOR

Conjunto destinado a conectar eléctricamente un cable a un aparato eléctrico. Se compone de dos partes:

– Una toma móvil, que es la parte que forma cuerpo con el conductor de alimentación.

– Una base, que es la parte incorporada o fijada al aparato de utilización.


### CONEXIÓN EQUIPOTENCIAL

Conexión eléctrica que pone al mismo potencial, o a potenciales prácticamente iguales, a las partes conductoras accesibles y elementos conductores.


### CONTACTOR CON APERTURA AUTOMÁTICA

Contactor electromagnético provisto de relés que producen su apertura en condiciones predeterminadas.


### CONTACTOR CON CONTACTOS ABIERTOS EN REPOSO

Aparato de interrupción no accionado manualmente, con una sola posición de reposo que corresponde a la apertura de sus contactos. El aparato está previsto, corrientemente, para maniobras frecuentes con cargas y sobrecargas normales.


### CONTACTOR CON CONTACTOS CERRADOS EN REPOSO

Aparato de interrupción no accionado manualmente, con una sola posición de reposo que corresponde a la apertura de sus contactos. El aparato está previsto, corrientemente, para maniobras frecuentes con cargas y sobrecargas normales.


### CONTACTOR DE SOBRECARRERA

Interruptor contactor de posición que entra en acción cuando un elemento móvil ha sobrepasado su posición de fin de carrera.


### CONTACTO DIRECTO

Contacto de personas o animales con partes activas de los materiales y equipos.


### CONTACTO INDIRECTO

Contacto de personas o animales domésticos con partes que se han puesto bajo tensión como resultado de un fallo de aislamiento.


### CORRIENTE DE CONTACTO

Corriente que pasa a través de cuerpo humano o de un animal cuando esta sometido a una tensión eléctrica.


### CORRIENTE ADMISIBLE PERMANENTE (DE UN CONDUCTOR)

Valor máximo de la corriente que circula permanentemente por un conductor, en condiciones específicas, sin que su temperatura de régimen permanente supere un valor especificado.


### CORRIENTE CONVENCIONAL DE FUNCIONAMIENTO DE UN DISPOSITIVO DE PROTECCIÓN

Valor especificado que provoca el funcionamiento del dispositivo de protección antes de transcurrir un intervalo de tiempo determinado de una duración especificada llamado tiempo convencional.


### CORRIENTE DE CORTOCIRCUITO FRANCO

Sobreintensidad producida por un fallo de impedancia despreciable, entre dos conductores activos que presentan una diferencia de potencial en condiciones normales de servicio.


### CORRIENTE DE CHOQUE

Corriente de contacto que podría provocar efectos fisiopatológicos.


### CORRIENTE DE DEFECTO O DE FALTA

Corriente que circula debido a un defecto de aislamiento.


### CORRIENTE DE DEFECTO A TIERRA

Corriente que en caso de un solo punto de defecto a tierra, se deriva por el citado punto desde el circuito averiado a tierra o partes conectadas a tierra.


### CORRIENTE DE FUGA EN UNA INSTALACIÓN

Corriente que, en ausencia de fallos, se transmite a la tierra o a elementos conductores del circuito.


### CORRIENTE DE PUESTA A TIERRA

Corriente total que se deriva a tierra a través de la puesta a tierra.

Nota: la corriente de puesta a tierra es la parte de la corriente de defecto que provoca la elevación de potencial de una instalación de puesta a tierra.


### CORRIENTE DE SOBRECARGA DE UN CIRCUITO

Sobreintensidad que se produce en un circuito, en ausencia de un fallo eléctrico.


### CORRIENTE DIFERENCIAL RESIDUAL

Suma algebraica de los valores instantáneos de las corrientes que circulan a través de todos los conductores activos de un circuito, en un punto de una instalación eléctrica.


### CORRIENTE DIFERENCIAL RESIDUAL DE FUNCIONAMIENTO

Valor de la corriente diferencial residual que provoca el funcionamiento de un dispositivo de protección.


### CORTACIRCUITO FUSIBLE

Aparato cuyo cometido es el de interrumpir el circuito en el que está intercalado, por fusión de uno de sus elementos, cuando la intensidad que recorre el elemento sobrepasa, durante un tiempo determinado, un cierto valor.


### CORTE OMNIPOLAR

Corte de todos los conductores activos. Puede ser:

– Simultáneo, cuando la conexión y desconexión se efectúa al mismo tiempo en el conductor neutro o compensador y en las fases o polares.

– No simultáneo, cuando la conexión del neutro o compensador se establece antes que las de las fases o polares y se desconectan éstas antes que el neutro o compensador.


### CUBIERTA DE UN CABLE

Revestimiento tubular continuo y uniforme de material metálico o no metálico generalmente extruido.


### CHOQUE ELÉCTRICO

Efecto fisiopatológico resultante del paso de corriente eléctrica a través del cuerpo humano o de un animal.


### DEDO DE PRUEBA O SONDA PORTÁTIL DE ENSAYO

En un dispositivo de forma similar a un dedo, incluso en sus articulaciones internacionalmente normalizado, y que se destina a verificar si las partes activas de cualquier aparato o materias son accesibles o no al utilizador del mismo. Existen varios tipos de dedos de prueba, destinados a diferentes aparatos, según su clase, tensión, etc.


### DEFECTO FRANCO

Defecto de aislamiento cuya impedancia puede considerarse nula.


### DEFECTO MONOFÁSICO A TIERRA

Defecto de aislamiento entre un conductor y tierra.


### DOBLE AISLAMIENTO

Aislamiento que comprende, a la vez, un aislamiento principal y un aislamiento suplementario.


### ELEMENTOS CONDUCTORES

Todos aquellos que pueden encontrarse en un edificio, aparato, etc. y que son susceptibles de transferir una tensión, tales como: estructuras metálicas o de hormigón armado utilizadas en la construcción de edificios (p.e. armaduras, paneles, carpintería metálica, etc.) canalizaciones metálicas de agua, gas, calefacción, etc. y los aparatos no eléctricos conectados a ellas, si la unión constituye una conexión eléctrica (p.e. radiadores, cocinas, fregaderos metálicos, etc.), suelos y paredes conductores.


### ELEMENTO CONDUCTOR AJENO A LA INSTALACIÓN ELÉCTRICA

Elemento que no forma parte de la instalación eléctrica y que es susceptible de introducir un potencial, generalmente el de tierra.


### ENVOLVENTE

Elemento que asegura la protección de los materiales contra ciertas influencias externas y la protección, en cualquier dirección, ante contactos directos.


### FACTOR DE DIVERSIDAD

Inverso del factor de simultaneidad.


### FACTOR DE SIMULTANEIDAD

Relación entre la totalidad de la potencia instalada o prevista, para un conjunto de instalaciones o de máquinas, durante un período de tiempo determinado, y las sumas de las potencias máximas absorbidas individualmente por las instalaciones o por las máquinas.


### FUENTE DE ENERGÍA

Aparato generador o sistema suministrador de energía eléctrica.


### FUENTE DE ALIMENTACIÓN DE ENERGÍA

Lugar o punto donde una línea, una red, una instalación o un aparato recibe energía eléctrica que tiene que transmitir, repartir o utilizar.

GAMA NOMINAL DE TENSIONES (Ver TENSIÓN NOMINAL DE UN APARATO)


### IMPEDANCIA

Cociente de la tensión en los bornes de un circuito por la corriente que fluye por ellos. Esta definición sólo es aplicable a corrientes sinusoidales.


### IMPEDANCIA DEL CIRCUITO DE DEFECTO

Impedancia total ofrecida al paso de una corriente de defecto.


### INSTALACIÓN ELÉCTRICA

Conjunto de aparatos y de circuitos asociados, en previsión de un fin particular: producción, conversión, transformación, transmisión, distribución o utilización de la energía eléctrica.


### INSTALACIÓN ELÉCTRICA DE EDIFICIOS

Conjunto de materiales eléctricos asociados a una aplicación determinada cuyas características están coordinadas.


### INSTALACIÓN DE PUESTA A TIERRA

Conjunto de conexiones y dispositivos necesarios para poner a tierra, individual o colectivamente, un aparato o una instalación.


### INSTALACIONES PROVISIONALES

Son aquellas que tienen, en tiempo, una duración limitada a las circunstancias que las motiven:

Pueden ser:

– DE REPARACIÓN. Las necesarias para paliar un incidente de explotación.

– DE TRABAJOS. Las realizadas para permitir cambios o transformaciones de las instalaciones, sin interrumpir la explotación.

– SEMI-PERMANENTES. Las destinadas a modificaciones de duración limitada, en el marco de actividades habituales de los locales en los que se repitan periódicamente (Ferias).

– DE OBRAS. Son las destinadas a la ejecución de trabajos de construcción de edificios y similares.


### INTENSIDAD DE DEFECTO

Valor que alcanza una corriente de defecto.


### INTERRUPTOR AUTOMÁTICO

Interruptor capaz de establecer, mantener e interrumpir las intensidades de corriente de servicio, o de establecer e interrumpir automáticamente, en condiciones predeterminadas, intensidades de corriente anormalmente elevadas, tales como las corrientes de cortocircuito.


### INTERRUPTOR DE CONTROL DE POTENCIA Y MAGNETOTÉRMICO

Aparato de conexión que integra todos los dispositivos necesarios para asegurar de forma coordinada:

– Mando

– Protección contra sobrecargas

– Protección contra cortocircuitos


### INTERRUPTOR DIFERENCIAL

Aparato electromecánico o asociación de aparatos destinados a provocar la apertura de los contactos cuando la corriente diferencial alcanza un valor dado.


### LÍNEA GENERAL DE DISTRIBUCIÓN

Canalización eléctrica que enlaza otra canalización, un cuadro de mando y proteccióno un dispositivo de protección general con el origen de canalizaciones que alimentan distintos receptores, locales o emplazamientos.


### LUMINARIA

Aparato de alumbrado que reparte, filtra o transforma la luz de una o varias lámparas y que comprende todos los dispositivos necesarios para fijar y proteger las lámparas (excluyendo las propias lámparas) y cuando sea necesario, los circuitos auxiliares junto con los medios de conexión al circuito de alimentación.


### MASA

Conjunto de las partes metálicas de un aparato que, en condiciones normales, están aisladas de las partes activas.

Las masas comprenden normalmente:

– Las partes metálicas accesibles de los materiales y de los equipos eléctricos, separadas de las partes activas solamente por un aislamiento funcional, las cuales son susceptibles de ser puestas en tensión a consecuencia de un fallo de las disposiciones tomadas para asegurar su aislamiento. Este fallo puede resultar de un defecto del aislamiento funcional, o de las disposiciones de fijación y de protección.

– Por tanto, son masas las partes metálicas accesibles de los materiales eléctricos, excepto los de Clase II, las armaduras metálicas de los cables y las condiciones metálicas de agua, gas, etc.

– Los elementos metálicos en conexión eléctrica o en contacto con las superficies exteriores de materiales eléctricos, que estén separadas de las partes activas por aislamientos funcionales, lleven o no estas superficies exteriores algún elemento metálico.

Por tanto son masas: las piezas metálicas que forman parte de las canalizaciones eléctricas, los soportes de aparatos eléctricos con aislamiento funcional, y las piezas colocadas en contacto con la envoltura exterior de estos aparatos.

Por extensión, también puede ser necesario considerar como masas, todo objeto metálico situado en la proximidad de partes activas no aisladas, y que presenta un riesgo apreciable de encontrarse unido eléctricamente con estas partes activas, a consecuencia de un fallo de los medios de fijación (p.e. aflojamiento de una conexión, rotura de un conductor, etc.).

NOTA: Una parte conductora que sólo puede ser puesta bajo tensión en caso de fallo a través de una masa, no puede considerarse como una masa.


### MATERIAL DE CLASE 0

Material en el cual la protección contra el choque eléctrico, se basa en el aislamiento principal; lo que implica que no existe ninguna disposición prevista para la conexión de las partes activas accesibles, si las hay, a un conductor de protección que forme parte del cableado fijo de la instalación. La protección en caso de defecto en el aislamiento principal depende del entorno.


### MATERIAL DE CLASE I

Material en el cual la protección contra el choque eléctrico no se basa únicamente en el aislamiento principal, sino que comporta una medida de seguridad complementaria en forma de medios de conexión de las partes conductoras accesibles a un conductor de protección puesto a tierra, que forma parte del cableado fijo de la instalación, de forma tal que las partes conductoras accesibles no puedan presentar tensiones peligrosas.


### MATERIAL DE CLASE II

Material en el cual la protección contra el choque eléctrico no se basa únicamente en el aislamiento principal, sino que comporta medidas de seguridad complementarias, tales como el doble aislamiento o aislamiento reforzado. Estas medidas no suponen la utilización de puesta a tierra para la protección y no dependen de las condiciones de la instalación.

Este material debe estar alimentado por cables con doble aislamiento o con aislamiento reforzado.


### MATERIAL DE CLASE III

Material en el cual la protección contra el choque eléctrico no se basa en la alimentación a muy baja tensión y en el cual no se producen tensiones superiores a 50 V en c.a. ó a 75V en c.c.


### MATERIAL ELÉCTRICO

Cualquier material utilizado en la producción, transformación, transporte, distribución o utilización de la energía eléctrica, como máquinas, transformadores, aparamenta, instrumentos de medida, dispositivos de protección, material para canalizaciones, receptores, etc.


### MATERIAL MÓVIL

Material que se desplaza durante su funcionamiento, o que puede ser fácilmente desplazado, permaneciendo conectado al circuito de alimentación.


### MATERIAL PORTÁTIL (DE MANO)

Material móvil previsto para ser tenido en la mano en uso normal, incluido el motor si este forma parte del material.


### NIVEL DE AISLAMIENTO

Para un aparato determinado, característica definida por una o más tensiones especificadas de su aislamiento.


### NIVEL DE PROTECCIÓN (DE UN DISPOSITIVO DE PROTECCIÓN CONTRA SOBRETENSIONES)

Son los valores de cresta de las tensiones más elevadas admisibles en los bornes de un dispositivo de protección cuando está sometido a sobretensiones de formas normalizadas y valores asignados bajo condiciones especificadas.


### PARTES ACCESIBLES SIMULTÁNEAMENTE

Conductores o partes conductoras que pueden ser tocadas simultáneamente por una persona o, en su caso, por animales domésticos o ganado.

NOTA: Las partes simultáneamente accesibles pueden ser: Partes activas, masas, elementos conductores, conductores de protección, tomas de tierra).


### PARTES ACTIVAS

Conductores y piezas conductoras bajo tensión en servicio normal. Incluyen el conductor neutro o compensador y las partes a ellos conectadas. Excepcionalmente, las masas no se considerarán como partes activas cuando estén unidas al neutro con finalidad de protección contra contactos indirectos.


### PERFORACIÓN (RUPTURA ELÉCTRICA)

Fallo dieléctrico de un aislamiento por defecto de un campo eléctrico elevado o por la degradación físico-química del material aislante.


### PERSONA ADIESTRADA

Persona suficientemente informada o controlada por personas cualificadas que puede evitar los peligros que pueda presentar la electricidad.


### PERSONA CUALIFICADA

Persona que teniendo conocimientos técnicos o experiencia suficiente puede evitar los peligros que pueda presentar la electricidad.


### PODER DE CIERRE

El poder de cierre de un dispositivo, se expresa por la intensidad de corriente que este aparato es capaz de establecer, bajo una tensión dada, en las condiciones prescritas de empleo y de funcionamiento.


### PODER DE CORTE

El poder de corte de un aparato, se expresa por la intensidad de corriente que este dispositivo es capaz de cortar, bajo una tensión de restablecimiento determinada, y en las condiciones prescritas de funcionamiento.


### POTENCIA PREVISTA O INSTALADA

Potencia máxima capaz de suministrar una instalación a los equipos y aparatos conectados a ella, ya sea en el diseño de la instalación o en su ejecución, respectivamente.


### POTENCIA NOMINAL DE UN MOTOR

Es la potencia mecánica disponible sobre su eje, expresada en vatios, kilovatios o megavatios.


### PROTECCIÓN CONTRA CHOQUES ELÉCTRICOS EN SERVICIO NORMAL

Prevención de contactos peligrosos, de personas o animales, con las partes activas.


### PROTECCIÓN CONTRA CHOQUES ELÉCTRICOS EN CASO DE DEFECTO

Prevención de contactos peligros de personas o de animales con:

– Masas

– Elementos conductores susceptibles de ser puestos bajo tensión en caso de defecto.


### PUNTO A POTENCIAL CERO

Punto del terreno a una distancia tal de la instalación de toma de tierra, que el gradiente de tensión resulta despreciable, cuando pasa por dicha instalación una corriente de defecto.


### PUNTO MEDIANO

Es el punto de un sistema de corriente continua o de alterna monofásica, que en las condiciones de funcionamiento previstas, presenta la misma diferencia de potencial, con relación a cada uno de los polos o fases del sistema. A veces se conoce también como punto neutro, por semejanza con los sistemas trifásicos. El conductor que tiene su origen en este punto mediano, se denomina conductor mediano, neutro o, en corriente continua, compensador.


### PUNTO NEUTRO

Es el punto de un sistema polifásico que, en las condiciones de funcionamiento previstas, presenta la misma diferencia de potencial, con relación a cada uno de los polos o fases del sistema.


### REACTANCIA

Es un dispositivo que se aplica para agregar a un circuito inductancia, con distintos objetos, por ejemplo: arranque de motores, conexión en paralelo de transformadores o regulación de corriente. Reactancia limitadora es la que se usa para limitar la corriente cuando se produzca un cortocircuito.


### RECEPTOR

Aparato o máquina eléctrica que utiliza la energía eléctrica para un fin determinado.


### RED DE DISTRIBUCIÓN

El conjunto de conductores con todos sus accesorios, sus elementos de sujeción, protección, etc., que une una fuente de energía con las instalaciones interiores o receptoras.


### RED POSADA

Red posada, sobre fachada o muros, es aquella en que los conductores aislados se instalan sin quedar sometidos a esfuerzos mecánicos, a excepción de su propio peso.


### RED TENSADA

Red tensada, sobre apoyos, es aquella en que los conductores se instalan con una tensión mecánica predeterminada, contemplada en las correspondientes tablas de tendido, mediante dispositivos de anclaje y suspensión.


### REDES DE DISTRIBUCIÓN PRIVADAS

Son las destinadas, por un único usuario, a la distribución de energía eléctrica en Baja Tensión, a locales o emplazamiento de su propiedad o a otros especialmente autorizados por el Órgano Competente de la Administración. Las redes de distribución privadas pueden tener su origen:

– En centrales de generación propia

– En redes de distribución pública. En este caso, son aplicables en el punto de entrega de la energía, los preceptos fijados por los Reglamentos vigentes que regulen las actividades de distribución, comercialización y suministro de energía eléctrica, y en las especificaciones particulares de la empresa eléctrica, aprobadas oficialmente, si las hubiera.


### REDES DE DISTRIBUCIÓN PÚBLICA

Son las destinadas al suministro de energía eléctrica en Baja Tensión a varios usuarios. En relación con este suministro son de aplicación para cada uno de ellos, los preceptos fijados por los Reglamentos vigentes que regulen las actividades de distribución, comercialización y suministro de energía eléctrica.

Las redes de distribución pública pueden ser:

– Pertenecientes a empresas distribuidoras de energía

– De propiedad particular o colectiva


### RESISTENCIA LIMITADORA

Resistencia que se intercala en un circuito para limitar la corriente circulante.


### RESISTENCIA DE PUESTA A TIERRA

Relación entre la tensión que alcanza con respecto a un punto a potencial cero una instalación de puesta a tierra y la corriente que la recorre.


### RESISTENCIA GLOBAL O TOTAL DE TIERRA

Es la resistencia de tierra medida en un punto, considerando la acción conjunta de la totalidad de las puestas a tierra.


### SOBREINTENSIDAD

Toda corriente superior a un valor asignado. En los conductores, el valor asignado es la corriente admisible.


### SUELO O PARED NO CONDUCTOR

Suelo o pared no susceptibles de propagar potenciales.

Se considerará así el suelo (o la pared) que presentan una resistencia igual o superior a 50.000 Ω si la tensión nominal de la instalación es ≤ 500 V y una resistencia igual o superior a 100.000 Ω si es superior a 500 V.

La medida de aislamiento de un suelo se efectúa recubriendo el suelo con una tela húmeda cuadrada de, aproximadamente 270 mm de lado, sobre la que se dispone una placa metálica no oxidada, cuadrada de 250 mm de lado y cargada con una masa M de, aproximadamente, 75 kg (peso medio de una persona).

Se mide la tensión con la ayuda de un voltímetro de gran resistencia interna (Ri no inferior a 3.000 Ω, sucesivamente:

– Entre un conductor de fase y la placa metálica, (U2)

– Entre este mismo conductor de fase y una toma de tierra, eléctricamente distinta T, de resistencia despreciable con relación a Ri, se mide la tensión U1.

La resistencia buscada viene dada por la fórmula:

Se efectúan en un mismo local tres medidas por lo menos, una de las cuales sobre una superficie situada a un metro de un elemento conductor, si existe, en el local considerado.

Ninguna de estas tres medidas debe ser inferior a 50.000 Ω para poder considerar el suelo como no conductor.

Si el punto neutro de la instalación está aislado de tierra, es necesario, para realizar esta medida, poner temporalmente a tierra una de las fases no utilizada para la misma.


### TENSIÓN DE CONTACTO

Tensión que aparece entre partes accesibles simultáneamente, al ocurrir un fallo de aislamiento.


### NOTAS:

1. Por convenio este término solo se utiliza en relación con la protección contra contactos indirectos.

2. En ciertos casos el valor de la tensión de contacto puede resultar influido notablemente por la impedancia que presenta la persona en contacto con esas partes.


### TENSIÓN DE DEFECTO

Tensión que aparece a causa de un defecto de aislamiento, entre dos masas, entre una masa y un elemento conductor, o entre una masa y una toma de tierra de referencia, es decir, un punto en el que el potencial no se modifica al quedar la masa en tensión.


### TENSIÓN NOMINAL (O ASIGNADA)

Valor convencional de la tensión con la que se denomina un sistema o instalación y, para los que ha sido previsto su funcionamiento y aislamiento. Para los sistemas trifásicos se considera como tal la tensión compuesta.


### TENSIÓN NOMINAL DE UNA INSTALACIÓN

Tensión por la que se designa una instalación o una parte de la misma.


### TENSIÓN NOMINAL DE UN APARATO

Tensión prevista de alimentación del aparato y por la que se le designa.

Gama nominal de tensiones: Intervalo entre los límites de tensión previstas para alimentar el aparato.

En caso de alimentación trifásica, la tensión nominal se refiere a la tensión entre fases.


### TENSIÓN ASIGNADA DE UN CABLE

Es la tensión máxima del sistema al que el cable puede estar conectado.


### TENSIÓN CON RELACIÓN O RESPECTO A TIERRA

Se entiende como tensión con relación a tierra:

– En instalaciones trifásicas con neutro aislado o no unido directamente a tierra, a la tensión nominal de la instalación.

– En instalaciones trifásicas con neutro unido directamente a tierra, a la tensión simple de la instalación.

– En instalaciones monofásicas o de corriente continua, sin punto de puesta a tierra, a la tensión nominal.

– En instalaciones monofásicas o de corriente continua, con punto mediano puesto a tierra, a la mitad de la tensión nominal.

NOTA: Se entiende por neutro unido directamente a tierra, la unión a la instalación de toma de tierra, sin interposición de una impedancia limitadora.


### TENSIÓN DE PUESTA A TIERRA (TENSIÓN A TIERRA)

Tensión entre una instalación de puesta a tierra y un punto a potencial cero, cuando pasa por dicha instalación una corriente de defecto.


### TIERRA

Masa conductora de la tierra en la que el potencial eléctrico en cada punto se toma, convencionalmente, igual a cero.


### TIERRA LEJANA

Electrodo de tierra conectado a un aparato y situado a una distancia suficiente del mismo para que sea independiente de cualquier otro electrodo de tierra situado cerca del aparato.


### TOMA DE TIERRA

Electrodo, o conjunto de electrodos, en contacto con el suelo y que asegura la conexión eléctrica con el mismo.


### TUBO BLINDADO

Tubo que, además de tener las características del tubo normal, es capaz de resistir, después de su colocación, fuertes presiones y golpes repetidos, y que ofrece una resistencia notable a la penetración de objetos puntiagudos.


### TUBO NORMAL

Tubo que es capaz de soportar únicamente los esfuerzos mecánicos que se producen durante su almacenado, transporte y colocación.


### SISTEMAS DE ALIMENTACIÓN PARA SERVICIOS DE SEGURIDAD

El sistema comprende la fuente de alimentación y los circuitos, hasta los bornes de los aparatos de utilización. Sistema de alimentación previsto para mantener el funcionamiento de los aparatos esenciales para la seguridad de las personas.

Ciertas instalaciones pueden incluir, también, en el suministro los equipos de utilización.


### SISTEMA DE DOBLE ALIMENTACIÓN

Sistema de alimentación previsto para mantener el funcionamiento de la instalación o partes de ésta, en caso de fallo del suministro normal, por razones distintas a las que afectan a la seguridad de las personas.


### TEMPERATURA AMBIENTE

Temperatura del aire u otro medio donde el material vaya a ser utilizado.

Subir

[Bloque 47: #ib-2]


`
  },
  { id: "itc-bt-02", title: "ITC-BT-02: Normas de referencia en el reglamento electrotécnico de baja tensión", category: "ITC-BT", content: `

### UNE 20062:1993
Aparatos autónomos para alumbrado de emergencia con lámparas de incandescencia.

### UNE 20315:1994
Bases de toma de corriente y clavijas para usos domésticos y análogos.

### UNE 20324:1993
Grados de protección proporcionados por las envolventes (Código IP)

### UNE 20324/1M:2000
Grados de protección proporcionados por las envolventes (Código IP)

### UNE 20392:1993
Aparatos autónomos para alumbrado de emergencia con lámparas de fluorescencia. Prescripciones de funcionamiento.

### UNE 20431:1982
Características de los cables eléctricos resistentes al fuego.

### UNE 20435-1:1990
Guía para la elección de cables de alta tensión.

### UNE20435-1/1M:1992
Guía para la elección de cables de alta tensión.

### UNE 20435-2:1990
Guía para la elección de cables de alta tensión. Cables de transporte de energía aislados con dieléctricos secos extruidos para tensiones nominales de 1 a 30 kV.

### UNE 20435-2 ERRATUM:1991
Guía para la elección de cables de alta tensión. Cables de transporte de energía aislados con dieléctricos secos extruidos para tensiones nominales de 1 a 30 kV.

### UNE 20451:1997
Requisitos generales para envolventes de accesorios para instalaciones eléctricas fijas de usos domésticos y análogos.

### UNE 20460-1:1990
Instalaciones eléctricas en edificios. Parte 1: Campo de aplicación.

### UNE 20460-2:1991
Instalaciones eléctricas en edificios. Parte 2: Definiciones.

### UNE 20460-3:1996
Instalaciones eléctricas en edificios. Parte 3: Determinación de las características generales.

### UNE 20460-4-41:1998
Instalaciones eléctricas en edificios. Parte 4: Protección para garantizar la seguridad. Capítulo 41: Protección contra los choques eléctricos.

### UNE 20460-4-43:1990
Instalaciones eléctricas en edificios. Parte 4. Protección para garantizar la seguridad. Capítulo 43: Protección contra las sobreintensidades.

### UNE 20460-4-45:1990
Instalaciones eléctricas en edificios. Parte 4: Protección para garantizar la seguridad. Capítulo 45: Protección contra las bajadas de tensión.

### UNE 20460-4-47:1996
Instalaciones eléctricas en edificios. Parte 4: Protección para garantizar la seguridad. Capítulo 47: Aplicación de medidas de protección para garantizar la seguridad.

### UNE 20460-4-473:1990
Instalaciones eléctricas en edificios. Parte 4: Protección para garantizar la seguridad. Capítulo 47: Aplicación de las medidas de protección. Sección 473: Protección contra las sobreintensidades.

### UNE 20460-5-52:1996
Instalaciones eléctricas en edificios. Parte 5: Selección e instalación de materiales eléctricos. Capítulo 5: Canalizaciones

### UNE 20460-5-52/1M:1999
Instalaciones eléctricas en edificios. Parte 5: Elección e instalación de materiales eléctricos. Capítulo 52: Canalizaciones

### UNE 20460-5-54:1990
Instalaciones eléctricas en edificios. Parte 5: Elección e instalación de los materiales eléctricos. Puesta a tierra y conductores de protección.

### UNE 20460-5-523:1994
Instalaciones eléctricas de edificios. Parte 5: Selección e instalación de materiales eléctricos. Capítulo 52: Canalizaciones. Sección 523: Corrientes admisibles.

### UNE 20460-6-61:1994
Instalaciones eléctricas en edificios. Parte 6: Verificación inicial. Capítulo 61: Verificación inicial (previa a la puesta en servicio).

### UNE 20460-7-703:1993
Instalaciones eléctricas en edificios. Parte 7: Reglas para las instalaciones y emplazamientos especiales. Sección 703: Locales que contienen radiadores para saunas.

### UNE 20460-7-704:2001
Instalaciones eléctricas en edificios. Parte 7: Reglas para las instalaciones y emplazamientos especiales. Sección 704: Instalaciones en obras.

### UNE 20460-7-705:1993
Instalaciones eléctricas en edificios. Parte 7: Reglas para las instalaciones y emplazamientos especiales. Sección 705: Instalaciones eléctricas en los establecimientos agrícolas y hortícolas.

### UNE 20460-7-708:1994
Instalaciones eléctricas en edificios. Parte 7: Reglas para las instalaciones y emplazamientos especiales. Sección 708: Instalaciones eléctricas en parques de caravanas y en caravanas.

### UNE 20481:1990
Instalaciones eléctricas en edificios. Campos de tensiones.

### UNE 20572-1:1997
Efectos de la corriente sobre el hombre y los animales domésticos. Parte 1: Aspectos generales.

### UNE 20615:1978
Sistemas con transformador de aislamiento para uso médico y sus dispositivos de control y protección.

### UNE 20615/1C:1980
Sistemas con transformador de aislamiento para uso médico y sus dispositivos de control y protección. Especificaciones particulares de ensayo.

### UNE 20615/2C:1985
Sistemas con transformador de aislamiento para uso médico y sus dispositivos de control y protección.

### UNE 21012:1971
Cables de cobre para líneas eléctricas aéreas. Especificación.

### UNE 21018:1980
Normalización de conductores desnudos a base de aluminio para líneas eléctricas aéreas.

### UNE 21022:1982
Conductores de cables aislados.

### UNE 21022/1M:1993
Conductores de cables aislados.

### UNE 21022-2:1985
Conductores de cables aislados. Guía sobre los límites dimensionales de los conductores circulares.

### UNE 21022-2/1M:1991
Conductores de cables aislados. Guía sobre los límites dimensionales de los conductores circulares.

### UNE 21027-1:1998
Cables aislados con goma de tensiones asignadas inferiores o iguales a 450/750V. Prescripciones generales.

### UNE 21027-2:1998
Cables aislados con goma de tensiones asignadas inferiores o iguales a 450/750V. Métodos de ensayo.

### UNE 21027-3:1996
Cables aislados con goma, de tensiones nominales Uo/U inferiores o iguales a 450/750 V. Parte 3: Cables aislados con silicona resistente al calor.

### UNE 21027-3/1C:1997
Cables aislados con goma de tensiones nominales Uo/U inferiores o iguales a 450/750 V. Parte 3: Cables aislados con silicona resistente al calor.

### UNE 21027-3/1M:1999
Cables aislados con goma de tensiones asignadas inferiores o iguales a 450/750V. Parte 3: Cables aislados con silicona resistente al calor.

### UNE 21027-4:1996
Cables aislados con goma, de tensiones nominales Uo/U inferiores o iguales a 450/750 V. Parte 4: Cables flexibles.

### UNE 21027-4/1M:1999
Cables aislados con goma de tensiones asignadas inferiores o iguales a 450/750 V. Parte 4: Cables flexibles.

### UNE 21027-6:1996
Cables aislados con goma, de tensiones nominales Uo/U inferiores o iguales a 450/750 V. Parte 6: Cables para máquinas de soldar.

### UNE 21027-6/1M:1999
Cables aislados con goma de tensiones asignadas inferiores o iguales a 450/750 V. Punto 6: Cables para máquinas de soldar.

### UNE 21027-7:1996
Cables aislados con goma de tensiones nominales Uo/U inferiores o iguales a 450/750 V. Parte 7: Cables resistentes al calor, para cableado interno, para temperaturas en el conductor hasta 110 ºC.

### UNE 21027-7/1M:1999
Cables aislados con goma de tensiones asignadas inferiores o iguales a 450/750 V. Parte 7: Cables resistentes al calor, para cableado interno, para temperaturas en el conductor hasta 110 ºC.

### UNE 21027-8:1995
Cables aislados con goma, de tensiones nominales Uo/U inferiores o iguales a 450/750 V. Parte 8: Cables con cubierta de policloropreno o elastómero sintético equivalente, para guirnaldas luminosas.

### UNE 21027-8/1M:1999
Cables aislados con goma de tensiones asignadas inferiores o iguales a 450/750 V. Parte 8: Cables con cubierta de policloropreno o elastómetro sintético equivalente para guirnaldas luminosas.

### UNE 21027-9:1996
Cables aislados con goma de tensiones nominales Uo/U inferiores o iguales a 450/750 V. Parte 9: Cables unipolares sin cubierta para instalación fija, con baja emisión de humos y gases corrosivos.

### UNE 21027-9/1M:1999
Cables aislados con goma de tensiones asignadas inferiores o iguales a 450/750 V. Parte 9: Cables unipolares sin cubierta para instalación fija, con baja emisión de humos y gases corrosivos.

### UNE 21027-10:1995
Cables aislados con goma, de tensiones nominales Uo/U inferiores o iguales a 450/750 V. Parte 10: Cables flexibles con aislamiento de EPR y cubierta de poliuretano.

### UNE 21027-10/1M:1999
Cables aislados con goma de tensiones asignadas inferiores o iguales a 450/750 V. Parte 10: Cables flexibles con aislamiento de EPR y cubierta de poliuretano.

### UNE 21027-11:1995
Cables aislados con goma de tensiones nominales Uo/U inferiores o iguales a 450/750 V. Parte 11: Cables con aislamiento y cubierta de EVA.

### UNE 21027-11/1M:1999
Cables aislados con goma de tensiones nominales Uo/U inferiores o iguales a 450/750 V. Parte 11: Cables con aislamiento de EVA.

### UNE 21027-12:1996
Cables aislados con goma de tensiones nominales Uo/U inferiores o iguales a 450/750 V. Parte 12: Cables flexibles con aislamiento de EPR resistente al calor.

### UNE 21027-12/1M:1999
Cables aislados con goma de tensiones nominales Uo/U inferiores o iguales a 450/750 V. Parte 12: Cables flexibles con aislamiento de EPR resistente al calor.

### UNE 21027-13:1996
Cables aislados con goma de tensiones nominales Uo/U inferiores o iguales a 450/750 V. Parte 13: Cables flexibles con aislamiento y cubierta de compuesto reticulado con baja emisión de humos y gases corrosivos.

### UNE 21027-13/1M:2000
Cables aislados con goma de tensiones asignadas inferiores o iguales a 450/750 V. Parte 13: Cables flexibles con aislamiento y cubierta de compuesto reticulado con baja emisión de humos y gases corrosivos.

### UNE 21027-14:1996
Cables aislados con goma de tensiones nominales Uo/U inferiores o iguales a 450/750 V. Parte 14: Cables para aplicaciones que requieren una alta flexibilidad.

### UNE 21027-14/1M:1999
Cables aislados con goma de tensiones asignadas inferiores o iguales a 450/750V. Parte 14: Cables para aplicaciones que requieran una alta flexibilidad.

### UNE 21027-15:1999
Cables aislados con goma de tensiones nominales Uo/U inferiores o iguales a 450/750 V. Parte 15: Cables multiconductores con aislamiento y cubierta de silicona resistente al calor.

### UNE 21027-16:2000
Cables aislados con goma de tensiones nominales Uo/U inferiores o iguales a 450/750 V. Parte 16: Cables con cubierta de policloropreno o elastómero sintético equivalente, resistente al agua.

### UNE 21030:1996
Conductores aislados cableados en haz de tensión asignada 0,6/1 kV, para líneas de distribución y acometidas.

### UNE 21031-1:1998
Cables aislados con policloruro de vinilo de tensiones asignadas inferiores o iguales a 450/750V. Parte 1: Prescripciones generales.

### UNE 21031-2:1998
Cables aislados con policloruro de vinilo de tensiones asignadas inferiores o iguales a 450/750V. Parte 2: Métodos de ensayo.

### UNE 21031-3:1996
Cables aislados con policloruro de vinilo de tensiones nominales Uo/U inferiores o iguales a 450/750 V. Parte 3: Cables sin cubierta para instalaciones fijas.

### UNE 21031-3/1M:2000
Cables aislados con policloruro de vinilo de tensiones asignadas inferiores o iguales a 450/750 V. Parte 3: Cables sin cubierta para instalaciones fijas.

### UNE 21031-4:1992
Cables aislados con policloruro de vinilo de tensiones nominales Uo/U inferiores o iguales a 450/750 V. Parte 4: Cables con cubierta para instalaciones fijas.

### UNE 21031-5:1994
Cables aislados con policloruro de vinilo de tensiones nominales Uo/U inferiores o iguales a 450/750 V. Cables flexibles.

### UNE 21031-5 /1C:2001
Cables aislados con policloruro de vinilo de tensiones nominales Uo/U inferiores o iguales a 450/750 V. Parte 5: Cables flexibles. Cables de más de 5 conductores con cubierta normal de policloruro de vinilo.

### UNE 21031-5/1M:2000
Cables aislados con policloruro de vinilo de tensiones asignadas inferiores o iguales a 450/750 V. Cables flexibles.

### UNE 21031-5/2M:2001
Cables aislados con policloruro de vinilo de tensiones asignadas inferiores o iguales a 450/750V. Parte 5: Cables flexibles.

### UNE 21031-7:1996
Cables aislados con policloruro de vinilo de tensiones nominales Uo/U inferiores o iguales a 450/750 V. Parte 7: Cables sin cubierta para cableado interno para una temperatura del conductor 90 ºC.

### UNE 21031-7/1M:2000
Cables aislados con policloruro de vinilo de tensiones asignadas inferiores o iguales a 450/750 V. Parte 7: Cables sin cubierta para cableado interno para una temperatura del conductor 90 ºC.

### UNE 21031-8:2000
Cables aislados con policloruro de vinilo de tensiones nominales Uo/U inferiores o iguales a 450/750 V. Cables sin cubierta para guirnaldas luminosas.

### UNE 21031-9:1996
Cables aislados con policloruro de vinilo de tensiones nominales Uo/U inferiores o iguales a 450/750 V. Parte 9: Cables para instalaciones fijas a baja temperatura.

### UNE 21031-9/1M:2000
Cables aislados con policloruro de vinilo de tensiones asignadas inferiores o iguales a 450/750 V. Parte 9: Cables unipolares sin cubierta para instalación a baja temperatura.

### UNE 21031-10:2001
Cables aislados con policloruro de vinilo de tensiones nominales Uo/U inferiores o iguales a 450/750 V. Parte 10: Cables extensibles.

### UNE 21031-11:1996
Cables aislados con policloruro de vinilo de tensiones nominales Uo/U inferiores o iguales a 450/750 V. Parte 11: Cables para luminarias.

### UNE 21031-11/1M:2001
Cables aislados con policloruro de vinilo de tensiones asignadas inferiores o iguales a 450/750V. Parte 11: Cables para luminarias.

### UNE 21031-12:1995
Cables aislados con policloruro de vinilo de tensiones nominales Uo/U inferiores o iguales a 450/750 V. Parte 12: Cables flexibles resistentes al calor.

### UNE 21031-12/1M:2001
Cables aislados con policloruro de vinilo de tensiones asignadas inferiores o iguales a 450/750V. Parte 12: Cables flexibles resistentes al calor.

### UNE 21031-13:1996
Cables aislados con policloruro de vinilo de tensiones nominales Uo/U inferiores o iguales a 450/750 V. Parte 13: Cables de dos o más conductores con cubierta de PVC resistente al aceite.

### UNE 21031-13/1M:2001
Cables aislados con policloruro de vinilo de tensiones asignadas inferiores o iguales a 450/750V. Parte 13: Cables de dos o más conductores con cubierta de PVC resistente al aceite.

### UNE 21123-1:1999
Cables eléctricos de utilización industrial de tensión asignada 0,6/1 kV. Parte 1: Cables con aislamiento y cubierta de policloruro de vinilo.

### UNE 21123-2:1999
Cables eléctricos de utilización industrial de tensión asignada 0,6/1 kV. Parte 2: Cables con aislamiento de polietileno reticulado y cubierta de policloruro de vinilo.

### UNE 21123-3:1999
Cables eléctricos de utilización industrial de tensión asignada 0,6/1 kV. Parte 3: Cables con aislamiento de etileno propileno y cubierta de policloruro de vinilo.

### UNE 21123-4:1999
Cables eléctricos de utilización industrial de tensión asignada 0,6/1 kV. Parte 4: Cables con aislamiento de polietileno reticulado y cubierta de poliolefina.

### UNE 21123-5:1999
Cables eléctricos de utilización industrial de tensión asignada 0,6/1 kV. Parte 5: Cables con aislamiento de etileno propileno y cubierta de poliolefina.

### UNE 21144-1-1:1997
Cables eléctricos. Cálculo de la intensidad admisible. Parte 1: Ecuaciones de intensidad admisible (factor de carga 100%) y cálculo de pérdidas.

### UNE 21144-1-2:1997
Cables eléctricos. Cálculo de la intensidad admisible. Parte 1: Ecuaciones de intensidad admisible (factor de carga 100%) y cálculo de pérdidas.

### UNE 21144-2-1:1997
Cables eléctricos. Cálculo de la intensidad admisible. Parte 2: Resistencia térmica. Sección 1: Cálculo de la resistencia térmica.

### UNE 21144-2-2:1997
Cables eléctricos. Cálculo de la intensidad admisible. Parte 2: Resistencia térmica. Sección 2: Método de cálculo de los coeficientes de reducción de a intensidad admisible para grupos de cables al aire y protegidos de la radiación solar.

### UNE 21144-3-1:1997
Cables eléctricos. Cálculo de la intensidad admisible. Parte 3: Secciones sobre condiciones de funcionamiento. Sección 1: Condiciones de funcionamiento de referencia y selección del tipo de cable.

### UNE 21150:1986
Cables flexibles para servicios móviles, aislados con goma de etilenopropileno y cubierta reforzada de policloropreno o elastómero equivalente de tensión nominal 0,6/1 kV.

### UNE 21155-1:1994
Cables calefactores de tensión nominal 300/500 V para calefacción de ocales y prevención de formación de hielo.

### UNE 21157-1:1996
Cables con aislamiento mineral de tensión nominal no superior a 750 V. Parte 1: Cables.

### UNE 21166:1989
Cables para alimentación de bombas sumergidas.

### UNE 21302-461:1990
Vocabulario electrotécnico. Capítulo 461: Cables eléctricos.

### UNE 21302-461/1M:1995
Vocabulario electrotécnico. Capítulo 461: Cables eléctricos.

### UNE 21302-461/2M:1999
Vocabulario electrotécnico. Capítulo 461: Cables eléctricos.

### UNE 21302-601:1991
Vocabulario electrotécnico. Capítulo 601: Producción, transporte y distribución de la energía eléctrica. Generalidades.

### UNE 21302-601/1M:2000
Vocabulario electrotécnico. Capítulo 601: Producción, transporte y distribución de la energía eléctrica. Generalidades.

### UNE 21302-602:1991
Vocabulario electrotécnico. Capítulo 602: Producción, transporte y distribución de la energía eléctrica. Producción.

### UNE 21302-603:1991
Vocabulario electrotécnico. Capítulo 603: Producción, transporte y distribución de energía eléctrica. Planificación de redes.

### UNE 21302-603/1M:2000
Vocabulario electrotécnico. Capítulo 603: Producción, transporte y distribución de energía eléctrica. Planificación de redes.

### UNE 21302-604:1991
Vocabulario electrotécnico. Capítulo 604: Producción, transporte y distribución de la energía eléctrica. Explotación.

### UNE 21302-604/1M:2000
Vocabulario electrotécnico. Capítulo 604: Producción, transporte y distribución de la energía eléctrica. Explotación.

### UNE 21302-605:1991
Vocabulario electrotécnico. Capítulo 605: Producción, transporte y distribución de la energía eléctrica. Subestaciones.

### UNE 21302-826:1991
Vocabulario electrotécnico. Capítulo 826: Instalaciones eléctricas en edificios.

### UNE 21302-826/1M:1991
Vocabulario electrotécnico. Capítulo 826: Instalaciones eléctricas en edificios.

### UNE 21302-826/2M:1998
Vocabulario electrotécnico. Capítulo 826: Instalaciones eléctricas en edificios.

### UNE 21302-826/3M:2001
Vocabulario electrotécnico. Capítulo 826: Instalaciones eléctricas en edificios.

### UNE 21302-841:1990
Vocabulario electrotécnico. Capítulo 841: Electrotermia industrial.

### UNE 21302-845:1995
Vocabulario electrotécnico. Capítulo 845: Iluminación

### UNE 36582:1986
Perfiles tubulares de acero, de pared gruesa, galvanizados, para blindaje de conducciones eléctricas. (tubo "conduit")

### UNE 211002:2000
Cables de tensión asignada hasta 450/750 V con aislamiento de compuesto termoplástico de baja emisión de humos y gases corrosivos. Cables unipolares sin cubierta para instalaciones fijas

### UNE-EN 50015:1998
Material eléctrico para atmósferas potencialmente explosivas. Inmersión en aceite "o".

### UNE-EN 50018:1996
Material eléctrico para atmósferas potencialmente explosivas. Envolvente antideflagrante "d".

### UNE-EN 50020:1997
Material eléctrico para atmósferas potencialmente explosivas. Seguridad intrínseca "i".

### UNE-EN 50020 CORRIGENDUM:1999
Material eléctrico para atmósferas potencialmente explosivas. Seguridad intrínseca "i".

### UNE-EN 50039:1996
Material eléctrico para atmósferas potencialmente explosivas. Sistemas eléctricos de seguridad intrínseca "i".

### UNE-EN 50065-1:1994
Transmisiones de señales por la red eléctrica de baja tensión en la banda de frecuencias de 3 kHz a 148,5 kHz. Reglas generales, bandas de frecuencia y perturbaciones electromagnéticas.

### UNE-EN 500651/A1:1994
Transmisión de señales por la red eléctrica de baja tensión en la banda de frecuencias de 3 kHz a 148,5 kHz. Parte 1: Reglas generales, bandas de frecuencia y perturbaciones electromagnéticas.

### UNE-EN 50065-1/A2:1997
Transmisión de señales por la red eléctrica de baja tensión en la banda de frecuencias de 3kHz a 148,5 kHz. Reglas generales, bandas de frecuencia y perturbaciones electromagnéticas.

### UNE-EN 50065-1/A3:1997
Transmisión de señales por la red eléctrica de baja tensión en la banda de frecuencias de 3kHz a 148,5 kHz. Reglas generales, bandas de frecuencia y perturbaciones electromagnéticas.

### UNE-EN 50085-1:1997
Sistemas para canales para cables y sistemas de conductos cerrados de sección no circular para cables en instalaciones eléctricas. Parte 1: Requisitos generales

### UNE-EN 50085-1/A1:1999
Sistemas para canales para cables y sistemas de conductos cerrados de sección no circular para cables en instalaciones eléctricas. Parte 1: Requisitos generales

### UNE-EN 50086-1:1995
Sistemas de tubo para instalaciones eléctricas. Parte 1: Requisitos generales.

### UNE-EN 50086-1 ERRATUM:1996
Sistemas de tubos para instalaciones eléctricas. Parte 1: Requisitos generales.

### UNE-EN 50086-1 CORRIGENDUM:2001
Sistemas de tubos para la conducción de cables. Parte 1: Requisitos generales.

### UNE-EN 50086-2-1:1997
Sistemas de tubos para instalaciones eléctricas. Parte 2-1: Requisitos particulares para sistemas de tubos rígidos.

### UNE-EN 50086-2-1 CORRIGENDUM:2001
Sistemas de tubos para la conducción de cables. Parte 2-1: Requisitos particulares para sistemas de tubos rígidos.

### UNE-EN 50086-2-1/A11:1999
Sistemas de tubos para instalaciones eléctricas. Parte 2-1: Requisitos particulares para sistemas de tubos rígidos.

### UNE-EN 50086-2-1/A11 CORRIGENDUM:2001
Sistemas de tubos para la conducción de cables. Parte 2-1: Requisitos particulares para sistemas de tubos rígidos.

### UNE-EN 50086-2-2:1997
Sistemas de tubos para instalaciones eléctricas. Parte 2-2: Requisitos particulares para sistemas de tubos curvables.

### UNE-EN 50086-2-2 CORRIGENDUM:2001
Sistemas de tubos para la conducción de cables. Parte 2-2: Requisitos particulares para sistemas de tubos curvables

### UNE-EN 50086-2-2/A11:1999
Sistemas de tubos para instalaciones eléctricas. Parte 2-2: Requisitos particulares para sistemas de tubos curvables

### UNE-EN 50086-2-2/A11 CORRIGENDUM:2001
Sistemas de tubos para la conducción de cables. Parte 2-2: Requisitos particulares para sistemas de tubos curvables

### UNE-EN 50086-2-3:1997
Sistemas de tubos para instalaciones eléctricas. Parte 2-3: Requisitos particulares para sistemas de tubos flexibles.

### UNE-EN 50086-2-3 CORRIGENDUM:2001
Sistemas de tubos para la conducción de cables. Parte 2-3: Requisitos particulares para sistemas de tubos flexibles.

### UNE-EN 50086-2-3/A11:1999
Sistemas de tubos para instalaciones eléctricas. Parte 2-3: Requisitos particulares para sistemas de tubos flexibles.

### UNE-EN 50086-2-3/A11 CORRIGENDUM:2001
Sistemas de tubos para la conducción de cables. Parte 2-3: Requisitos particulares para sistemas de tubos flexibles.

### UNE-EN 50086-2-3/A11 ERRATUM:2000
Sistemas de tubos para instalaciones eléctricas. Parte 2-3: Requisitos particulares para sistemas de tubos flexibles.

### UNE-EN 50086-2-4:1995
Sistemas de tubo para instalaciones eléctricas. Parte 2-4: Requisitos particulares para sistemas de tubos enterrados.

### UNE-EN 50086-2-4 CORRIGENDUM:2001
Sistemas de tubos para la conducción de cables. Parte 2-4: Requisitos particulares para sistemas de tubos enterrados.

### UNE-EN 50086-2-4/A1:2001
Sistemas de tubos para la conducción de cables. Parte 2-4: Requisitos particulares para sistemas de tubos enterrados.

### UNE-EN 50102:1996
Grados de protección proporcionados por las envolventes de materiales eléctricos contra los impactos mecánicos externos (código IK).

### UNE-EN 50102/A1:1999
Grados de protección proporcionados por los envolventes de materiales eléctricos contra los impactos mecánicos externos (código IK).

### UNE-EN 50107:1999
Rótulos e instalaciones de tubos luminosos de descarga que funcionan con tensiones asignadas de salida en vacío superiores a 1KV pero sin exceder 10KV.

### UNE-EN 50200:2000
Método de ensayo de la resistencia al fuego de los cables de pequeñas dimensiones sin protección, para uso en circuitos de emergencia.

### UNE-EN 50266-1:2001
Métodos de ensayo comunes para cables sometidos al fuego. Ensayo de propagación vertical de la llama de cables colocados en capas en posición vertical. Parte 1: Equipo de ensayo.

### UNE-EN 50266-2-1:2001
Métodos de ensayo comunes para cables sometidos al fuego. Ensayo de propagación vertical de la llama de cables colocados en capas en posición vertical. Parte 2-1: Procedimientos. Categoría A F/R.

### UNE-EN 50266-2-2:2001
Métodos de ensayo comunes para cables sometidos al fuego. Ensayo de propagación vertical de la llama de cables colocados en capas en posición vertical. Parte 2-2: Procedimientos. Categoría A.

### UNE-EN 50266-2-3:2001
Métodos de ensayo comunes para cables sometidos al fuego. Ensayo de propagación vertical de la llama de cables colocados en capas en posición vertical. Parte 2-3: Procedimientos. Categoría B.

### UNE-EN 50266-2-4:2001
Métodos de ensayo comunes para cables sometidos al fuego. Ensayo de propagación vertical de la llama de cables colocados en capas en posición vertical. Parte 2-4: Procedimientos. Categoría C.

### UNE-EN 50266-2-5:2001
Métodos de ensayo comunes para cables sometidos al fuego. Ensayo de propagación vertical de la llama de cables colocados en capas en posición vertical. Parte 2-5: Procedimientos. Categoría D.

### UNE-EN 50267-1:1999
Métodos de ensayo comunes para cables sometidos al fuego. Ensayo de gases desprendidos durante la combustión de materiales procedentes de los cables. Parte 1: Equipo.

### UNE-EN 50267-2-1:1999
Métodos de ensayo comunes para cables sometidos al fuego. Ensayo de gases desprendidos durante la combustión de materiales procedentes de los cables. Parte 2: Procedimientos. Sección 1: Determinación de la cantidad de gases halógenos ácidos.

### UNE-EN 50267-2-3:1999
Métodos de ensayo comunes para cables sometidos al fuego. Ensayo de gases desprendidos durante la combustión de materiales procedentes de los cables. Parte 2: Procedimientos. Sección 3: Determinación del grado de acidez de los gases de los cables a partir de la medida de la media ponderada del PH y de la conductividad.

### UNE-EN 50268-1:2000
Métodos de ensayo comunes para cables sometidos al fuego. Medida de la densidad de los humos emitidos por cables en combustión bajo condiciones definidas. Parte 1: Equipo de ensayo.

### UNE-EN 50268-2:2000
Métodos de ensayo comunes para cables sometidos al fuego. Medida de la densidad de los humos emitidos por cables en combustión bajo condiciones definidas. Parte 1: Procedimiento.

### UNE-EN 50281-1-2:1999
Aparatos eléctricos destinados a ser utilizados en presencia de polvos combustibles. Parte 1-2: Aparatos eléctricos protegidos con envolventes. Selección, instalación y mantenimiento.

### UNE-EN 50281-1-2 CORRIGENDUM:2000
Aparatos eléctricos destinados a ser utilizados en presencia de polvos combustibles. Parte 1-2: Aparatos eléctricos protegidos con envolventes. Selección, instalación y mantenimiento.

### UNE-EN 60061-2:1996
Casquillos y portalámparas, junto con los calibres para el control de la intercambiabilidad y de la seguridad. Parte 2: Portalámparas.

### UNE-EN 60061-2/A1:1997
Casquillos y portalámparas junto con los calibres para el control de la intercambiabilidad y de la seguridad. Parte 2: Portalámparas.

### UNE-EN 60061-2/A18:1999
Casquillos y portalámparas junto con los calibres para el control de la intercambiabilidad y de la seguridad. Parte 2: Portalámparas.

### UNE-EN 60061-2/A19:2000
Casquillos y portalámparas junto con los calibres para el control de la intercambiabilidad y de la seguridad. Parte 2: Portalámparas.

### UNE-EN 60061-2/A20:2000
Casquillos y portalámparas junto con los calibres para el control de la intercambiabilidad y de la seguridad. Parte 2: Portalámparas.

### UNE-EN 60061-2/A2:1998
Casquillos y portalámparas junto con los calibres para el control de la intercambiabilidad y de la seguridad. Parte 2: Portalámparas.

### UNE-EN 60061-2/A3:1998
Casquillos y portalámparas junto con los calibres para el control de la intercambiabilidad y de la seguridad. Parte 2: Portalámparas.

### UNE-EN 60061-2/A4:1998
Casquillos y portalámparas junto con los calibres para el control de la intercambiabilidad y de la seguridad. Parte 2: Portalámparas.

### UNE-EN 60061-2/A5:1998
Casquillos y portalámparas junto con los calibres para el control de la intercambiabilidad y de la seguridad. Parte 2: Portalámparas.

### UNE-EN 60061-2/A6:1998
Casquillos y portalámparas junto con los calibres para el control de la intercambiabilidad y de la seguridad. Parte 2: Portalámparas.

### UNE-EN 60061-2/A7:1998
Casquillos y portalámparas junto con los calibres para el control de la intercambiabilidad y de la seguridad. Parte 2: Portalámparas.

### UNE-EN 60079-10:1997
Material eléctrico para atmósferas de gas explosivas. Parte 10: Clasificación de emplazamientos peligrosos.

### UNE-EN 60079-14:1998
Material eléctrico para atmósferas de gas explosivas. Parte 14: instalaciones eléctricas en áreas peligrosas (a excepción de las minas).

### UNE-EN 60079-17:1998
Material eléctrico para atmósferas de gas explosivas. Parte 17: Inspección y mantenimiento de instalaciones eléctricas en áreas peligrosas (con excepción de las minas).

### UNE-EN 60309-1:2001
Tomas de corriente para usos industriales. Parte 1: Requisitos generales.

### UNE-EN 60309-2:2001
Tomas de corriente para usos industriales. Parte 2: Requisitos de intercambiabilidad dimensional para los accesorios de espigas y alvéolos

### UNE-EN 60335-2-41:1997
Seguridad de los aparatos electrodomésticos y análogos. Parte 2: Requisitos particulares para bombas eléctricas para líquidos con temperatura que no exceda de 35 ºC.

### UNE-EN 60335-2-60:1999
Seguridad de los aparatos electrodomésticos y análogos. Parte 2: Requisitos particulares para bañeras de hidromasaje y aparatos análogos.

### UNE-EN 60335-2-76:2001
Seguridad de los aparatos electrodomésticos y análogos. Parte 2: Requisitos particulares para los electrificadores de cercas.

### UNE-EN 60423:1999
Tubos de protección de conductores. Diámetros exteriores de los tubos para instalaciones eléctricas y roscas para tubos y accesorios.

### UNE-EN 60439-1:2001
Conjuntos de aparamenta de baja tensión. Parte 1: Requisitos para los conjuntos de serie y los conjuntos derivados de serie.

### UNE-EN 60439-2:2001
Conjuntos de aparamenta de baja tensión. Parte 2: Requisitos particulares para las canalizaciones prefabricadas.

### UNE-EN 60439-3:1994
Conjuntos de aparamenta para baja tensión. Parte 3: Requisitos particulares para los conjuntos de aparamenta de baja tensión destinados a estar instalados en lugares accesibles al personal no cualificado durante su utilización.

### UNE-EN 60439-3/A1:1997
Conjuntos de aparamenta de baja tensión. Parte 3: Requisitos particulares para los conjuntos de aparamenta de baja tensión destinados a estar instalados en lugares accesibles al personal no cualificado durante su utilización.

### UNE-EN 60439-4:1994
Conjuntos de aparamenta de baja tensión. Parte 4: Requisitos particulares para obras (CO)

### UNE-EN 60439-4/A1:1997
Conjuntos de aparamenta de baja tensión. Parte 4: Requisitos particulares para obras (CO)

### UNE-EN 60439-4/A2:2000
Conjuntos de aparamenta de baja tensión. Parte 4: Requisitos particulares para obras (CO)

### UNE-EN 60598-2-3:1997
Luminarias. Parte 2: Reglas particulares. Sección 3: Luminarias para alumbrado público.

### UNE-EN 60598-2-3/A1:1997
Luminarias. Parte 2: Requisitos particulares. Sección 3: Luminarias para alumbrado público.

### UNE-EN 60598-2-3/A2:2001
Luminarias. Parte 2: Requisitos particulares. Sección 3: Luminarias para alumbrado público.

### UNE-EN 60598-2-18:1997
Luminarias. Parte 2: Reglas particulares. Sección 18: Luminarias para piscinas y análogos.

### UNE-EN 60598-2-22:1999
Luminarias. Parte 2: Reglas particulares. Sección 22: Luminarias para alumbrados de emergencia.

### UNE-EN 60669-1:1996
Interruptores para instalaciones eléctricas fijas, domésticas y análogas. Parte 1: Prescripciones generales.

### UNE-EN 60669-1 ERRATUM:2000
Interruptores para instalaciones eléctricas fijas, domésticas y análogas. Parte 1: Prescripciones generales.

### UNE-EN 60669-1/A2:1998
Interruptores para instalaciones eléctricas fijas, domésticas y análogas. Parte 1: Prescripciones generales.

### UNE-EN 60695-2-1/0:1997
Ensayos relativos a los riesgos del fuego. Parte 2: Métodos de ensayo. Sección 1/Hoja 0: Métodos de ensayo al hilo incandescente.

### UNE-EN 60695-2-1/1:1997
Ensayos relativos a los riesgos del fuego. Parte 2: Métodos de ensayo. Sección 1/Hoja 1: Ensayo al hilo incandescente en productos acabados y guía.

### UNE-EN 60695-2-1/2:1996
Ensayos relativos a los riesgos del fuego. Parte 2: Métodos de ensayo. Sección 1/hoja 2: Ensayo de inflamabilidad al hilo incandescente en materiales.

### UNE-EN 60695-2-1/3:1996
Ensayos relativos a los riesgos del fuego. Parte 2: Métodos de ensayo. Sección 1/hoja 3: Ensayo de ignición al hilo incandescente en materiales.

### UNE-EN 60695-11-10:2000
Ensayos relativos a los riesgos del fuego. Parte 11-10: Llamas de ensayo. Métodos de ensayo horizontal y vertical a la llama de 50 W.

### UNE-EN 60742:1996
Transformadores de separación de circuitos y transformadores de seguridad. Requisitos.

### UNE-EN 60831-1:1998
Condensadores de potencia autorregenerables a instalar en paralelo en redes de corriente alterna de tensión nominal inferior o igual a 1000 V. Parte 1: Generalidades. Características de funcionamiento, ensayos y valores nominales. Prescripciones de seguridad. Guía de instalación y explotación.

### UNE-EN 60831-2:1998
Condensadores de potencia autorregenerables a instalar en paralelo en redes de corriente alterna de tensión nominal inferior o igual a 1000 V. Parte 2: Ensayos de envejecimiento, autorregeneración y destrucción.

### UNE-EN 60947-2:1998
Aparamenta de baja tensión. Parte 2: Interruptores automáticos.

### UNE-EN 60947-2/A1:1999
Aparamenta de baja tensión. Parte 2: Interruptores automáticos.

### UNE-EN 60998-2-1:1996
Dispositivos de conexión para circuitos de baja tensión para usos domésticos y análogos. Parte 2-1: Reglas particulares para dispositivos de conexión independientes con elementos de apriete con tornillo.

### UNE-EN 61558-2-4:1999
Seguridad de los transformadores, unidades de alimentación y análogos. Parte 2-4: Requisitos particulares para los transformadores de separación de circuitos para uso general.

### UNE-EN 61558-2-4:ERRATUM 2001
Seguridad de los transformadores, unidades de alimentación y análogos. Parte 2-4: Requisitos particulares para los transformadores de separación de circuitos para uso general.

### UNE-EN 61558-2-5:1999
Seguridad de los transformadores, unidades de alimentación y análogos. Parte 2-5: Requisitos particulares para los transformadores y unidades de alimentación para máquinas de afeitar.

### UNE-HD 603 (serie)
Cables de distribución de tensión asignada 0,6/1 kV

### EN 61196-2:1995
Cables para frecuencias radioeléctricas. Parte 2: Cables semirrígidos y coaxiales con aislamiento de politetrafluoretileno (PTFE). Especificación intermedia.

### EN 61196-3:1999
Cables para frecuencias radioeléctricas. Parte 3: Especificación intermedia para cables coaxiales para redes locales.

### EN 611963-2:1998
Cables para radiofrecuencia. Parte 3-2: Cables coaxiales para comunicación digital en cableado horizontal de inmuebles. Especificación particular para cables coaxiales con dieléctricos sólidos para redes de área ocal de 185 m cada una y hasta 10 Mb/s.

### EN 611963-3:1998
Cables para radiofrecuencia. Parte 3-3: Cables coaxiales para comunicación digital en cableado horizontal de inmuebles. Especificación particular para cables coaxiales con dieléctricos expandidos para redes de área local de 185 m cada una y hasta 10 Mb/s.

### CEI 60079-19:1993
Material eléctrico para atmósferas explosivas de gas. Parte 19: Reparación y revisión del material empleado de atmósferas explosivas (excluidas las minas o la fabricación de explosivos)

### CEI 60189-2:1981
Cables e hilos para bajas frecuencias con aislamiento y cubierta de PVC. Cables con formación en pares, tríos, cuadretes y quintetes para instalaciones interiores.

### CEI60189-2/A1:1989
Cables e hilos para bajas frecuencias con aislamiento y cubierta de PVC. Cables con formación en pares, tríos, cuadretes y quintetes para instalaciones interiores.

### CEI60189-2/A2:1996
Cables e hilos para bajas frecuencias con aislamiento y cubierta de PVC. Cables con formación en pares, tríos, cuadretes y quintetes para instalaciones interiores.


` },
  { id: "itc-bt-03", title: "ITC-BT-03: Instaladores autorizados en baja tensión", category: "ITC-BT" },
  { id: "itc-bt-04", title: "ITC-BT-04: Documentación y puesta en servicio de las instalaciones", category: "ITC-BT" },
  { id: "itc-bt-05", title: "ITC-BT-05: Verificaciones e inspecciones", category: "ITC-BT" },
  { id: "itc-bt-06", title: "ITC-BT-06: Redes aéreas para distribución en baja tensión", category: "ITC-BT" },
  { id: "itc-bt-07", title: "ITC-BT-07: Redes subterráneas para distribución en baja tensión", category: "ITC-BT" },
  { id: "itc-bt-08", title: "ITC-BT-08: Sistemas de conexión del neutro y de las masas en redes de distribución de energía eléctrica", category: "ITC-BT" },
  { id: "itc-bt-09", title: "ITC-BT-09: Instalaciones de alumbrado exterior", category: "ITC-BT" },
  { id: "itc-bt-10", title: "ITC-BT-10: Previsión de cargas para suministros en baja tensión", category: "ITC-BT" },
  { id: "itc-bt-11", title: "ITC-BT-11: Redes de distribución de energía eléctrica. Acometidas", category: "ITC-BT" },
  { id: "itc-bt-12", title: "ITC-BT-12: Instalaciones de enlace. Esquemas", category: "ITC-BT" },
  { id: "itc-bt-13", title: "ITC-BT-13: Instalaciones de enlace. Cajas generales de protección", category: "ITC-BT" },
  { id: "itc-bt-14", title: "ITC-BT-14: Instalaciones de enlace. Línea general de alimentación", category: "ITC-BT" },
  { id: "itc-bt-15", title: "ITC-BT-15: Instalaciones de enlace. Derivaciones individuales", category: "ITC-BT" },
  { id: "itc-bt-16", title: "ITC-BT-16: Instalaciones de enlace. Contadores: ubicación y sistemas de instalación", category: "ITC-BT" },
  { id: "itc-bt-17", title: "ITC-BT-17: Instalaciones de enlace. Dispositivos generales e individuales de mando y protección. Interruptor de control de potencia", category: "ITC-BT" },
  { id: "itc-bt-18", title: "ITC-BT-18: Instalaciones de puesta a tierra", category: "ITC-BT", content: `

**NOTA:** *Este es un texto de demostración para ver el formato de lectura interactivo.*

## 1. Objeto y Campo de Aplicación

Las puestas a tierra se establecen principalmente con objeto de limitar la tensión que, con respecto a tierra, puedan presentar en un momento dado las masas metálicas, asegurar la actuación de las protecciones y eliminar o disminuir el riesgo que supone una avería en los materiales eléctricos utilizados.

## 2. Elementos que componen la puesta a tierra

- **Electrodo:** Masa metálica permanentemente en buen contacto con el terreno.
- **Línea de enlace con tierra:** Conductor que une el electrodo o conjunto de electrodos con el punto de puesta a tierra.
- **Punto de puesta a tierra:** Punto de conexión que sirve de unión entre la línea de enlace con tierra y la línea principal de tierra.

### Tabla de resistividades (Ejemplo)

| Terreno | Resistividad (Ohm·m) |
| :--- | :--- |
| Terrenos pantanosos | 30 |
| Arcilla | 100 |
| Arena húmeda | 200 |
| Arena seca | 1000 |
` },
  { id: "itc-bt-19", title: "ITC-BT-19: Instalaciones interiores o receptoras. Prescripciones generales", category: "ITC-BT" },
  { id: "itc-bt-20", title: "ITC-BT-20: Instalaciones interiores o receptoras. Sistemas de instalación", category: "ITC-BT" },
  { id: "itc-bt-21", title: "ITC-BT-21: Instalaciones interiores o receptoras. Tubos y canales protectores", category: "ITC-BT" },
  { id: "itc-bt-22", title: "ITC-BT-22: Instalaciones interiores o receptoras. Protección contra sobreintensidades", category: "ITC-BT" },
  { id: "itc-bt-23", title: "ITC-BT-23: Instalaciones interiores o receptoras. Protección contra contactos directos e indirectos", category: "ITC-BT" },
  { id: "itc-bt-24", title: "ITC-BT-24: Instalaciones interiores o receptoras. Protección contra sobretensiones", category: "ITC-BT" },
  { id: "itc-bt-25", title: "ITC-BT-25: Instalaciones interiores en viviendas. Número de circuitos y características", category: "ITC-BT" },
  { id: "itc-bt-26", title: "ITC-BT-26: Instalaciones interiores en viviendas. Prescripciones generales de instalación", category: "ITC-BT" },
  { id: "itc-bt-27", title: "ITC-BT-27: Instalaciones interiores en viviendas. Locales que contienen una bañera o ducha", category: "ITC-BT" },
  { id: "itc-bt-28", title: "ITC-BT-28: Instalaciones en locales de pública concurrencia", category: "ITC-BT" },
  { id: "itc-bt-29", title: "ITC-BT-29: Prescripciones particulares para las instalaciones eléctricas de los locales con riesgo de incendio o explosión", category: "ITC-BT" },
  { id: "itc-bt-30", title: "ITC-BT-30: Instalaciones en locales de características especiales", category: "ITC-BT" },
  { id: "itc-bt-31", title: "ITC-BT-31: Instalaciones con fines especiales. Piscinas y fuentes", category: "ITC-BT" },
  { id: "itc-bt-32", title: "ITC-BT-32: Instalaciones con fines especiales. Máquinas de elevación y transporte", category: "ITC-BT" },
  { id: "itc-bt-33", title: "ITC-BT-33: Instalaciones con fines especiales. Instalaciones provisionales y temporales de obras", category: "ITC-BT" },
  { id: "itc-bt-34", title: "ITC-BT-34: Instalaciones con fines especiales. Ferias y stands", category: "ITC-BT" },
  { id: "itc-bt-35", title: "ITC-BT-35: Instalaciones con fines especiales. Establecimientos agrícolas y hortícolas", category: "ITC-BT" },
  { id: "itc-bt-36", title: "ITC-BT-36: Instalaciones a muy baja tensión", category: "ITC-BT" },
  { id: "itc-bt-37", title: "ITC-BT-37: Instalaciones a tensiones especiales", category: "ITC-BT" },
  { id: "itc-bt-38", title: "ITC-BT-38: Requisitos particulares para la instalación eléctrica en quirófanos y salas de intervención", category: "ITC-BT" },
  { id: "itc-bt-39", title: "ITC-BT-39: Instalaciones con fines especiales. Cercas eléctricas para ganado", category: "ITC-BT" },
  { id: "itc-bt-40", title: "ITC-BT-40: Instalaciones generadoras de baja tensión", category: "ITC-BT" },
  { id: "itc-bt-41", title: "ITC-BT-41: Instalaciones eléctricas en caravanas y parques de caravanas", category: "ITC-BT" },
  { id: "itc-bt-42", title: "ITC-BT-42: Instalaciones eléctricas en puertos y marinas para barcos de recreo", category: "ITC-BT" },
  { id: "itc-bt-43", title: "ITC-BT-43: Instalación de receptores. Prescripciones generales", category: "ITC-BT" },
  { id: "itc-bt-44", title: "ITC-BT-44: Instalación de receptores. Receptores para alumbrado", category: "ITC-BT" },
  { id: "itc-bt-45", title: "ITC-BT-45: Instalación de receptores. Aparatos de caldeo", category: "ITC-BT" },
  { id: "itc-bt-46", title: "ITC-BT-46: Instalación de receptores. Cables y folios radiantes en viviendas", category: "ITC-BT" },
  { id: "itc-bt-47", title: "ITC-BT-47: Instalación de receptores. Motores", category: "ITC-BT" },
  { id: "itc-bt-48", title: "ITC-BT-48: Instalación de receptores. Transformadores y autotransformadores. Reactancias y rectificadores. Condensadores", category: "ITC-BT" },
  { id: "itc-bt-49", title: "ITC-BT-49: Instalaciones eléctricas en muebles", category: "ITC-BT" },
  { id: "itc-bt-50", title: "ITC-BT-50: Instalaciones eléctricas en locales que contienen radiadores para saunas", category: "ITC-BT" },
  { id: "itc-bt-51", title: "ITC-BT-51: Instalaciones de sistemas de automatización, gestión técnica de la energía y seguridad para viviendas y edificios", category: "ITC-BT" },
  { id: "itc-bt-52", title: "ITC-BT-52: Instalaciones con fines especiales. Infraestructura para la recarga de vehículos eléctricos", category: "ITC-BT" },
];
