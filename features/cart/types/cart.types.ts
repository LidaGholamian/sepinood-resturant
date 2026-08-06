import { MenuItem } from "@/features/menu";

export interface CartItem extends MenuItem {
    quantity: number;
}
