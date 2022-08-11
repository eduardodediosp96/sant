import { useState, useEffect } from "react";
import { Variant } from "../providers/products/types";

function getStorageCartValue(
  defaultValue: Array<{ item: Variant; quantity: number }> | []
) {
  const saved = localStorage.getItem("cart");
  const initial = saved ? JSON.parse(saved || "") : [];
  return initial || defaultValue;
}

export const useCart = (
  defaultValue: Array<{ item: Variant; quantity: number }> | []
) => {
  const [amount, setAmount] = useState(0);
  const [itemsQuantity, setItemsQuantity] = useState(0);
  const [cartItems, setCartItems] = useState(() => {
    return getStorageCartValue(defaultValue);
  });

  const addItem = (item: Variant, quantity: number) => {
    setCartItems((prevState: Array<{ item: Variant; quantity: number }>) => {
      if (prevState) {
        const arr = [...prevState].filter((x) => x.item.id !== item.id);
        return [...arr, { item, quantity }].sort(
          (
            a: { item: Variant; quantity: number },
            b: { item: Variant; quantity: number }
          ) => (a.item.name >= b.item.name ? 1 : -1)
        );
      } else {
        return [{ item, quantity }];
      }
    });
  };

  const removeItem = (id: string) => {
    setCartItems((prevState: Array<{ item: Variant; quantity: number }>) => {
      return [...prevState].filter((x) => x.item.id !== id);
    });
  };

  const getTheTotalAmount = () =>
    cartItems.reduce(
      (amount: number, cartItem: { item: Variant; quantity: number }) => {
        return (amount +=
          parseInt(cartItem.item.priceWithTax) * cartItem.quantity);
      },
      0
    );
  const getItemsQuantity = () =>
    cartItems.reduce(
      (qty: number, cartItem: { item: Variant; quantity: number }) => {
        return (qty += cartItem.quantity);
      },
      0
    );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
    setAmount(getTheTotalAmount());
    setItemsQuantity(getItemsQuantity());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartItems]);

  return [cartItems, addItem, removeItem, amount, itemsQuantity] as [
    Array<{ item: Variant; quantity: number }>,
    (item: Variant, quantity: number) => void,
    (id: string) => void,
    number,
    number
  ];
};
