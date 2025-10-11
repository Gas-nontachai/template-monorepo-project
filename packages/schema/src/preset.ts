import { z } from 'zod';

export const PresetSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1),
  description: z.string().optional(),
  isActive: z.boolean().default(true),
});

export type Preset = z.infer<typeof PresetSchema>;
