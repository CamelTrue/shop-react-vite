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
            get().increaseQty(product.id)
        } else {
            const item: CartItem = { product, qty: 1 }
            set(state => ({ list: [...state.list, item]}))
        }
    },
    removeFromCart: (productId: string) => {
        set(state => ({ list: state.list.filter(item => item.product.id !== productId) }))
    },
    increaseQty: (productId: string) => {
        const found = get().list.find(item => item.product.id === productId)
        
        if (found) {
            found.qty++;
                set(state => ({
                    list: state.list.map(item => {
                        return item.product.id === found.product.id ? found : item
                    })
                }))
        
        }
    },
    decreaseQty: (productId: string) => {
        const found = get().list.find(item => item.product.id === productId)
        
        if (found?.qty === 1) {
            get().removeFromCart(productId)
        }

        if (found && found.qty > 0) {
            found.qty--;
                set(state => ({
                    list: state.list.map(item => {
                        return item.product.id === found.product.id ? found : item
                    })
                }))
        
        }
    },
    clearCart: () => {
        set({ list: [] })
    }
}))