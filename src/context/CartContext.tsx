import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import type { Product } from "../types";

export type CartLine = { product: Product; quantity: number };
type CartContextValue = {
  items: CartLine[];
  itemCount: number;
  subtotal: number;
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  setQuantity: (productId: string, quantity: number) => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartLine[]>([]);
  const value = useMemo<CartContextValue>(() => ({
    items,
    itemCount: items.reduce((count, line) => count + line.quantity, 0),
    subtotal: items.reduce((sum, line) => sum + line.product.price * line.quantity, 0),
    addItem: (product) => setItems((current) => {
      const found = current.find((line) => line.product.id === product.id);
      return found
        ? current.map((line) => line.product.id === product.id ? { ...line, quantity: line.quantity + 1 } : line)
        : [...current, { product, quantity: 1 }];
    }),
    removeItem: (productId) => setItems((current) => current.filter((line) => line.product.id !== productId)),
    setQuantity: (productId, quantity) => setItems((current) => quantity < 1
      ? current.filter((line) => line.product.id !== productId)
      : current.map((line) => line.product.id === productId ? { ...line, quantity } : line)),
  }), [items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider");
  return context;
}
