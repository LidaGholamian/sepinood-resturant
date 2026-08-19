import {z} from 'zod';

export const checkoutSchema = z.object({
    name: z.string().min(2,'نام را وارد کنید'),
    email: z.string().email('ایمیل معتبر وارد کنید'),
    phone: z.string().regex(/^09\d{9}$/, "شماره موبایل معتبر وارد کنید"),
    address: z.string().min(10,'آدرس را وارد کنید'),
    paymentMethod: z.enum(['online','cash']),
})

