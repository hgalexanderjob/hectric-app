export type TutorialCategory = 'Mecanismos' | 'Cuadros Eléctricos' | 'Domótica' | 'Normativa' | 'Movilidad Eléctrica';

export interface Tutorial {
  id: string;
  title: string;
  description: string;
  category: TutorialCategory;
  thumbnail: string;
  videoUrl?: string;
  duration: string;
  readTime: string;
  difficulty: 'Baja' | 'Media' | 'Alta';
  featured?: boolean;
}

export const tutorialsData: Tutorial[] = [
  {
    id: "instalacion-conmutador-niessen",
    title: "Cómo instalar un Conmutador Niessen",
    description: "Guía paso a paso para cablear e instalar un conmutador de la serie Niessen Zenit o Alba en un circuito de iluminación.",
    category: "Mecanismos",
    thumbnail: "/hectric/niessen/assets/png/mechanisms/niessen-8102.png",
    videoUrl: "https://www.youtube.com/embed/8-M-3-mEaUE",
    duration: "4:30",
    readTime: "5 min",
    difficulty: "Baja",
    featured: true
  },
  {
    id: "cableado-cuadro-general-vivienda",
    title: "Cableado de Cuadro General (CGMP)",
    description: "Distribución correcta de IGA, Diferenciales y PIAs según el REBT para una vivienda con electrificación elevada.",
    category: "Cuadros Eléctricos",
    thumbnail: "/assets/images/category/mechanisms/niessen.png",
    videoUrl: "https://www.youtube.com/embed/8-M-3-mEaUE",
    duration: "12:15",
    readTime: "10 min",
    difficulty: "Alta",
    featured: true
  },
  {
    id: "punto-recarga-vehiculo-electrico",
    title: "Instalación de Punto de Recarga EV",
    description: "Requisitos normativos (ITC-BT-52) y pasos técnicos para instalar un cargador Wallbox en un garaje comunitario.",
    category: "Movilidad Eléctrica",
    thumbnail: "/assets/images/category/mechanisms/niessen.png",
    videoUrl: "https://www.youtube.com/embed/8-M-3-mEaUE",
    duration: "8:45",
    readTime: "7 min",
    difficulty: "Media"
  },
  {
    id: "domotica-free-home",
    title: "Configuración Básica de ABB free@home",
    description: "Primeros pasos para emparejar actuadores y sensores en el sistema de domótica de ABB / Niessen.",
    category: "Domótica",
    thumbnail: "/hectric/niessen/assets/png/mechanisms/niessen-8101.png",
    duration: "15:00",
    readTime: "12 min",
    difficulty: "Media"
  },
  {
    id: "normativa-itc-bt-25",
    title: "Resumen Práctico ITC-BT-25",
    description: "Guía de referencia rápida sobre el número de circuitos y secciones mínimas obligatorias en viviendas.",
    category: "Normativa",
    thumbnail: "/assets/images/category/mechanisms/niessen.png",
    duration: "0:00",
    readTime: "4 min",
    difficulty: "Baja"
  }
];
