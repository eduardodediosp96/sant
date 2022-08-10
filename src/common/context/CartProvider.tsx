import React, { createContext } from "react";
import { useCart } from "../../hooks/useCart";
import { Variant } from "../../providers/products/types";

interface CartItems {
  total: number;
  items: Array<{ item: Variant; quantity: number }>;
  updateQuantity: (item: Variant, quantity: number) => void;
  removeItem: (id: string) => void;
}

export const CartContext = createContext<CartItems>(undefined!);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, addItem, removeItem, amount] = useCart([]);

  return (
    <CartContext.Provider
      value={{
        updateQuantity: addItem,
        items: cartItems,
        total: amount,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
