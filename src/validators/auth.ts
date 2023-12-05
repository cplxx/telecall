import { z } from "zod";

export const registerSchema = z.object({
  email: z.string().email({ message: "e-mail invalido" }),
  name: z.string().min(3, { message: "Seu nome é muito curto" }).max(255),
  cpf: z
    .string()
    .min(11, { message: "cpf invalido" })
    .max(11)
    .refine((val) => !isNaN(val as unknown as number)),
  password: z.string().min(8, { message: "senha fraca" }).max(100),
  confirmPassword: z
    .string()
    .min(8, { message: "as senhas não são iguais" })
    .max(100),
  date: z.string({
    required_error: "A data é obrigatoria",
  }),
});
