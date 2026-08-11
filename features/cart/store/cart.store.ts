import { create } from "zustand";
import { persist} from "zustand/middleware";

import type { CartItem } from "../types/cart.types";
import { MenuItem } from "@/features/menu";


interface CartStore {
  items: CartItem[];
  hasHydrated: boolean;

  addItem: (item: MenuItem) => void;
  removeItem: (id: string) => void;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
  clearCart: () => void;

  getTotalPrice: () => number;
  getTotalItems: () => number;
  getUniqueItems: () => number;
}


export const useCartStore = create<CartStore>()(persist((set, get) => ({
  items: [],
  hasHydrated: false,


  addItem: (item) =>
    set((state) => {

      const existingItem = state.items.find(
        (cartItem) => cartItem.id === item.id
      );


      if(existingItem){
        return {
          items: state.items.map((cartItem)=>
            cartItem.id === item.id
              ? {
                  ...cartItem,
                  quantity: cartItem.quantity + 1
                }
              : cartItem
          )
        }
      }


      return {
        items:[
          ...state.items,
          {
            ...item,
            quantity:1
          }
        ]
      }

    }),



  removeItem:(id)=>
    set((state)=>({
      items:state.items.filter(
        item=>item.id !== id
      )
    })),



  increaseQuantity:(id)=>
    set((state)=>({
      items:state.items.map(item=>
        item.id===id
        ? {...item, quantity:item.quantity+1}
        : item
      )
    })),



  decreaseQuantity:(id)=>
    set((state)=>({
      items:state.items.map(item=>
        item.id===id && item.quantity>1
        ? {...item, quantity:item.quantity-1}
        : item
      )
    })),



  clearCart:()=>set({
    items:[]
  }),



  getTotalPrice:()=>{

    const items=get().items;

    return items.reduce(
      (total,item)=>
        total + item.price * item.quantity,
      0
    );

  },

  getTotalItems: () => {
  return get().items.reduce(
    (total, item) => total + item.quantity,
    0
  );
},
  getUniqueItems: () => {
  return get().items.length;
},


}),
{
  name: "sepinood-cart",

  onRehydrateStorage: () => {
        return () => {
          useCartStore.setState({
            hasHydrated: true,
          });
        };
      },
    },),
);
