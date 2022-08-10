import React, { createContext, useState } from "react";
import { Variant } from "../types/Product.types";

interface CartItems {
    total: number;
    items: Array<{ item: Variant, quantity: number }>;
    updateQuantity: (item: Variant, quantity: number) => void;
}

export const CartContext = createContext<CartItems>(undefined!);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [cartItems, setCartItems] = useState<Array<{ item: Variant, quantity: number }>>([]);
    const [total, setTotal] = useState(0);

    const updateQuantity = (item: Variant, quantity: number) => {

        const isItemInCart = cartItems.some((cartItem, index) => {
            const itemFound = cartItem.item.id === item.id;
            if (itemFound) {
                const priceDifference = item.priceWithTax * (quantity - cartItem.quantity);
                setTotal(total + priceDifference);
                const newCart = [...cartItems];
                if (quantity === 0) {
                    newCart.splice(index, 1)
                } else {
                    newCart[index] = { ...cartItem, quantity: quantity };
                }
                setCartItems(newCart);
                return true;
            }
        })

        if (!isItemInCart) {
            setCartItems([...cartItems, { item: item, quantity: quantity }]);
            setTotal(total + quantity * item.priceWithTax);
        }
    }

    return <CartContext.Provider value={{ updateQuantity, items: cartItems, total }}>
        {children}
    </CartContext.Provider>
}