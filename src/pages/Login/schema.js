import * as z from "zod";

export const schema = z.object({
  email: z.string().email("Por favor, ensira um email válido"),
  password: z.string().min(8, "Por favor, verifique sua senha"),
});
