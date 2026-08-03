import { z } from "zod";

/** Iranian mobile: 09XXXXXXXXX (11 digits) */
const iranianMobileRegex = /^09\d{9}$/;

export const mobileNumberSchema = z
  .string()
  .trim()
  .min(1, "شماره موبایل الزامی است")
  .regex(iranianMobileRegex, "شماره موبایل معتبر نیست (مثال: 09123456789)");

export const passwordSchema = z
  .string()
  .min(1, "رمز عبور الزامی است")
  .min(8, "رمز عبور باید حداقل ۸ کاراکتر باشد");

export const signInSchema = z.object({
  mobileNumber: mobileNumberSchema,
  password: passwordSchema,
});

export const signUpSchema = z
  .object({
    mobileNumber: mobileNumberSchema,
    password: passwordSchema,
    confirmPassword: z.string().min(1, "تکرار رمز عبور الزامی است"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "رمز عبور و تکرار آن یکسان نیستند",
    path: ["confirmPassword"],
  });
