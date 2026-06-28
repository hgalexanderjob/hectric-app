export type TutorialCategory = "Todas" | "Mecanismos" | "Cuadros Eléctricos" | "Domótica" | "Normativa" | "Herramientas";

// The full data structure used by the UI (populated by the YouTube API)
export interface Tutorial {
  id: string;
  youtubeId: string;
  title: string;
  channelName: string;
  channelAvatar: string;
  views: string;
  publishedAt: string;
  duration?: string;
  category: TutorialCategory;
  description?: string;
  aiTutorialUrl?: string;
}

// The raw source data we store in our app
export interface TutorialSource {
  id: string; // The URL slug (e.g., 'instalar-conmutador')
  youtubeId: string; // The ID of the YouTube video
  category: TutorialCategory;
  isFeatured?: boolean; // Whether to highlight it on the main page
  aiTutorialUrl?: string; // Link to the interactive AI catalog tutorial
}

export const tutorialSources: TutorialSource[] = [
  {
    id: "instalar-conmutador-niessen",
    youtubeId: "8-M-3-mEaUE",
    category: "Mecanismos",
    isFeatured: true,
    aiTutorialUrl: "/catalogo/niessen/alba/instalacion/conmutador?ref=8102"
  },
  {
    id: "cuadro-electrico-vivienda",
    youtubeId: "8-M-3-mEaUE", // Placeholder until user adds more
    category: "Cuadros Eléctricos",
  },
  {
    id: "domotica-abb-free-home",
    youtubeId: "8-M-3-mEaUE",
    category: "Domótica",
  },
  {
    id: "normativa-itc-bt-25",
    youtubeId: "8-M-3-mEaUE",
    category: "Normativa",
  },
  {
    id: "instalar-enchufe-superficie",
    youtubeId: "8-M-3-mEaUE",
    category: "Mecanismos",
  },
  {
    id: "pelacables-automatico",
    youtubeId: "8-M-3-mEaUE",
    category: "Herramientas",
  },
  {
    id: "protector-sobretensiones",
    youtubeId: "8-M-3-mEaUE",
    category: "Cuadros Eléctricos",
  },
  {
    id: "conectar-tiras-led",
    youtubeId: "8-M-3-mEaUE",
    category: "Domótica",
  }
];
