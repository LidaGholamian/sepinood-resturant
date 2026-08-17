import {z} from 'zod';

export const checkoutSchema = z.object({
    name: z.string().min(2,'نام را وارد کنید'),
    email: z.string().email('ایمیل معتبر وارد کنید'),
    phone: z.string().min(11,'شماره تلفن را وارد کنید'),
    address: z.string().min(10,'آدرس را وارد کنید'),
    paymentMethod: z.enum(['online','cash']),
})

