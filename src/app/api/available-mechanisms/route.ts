import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const brand = searchParams.get("brand");
  const series = searchParams.get("series");

  if (!brand || !series) {
    return NextResponse.json(
      { error: "Missing required parameters (brand, series)" },
      { status: 400 }
    );
  }

  try {
    const dirPath = path.join(
      process.cwd(),
      "src",
      "data",
      "knowledge_base",
      brand.toLowerCase(),
      series.toLowerCase()
    );

    // Intentar leer el directorio
    const files = await fs.readdir(dirPath);
    
    // Filtrar solo los archivos .json que correspondan a mecanismos
    const availableMechanisms = files
      .filter(file => file.endsWith(".json") && file !== "all_mechanisms_raw.json")
      .map(file => file.replace(".json", ""));

    return NextResponse.json({ availableMechanisms });
  } catch (error: any) {
    // Si la carpeta no existe, devolvemos un array vacío
    if (error.code === "ENOENT") {
      return NextResponse.json({ availableMechanisms: [] });
    }
    
    console.error("Error reading available mechanisms:", error);
    return NextResponse.json(
      { error: "Internal server error reading mechanisms" },
      { status: 500 }
    );
  }
}
