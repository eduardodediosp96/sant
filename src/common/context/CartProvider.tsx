import React, { createContext, useState } from "react";
import { Variant } from "../types/Product.types";

interface CartItems {
    total: number;
    items: Array<{ item: Variant, quantity: number }>;
    removeItem: (itemId: string) => void;
    addItem: (item: Variant, quantity: number) => void;
}

export const CartContext = createContext<CartItems>(undefined!);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [cartItems, setCartItems] = useState<Array<{ item: Variant, quantity: number }>>([]);
    const [total, setTotal] = useState(0);

    const removeItem = (itemId: string) => {
        cartItems.forEach((cartItem, index) => {
            if (cartItem.item.id === itemId) {
                if (cartItem.quantity === 1) {
                    setCartItems(cartItems.splice(index, 1));
                } else {
                    const newCart = [...cartItems];
                    newCart[index] = { ...cartItem, quantity: cartItem.quantity - 1 };
                    setCartItems(newCart);
                }
                return setTotal(total - cartItem.item.priceWithTax);
            }
        })
    }

    const addItem = (item: Variant, quantity = 1) => {
        setTotal(total + item.priceWithTax)
        cartItems.forEach((cartItem, index) => {
            if (cartItem.item.id === item.id) {
                const newCart = [...cartItems];
                newCart[index] = { ...cartItem, quantity: cartItem.quantity + quantity };
                setCartItems(newCart);
                return;
            }
        })
        setCartItems([...cartItems, { item: item, quantity: quantity }])
    }

    return <CartContext.Provider value={{ addItem, removeItem, items: cartItems, total: 0 }}>
        {children}
    </CartContext.Provider>
}