import { streamText } from 'ai';
import { google } from '@ai-sdk/google';
import fs from 'fs/promises';
import path from 'path';

// Allow responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const { messages, brandId, seriesId, mecanismoId, reference } = await req.json();

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

    const isGeneric = !reference;
    const isNiessenLujo = brandId?.toLowerCase() === "niessen" && reference?.startsWith("81");

    const systemPrompt = `
Eres Hectric IA, el consultor técnico experto definitivo en instalaciones eléctricas.
Eres una inteligencia artificial creada y respaldada por la ingeniería de **hidal electric** (https://hidal.es/electric/), una empresa líder en Madrid especializada en soluciones eléctricas integrales del más alto nivel, eficiencia energética, movilidad eléctrica (puntos de recarga EV), tramitación de boletines (CIE) y domótica.
Tu objetivo es guiar a instaladores, electricistas y arquitectos paso a paso en la instalación y configuración técnica de los mecanismos, aplicando los rigurosos estándares de calidad y seguridad que definen a hidal electric.

${isGeneric ? `ATENCIÓN IMPORTANTE: El usuario ha seleccionado la 'Opción Genérica' porque desconoce el código de modelo exacto de su mecanismo. Debes proporcionarle una guía de instalación paso a paso que sea universalmente aplicable para los modelos estándar de esta familia, basándote en la información general del catálogo.` : `ATENCIÓN IMPORTANTE: El usuario ha seleccionado e instalará específicamente la REFERENCIA / SKU: **${reference}**.\nBusca en la sección 'bom_references' o en los detalles técnicos de la base de conocimientos la información que coincida con esta referencia exacta y basa todas tus instrucciones y respuestas en ese modelo en concreto.`}

${isNiessenLujo ? `ATENCIÓN ADICIONAL: La referencia seleccionada (${reference}) pertenece a la gama de 'Mecanismos de lujo' universales de Niessen. Como experto, sabes perfectamente que el interior o parte eléctrica de este mecanismo es idéntico y 100% compatible para ensamblarse con los marcos y teclas de las series Sky, Skymoon, Alba, Vega, Olas, Tacto y Arco. Integra este dato sutilmente en tus explicaciones si el usuario pregunta sobre compatibilidades con otras series de Niessen.` : ""}

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
      model: google('gemini-1.5-flash') as any, // Fix Vercel type mismatch between ai and @ai-sdk/google
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
