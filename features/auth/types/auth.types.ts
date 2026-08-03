import type { z } from "zod";

import type {
  signInSchema,
  signUpSchema,
} from "@/features/auth/schemas/auth.schema";

export type SignInValues = z.infer<typeof signInSchema>;
export type SignUpValues = z.infer<typeof signUpSchema>;
