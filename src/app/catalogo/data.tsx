export type Series = {
  name: string;
  href: string;
  thumbnail?: string;
  image?: string;
  bannerImage?: string;
  description?: string;
  badge?: "Novedad" | "Popular";
  modelsCount?: number;
};

export type Brand = {
  id: string;
  name: string;
  logoSrc: string;
  series: Series[];
};

export const brandsData: Brand[] = [
  {
    id: "niessen",
    name: "Niessen",
    logoSrc: "/assets/images/brands/logos/niessen-logo.png",
    series: [
      { name: "Alba", href: "/catalogo/niessen/alba", thumbnail: "/assets/images/category/mechanisms/niessen.png", image: "/hectric/niessen/assets/png/mechanisms/niessen-alba-catalogo.png", badge: "Novedad", description: "La serie Alba de Niessen destaca por su diseño plano, minimalista y sostenible. Fabricada con materiales reciclados, es la elección perfecta para espacios modernos que buscan sofisticación con un bajo impacto ambiental.", modelsCount: 40 },
      { name: "Ocean", href: "/catalogo/niessen/ocean", thumbnail: "/assets/images/category/mechanisms/niessen.png", image: "/hectric/niessen/assets/png/mechanisms/ocean-interruptores.png", description: "Niessen Ocean es la solución estanca por excelencia. Diseñada específicamente para soportar las condiciones más extremas, ofrece protección IP44 ideal para terrazas, jardines y entornos industriales.", modelsCount: 30 },
      { name: "Over", href: "/catalogo/niessen/over", thumbnail: "/assets/images/category/mechanisms/niessen.png", image: "/hectric/niessen/assets/png/mechanisms/over.png", description: "Una serie de superficie con líneas suaves y funcionales. Ideal para instalaciones donde no es posible empotrar, garantizando la calidad y fiabilidad clásica de los mecanismos Niessen.", modelsCount: 27 },
      { name: "Sky", href: "/catalogo/niessen/sky", thumbnail: "/assets/images/category/mechanisms/niessen.png", image: "/hectric/niessen/assets/png/mechanisms/niessen-sky-catalogo.png", badge: "Popular", description: "Sky Niessen ofrece un diseño extraplano de tan solo 8,5 mm de grosor, aportando un toque de elegancia y distinción. Sus acabados nobles la convierten en un referente en decoración e interiorismo.", modelsCount: 79 },
      { name: "Vega", href: "/catalogo/niessen/vega", thumbnail: "/assets/images/category/mechanisms/niessen.png", image: "/hectric/niessen/assets/png/mechanisms/niessen-vega-catalogo.png", bannerImage: "/hectric/niessen/assets/png/mechanisms/niessen-vega-banner.jpg", description: "Diseño atemporal con líneas rectas y acabados impecables. Niessen Vega se adapta perfectamente a proyectos de iluminación contemporáneos, siendo un estándar en fiabilidad y facilidad de instalación.", modelsCount: 91 },
      { name: "Zenit", href: "/catalogo/niessen/zenit", thumbnail: "/assets/images/category/mechanisms/niessen.png", image: "/hectric/niessen/assets/png/mechanisms/niessen-zenit-catalogo.png", bannerImage: "/hectric/niessen/assets/png/mechanisms/niessen-zenit-banner.png", description: "Zenit es la serie modular más completa y versátil de Niessen. Con una instalación sencilla por la parte frontal y una enorme variedad de funciones, es el mecanismo número uno para profesionales y hogares inteligentes.", modelsCount: 490 },
    ],
  },
  {
    id: "legrand",
    name: "Legrand",
    logoSrc: "/assets/images/brands/logos/1200px-Logo_Legrand.png",
    series: [
      { name: "Arteor", href: "/catalogo/legrand/arteor", thumbnail: "/assets/images/category/mechanisms/legrand.png", image: "/hectric/legrand/assets/png/mechanisms/artelor.png", description: "Innovación y vanguardia mundial. Arteor de Legrand se define por su diseño exclusivo y soporte para domótica avanzada, diseñado para usuarios globales que buscan lujo tecnológico.", modelsCount: 1540 },
      { name: "Céliane", href: "/catalogo/legrand/celiane", thumbnail: "/assets/images/category/mechanisms/legrand.png", image: "/hectric/legrand/assets/png/mechanisms/celiane.png", badge: "Popular", description: "La magia de combinar el círculo y el rectángulo. Céliane ofrece multitud de funciones innovadoras, desde cargadores inductivos hasta interruptores silenciosos, con acabados en materiales puros como cristal, metal y madera.", modelsCount: 1205 },
      { name: "Mosaic", href: "/catalogo/legrand/mosaic", thumbnail: "/assets/images/category/mechanisms/legrand.png", image: "/hectric/legrand/assets/png/mechanisms/mosaic.png", description: "La referencia indiscutible para entornos de trabajo, oficinas y hospitales. Legrand Mosaic es modular, rápida de instalar y ofrece funciones específicas para el sector terciario.", modelsCount: 1150 },
      { name: "Niloé Step", href: "/catalogo/legrand/niloe-step", thumbnail: "/assets/images/category/mechanisms/legrand.png", image: "/hectric/legrand/assets/png/mechanisms/niloe-step.png", description: "Funcionalidad esencial con un toque contemporáneo. Niloé Step es respetuosa con el medio ambiente, fácil de instalar y cuenta con la garantía de seguridad Legrand a un precio accesible.", modelsCount: 342 },
      { name: "Oteo", href: "/catalogo/legrand/oteo", thumbnail: "/assets/images/category/mechanisms/legrand.png", image: "/hectric/legrand/assets/png/mechanisms/oteo.png", description: "Mecanismos monobloc de superficie. Oteo es la solución práctica, compacta y económica para ampliaciones eléctricas sin obras, garantizando la robustez de Legrand.", modelsCount: 128 },
      { name: "Plexo", href: "/catalogo/legrand/plexo", thumbnail: "/assets/images/category/mechanisms/legrand.png", image: "/hectric/legrand/assets/png/mechanisms/legrand-plexo.png", description: "El mecanismo estanco IP55 más reconocido del mercado. Plexo está diseñado para resistir la humedad, el polvo y los golpes (IK07), siendo imprescindible en garajes, exteriores y naves industriales.", modelsCount: 265 },
      { name: "Soliroc", href: "/catalogo/legrand/soliroc", thumbnail: "/assets/images/category/mechanisms/legrand.png", image: "/hectric/legrand/assets/png/mechanisms/soliroc.png", description: "Mecanismo antivandálico por excelencia. Fabricado con aleaciones metálicas (IK10), Soliroc garantiza una extrema resistencia en zonas públicas, cárceles o colegios sin perder la estética.", modelsCount: 84 },
      { name: "Valena Next", href: "/catalogo/legrand/valena-next", thumbnail: "/assets/images/category/mechanisms/legrand.png", image: "/hectric/legrand/assets/png/mechanisms/valena-next.png", badge: "Novedad", description: "Diseño elegante y la puerta de entrada a la vivienda conectada. Valena Next integra 'Netatmo' para convertir fácilmente cualquier hogar convencional en un espacio inteligente.", modelsCount: 680 },
    ],
  },
  {
    id: "simon",
    name: "Simon",
    logoSrc: "/assets/images/brands/logos/Logo-Simon-azul-light-up-emotions.png",
    series: [
      { name: "Simon 100", href: "/catalogo/simon/100", thumbnail: "/assets/images/category/mechanisms/simon.png", image: "/hectric/simon/assets/png/mechanisms/simon-100.png", badge: "Novedad", description: "La revolución del sistema iO Simon. Simon 100 es un mecanismo con teclas de accionamiento por pulsación y diseñado para hacer de la domótica algo tan simple como pulsar un interruptor." },
      { name: "Simon 270", href: "/catalogo/simon/270", thumbnail: "/assets/images/category/mechanisms/simon.png", image: "/hectric/simon/assets/png/mechanisms/simon-270.png", badge: "Popular", description: "Sencilla, versátil y atemporal. Simon 270 ha rediseñado por completo el concepto de enchufe haciéndolo totalmente plano, eliminando bordes donde se acumula la suciedad y mejorando la conectividad." },
      { name: "Simon 82", href: "/catalogo/simon/82", thumbnail: "/assets/images/category/mechanisms/simon.png", image: "/hectric/simon/assets/png/mechanisms/simon-82.png", description: "Un clásico renovado. Simon 82 destaca por sus curvas suaves, la nobleza de sus materiales (madera, metal, cristal) y su diseño ergonómico que la mantienen como líder en ventas del mercado." },
      { name: "Simon 82 Detail", href: "/catalogo/simon/82-detail", thumbnail: "/assets/images/category/mechanisms/simon.png", image: "/hectric/simon/assets/png/mechanisms/simon-82-2.png", description: "Una evolución de la serie 82 con un diseño único que simula flotar en la pared. Sus detalles sutiles, como el bisel metalizado, aportan un carácter exclusivo y distintivo a cualquier pared." },
      { name: "Simon 27 Play", href: "/catalogo/simon/27-play", thumbnail: "/assets/images/category/mechanisms/simon.png", image: "/hectric/simon/assets/png/mechanisms/simon-27-play.png", badge: "Popular", description: "Diversión y color personalizable. Simon 27 Play te permite cambiar el color del marco en un simple clic con sus fundas intercambiables, perfecto para renovaciones rápidas y modernas." },
      { name: "Simon 44 Aqua", href: "/catalogo/simon/44-aqua", thumbnail: "/assets/images/category/mechanisms/simon.png", image: "/hectric/simon/assets/png/mechanisms/Simon-44-Aqua.png", description: "Mecanismos estancos IP55 de diseño avanzado. Ideal para entornos húmedos o expuestos al polvo y al agua sin sacrificar la compatibilidad con el mecanismo interior de la serie 27." },
      { name: "Simon 500 Cima", href: "/catalogo/simon/500-cima", thumbnail: "/assets/images/category/mechanisms/simon.png", image: "/hectric/simon/assets/png/mechanisms/Simon-500-Cima.png", description: "La solución rápida y profesional para espacios de trabajo y suelo técnico. Simon 500 Cima ofrece instalación por embornamiento rápido y máxima modularidad para datos y energía." },
      { name: "Simon 24 Harmonie", href: "/catalogo/simon/24-harmonie", thumbnail: "/assets/images/category/mechanisms/simon.png", image: "/hectric/simon/assets/png/mechanisms/simon-24-Harmonie.png", description: "Mecanismo innovador basado en el sistema Push&Go, optimizado para evitar desajustes durante la instalación en superficies rugosas y ofrecer un acabado visualmente perfecto." },
    ],
  },
  {
    id: "schneider",
    name: "Schneider Electric",
    logoSrc: "/assets/images/brands/logos/schneider_electric-logo.png",
    series: [
      { name: "Asfora", href: "/catalogo/schneider/asfora", thumbnail: "/assets/images/category/mechanisms/schneider.png", image: "/hectric/schneider/assets/png/mechanisms/asfora.png", description: "Diseño moderno y elegante al alcance de todos. Asfora es una serie completa, fiable y estéticamente atractiva, ideal para equipar viviendas modernas de manera económica." },
      { name: "Cedar Plus", href: "/catalogo/schneider/cedar-plus", thumbnail: "/assets/images/category/mechanisms/schneider.png", image: "/hectric/schneider/assets/png/mechanisms/cedar-plus.png", description: "Mecanismos estancos IP44 fiables y robustos para exterior o ambientes expuestos. Su diseño resistente de líneas redondeadas facilita la instalación en superficie." },
      { name: "D-Life", href: "/catalogo/schneider/d-life", thumbnail: "/assets/images/category/mechanisms/schneider.png", image: "/hectric/schneider/assets/png/mechanisms/d-life.png", badge: "Novedad", description: "La alta gama de Schneider Electric. D-Life presenta marcos extraplanos, sin marco divisorio interior, y acabados nobles para interiores contemporáneos y proyectos de domótica KNX." },
      { name: "Mureva Styl", href: "/catalogo/schneider/mureva-styl", thumbnail: "/assets/images/category/mechanisms/schneider.png", image: "/hectric/schneider/assets/png/mechanisms/Mureva-Styl.png", description: "Protección estanca elevada al siguiente nivel. Mureva Styl destaca por su protección IK08/IP55 y su diseño curvo que repele el agua y la suciedad en entornos exigentes." },
      { name: "New Unica", href: "/catalogo/schneider/new-unica", thumbnail: "/assets/images/category/mechanisms/schneider.png", image: "/hectric/schneider/assets/png/mechanisms/new-unica.png", badge: "Popular", description: "La reinvención de un éxito mundial. New Unica es inteligente, fácil de instalar gracias a sus garras mejoradas, y compatible con Wiser para hogares inteligentes." },
      { name: "New Unica System+", href: "/catalogo/schneider/new-unica-system", thumbnail: "/assets/images/category/mechanisms/schneider.png", image: "/hectric/schneider/assets/png/mechanisms/new-unica-system+.png", description: "Soluciones ergonómicas y eficientes para el espacio de trabajo. Cajas de suelo, columnas y torretas adaptadas al diseño moderno y a la máxima conectividad." },
      { name: "Odace", href: "/catalogo/schneider/odace", thumbnail: "/assets/images/category/mechanisms/schneider.png", image: "/hectric/schneider/assets/png/mechanisms/odace.png", description: "Rompiendo los moldes. Odace combina teclas redondas con marcos cuadrados, creando un contraste visual asombroso con materiales innovadores y muy personalizables." },
      { name: "Sedna", href: "/catalogo/schneider/sedna", thumbnail: "/assets/images/category/mechanisms/schneider.png", image: "/hectric/schneider/assets/png/mechanisms/Sedna.png", description: "Perfil ultraplano de apenas 8 mm de grosor. Sedna es pura elegancia sutil, ideal para pasar desapercibida y aportar minimalismo a paredes con mucho estilo." },
    ],
  },
  {
    id: "bjc",
    name: "BJC",
    logoSrc: "/assets/images/brands/logos/bjc.png",
    series: [
      { name: "Iris", href: "/catalogo/bjc/iris", thumbnail: "/assets/images/category/mechanisms/BJC.png", image: "/hectric/bjc/assets/png/mechanisms/bjc-iris.png", badge: "Popular", description: "Uno de los mecanismos más vendidos en España. BJC Iris aporta curvas suaves, mecanismos de fiabilidad inigualable y embornes automáticos que ahorran tiempo de instalación." },
      { name: "Mega", href: "/catalogo/bjc/mega", thumbnail: "/assets/images/category/mechanisms/BJC.png", image: "/hectric/bjc/assets/png/mechanisms/bjc-mega.png", description: "Arquitectura pura en metal y madera. BJC Mega está enfocada al sector premium con un bastidor de alta resistencia y acabados metálicos 100% auténticos que derrochan calidad." },
      { name: "Viva", href: "/catalogo/bjc/viva", thumbnail: "/assets/images/category/mechanisms/BJC.png", image: "/hectric/bjc/assets/png/mechanisms/bjc-viva.png", description: "Económica, juvenil y ligera. BJC Viva comparte el mismo corazón tecnológico de alta calidad de BJC, pero con un diseño exterior fresco, marcos intercambiables y muy fácil de instalar." },
    ],
  },
  {
    id: "jung",
    name: "JUNG",
    logoSrc: "/assets/images/brands/logos/Jung-logo.png",
    series: [
      { name: "A 550", href: "/catalogo/jung/a-550", thumbnail: "/assets/images/category/mechanisms/jung.png", image: "/hectric/jung/assets/png/mechanisms/jung-A-550.png", description: "Diseño purista en formato clásico JUNG. La serie A 550 se centra en las líneas rectas y nítidas sin compromisos, fabricada en termoplástico irrompible para durar toda la vida." },
      { name: "A FLOW", href: "/catalogo/jung/a-flow", thumbnail: "/assets/images/category/mechanisms/jung.png", image: "/hectric/jung/assets/png/mechanisms/jung-A-FLOW.png", description: "Curvas y ligereza fluida. A FLOW de JUNG suaviza las líneas tradicionales alemanas integrándose a la perfección en paredes con decoraciones dinámicas y amables." },
      { name: "AS 500", href: "/catalogo/jung/as-500", thumbnail: "/assets/images/category/mechanisms/jung.png", image: "/hectric/jung/assets/png/mechanisms/jung-AS-500.png", badge: "Popular", description: "La armonía de la serie estándar de JUNG. Una combinación perfecta de curvas suaves en los marcos e interruptores resistentes, ideal como gama polivalente para cualquier instalación." },
      { name: "LS 990", href: "/catalogo/jung/ls-990", thumbnail: "/assets/images/category/mechanisms/jung.png", image: "/hectric/jung/assets/png/mechanisms/jung-ls-990.png", description: "Un icono del diseño mundial desde 1968. LS 990 destaca por su mecanismo casi a ras de marco con tecla extremadamente ancha, famosa por emplear los colores originales de Le Corbusier." },
      { name: "WG 800", href: "/catalogo/jung/wg-800", thumbnail: "/assets/images/category/mechanisms/jung.png", image: "/hectric/jung/assets/png/mechanisms/jung-WG-800.png", description: "Serie estanca de superficie JUNG IP44. Resistente a impactos y rayos UV, está diseñada profesionalmente para durar en el exterior manteniendo la estética arquitectónica." },
    ],
  },
];

