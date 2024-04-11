import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z'

export const applicationSchema = z.object({
  applicant: z.number(),
  applying_for: z.string(),
  message: z.string()
}).required()

// class is required for using DTO as a type
export type ICreatePost = z.infer<typeof applicationSchema>;

export class applicationDto extends createZodDto(applicationSchema) {}
