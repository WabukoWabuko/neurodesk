import { z } from 'zod';

export const DocumentSchema = z.object({
  id: z.string().uuid(),
  projectId: z.string().uuid(),
  title: z.string(),
  sourceType: z.enum(['pdf', 'docx', 'url', 'youtube', 'github']),
  filePath: z.string().optional(),
  mimeType: z.string(),
  uploadedAt: z.string().datetime(),
  metadata: z.record(z.any()).optional(),
});

export type Document = z.infer<typeof DocumentSchema>;