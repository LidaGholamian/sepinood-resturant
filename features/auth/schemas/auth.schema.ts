import { z } from "zod";

export const usernameSchema = z
  .string()
  .trim()
  .min(1, "نام کاربری الزامی است")
  .min(3, "نام کاربری باید حداقل ۳ کاراکتر باشد")
  .max(32, "نام کاربری نباید بیشتر از ۳۲ کاراکتر باشد")
  .regex(
    /^[a-zA-Z0-9._]+$/,
    "نام کاربری فقط می‌تواند شامل حروف، اعداد، نقطه و زیرخط باشد",
  );

export const passwordSchema = z
  .string()
  .min(1, "رمز عبور الزامی است")
  .min(8, "رمز عبور باید حداقل ۸ کاراکتر باشد");

export const signInSchema = z.object({
  username: usernameSchema,
  password: passwordSchema,
});

export const signUpSchema = z
  .object({
    username: usernameSchema,
    password: passwordSchema,
    confirmPassword: z.string().min(1, "تکرار رمز عبور الزامی است"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "رمز عبور و تکرار آن یکسان نیستند",
    path: ["confirmPassword"],
  });
