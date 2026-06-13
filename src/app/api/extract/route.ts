import { generateText } from "ai";
import { google } from "@ai-sdk/google";
import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

// Allow long requests
export const maxDuration = 300; 

export async function POST(req: Request) {
  try {
    const { text, mecName, mecId, catalogSeries, catalogBrand } = await req.json();

    const prompt = `
Analiza el siguiente fragmento de un catálogo de material eléctrico (${catalogBrand} ${catalogSeries}).
Busca exhaustivamente información sobre el mecanismo: "${mecName}" (también puede aparecer bajo sinónimos técnicos como ${mecId}).

Tu tarea es:
1. Determinar si esta familia de productos (${catalogSeries}) fabrica o tiene referencias para "${mecName}". 
   Si no lo tiene (ej. colecciones antiguas que no tienen USB), el campo exists_in_catalog debe ser false.
2. Si existe, extrae TODA la información técnica y de referencias (SKU) estructurándola en 'mechanism_data'.
   Asegúrate de incluir en 'bom_references' TODOS los SKUs relacionados con este mecanismo (teclas, tapas, mecanismos internos) que aparezcan en el texto.
   Genera descripciones y pasos de instalación lógicos basados en el conocimiento eléctrico estándar si el catálogo no detalla el paso a paso, pero NO inventes SKUs ni datos técnicos.

DEBES RESPONDER ÚNICAMENTE CON UN OBJETO JSON VÁLIDO CON LA SIGUIENTE ESTRUCTURA:
{
  "exists_in_catalog": boolean,
  "mechanism_data": {
    "brand": "string",
    "series": "string",
    "mechanism_id": "string",
    "mechanism_name": "string",
    "description": "string",
    "technical_specs": { "voltage": "string", "amperage": "string" },
    "installation_steps": ["string", "string"],
    "bom_references": [{ "type": "string", "sku": "string", "description": "string" }],
    "warnings": ["string"]
  }
}
   
Fragmento del Catálogo:
---------------------
${text}
---------------------
`;

    const { text: responseText } = await generateText({
      model: google('gemini-1.5-flash') as any, // Fix Vercel type mismatch
      prompt,
      temperature: 0.1,
    });

    return NextResponse.json({ responseText });
  } catch (error: any) {
    console.error("Extraction API Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
