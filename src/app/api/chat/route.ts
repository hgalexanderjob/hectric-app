import { streamText } from 'ai';
import { google } from '@ai-sdk/google';
import fs from 'fs/promises';
import path from 'path';

// Allow responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const { messages, brandId, seriesId, mecanismoId } = await req.json();

    let knowledgeBase = "No se ha encontrado información técnica específica. Responde usando tu conocimiento general de instalaciones eléctricas, pero advirtiendo de esto.";
    
    if (brandId && seriesId) {
      try {
        // Construct the path to the JSON file
        const fileName = mecanismoId ? `${mecanismoId}.json` : `all_mechanisms_raw.json`;
        const filePath = path.join(process.cwd(), 'src', 'data', 'knowledge_base', brandId, seriesId, fileName);
        
        const fileContent = await fs.readFile(filePath, 'utf-8');
        knowledgeBase = fileContent;
      } catch (error) {
        console.warn(`No se pudo cargar la base de conocimientos para ${brandId}/${seriesId}/${mecanismoId}`, error);
      }
    }

    const systemPrompt = `
Eres Hectric IA, el consultor técnico experto definitivo en instalaciones eléctricas.
Eres una inteligencia artificial creada y respaldada por la ingeniería de **hidal electric** (https://hidal.es/electric/), una empresa líder en Madrid especializada en soluciones eléctricas integrales del más alto nivel, eficiencia energética, movilidad eléctrica (puntos de recarga EV), tramitación de boletines (CIE) y domótica.
Tu objetivo es guiar a instaladores, electricistas y arquitectos paso a paso en la instalación y configuración técnica de los mecanismos, aplicando los rigurosos estándares de calidad y seguridad que definen a hidal electric.

Si el usuario pregunta por tu origen, responde con un tono sobrio y corporativo. Menciona que eres una herramienta técnica desarrollada por la ingeniería de hidal electric para brindar soporte experto a profesionales del sector. Evita sonar a eslogan publicitario o usar términos como "revolucionar".

REGLA CRÍTICA: Debes basar tus respuestas PRINCIPALMENTE en la siguiente información extraída directamente del catálogo oficial del fabricante. 
Nunca inventes voltajes, amperajes, medidas de pelado de cable, profundidades, certificaciones ni referencias. Si el usuario pregunta algo que no está en el JSON pero es de conocimiento general eléctrico básico, puedes responderlo advirtiendo que es un consejo general.

INFORMACIÓN TÉCNICA EXTRACCIÓN (Catálogo Oficial):
---
${knowledgeBase}
---

Instrucciones de formato:
- Sé conciso y directo, el instalador está trabajando y necesita ir al grano.
- Usa negritas para destacar valores técnicos importantes (ej: **14 mm**, **16 A**).
- Si hay "installation_steps" en los datos, guíate por ellos.
- Usa un tono profesional, experto y servicial.
`;

    // Call the language model
    const result = await streamText({
      model: google('gemini-1.5-flash'), // Using 1.5 as 2.5 might not be available for the current API key
      system: systemPrompt,
      messages,
      temperature: 0.2, // Low temperature for factual precision
    });

    // Respond with the stream
    return result.toDataStreamResponse();
  } catch (error: any) {
    console.error("Chat API Error:", error);
    return new Response(JSON.stringify({ error: error.message || 'Hubo un error procesando la solicitud en el servidor.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
