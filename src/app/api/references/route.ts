import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const brand = searchParams.get("brand");
  const series = searchParams.get("series");
  const mechanism = searchParams.get("mechanism");

  if (!brand || !series || !mechanism) {
    return NextResponse.json(
      { error: "Missing required parameters (brand, series, mechanism)" },
      { status: 400 }
    );
  }

  try {
    // Construir la ruta hacia el JSON. Ejemplo: src/data/knowledge_base/niessen/alba/interruptor.json
    const filePath = path.join(
      process.cwd(),
      "src",
      "data",
      "knowledge_base",
      brand.toLowerCase(),
      series.toLowerCase(),
      `${mechanism.toLowerCase()}.json`
    );

    // Intentar leer el archivo
    const fileContent = await fs.readFile(filePath, "utf-8");
    const jsonData = JSON.parse(fileContent);

    // Si tiene la propiedad bom_references, las extraemos
    if (jsonData.bom_references && Array.isArray(jsonData.bom_references)) {
      return NextResponse.json({
        references: jsonData.bom_references,
      });
    }

    // Si el archivo existe pero no tiene referencias
    return NextResponse.json({ references: [] });
  } catch (error: any) {
    // Si el archivo no existe o hay error de lectura, devolvemos un array vacío como fallback
    if (error.code === "ENOENT") {
      return NextResponse.json({ references: [] });
    }
    
    console.error("Error reading references JSON:", error);
    return NextResponse.json(
      { error: "Internal server error reading references" },
      { status: 500 }
    );
  }
}
