"use client";

import React, {
  createContext,
  useEffect,
  useContext,
  useReducer,
  ReactNode,
} from "react";
import LocalStorage from "@/lib/local-storage";

export interface Cart {
  id: string;
  courseName: string;
  price?: number;
}
type Action = {
  type: "ADD_TO_CART" | "REMOVE_FROM_CART" | "CLEAR_CART";
  payload: Cart;
};

interface CartContextProps {
  cart: Cart[];
  dispatch: React.Dispatch<Action>;
}

const CartContext = createContext<CartContextProps | null>(null);

const cartReducer = (state: Cart[], action: Action): Cart[] => {
  const storage = new LocalStorage<Cart[]>();
  switch (action.type) {
    case "ADD_TO_CART":
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem) {
        const filteredItems = state.filter(
          (item) => item.id !== action.payload.id,
        );
        storage.save("cart", [...filteredItems, action.payload]);
        return [...filteredItems, action.payload];
      }
      storage.save("cart", [...state, action.payload]);
      return [...state, action.payload];
    case "REMOVE_FROM_CART":
      const filteredItems = state.filter(
        (item) => item.id !== action.payload.id,
      );
      storage.save("cart", filteredItems);
      return state.filter((item) => item.id !== action.payload.id);
    case "CLEAR_CART":
      storage.clear();
      return [];
    default:
      return state;
  }
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);
  const storage = new LocalStorage<Cart[]>();

  useEffect(() => {
    const cart = storage.get("cart");
    if (cart) {
      dispatch({ type: "CLEAR_CART", payload: {} as Cart });
      cart.forEach((item) => {
        dispatch({ type: "ADD_TO_CART", payload: item });
      });
    }
  }, []);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
