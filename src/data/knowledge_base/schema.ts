import { z } from "zod";

export const KBMechanismSchema = z.object({
  brand: z.string(),
  series: z.string(),
  mechanism_id: z.string(),
  mechanism_name: z.string(),
  description: z.string().optional(),
  technical_specs: z.object({
    voltage: z.string().optional(),
    amperage: z.string().optional(),
    wire_stripping_mm: z.number().nullable().optional(),
    terminal_type: z.string().optional(),
    wire_section_mm2: z.string().optional(),
    ip_rating: z.string().optional(),
    certifications: z.array(z.string()).optional(),
    regulations: z.array(z.string()).optional(),
    power_dissipation_w: z.number().optional(),
    operating_temperature_c: z.string().optional(),
    storage_temperature_c: z.string().optional(),
    led_compatibility: z.string().optional(),
  }).catchall(z.any()), // Permite añadir cualquier otra especificación técnica que aparezca en el PDF
  installation_steps: z.array(z.string()),
  bom_references: z.array(
    z.object({
      type: z.string(),
      sku: z.string(),
      description: z.string(),
      color: z.string().optional(),
      packaging_units: z.number().optional()
    })
  ),
  warnings: z.array(z.string()),
  faqs: z.array(
    z.object({
      question: z.string(),
      answer: z.string(),
    })
  ).optional(),
});

export type KBMechanism = z.infer<typeof KBMechanismSchema>;