import React from 'react';

export type MechanismType = {
  id: string;
  name: string;
  iconSvg: React.ReactNode;
};

export const standardMechanisms: MechanismType[] = [
  {
    id: "interruptor",
    name: "Interruptor",
    iconSvg: <g fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5" /><circle cx="12" cy="12" r="4" /></g>,
  },
  {
    id: "enchufe-schuko",
    name: "Enchufe Schuko",
    iconSvg: <g fill="none"><path stroke="currentColor" strokeWidth="1.5" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5" /><circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.5" /><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M12 18v-1.5m0-9V6" opacity=".5" /><circle cx="14" cy="12" r="1" fill="currentColor" /><circle cx="10" cy="12" r="1" fill="currentColor" /></g>,
  },
  {
    id: "toma-tv",
    name: "Toma TV / SAT",
    iconSvg: <g fill="none"><path stroke="currentColor" strokeWidth="1.5" d="M22 16c0 2.828 0 4.243-.879 5.121C20.243 22 18.828 22 16 22H8c-2.828 0-4.243 0-5.121-.879C2 20.243 2 18.828 2 16v-4c0-2.828 0-4.243.879-5.121C3.757 6 5.172 6 8 6h8c2.828 0 4.243 0 5.121.879C22 7.757 22 9.172 22 12z" /><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="m9 2l3 3.5L15 2" opacity=".5" /><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M16 6v16" /><path fill="currentColor" d="M20 16a1 1 0 1 0-2 0a1 1 0 0 0 2 0m0-4a1 1 0 1 0-2 0a1 1 0 0 0 2 0" opacity=".5" /></g>,
  },
  {
    id: "toma-datos",
    name: "Toma de Datos (RJ45)",
    iconSvg: <g fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2.364 12.958c-.38-2.637-.57-3.956-.029-5.083s1.691-1.813 3.992-3.183l1.385-.825C9.8 2.622 10.846 2 12 2s2.199.622 4.288 1.867l1.385.825c2.3 1.37 3.451 2.056 3.992 3.183s.35 2.446-.03 5.083l-.278 1.937c-.487 3.388-.731 5.081-1.906 6.093S16.553 22 13.106 22h-2.212c-3.447 0-5.17 0-6.345-1.012s-1.419-2.705-1.906-6.093z" opacity=".5" /><path strokeLinecap="round" d="M6 11.683c3.314-3.577 8.686-3.577 12 0M8 13.84c2.21-2.384 5.79-2.384 8 0M10 16c1.105-1.192 2.896-1.192 4 0" /></g>,
  },
  {
    id: "cargador-usb",
    name: "Cargador USB",
    iconSvg: <g fill="none"><circle cx="12" cy="17" r="1" stroke="currentColor" strokeWidth="1.5" /><circle cx="8" cy="9" r="1" stroke="currentColor" strokeWidth="1.5" /><path fill="currentColor" d="M11.25 16a.75.75 0 0 0 1.5 0zM12 6l.53-.53a.75.75 0 0 0-1.06 0zm.47 1.53a.75.75 0 1 0 1.06-1.06zm-2-1.06a.75.75 0 0 0 1.06 1.06zm1 .06l1 1l1.06-1.06l-1-1zm0-1.06l-1 1l1.06 1.06l1-1zM12.75 16v-1.875h-1.5V16zm0-1.875V6h-1.5v8.125z" /><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M8 10v1.03a2 2 0 0 0 1.403 1.909l1.404.438A1.7 1.7 0 0 1 12 15m4-4v1.03a2 2 0 0 1-1.403 1.909l-1.404.438A1.7 1.7 0 0 0 12 16" /><path stroke="currentColor" strokeWidth="1.5" d="M15 10c0-.471 0-.707.146-.854C15.293 9 15.53 9 16 9s.707 0 .854.146C17 9.293 17 9.53 17 10s0 .707-.146.854C16.707 11 16.47 11 16 11s-.707 0-.854-.146C15 10.707 15 10.47 15 10Z" /><path stroke="currentColor" strokeWidth="1.5" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5" /></g>,
  },
  {
    id: "regulador",
    name: "Regulador (Dimmer)",
    iconSvg: <g fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5" /><path strokeLinecap="round" strokeLinejoin="round" d="m15.978 8.715l-.442-.453a4.92 4.92 0 0 0-7.072 0c-1.952 1.999-1.952 5.24 0 7.239a4.92 4.92 0 0 0 7.072 0a5.18 5.18 0 0 0 1.425-4.259m-.983-2.527h-2.652m2.651 0V6" /></g>,
  },
  {
    id: "persianas",
    name: "Persianas",
    iconSvg: <g fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5" /><path strokeLinecap="round" strokeLinejoin="round" d="M9.5 8v8m0 0L7 13.25M9.5 16l2.5-2.75M14.5 16V8m0 0L12 10.75M14.5 8l2.5 2.75" /></g>,
  },
  {
    id: "conmutador",
    name: "Conmutador",
    iconSvg: <g fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5" /><path strokeLinecap="round" d="m9.5 14.5l5-5m0 5l-5-5" /></g>,
  },
  {
    id: "pulsador",
    name: "Pulsador",
    iconSvg: <g fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5" /><circle cx="12" cy="12" r="3" fill="currentColor" /></g>,
  },
  {
    id: "combinaciones",
    name: "Combinaciones",
    iconSvg: <g fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5" /><circle cx="9" cy="12" r="2" /><circle cx="15" cy="12" r="2" /></g>,
  },
  {
    id: "timbre-zumbador",
    name: "Timbre / Zumbador",
    iconSvg: <g fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5" /><path strokeLinecap="round" strokeLinejoin="round" d="M10 17h4c.5 0 1-.5 1-1V9c0-1.657-1.343-3-3-3s-3 1.343-3 3v7c0 .5.5 1 1 1Z" /><path strokeLinecap="round" d="M12 17v2" /></g>,
  },
  {
    id: "toma-telefono",
    name: "Tomas de Teléfono",
    iconSvg: <g fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5" /><path strokeLinecap="round" strokeLinejoin="round" d="M8 10c0-1.5 1-3 4-3s4 1.5 4 3v4c0 1.5-1 3-4 3s-4-1.5-4-3v-4Z" /><circle cx="12" cy="14" r="1" fill="currentColor" /></g>,
  },
];
