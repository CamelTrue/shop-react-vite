import { CartItem } from "@/model/cart-item";
import { Product } from "@/model/product";
import { create } from "zustand";

export interface CartState {
    list: CartItem[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: string) => void;
    increaseQty: (productId: string) => void;
    decreaseQty: (productId: string) => void;
    clearCart: () => void;
}

export const useCart = create<CartState>((set, get) => ({
    list: [], 
    addToCart: (product: Product) => {
        
        const found = get().list.find(item => item.product.id === product.id)
        if (found) {
            found.qty++;
            set(state => ({
                list: state.list.map(item => {
                    return item.product.id === found.product.id ? found : item
                })
            }))
        }
        const item: CartItem = { product, qty: 1 }
        // set({ list: [...get().list, item ]})
        set(state => ({ list: [...state.list, item]}))
    },
    removeFromCart: (productId: string) => {

    },
    increaseQty: (productId: string) => {
        
    },
    decreaseQty: (productId: string) => {

    },
    clearCart: () => {
        
    }
}))