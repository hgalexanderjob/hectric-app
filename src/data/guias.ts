import { brandsData, standardMechanisms } from "@/app/catalogo/data";

export interface Guia {
  id: string;
  title: string;
  brand: string;
  series: string;
  referencia: string;
  format: "PDF" | "ZIP" | "RAR";
  url: string;
}

// Generamos datos de prueba (mock) aleatorios pero válidos basados en el catálogo real
export const guiasData: Guia[] = [];

let idCounter = 1;

// Por cada marca y algunas de sus series, generamos manuales
brandsData.forEach(brand => {
  brand.series.slice(0, 2).forEach(series => {
    // Manual general de la serie
    guiasData.push({
      id: `g${idCounter++}`,
      title: `Catálogo Técnico ${brand.name} ${series.name}`,
      brand: brand.name,
      series: series.name,
      referencia: "General",
      format: "PDF",
      url: "#"
    });

    // Manual para un par de mecanismos
    standardMechanisms.slice(0, 3).forEach(mech => {
      guiasData.push({
        id: `g${idCounter++}`,
        title: `Instrucciones de Montaje: ${mech.name} - ${series.name}`,
        brand: brand.name,
        series: series.name,
        referencia: mech.name,
        format: "PDF",
        url: "#"
      });
    });
  });
});

export const getAvailableBrands = () => {
  return brandsData.map(b => b.name);
};

export const getAvailableSeries = (selectedBrands: Set<string>) => {
  let series: string[] = [];
  if (selectedBrands.size === 0) {
    // Si no hay marca seleccionada, mostramos todas
    brandsData.forEach(b => {
      b.series.forEach(s => series.push(s.name));
    });
  } else {
    // Mostramos solo las series de las marcas seleccionadas
    brandsData.forEach(b => {
      if (selectedBrands.has(b.name)) {
        b.series.forEach(s => series.push(s.name));
      }
    });
  }
  return series;
};

export const getAvailableReferencias = () => {
  // Los mecanismos son estándar para todas las series
  return ["General", ...standardMechanisms.map(m => m.name)];
};
