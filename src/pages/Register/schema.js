import * as z from "zod";

export const schema = z.object({
  name: z.string().nonempty("Por favor, preencha seu nome"),
  email: z.string().email("Por favor, ensira um email válido"),
  password: z
    .string()
    .min(8, "A senha é obrigatória e precisa de no mínimo 8 caracteres"),
});
